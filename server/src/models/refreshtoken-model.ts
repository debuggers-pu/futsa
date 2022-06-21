import { model, Model, Schema } from "mongoose";

interface IRToken {
  userId: Schema.Types.ObjectId;
  refreshToken: string;
}

const RefreshTokenSchema = new Schema({
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
