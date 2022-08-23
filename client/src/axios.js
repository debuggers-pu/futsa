import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const signin = (data) => api.post("auth/login", data);
export const signupUser = (data) => api.post("auth/user/signup", data);

export default api;
