import { Schema, model } from "mongoose";
import { BOOKING_STATUS, IBooking } from "../types";


const bookingSchema : Schema<IBooking> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  futsalId: {
    type: Schema.Types.ObjectId,
    ref: 'Futsal',
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
  bookedFor: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'booked', 'available'],
    default: BOOKING_STATUS.AVAILABLE,
  },
});

const BookingModel = model<IBooking>('Booking', bookingSchema);
export default BookingModel 


