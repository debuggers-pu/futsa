import { Router, Request, Response } from "express";
import {
  requireAuthentication,
  userMiddleware,
  ownerMiddleware,
} from "../middlewares/auth-middleware";

import customerController from "../controllers/customer-controller";

const router = Router();

router.post("/getcustomer", customerController.getCustomer);

export default router;
