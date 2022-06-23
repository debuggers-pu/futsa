import jwt from "jsonwebtoken";
import RefreshToken from "../models/refreshtoken-model";

class TokenServices {
  createJwtToken = async (data: any) => {
    const secretKey: any = process.env.JWT_SECRET_KEY;
    const secretRefresh: any = process.env.REFRESH_SECRET_KEY;
    const accessToken = jwt.sign(data, secretKey, {
      expiresIn: "1y",
    });
    const refreshToken = jwt.sign(data, secretRefresh, {
      expiresIn: "1y",
    });
    return { accessToken, refreshToken };
  };

  addToken = async (payload: any) => {
    return await RefreshToken.create(payload);
  };

  async removeToken(refreshToken: any) {
    return await RefreshToken.deleteOne({ refreshtoken: refreshToken });
  }

  async verifyToken(token: any, key: any) {
    return jwt.verify(token, key);
  }

  async findRefreshToken(payload: any) {
    return await RefreshToken.findOne(payload);
  }

  async updateRefreshToken(payload: any) {
    return await RefreshToken.updateOne(payload);
  }
}
export default new TokenServices();
