import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
dotenv.config();
import userRoute from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRoute);

app.listen(PORT, () => {
  console.log("Server Listening...");
});
