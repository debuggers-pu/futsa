import { Schema, model, Model } from "mongoose";

interface Ifutsal {
  userId: Schema.Types.ObjectId;
  futsalName: string;
  ownerName: string;
  address: string;
  phoneNumber: number;
  image: string[];
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
    ownerName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    phoneNumber: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: [],
    },
  },
  { timestamps: true }
);
const Futsal: Model<Ifutsal> = model("Futsal", FutsalSchema);
export default Futsal;
