import { Router, Request, Response } from "express";
import {
  requireAuthentication,
  userMiddleware,
  ownerMiddleware,
} from "../middlewares/auth-middleware";

import UserController from "../controllers/user-controller";

const router = Router();

router.post("/getcustomer", UserController.getCustomer);
router.post("/getfutsal", UserController.getFutsal);

router.post("/futsal/getfutsaldetail", UserController.getFutsalById);
router.get("/futsal/getall", UserController.getAllFutsal);
router.post("/futsal/getbylocation", UserController.getFutsalByLocation);

export default router;
