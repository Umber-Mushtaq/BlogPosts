import express from "express";
import {
  CreatePost,
  GetAllPosts,
  GetRecentPosts,
  IncreaseLikes,
  DecreaseLikes,
  UpdatePost,
  GetTrendingPosts,
  CategoryPosts,
} from "../controllers/post.controller.js";
import { VerifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", VerifyToken, CreatePost);
router.get("/all", VerifyToken, GetAllPosts);
router.get("/recent", VerifyToken, GetRecentPosts);
router.get("/trending", VerifyToken, GetTrendingPosts);
router.put("/update/:id", VerifyToken, UpdatePost);
router.put("/likes/:id", VerifyToken, IncreaseLikes);
router.put("/dislike/:id", VerifyToken, DecreaseLikes);
router.get("/category/:category", VerifyToken, CategoryPosts);

export default router;
