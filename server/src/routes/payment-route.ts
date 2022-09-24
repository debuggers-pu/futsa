import { Router, Request, Response } from "express";
const router = Router();
const stripe = require("stripe")(
  "sk_test_51LkplHClMuxIph6nRuoVXkOG6SxDw78osa7pkdgH4uykvYxUhhs8jsfnN0qpsXyXHlPqe05ZO6f5SYLpxGClSRK700oS45RT8d"
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
          amount: amount * 0.5,
          currency: "usd",
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
