import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:4000/api/v1/users";
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const EditProfileApiCall = async (
  firstName,
  lastName,
  email,
  bio,
  occupation,
  linkedin,
  github
) => {
  try {
    const res = await api.put("/update", {
      firstName,
      lastName,
      email,
      bio,
      occupation,
      linkedin,
      github,
    });
    toast.success(res?.data?.message);
    localStorage.setItem("UserData", JSON.stringify(res?.data?.user));
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "Server Error");
  }
};

export const GetAuthorProfile = async (id) => {
  try {
    console.log("Fetching author details");
    const res = await api.get(`/${id}`);
    console.log(res?.data?.user);
    return { success: true, data: res?.data?.user };
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
