import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./Routes/user.routes.js";
import postRoute from "./Routes/post.routes.js";
import commentRoute from "./Routes/comment.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/comments", commentRoute);

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
