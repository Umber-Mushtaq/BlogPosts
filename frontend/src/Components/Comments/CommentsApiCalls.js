import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:4000/api/v1/comments";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const GetCommentsApiCall = async (id) => {
  try {
    const res = await api.get(`/get/${id}`);
    return { success: true, data: res?.data?.comments };
  } catch (error) {
    console.log(error?.response?.data?.message);
    return { success: false, data: [] };
  }
};

export const CreateCommentApiCall = async (id, content) => {
  try {
    const res = await api.post(`/create/${id}`, { content });
    console.log(res?.data?.message);
    toast.success(res?.data?.message || "Comment Added");
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
