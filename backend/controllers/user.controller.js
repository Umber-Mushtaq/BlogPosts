import { User } from "../models/user.model.js";
import { sendResponse, validEmail } from "../Utils/utils.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export const RegisterUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // check all fields are not null
    if (!firstName || !lastName || !email || !password)
      return sendResponse(res, 400, false, "Fill the required fields");
    // check the email format
    if (!validEmail(email))
      return sendResponse(res, 400, false, "Email is not in correct format");
    // check for existing email
    const existEmail = await User.findOne({ email });
    if (existEmail)
      return sendResponse(res, 400, false, "Email already exists");
    // check password length:(password encrypted in model)
    if (password.length < 6)
      return sendResponse(res, 400, false, "Password must 6 characters long");
    // create user
    await User.create({ firstName, lastName, email, password });
    // return success response
    return sendResponse(res, 201, true, "User successfully created");
  } catch (error) {
    console.log(error);
    return sendResponse(res, false, 400, "Server Error Registering User");
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check the fields are not null
    if (!email || !password)
      return sendResponse(res, 400, false, "Email or Password is empty");
    // check email format
    if (!validEmail(email))
      return sendResponse(res, 400, false, "Email is not in correct format");
    // check user exists
    const u = await User.findOne({ email });
    if (!u) return sendResponse(res, 404, false, "User not found");
    // compare password with bcrypt
    const isMatch = await bcrypt.compare(password, u.password);
    if (!isMatch) return sendResponse(res, 400, false, "Password is wrong");
    // generate JWT token
    const jwtToken = jwt.sign({ id: u._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // send response with token in cookie
    return res
      .status(200)
      .cookie("token", jwtToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: true,
      })
      .json({
        success: true,
        message: "Login Successfull",
      });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server Error User Login");
  }
};

export const GetYourProfile = async (req, res) => {
  try {
    // get user id from the req
    const user_id = req.user.id;
    if (!user_id) return sendResponse(res, 400, false, "User id not found");
    // find user
    const user = await User.findById(user_id).select("-password"); // exclude password
    if (!user) return sendResponse(res, 400, false, "User not found");
    // return user back
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server Error getting User");
  }
};

export const UpdateYourProfile = async (req, res) => {
  try {
    // get the id
    const user_id = req.user.id;
    // validate id
    if (!user_id) return sendResponse(res, 400, false, "User Id not found");
    // get the user
    const user = await User.findById(user_id).select("-password");
    // validate user
    if (!user) return sendResponse(res, 400, false, "User not found");
    // get new values
    const {
      firstName,
      lastName,
      email,
      bio,
      occupation,
      photoUrl,
      linkedin,
      github,
    } = req.body;

    const updated = {
      firstName,
      lastName,
      email,
      bio,
      occupation,
      photoUrl,
      linkedin,
      github,
    };

    // remove undefined values
    Object.keys(updated).forEach(
      (key) => updated[key] === undefined && delete updated[key]
    );

    // update database (faster than save)
    const updatedUser = await User.findByIdAndUpdate(user_id, updated, {
      new: true, // return the updated value
      runValidators: true, // validate schema
      select: "-password", // exclude password
    });

    // send response
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server Error updating profile");
  }
};

export const GetSomeOnesProfile = async (req, res) => {
  try {
    // get email
    const user_id = req.params.id;
    // validate user id
    if (!user_id) return sendResponse(res, 400, false, "User id not found");
    if (!mongoose.Types.ObjectId.isValid(user_id))
      return sendResponse(res, 400, false, "Invalid User ID format");
    // find user
    const user = await User.findById(user_id).select(
      "firstName lastName email bio occupation photoUrl linkedin github"
    );
    if (!user) return sendResponse(res, 400, false, "User not found");
    // send response
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server error Getting Profile");
  }
};
