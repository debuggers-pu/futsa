import { Schema, model, Model } from "mongoose";

interface ICustomer {
  userId: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  image?: string;
}

const CustomerSchema = new Schema<ICustomer>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      max: 20,
    },
    phoneNumber: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

CustomerSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
const Customer: Model<ICustomer> = model("Customer", CustomerSchema);
export default Customer;
