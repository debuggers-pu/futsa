import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth-controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Backend Up and running for FUTSA project.",
  });

  router.post("/auth/user/login", AuthController.userLogin);
  router.post("/auth/user/signUp", AuthController.userSignup);
  router.post("/auth/owner/login", AuthController.ownerLogin);
  router.post("/auth/owner/signUp", AuthController.ownerSignup);
});

export default router;
