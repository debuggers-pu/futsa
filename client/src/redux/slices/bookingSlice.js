import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "modal",
  initialState: {
    booking: {
      futsalId: "",
      userId: "",
      selectedTime: "",
      date: "",
      duration: "",
      bookTime: "",
    },
  },
  reducers: {
    setFutsalId: (state, action) => {
      state.booking.futsalId = action.payload;
    },

    setUserId: (state, action) => {
      state.booking.userId = action.payload;
    },
    setBookingSelectedTime: (state, action) => {
      state.booking.selectedTime = action.payload;
    },
    setBookDate: (state, action) => {
      state.booking.date = action.payload;
    },
    setBookDuration: (state, action) => {
      state.booking.duration = action.payload;
    },
    setBookTime: (state, action) => {
      state.booking.bookTime = Date.now();
    },
  },
});

export default bookingSlice.reducer;
export const {
  setFutsalId,
  setBookTime,
  setBookingSelectedTime,
  setBookDate,
  setBookDuration,
  setUserId,
} = bookingSlice.actions;
