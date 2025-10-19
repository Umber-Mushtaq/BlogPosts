import express from "express";
import {
  RegisterUser,
  LoginUser,
  GetYourProfile,
  UpdateYourProfile,
  GetSomeOnesProfile,
  LogoutUser,
} from "../controllers/user.controller.js";
import { VerifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", VerifyToken, LogoutUser);
router.get("/me", VerifyToken, GetYourProfile);
router.put("/update", VerifyToken, UpdateYourProfile);
router.get("/:id", VerifyToken, GetSomeOnesProfile);

export default router;
