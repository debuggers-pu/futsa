import axios from "axios";
import toast from "react-hot-toast";

const configM = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const configJ = {
  headers: {
    "Content-Type": "application/json",
  },
};

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

// auths
export const signin = (data) => api.post("auth/login", data, configJ);
export const signupUser = (data) => api.post("auth/user/signup", data, configM);
export const signupFutsal = (data) =>
  api.post("auth/futsal/signup", data, configM);

// query
export const getUserDetail = (data) =>
  api.post("user/getcustomer", data, configJ);

export const getFutsalDetail = (data) =>
  api.post("user/getfutsal", data, configJ);

// getfutsals
export const getAllFutsals = () => api.get("user/futsal/getall");

export const getOneFutsalById = (data) =>
  api.post("user/futsal/getfutsaldetail", data, configJ);

export const getFutsalByLocation = (data) =>
  api.post("user/futsal/getbylocation", data, configJ);

// bookings
export const addBooking = (data) => api.post("book/add-booking", data, configJ);

export default api;

// api/book/add-booking/
