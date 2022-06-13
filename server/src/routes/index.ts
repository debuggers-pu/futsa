import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Backend Up and running for FUTSA project.",
  });
});

export default router;
