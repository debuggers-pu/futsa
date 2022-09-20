import Booking from "../models/bookings-model";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

class BookingService {
  addBooking = async (data: any) => {
    try {
      return await data.save();
    } catch (error) {
      console.log(error);
    }
  };

  getBooking = async (futsalId: any, bookingDate: String) => {
    const futsalBookings = await Booking.find()
      .where({
        futsalId: new ObjectId(futsalId),
        bookingDate: bookingDate,
      })
      .populate("customerId");
    if (futsalBookings) {
      return futsalBookings;
    }
  };
}

export default new BookingService();
