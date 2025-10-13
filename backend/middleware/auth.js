import jwt from "jsonwebtoken";
import { sendResponse } from "../Utils/utils.js";

export const VerifyToken = async (req, res, next) => {
  try {
    //get the token from cookie or header
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    // check the token
    if (!token)
      return sendResponse(res, 400, false, "Access Denied: No Token Provided");
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded has user id add it to the req so it could be used in the controller
    req.user = decoded;
    // proceed the route
    next();
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Error Verifying Token");
  }
};
