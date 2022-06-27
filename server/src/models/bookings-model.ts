import { Schema, model, Model } from "mongoose";

interface IBook {
  customerId: Schema.Types.ObjectId;
  futsalId: Schema.Types.ObjectId;
  bookingTime: string;
  bookingDate: Date;
  bookingDuration: string;
  status: string; // pending, confirmed, cancelled
  price: number;
  paymentMethod: string; // cash, card, paypal
}

enum Times {
  "7Am" = "7:00 - 8:00",
  "8Am" = "8:00 - 9:00",
  "9Am" = "9:00 - 10:00",
  "10Am" = "10:00 - 11:00",
  "11Am" = "11:00 - 12:00",
  "12Pm" = "12:00 - 13:00",
  "1Pm" = "13:00 - 14:00",
  "2Pm" = "14:00 - 15:00",
  "3Pm" = "15:00 - 16:00",
  "4Pm" = "16:00 - 17:00",
  "5Pm" = "17:00 - 18:00",
  "6Pm" = "18:00 - 19:00",
  "7Pm" = "19:00 - 20:00",
  "8Pm" = "20:00 - 21:00",
}

const BookSchema = new Schema<IBook>({
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  futsalId: {
    type: Schema.Types.ObjectId,
    ref: "Futsal",
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
    enum: Times,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  bookingDuration: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  price: {
    type: Number,
    default: 1000,
  },
  paymentMethod: {
    type: String,
    enum: ["cash", "card", "paypal"],
    default: "cash",
  },
});

const Booking: Model<IBook> = model("Booking", BookSchema);
export default Booking;
