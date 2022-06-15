import User from "../models/user-model";
import jwt from "jsonwebtoken";
class AuthServices {
  getUser = async (key: any) => {
    const user = await User.findOne(key);
    if (user) {
      return user;
    }
  };

  addUser = async (user: any) => {
    const result = await user.save();
    return result;
  };

  createJwtToken = async (data: any) => {
    const secretKey: any = process.env.JWT_SECRET_KEY;
    return jwt.sign(data, secretKey, {
      expiresIn: "1M",
    });
  };
}

export default new AuthServices();
