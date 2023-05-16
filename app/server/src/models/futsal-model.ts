import mongoose from "mongoose";
import { IFutsal } from "../types";

const futsalSchema = new mongoose.Schema<IFutsal>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  geolocation: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
  image: {
    type: String,
  },
  openingHour: {
    type: String,
    required: true,
  },
  closingHour: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
});

const FutsalModel = mongoose.model<IFutsal>('Futsal', futsalSchema);
export default FutsalModel;