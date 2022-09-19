import { Schema, model, Model } from "mongoose";

interface IBook {
  customerId: Schema.Types.ObjectId;
  futsalId: Schema.Types.ObjectId;
  bookingTime: string;
  bookingDate: string;
  status: string; // pending, confirmed, cancelled
  price: number;
  paymentMethod: string; // cash, card, paypal
}

// enum Times

const BookSchema = new Schema<IBook>(
  {
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
      enum: [
        "7:00 AM",
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
      ],
    },
    bookingDate: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    price: {
      type: Number,
      default: 1200,
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "paypal"],
      default: "cash",
    },
  },
  {
    timestamps: true,
  }
);

const Booking: Model<IBook> = model("Booking", BookSchema);
export default Booking;
