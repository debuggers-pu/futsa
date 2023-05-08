import { Schema, model, Model } from "mongoose";

interface Ifutsal {
  userId: Schema.Types.ObjectId;
  futsalName: string;
  slug: string;
  ownerName: string;
  address: string;
  phoneNumber: string;
  image: string[];
  description: string;
}

const FutsalSchema = new Schema<Ifutsal>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    futsalName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 30,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    ownerName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: [],
    },
  },
  { timestamps: true }
);
const Futsal: Model<Ifutsal> = model("Futsal", FutsalSchema);
export default Futsal;
