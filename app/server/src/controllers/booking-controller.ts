import { Request, Response } from "express";
import Booking from "../models/bookings-model";
import Futsal from "../models/futsal-model";
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

  getBookingsByDate = async (req: Request, res: Response) => {
    try {
      const { futsalId, bookingDate } = req.body;
      const bookings = await BookingServices.getBooking(futsalId, bookingDate);
      if (bookings) {
        if (bookings.length > 0) {
          res.status(200).json({
            length: bookings.length,
            bookings,
          });
        } else {
          res.status(200).json({
            message: "No bookings",
          });
        }
      } else {
        res.status(500).json({
          message: "Something went wrong.",
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

  getBookingsByFutsal = async (req: Request, res: Response) => {
    try {
      const { futsalId } = req.body;
      const bookings = await BookingServices.getBookingByFutsalId(futsalId);
      if (bookings) {
        if (bookings.length > 0) {
          res.status(200).json({
            length: bookings.length,
            bookings,
          });
        } else {
          res.status(200).json({
            message: "No bookings",
          });
        }
      } else {
        res.status(500).json({
          message: "Something went wrong.",
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

  getBookingByUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.body;
      const bookings = await BookingServices.getBookingByUserId(userId);
      if (bookings) {
        if (bookings.length > 0) {
          res.status(200).json({
            length: bookings.length,
            bookings,
          });
        } else {
          res.status(200).json({
            message: "No bookings",
          });
        }
      } else {
        res.status(500).json({
          message: "Something went wrong.",
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

  updateBookingStatus = async (req: Request, res: Response) => {
    try {
      const { bookId, status } = req.body;
      const updateBookingStatus = await BookingServices.updateBookingStatus(
        bookId,
        status
      );
      if (updateBookingStatus) {
        res.status(200).json({
          message: "Status updated Successfully",
          updateBookingStatus,
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

  cancelBookingRequest = async (req: Request, res: Response) => {
    const { bookId } = req.body;
    try {
      const bookStatus = await BookingServices.cancelBooking(bookId);
      if (bookStatus) {
        res.status(200).json({
          message: "Request Deleted Successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong.",
        error,
      });
    }
  };

  searchbyTitle = async (req: Request, res: Response) => {
    try {
      let result = await Futsal.find({
        $or: [
          {
            slug: { $regex: req.params.key },
          },
          {
            address: { $regex: req.params.key },
          },
        ],
      });
      if (result) {
        res.status(200).json({
          futsal: result,
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
