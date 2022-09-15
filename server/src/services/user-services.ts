import User from "../models/user-model";
import Customer from "../models/customer-model";
import Futsal from "../models/futsal-model";
class UserServices {
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

  addCustomer = async (customer: any) => {
    const result = await customer.save();
    return result;
  };

  addFutsal = async (futsal: any) => {
    const result = await futsal.save();
    return result;
  };

  getCustomer = async (key: any) => {
    const customer = await Customer.findOne(key).select(
      "-createdAt -updatedAt"
    );
    if (customer) {
      return customer;
    }
  };

  getFutsal = async (key: any) => {
    const futsal = await Futsal.findOne(key).select("-createdAt -updatedAt");
    if (futsal) {
      return futsal;
    }
  };

  getAllFutsal = async () => {
    const futsals = await Futsal.find().select("-createdAt -updatedAt -userId");
    if (futsals) {
      return futsals;
    }
  };

  getFutsalByLocation = async (key: string) => {
    const futsals = await Futsal.find({ address: key }).select(
      "-createdAt -updatedAt -userId"
    );
    if (futsals) {
      return futsals;
    }
  };
}

export default new UserServices();
