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
      .populate("customerId futsalId");
    if (futsalBookings) {
      return futsalBookings;
    }
  };

  getBookingByFutsalId = async (futsalId: any) => {
    const futsalBookings = await Booking.find()
      .where({
        futsalId: new ObjectId(futsalId),
      })
      .populate("customerId")
      .sort({ updatedAt: -1 });

    if (futsalBookings) {
      return futsalBookings;
    }
  };

  updateBookingStatus = async (bookingId: any, status: any) => {
    const updated = await Booking.findOneAndUpdate(
      { _id: bookingId },
      { status: status },
      { upsert: true, useFindAndModify: false }
    );
    if (updated) {
      return updated;
    }
  };
}

export default new BookingService();
