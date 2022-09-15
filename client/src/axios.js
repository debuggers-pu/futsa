import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    toast.error(error.response.data.message);
  }
});

export const signin = (data) =>
  api.post("auth/login", data, {
    headers: {
      Accept: "application/json",
    },
  });
export const signupUser = (data) =>
  api.post("auth/user/signup", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getUserDetail = (data) =>
  api.post("user/getcustomer", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export default api;
