import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = "http://localhost:4000/api/v1/posts";

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const CreatePostApiCall = async (data) => {
  try {
    const res = await api.post("/create", data);
    toast.success(res?.data?.message);
  } catch (error) {
    console.log(error?.response?.data?.message);
    toast.error(error?.response?.data?.message || "Network Error");
  }
};

export const EditPostApiCall = async (id, data) => {
  try {
    const res = await api.put(`/update/${id}`, data);
    toast.success(res?.data?.message);
  } catch (error) {
    console.log(error?.response?.data?.message);
    toast.error(error?.response?.data?.message || "Network Error");
  }
};

export const DeletePostApiCall = async (id) => {
  try {
    const res = await api.delete(`/delete/${id}`);
    toast(res?.data?.message);
  } catch (error) {
    console.log(error?.response?.data?.message);
    toast.error(error?.response?.data?.message);
  }
};

export const GetAllPostsApiCall = async () => {
  try {
    const res = await api.get("/all");
    return { success: true, data: res.data.posts };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, message, data: [] };
  }
};

export const GetRecentPostsApiCall = async () => {
  try {
    const res = await api.get("/recent");
    return { success: true, data: res.data.posts };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, message, data: [] };
  }
};

export const GetTrendingPostsApiCall = async () => {
  try {
    const res = await api.get("/trending");
    return { success: true, data: res.data.posts };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, message, data: [] };
  }
};

export const IncreaseLikesApiCall = async (id) => {
  try {
    const res = await api.put(`/likes/${id}`);
    console.log(res?.data?.message);
    return { success: true };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false };
  }
};

export const DecreaseLikesApiCall = async (id) => {
  try {
    const res = await api.put(`/dislike/${id}`);
    console.log(res?.data?.message);
    return { success: true };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false };
  }
};

export const GetCategoryPostsApiCall = async (category) => {
  try {
    const res = await api.get(`/category/${category}`);
    console.log(res?.data?.posts);
    return { success: true, data: res?.data?.posts };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, message, data: [] };
  }
};

export const GetYourPostsApiCall = async () => {
  try {
    const res = await api.get("/my");
    return { success: true, data: res?.data?.posts };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, data: [] };
  }
};

export const GetSinglePostApiCall = async (id) => {
  try {
    const res = await api.get(`/${id}`);
    return { success: true, data: res?.data?.post };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, data: {} };
  }
};
