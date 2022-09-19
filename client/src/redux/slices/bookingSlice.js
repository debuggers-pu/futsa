import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "modal",
  initialState: {
    booking: {
      futsalId: "",
      futsal: "",
      userId: "",
      selectedTime: "",
      date: "",
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
    setFutsalDetails: (state, action) => {
      state.booking.futsal = action.payload;
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
  setFutsalDetails,
} = bookingSlice.actions;
