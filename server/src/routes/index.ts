import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth-controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Backend Up and running for FUTSA project.",
	});
});

router.post("/user/login", AuthController.userLogin);
router.post("/user/signup", AuthController.userSignup);
router.post("/owner/login", AuthController.ownerLogin);
router.post("/owner/signup", AuthController.ownerSignup);

export default router;
