import dotenv from "dotenv";
import express, { Express } from "express";
import connectDB from "./db";
import cors from "cors-ts";
import router from "./src/routes";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config();
const app: Express = express();

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
connectDB();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads"));
app.use(cors(corsOption));
app.use(morgan("dev"));

// routes
app.use("/api", router);

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server ruuning at port : ${PORT}`);
});
