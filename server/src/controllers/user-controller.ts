import UserServices from "../services/user-services";
import { Request, Response } from "express";
import Futsal from "../models/futsal-model";

class UserController {
  async getCustomer(req: Request, res: Response) {
    const { userId } = req.body;
    try {
      if (userId) {
        const customerDetails = await UserServices.getCustomer({
          userId: userId,
        });
        res.status(200).json(customerDetails);
      } else {
        res.status(500).json({
          message: "Id not valid",
        });
      }
    } catch (err) {
      res.status(404).json({
        message: "Customer not found.",
      });
    }
  }

  async getFutsal(req: Request, res: Response) {
    const { userId } = req.body;
    try {
      if (userId) {
        const futsalDetails = await UserServices.getFutsal({ userId: userId });
        res.status(200).json(futsalDetails);
      } else {
        res.status(500).json({
          message: "Id not valid",
        });
      }
    } catch (err) {
      res.status(404).json({
        message: "Futsal not found.",
      });
    }
  }

  async getAllFutsal(req: Request, res: Response) {
    try {
      const futsals: any = await UserServices.getAllFutsal();
      res.status(200).json({
        total: futsals.length,
        futsals: futsals,
      });
    } catch (err) {
      res.status(404).json({
        message: "Something went wrong.",
      });
    }
  }
  async getFutsalByLocation(req: Request, res: Response) {
    const { location } = req.body;
    try {
      const futsals: any = UserServices.getFutsalByLocation(location.trim());
      res.status(200).json({
        total: futsals.length,
        futsals,
      });
    } catch (err) {
      res.status(404).json({
        message: "Something went wrong.",
      });
    }
  }
}
export default new UserController();
