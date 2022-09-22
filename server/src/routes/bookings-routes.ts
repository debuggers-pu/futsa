import { Router, Request, Response } from "express";
import {
  requireAuthentication,
  userMiddleware,
  ownerMiddleware,
} from "../middlewares/auth-middleware";

import BookingController from "../controllers/booking-controller";

const router = Router();

router.post("/add-booking", BookingController.addBooking);
router.post("/get-bookingby-date", BookingController.getBookingsByDate);
router.post("/get-bookingby-futsal", BookingController.getBookingsByFutsal);
router.post("/update-bookingstatus", BookingController.updateBookingStatus);

export default router;
