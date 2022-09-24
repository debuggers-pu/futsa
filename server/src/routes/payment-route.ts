import { Router, Request, Response } from "express";
const router = Router();
const stripe = require("stripe")(
  "sk_test_51LkrgoSFgx4gzLZV3uJxt0LMfzCzhzJYufdsLBAbUliFbRdU76DhFfsxbY4idTz1Hqhg4U3cv4bNWux2oQTpgulG00zKMatJhE"
);
const { v4: uuidv4 } = require("uuid");

router.post("/payment", (req: Request, res: Response) => {
  const { token, amount, userId } = req.body;
  const idempontencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer: any) => {
      stripe.charges.create(
        {
          amount: 0.5 * amount,
          currency: "NRS",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase by ${userId}`,
        },
        { idempontencyKey }
      );
    })
    .then((result: any) => {
      res.status(200).json(result);
    })
    .catch((err: any) => console.log(err));
});

export default router;
