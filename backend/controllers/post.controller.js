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
    // find post
    const post = await Post.findById(id);
    if (!post) return sendResponse(res, 404, false, "Post not found");

    // update fields (only if provided)
    const { title, category, content, imageUrl } = req.body;
    post.title = title || post.title;
    post.category = category || post.category;
    post.content = content || post.content;
    post.imageUrl = imageUrl || post.imageUrl;

    await post.save();

    return sendResponse(res, 200, true, "Post updated successfully", post);
  } catch (error) {
    console.error(error);
    return sendResponse(res, 400, false, "Server error updating post");
  }
};

export const DeletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) return sendResponse(res, 400, false, "Post not exists");
    return sendResponse(res, 200, true, "Post Deleted Successfully");
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server Error Deleting Post");
  }
};

export const GetSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) return sendResponse(res, 400, false, "Post not found");
    return res.status(200).json({
      success: true,
      message: "Post got successfylly",
      post,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server error getting single post");
  }
};

export const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate(
      "author",
      "firstName lastName email photoUrl"
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
      .populate("author", "firstName lastName email photoUrl")
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

export const GetPostsByAuthorId = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ author: id })
      .populate("author", "firstName lastName email photoUrl")
      .sort({ createdAt: -1 });

    if (!posts || posts.length === 0) {
      return sendResponse(res, 400, false, "No posts found for this author");
    }
    return res.status(200).json({
      success: true,
      message: "Posts found of the author",
      posts,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server error getting author posts");
  }
};

export const GetYourPosts = async (req, res) => {
  try {
    console.log("decoded user : ", req.user);
    const id = req.user.id;
    const posts = await Post.find({ author: id })
      .populate("author", "firstName lastName email photoUrl")
      .sort({ createdAt: -1 });

    if (!posts || posts.length === 0) {
      return sendResponse(res, 400, false, "No posts found for this author");
    }
    return res.status(200).json({
      success: true,
      message: "Posts found of the author",
      posts,
    });
  } catch (error) {
    console.log(error);
    return sendResponse(res, 400, false, "Server error getting author posts");
  }
};

export const GetTrendingPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "firstName lastName email photoUrl")
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
      "firstName lastName email photoUrl"
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
