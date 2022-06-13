import e, { Request, Response } from "express";
import AuthServices from "../services/auth-services";

class AuthController {
  userLogin = (req: Request, res: Response) => {
    console.log("Signin");
  };

  userSignup = async (req: Request, res: Response) => {
    const {
      firstName,
      lastName,
      email,
      hash_password,
      phoneNumber,
      image,
      role,
    } = req.body;
    try {
      const userExist = await AuthServices.getUser({ email: email });
      if (userExist) {
        console.log("User already exist");
        res.status(200).json({
          message: "User already exists.",
        });
        return;
      }
      const data = await AuthServices.addUser({
        firstName,
        lastName,
        email,
        hash_password,
        phoneNumber,
        image,
        role,
      });

      if (data) {
        res.status(200).json({
          message: "User successfully created",
        });
      } else {
        res.status(400).json({
          message: "User not added successfully.",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Error message",
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
