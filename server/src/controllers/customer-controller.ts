import UserServices from "../services/user-services";
import { Request, Response } from "express";

class ClassController {
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
}
export default new ClassController();
