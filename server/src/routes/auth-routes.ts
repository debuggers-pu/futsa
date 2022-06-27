import AuthController from "../controllers/auth-controller";
import { Router, Request, Response } from "express";
import upload from "../utils/multer";

const router = Router();

router.post("/login", AuthController.login);
router.post(
  "/user/signup",
  upload.single("image"),
  AuthController.customerSignup
);
router.post(
  "/futsal/signup",
  upload.array("image"),
  AuthController.futsalSignup
);

export default router;
