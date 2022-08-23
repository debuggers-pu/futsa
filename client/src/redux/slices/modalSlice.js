import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    bookModal: false,
    authModal: false,
  },
  reducers: {
    setBookModal: (state, action) => {
      state.bookModal = !state.bookModal;
    },
    setAuthModal: (state, action) => {
      state.authModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setBookModal, setAuthModal } = modalSlice.actions;
