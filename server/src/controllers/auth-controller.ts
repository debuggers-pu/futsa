import { Request, Response } from "express";
import User from "../models/user-model";
import AuthServices from "../services/auth-services";

class AuthController {
  userLogin = (req: Request, res: Response) => {
    console.log("Signin");
  };

  userSignup = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phoneNumber, image, role } =
      req.body;
    try {
      const userExist = await AuthServices.getUser({ email: email });
      if (userExist) {
        console.log("User already exist.");
        res.status(400).json({
          message: "User already exists.",
        });
        return;
      }
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        image,
        role,
      });
      const data = await AuthServices.addUser(_user);
      if (data) {
        res.status(200).json({
          message: "User successfully created",
          user: data,
        });
      } else {
        res.status(400).json({
          message: "User not added.",
        });
      }
    } catch (error: any) {
      console.log(error);
      res.status(400).json({
        message: error.message,
      });
    }
  };

  ownerLogin = (req: Request, res: Response) => {
    console.log("Signin");
  };
  ownerSignup = (req: Request, res: Response) => {
    console.log("SignUp");
  };
}

export default new AuthController();
