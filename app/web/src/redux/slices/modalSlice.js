import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    bookModal: false,
    authModal: false,
    profileModal: false,
  },
  reducers: {
    setBookModal: (state, action) => {
      state.bookModal = !state.bookModal;
    },
    setAuthModal: (state, action) => {
      state.authModal = action.payload;
    },
    setProfileModal: (state, action) => {
      state.profileModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setBookModal, setAuthModal, setProfileModal } =
  modalSlice.actions;
