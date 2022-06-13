import User from "../models/user-model";

class AuthServices {
  getUser = async (key: any) => {
    const user = await User.findOne(key);
    if (user) {
      return user;
    }
  };

  addUser = async (userbody: any) => {
    let _user: any = new User({
      userbody,
    });
    const result = await _user.save();
    return result;
  };
}

export default new AuthServices();
