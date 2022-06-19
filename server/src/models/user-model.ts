import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  email: string;
  hash_password: string;
  role: string;
  authenticate: Function;
}

const UserSchema = new Schema<IUser>(
  {
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
    role: {
      type: String,
      enum: ["customer", "futsal"],
      default: "customer",
    },
  },
  { timestamps: true }
);

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
