import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import bookingReducer from "./slices/bookingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    booking: bookingReducer,
  },
});

export default store;
