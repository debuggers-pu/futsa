import { Router, Request, Response } from "express";
// import {
//   requireAuthentication,
//   userMiddleware,
//   ownerMiddleware,
// } from "../middlewares/auth-middleware";

import BookingController from "../controllers/booking-controller";

const router = Router();

router.post("/add-booking", BookingController.addBooking);
router.post("/get-bookingby-date", BookingController.getBookingsByDate);
router.post("/get-bookingby-futsal", BookingController.getBookingsByFutsal);
router.post("/get-bookingby-user", BookingController.getBookingByUser);
router.put("/update-bookingstatus", BookingController.updateBookingStatus);
router.post("/remove-booking", BookingController.cancelBookingRequest);
router.get("/search/:key", BookingController.searchbyTitle);

export default router;
