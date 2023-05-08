import React, { useEffect, useState } from "react";
import { getBookingsByFutsal } from "../../axios";
import { useSelector } from "react-redux";
import BookingReq from "./components/BookingReq";

const BookingsDetails = () => {
  const futsalDetails = useSelector((state) => state.auth.user.details);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const getBookings = async () => {
      const res = await getBookingsByFutsal({ futsalId: futsalDetails._id });
      if (res.data.bookings) {
        const books = res.data.bookings.filter(
          (data) => data.status === "pending"
        );
        setBookings(books);
      }
    };
    getBookings();
  }, []);
  return (
    <div className="overflow-auto">
      {bookings.length > 0 ? (
        bookings.map((books, index) => {
          return (
            <BookingReq
              id={books._id}
              fullName={
                books.customerId.firstName + " " + books.customerId.lastName
              }
              image={books.customerId.image.split("\\")[1]}
              phoneNumber={books.customerId.phoneNumber}
              bookedTime={books.createdAt}
              bookingTime={books.bookingTime}
              bookingDate={books.bookingDate}
              address={futsalDetails.address}
              isReq={true}
            />
          );
        })
      ) : (
        <div className="flex mx-auto justify-center items-center h-screen/2 mt-60">
          <h1 className="font-bold text-2xl bg-red-400 px-4 py-2 text-white text-center rounded-md">
            No pending requests
          </h1>
        </div>
      )}
    </div>
  );
};

export default BookingsDetails;
