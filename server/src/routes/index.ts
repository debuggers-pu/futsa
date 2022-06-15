import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth-controller";
import {
  isValidate,
  validateLogin,
  validateSignup,
} from "../validators/auth-validators";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Backend Up and running for FUTSA project.",
  });
});

router.post("/user/login", validateLogin, isValidate, AuthController.userLogin);
router.post(
  "/user/signup",
  validateSignup,
  isValidate,
  AuthController.userSignup
);
router.post("/owner/login", AuthController.ownerLogin);
router.post("/owner/signup", AuthController.ownerSignup);

export default router;
