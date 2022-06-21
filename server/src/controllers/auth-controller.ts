import { Request, Response } from "express";
import Customer from "../models/customer-model";
import Futsal from "../models/futsal-model";
import User from "../models/user-model";
import UserServices from "../services/user-services";
import TokenServices from "../services/token-services";

class AuthController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await UserServices.getUser({ email: email });
      if (user) {
        if (user.authenticate(password)) {
          const { role } = user;
          const { accessToken, refreshToken } =
            await TokenServices.createJwtToken({
              id: user._id,
              role,
            });
          res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.status(200).json({
            message: "User successfully logged in.",
            accessToken,
            refreshToken,
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
      const userExist = await UserServices.getUser({ email: email });
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
      const user = await UserServices.addUser(_user);
      if (user) {
        const _customer = new Customer({
          userId: user._id,
          firstName,
          lastName,
          phoneNumber,
          image,
        });
        const customer = await UserServices.addCustomer(_customer);
        if (customer) {
          const { accessToken, refreshToken } =
            await TokenServices.createJwtToken({
              _id: user.id,
              role: user.role,
            });
          res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.status(200).json({
            message: "User successfully created.",
            accessToken,
            refreshToken,
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
      const userExist = await UserServices.getUser({ email: email });
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
      const user = await UserServices.addUser(_user);
      if (user) {
        const _futsal = new Futsal({
          userId: user._id,
          futsalName,
          ownerName,
          address,
          phoneNumber,
          image,
        });
        const futsal = await UserServices.addFutsal(_futsal);
        if (futsal) {
          const { accessToken, refreshToken } =
            await TokenServices.createJwtToken({
              _id: user.id,
              role: user.role,
            });

          res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.status(200).json({
            message: "User successfully created.",
            accessToken,
            refreshToken,
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

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    // await TokenService.removeToken(refreshToken);

    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    res.json({ user: {}, auth: false });
  }
}

export default new AuthController();
