import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const requireAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    const token: string = req.headers.authorization.split(" ")[1];
    const secretKey: any = process.env.JWT_SECRET_KEY;
    const user: any = jwt.verify(token, secretKey);
    req.user = user;
  } else {
    return res.status(400).json({
      message: "Authorization Failed. Sign in.",
    });
  }
  next();
};

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User access denied" });
  }
  next();
};

export const ownerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== "owner") {
    return res.status(400).json({ message: "Owner access denied" });
  }
  next();
};
