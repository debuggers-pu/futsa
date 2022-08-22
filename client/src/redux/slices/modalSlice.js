import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    bookModal: false,
  },
  reducers: {
    setBookModal: (state, action) => {
      state.bookModal = !state.bookModal;
    },
  },
});

export default modalSlice.reducer;
export const { setBookModal } = modalSlice.actions;
