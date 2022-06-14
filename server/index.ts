import dotenv from "dotenv";
import express, { Express } from "express";
import connectDB from "./db";
import cors from "cors-ts";
import router from "./src/routes";
import morgan from "morgan";

dotenv.config();
const app: Express = express();

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
connectDB();

// middlewares
app.use(cors(corsOption));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/auth", router);

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server ruuning at port : ${PORT}`);
});
