import { Comment } from "../models/comments.model.js";
import { sendResponse } from "../Utils/utils.js";

export const CreateComment = async (req, res) => {
  try {
    const author = req.user.id;
    const post = req.params.id;
    const { content } = req.body;
    if (!author || !post || !content)
      return sendResponse(res, 400, false, "No id or no content");
    const comment = new Comment({ post, author, content });
    await comment.save();
    return sendResponse(res, 200, true, "Comment created successfully");
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server error creating comment");
  }
};

export const GetAllComments = async (req, res) => {
  try {
    const post_id = req.params.id;
    if (!post_id) return sendResponse(res, 400, false, "No post id");
    const comments = await Comment.find({ post: post_id })
      .populate("author", "firstName lastName photoUrl") // optional: include user info
      .sort({ createdAt: -1 }); // optional: newest first
    if (!comments) return sendResponse(res, 400, false, "No comment found");
    return res.status(200).json({
      success: true,
      message: "Got the comments successfully",
      comments,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server error getting comments");
  }
};
