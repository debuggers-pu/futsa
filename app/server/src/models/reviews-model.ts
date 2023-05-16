import mongoose from "mongoose";
import { IReview } from "../types";

const reviewSchema = new mongoose.Schema<IReview>({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  });

const reviewModel = mongoose.model<IReview>('Review', reviewSchema);
export  default reviewModel ;