import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBookingsByFutsal } from "../../axios";
import BookingReq from "./components/BookingReq";

const BookingsHistory = () => {
  const futsalDetails = useSelector((state) => state.auth.user.details);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const getBookings = async () => {
      const res = await getBookingsByFutsal({ futsalId: futsalDetails._id });
      if (res.data) {
        const books = res.data.bookings.filter(
          (data) => data.status === "booked"
        );
        setBookings(books);
      }
    };

    getBookings();
  }, []);
  return (
    <div className=" h-full overflow-auto">
      {bookings ? (
        bookings.map((books, index) => {
          return (
            <BookingReq
              id={books._id}
              fullName={books.customerId.firstName + books.customerId.lastName}
              image={books.customerId.image.split("\\")[1]}
              phoneNumber={books.customerId.phoneNumber}
              bookedTime={books.createdAt}
              bookingTime={books.bookingTime}
              bookingDate={books.bookingDate}
              address={futsalDetails.address}
              isReq={false}
              updatedAt={books.updatedAt}
            />
          );
        })
      ) : (
        <div className="flex mx-auto justify-center items-center h-screen/2 mt-60">
          <h1 className="font-bold text-2xl bg-green-400 px-4 py-2 text-white text-center rounded-md">
            No history yet.
          </h1>
        </div>
      )}
    </div>
  );
};

export default BookingsHistory;
