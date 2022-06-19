import { Request, Response } from "express";
import Customer from "../models/customer-model";
import Futsal from "../models/futsal-model";
import User from "../models/user-model";
import AuthServices from "../services/auth-services";

class AuthController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await AuthServices.getUser({ email: email });
      if (user) {
        if (user.authenticate(password)) {
          const { role } = user;
          const token = await AuthServices.createJwtToken({
            id: user._id,
            role,
          });
          res.cookie("futsa-token", token);
          res.status(200).json({
            message: "User successfully logged in.",
            token,
            user: {
              email,
              role,
            },
            id: user._id,
          });
        } else {
          res.status(500).json({
            message: "Authentication credentials didn't match.",
          });
        }
      } else {
        res.status(500).json({
          message: "User not found.",
        });
      }
    } catch (error: any) {
      res.status(404).json({
        message: error.message,
      });
    }
  };

  customerSignup = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phoneNumber, image, role } =
      req.body;
    try {
      const userExist = await AuthServices.getUser({ email: email });
      if (userExist) {
        res.status(400).json({
          message: "User already exists.",
        });
        return;
      }
      const _user = new User({
        email,
        password,
        role,
      });
      const user = await AuthServices.addUser(_user);
      if (user) {
        const _customer = new Customer({
          userId: user._id,
          firstName,
          lastName,
          phoneNumber,
          image,
        });
        const customer = await AuthServices.addCustomer(_customer);
        if (customer) {
          const token = await AuthServices.createJwtToken({
            _id: user.id,
            role: user.role,
          });
          res.cookie("futsa-token", token);
          res.status(200).json({
            message: "User successfully created.",
            token,
            user: {
              firstName,
              lastName,
              email,
              role,
              phoneNumber,
              image,
            },
          });
        } else {
          res.status(400).json({
            message: "Customer not added.",
          });
        }
      } else {
        res.status(400).json({
          message: "User not added.",
        });
      }
    } catch (error: any) {
      res.status(404).json({
        message: error.message,
      });
    }
  };

  futsalSignup = async (req: Request, res: Response) => {
    const {
      futsalName,
      ownerName,
      address,
      email,
      password,
      phoneNumber,
      image,
    } = req.body;
    try {
      const userExist = await AuthServices.getUser({ email: email });
      if (userExist) {
        res.status(400).json({
          message: "User already exists.",
        });
        return;
      }
      const _user = new User({
        email,
        password,
        role: "futsal",
      });
      const user = await AuthServices.addUser(_user);
      if (user) {
        const _futsal = new Futsal({
          userId: user._id,
          futsalName,
          ownerName,
          address,
          phoneNumber,
          image,
          role: user.role,
        });
        const futsal = await AuthServices.addFutsal(_futsal);
        if (futsal) {
          const token = await AuthServices.createJwtToken({
            _id: user.id,
            role: user.role,
          });
          res.cookie("futsa-token", token);
          res.status(200).json({
            message: "User successfully created.",
            token,
            user: {
              email,
              role: user.role,
            },
            futsal,
          });
        } else {
          res.status(400).json({
            message: "Customer not added.",
          });
        }
      } else {
        res.status(400).json({
          message: "User not added.",
        });
      }
    } catch (error: any) {
      res.status(404).json({
        message: error.message,
      });
    }
  };
}

export default new AuthController();
