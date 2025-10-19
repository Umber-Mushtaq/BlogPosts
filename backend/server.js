import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./Routes/user.routes.js";
import postRoute from "./Routes/post.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // ✅ add this

dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

// ✅ CORS setup — must come BEFORE routes
app.use(
  cors({
    origin: "http://localhost:5173", // your React app’s URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you’re using cookies or tokens
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

app.listen(PORT, () => {
  console.log(`✅ Server Listening on port ${PORT}`);
});
