import express from "express";
import { VerifyToken } from "../middleware/auth.js";
import {
  CreateComment,
  GetAllComments,
} from "../controllers/comments.controller.js";
const router = express.Router();

router.post("/create/:id", VerifyToken, CreateComment);
router.get("/get/:id", VerifyToken, GetAllComments);

export default router;
