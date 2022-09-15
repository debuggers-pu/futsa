import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isauthenticated: false,
    user: {
      info: {
        id: null,
      },
      details: {
        role: "customer",
      },
    },
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isauthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user.info = action.payload;
    },
    setUserDetails: (state, action) => {
      state.user.details = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuthenticated, setUser, setUserDetails, setRole } =
  authSlice.actions;
