import { Schema, model, Model } from "mongoose";
import { ICustomer } from "../types";


const customerSchema: Schema<ICustomer> = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
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
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image: {
    type: String,
  },
  points: {
    type: Number,
    default: 0,
  },
});

customerSchema.virtual("fullName").get(function () {
  return `${this.firstname} ${this.lastname}`;
});
const Customer: Model<ICustomer> = model("Customer", customerSchema);
export default Customer;
