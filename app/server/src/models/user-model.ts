import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, USER_ROLE } from "../types";

const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'futsal'],
    default : USER_ROLE.CUSTOMER,
    required: true,
  },
});

userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: function (password: string) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

const User: Model<IUser> = model("User", userSchema);
export default User;
