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
    const customer = await Customer.findOne(key);
    if (customer) {
      return customer;
    }
  };

  getFutsal = async (key: any) => {
    const futsal = await Futsal.findOne(key).populate("userId");
    if (futsal) {
      return futsal;
    }
  };
}

export default new UserServices();
