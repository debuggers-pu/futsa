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
        bookingPrice,
        paymentMethod,
        status,
        price,
      } = req.body;

      const _book = new Booking({
        customerId,
        futsalId,
        bookingTime,
        bookingDate,
        bookingPrice,
        price,
        status,
        paymentMethod,
      });

      const book = await BookingServices.addBooking(_book);

      if (book) {
        res.status(200).json({
          message: "Booking added successfully.",
          booking: book,
        });
      } else {
        res.status(404).json({
          message: "Can't add the booking.",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong.",
        error,
      });
    }
  };
}
export default new BookingController();
