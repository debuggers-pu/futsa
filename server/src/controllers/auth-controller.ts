import { Request, Response } from "express";
import Customer from "../models/customer-model";
import Futsal from "../models/futsal-model";
import User from "../models/user-model";
import UserServices from "../services/user-services";
import TokenServices from "../services/token-services";
import { userMiddleware } from "../middlewares/auth-middleware";

class AuthController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await UserServices.getUser({ email });
      if (user) {
        if (user.authenticate(password)) {
          const { role } = user;
          const { accessToken, refreshToken } =
            await TokenServices.createJwtToken({
              id: user._id,
              role,
            });
          try {
            await TokenServices.addToken({
              refreshToken,
              userId: user._id,
            });
          } catch (error: any) {
            res.status(400).json({
              message: "Token not added",
            });
          }
          res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          const userData = {
            id: user._id,
            email,
            role,
          };
          res.status(200).json({
            message: "User successfully logged in.",
            user: userData,
          });
        } else {
          res.status(400).json({
            message: "Authentication credentials didn't match.",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found.",
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: {
          1: error.message,
          2: "Server error.",
        },
      });
    }
  };

  customerSignup = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phoneNumber, role } =
      req.body;
    const image = req.file?.path;
    console.log(image);
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
          role: user.role,
        });
        const customer = await UserServices.addCustomer(_customer);
        if (customer) {
          const { accessToken, refreshToken } =
            await TokenServices.createJwtToken({
              _id: user._id,
              role: user.role,
            });
          try {
            await TokenServices.addToken({
              refreshToken,
              userId: user._id,
            });
          } catch (error: any) {
            res.status(400).json({
              message: "Token not added",
            });
          }
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
            userData: {
              id: user._id,
              email,
              role: user.role,
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
      res.status(500).json({
        message: {
          1: error.message,
          2: "Server error.",
        },
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
      description,
    } = req.body;
    const files = req.files;
    const image: string[] = [files].map((file: any) =>
      file.map((f: any) => f.path)
    );
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
          slug: futsalName.toLowerCase().split(" ").join(""),
          futsalName,
          ownerName,
          address,
          phoneNumber,
          image,
          description,
        });
        const futsal = await UserServices.addFutsal(_futsal);
        if (futsal) {
          const { accessToken, refreshToken } =
            await TokenServices.createJwtToken({
              _id: user.id,
              role: user.role,
            });
          try {
            await TokenServices.addToken({
              refreshToken,
              userId: user._id,
            });
          } catch (error: any) {
            res.status(400).json({
              message: "Token not added",
            });
          }

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
            id: user._id,
            email,
            role: user.role,
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
      res.status(500).json({
        message: {
          1: error.message,
          2: "Server error.",
        },
      });
    }
  };

  refresh = async (req: Request, res: Response) => {
    const { refreshToken: refreshTokenfromCookie } = req.cookies;
    let userData;
    try {
      userData = TokenServices.verifyToken(
        refreshTokenfromCookie,
        process.env.REFRESH_SECRET_KEY
      );
    } catch (error: any) {
      res.status(401).json({
        message: {
          1: error.message,
          2: "Invalid Token",
        },
      });
    }

    // check if the refreshToken is available in database

    // TODO: Complete it later when needed
  };

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    await TokenServices.removeToken(refreshToken);
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    res.json({ user: {}, auth: false });
  }
}

export default new AuthController();
