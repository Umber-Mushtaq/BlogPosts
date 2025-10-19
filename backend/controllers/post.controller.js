import { sendResponse } from "../Utils/utils.js";
import { Post } from "../models/post.model.js";

export const CreatePost = async (req, res) => {
  try {
    const author = req.user.id;
    const { title, category, content, imageUrl } = req.body;
    if (!author || !title || !category || !content || !imageUrl)
      return sendResponse(res, 400, false, "Fill the required fields");
    const post = new Post({ author, title, category, content, imageUrl });
    await post.save();
    sendResponse(res, 200, true, "Post Created Successfully");
  } catch (error) {
    console.log(error);
    sendResponse(res, 400, false, "Server Error Creating Post");
  }
};

export const UpdatePost = async (req, res) => {
  try {
    const { id } = req.params; // post ID from the URL
    const { title, category, content, imageUrl } = req.body;

    // find post
    const post = await Post.findById(id);
    if (!post) return sendResponse(res, 404, false, "Post not found");

    // update fields (only if provided)
    post.title = title || post.title;
    post.category = category || post.category;
    post.content = content || post.content;
    post.imageUrl = imageUrl || post.imageUrl;

    await post.save();

    sendResponse(res, 200, true, "Post updated successfully", post);
  } catch (error) {
    console.error(error);
    sendResponse(res, 400, false, "Server error updating post");
  }
};

export const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate(
      "author",
      "firstName lastName email"
    );
    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    sendResponse(res, 400, false, "Error getting all posts");
  }
};

export const GetRecentPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "firstName lastName email")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    sendResponse(res, 400, false, "Error getting all posts");
  }
};

export const GetTrendingPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "firstName lastName email")
      .sort({ likes: -1 });
    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    sendResponse(res, 400, false, "Error getting all posts");
  }
};

export const IncreaseLikes = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!post) return sendResponse(res, 400, false, "Post Not Found");
    return res.status(200).json({
      success: true,
      message: "Likes increased",
      post,
    });
  } catch (error) {
    console.log(error);
    sendResponse(res, 400, true, "Server error increasing likes");
  }
};

export const DecreaseLikes = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) return sendResponse(res, 400, false, "Post Not Found");
    if (post.likes > 0) {
      post.likes -= 1;
      await post.save();
    }
    return res.status(200).json({
      success: true,
      message: "Likes decreased",
      post,
    });
  } catch (error) {
    console.log(error);
    sendResponse(res, 400, true, "Server error decreased likes");
  }
};

export const CategoryPosts = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await Post.find({ category }).populate(
      "author",
      "firstName lastName email"
    );
    return res.status(200).json({
      success: true,
      message: "Category Posts Got Successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server Error Fetching Posts");
  }
};
