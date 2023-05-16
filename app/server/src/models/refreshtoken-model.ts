import { model, Model, Schema } from "mongoose";
import { IRToken } from "../types";


const RefreshTokenSchema = new Schema<IRToken>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

const RefreshToken: Model<IRToken> = model("RefreshToken", RefreshTokenSchema);
export default RefreshToken;
