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
  GetPostsByAuthorId,
  GetYourPosts,
  GetSinglePost,
  DeletePost,
} from "../controllers/post.controller.js";
import { VerifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", VerifyToken, CreatePost);
router.get("/all", VerifyToken, GetAllPosts);
router.get("/recent", VerifyToken, GetRecentPosts);
router.get("/trending", VerifyToken, GetTrendingPosts);

// ✅ Specific routes first
router.get("/my", VerifyToken, GetYourPosts);
router.get("/author/:id", VerifyToken, GetPostsByAuthorId);
router.get("/category/:category", VerifyToken, CategoryPosts);

// ✅ Generic routes last
router.get("/:id", VerifyToken, GetSinglePost);

router.put("/update/:id", VerifyToken, UpdatePost);
router.put("/likes/:id", VerifyToken, IncreaseLikes);
router.put("/dislike/:id", VerifyToken, DecreaseLikes);

router.delete("/delete/:id", VerifyToken, DeletePost);

export default router;
