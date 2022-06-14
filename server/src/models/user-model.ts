import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  hash_password: string;
  phoneNumber: number;
  image?: string;
  role: string;
}

const UserSchema = new Schema<IUser>(
  {
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
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "owner"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
UserSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

UserSchema.methods = {
  authenticate: function (password: string) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

const User: Model<IUser> = model("User", UserSchema);
export default User;
