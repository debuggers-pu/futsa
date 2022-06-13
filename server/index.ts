import dotenv from "dotenv";
import express, { Express } from "express";
import connectDB from "./db.js";
import cors from "cors-ts";
import router from "./src/routes";

dotenv.config();
const app: Express = express();

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
connectDB();

// middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", router);

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server ruuning at port : ${PORT}`);
});
