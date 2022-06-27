import { Request, Response } from "express";
import Booking from "../models/bookings-model";
import BookingServices from "../services/booking-services";

class BookingController {
  addBooking = async (req: Request, res: Response) => {
    try {
      const {
        futsalId,
        customerId,
        bookingDate,
        bookingTime,
        bookingDuration,
        bookingPrice,
      } = req.body;

      const _book = new Booking({
        futsalId,
        customerId,
        bookingDate,
        bookingTime,
        bookingDuration,
        bookingPrice,
      });

      const book = await BookingServices.addBooking(_book);

      if (book) {
        res.status(200).json({
          message: "Booking added successfully.",
          booking: book,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong.",
        error,
      });
    }
  };
}
export default new BookingController();
