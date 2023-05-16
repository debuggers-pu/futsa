import mongoose from "mongoose";
import { IEvent } from "../types";

const eventSchema = new mongoose.Schema<IEvent>({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  })

const eventModel = mongoose.model<IEvent>('Event', eventSchema);
export default  eventModel;