import { Router, Request, Response } from "express";

import {
  requireAuthentication,
  userMiddleware,
  ownerMiddleware,
} from "../middlewares/auth-middleware";

import authRoutes from "./auth-routes";
import bookingRoutes from "./bookings-routes";

const router = Router();

router.get("/", requireAuthentication, (req: Request, res: Response) => {
  res.json({
    message: "Backend Up and running for FUTSA project.",
  });
});

router.use("/auth", authRoutes);
router.use("/book", bookingRoutes);

export default router;
