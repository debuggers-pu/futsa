import { Router, Request, Response } from "express";
import {
  requireAuthentication,
  userMiddleware,
  ownerMiddleware,
} from "../middlewares/auth-middleware";

import BookingController from "../controllers/booking-controller";

const router = Router();

router.post("/addBooking", requireAuthentication, BookingController.addBooking);

export default router;
