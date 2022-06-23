import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth-controller";
import {
  requireAuthentication,
  userMiddleware,
  ownerMiddleware,
} from "../middlewares/auth-middleware";

const router = Router();

router.get(
  "/",
  requireAuthentication,
  userMiddleware,
  (req: Request, res: Response) => {
    res.json({
      message: "Backend Up and running for FUTSA project.",
    });
  }
);

router.post("/login", AuthController.login);
router.post("/user/signup", AuthController.customerSignup);
router.post("/futsal/signup", AuthController.futsalSignup);

export default router;
