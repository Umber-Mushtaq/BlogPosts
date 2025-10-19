import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:4000/api/v1/users";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const SignUpUserApiCall = async (
  firstName,
  lastName,
  email,
  password
) => {
  try {
    const res = await api.post("/register", {
      firstName,
      lastName,
      email,
      password,
    });
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};

export const LoginUserApiCall = async (email, password) => {
  try {
    const res = await api.post("/login", { email, password });
    toast.success(res.data.message);
    localStorage.setItem("login", "true");
    localStorage.setItem("UserData", JSON.stringify(res.data.user));
    return { success: "true", data: res.data.user };
  } catch (error) {
    toast.error(error.response?.data?.message || "Network Error");
  }
};

export const LogoutUserApiCall = async () => {
  try {
    const res = await api.get("/logout");
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Network Error");
  }
};
