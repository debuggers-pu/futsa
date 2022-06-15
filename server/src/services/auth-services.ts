import User from "../models/user-model";

class AuthServices {
  getUser = async (key: any) => {
    const user = await User.findOne(key);
    if (user) {
      console.log(user);
      return user;
    }
  };

  addUser = async (user: any) => {
    const result = await user.save();
    return result;
  };
}

export default new AuthServices();
