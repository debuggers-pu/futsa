import React, { useEffect, useState } from "react";
import Modal from "./shared/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setProfileModal } from "../redux/slices/modalSlice";
import { getBookingsByUser, removeBooking } from "../axios";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

const Userbookings = () => {
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState([]);
  const id = useSelector((state) => state.auth.user.details._id);
  const onOutClick = () => {
    dispatch(setProfileModal(false));
  };

  const onCancel = async (id, e) => {
    e.preventDefault();
    removeBooking({ bookId: id });
    toast.success(`You cancelled the booking.`);
    dispatch(setProfileModal(false));
  };

  useEffect(() => {
    const getBookings = async () => {
      const res = await getBookingsByUser({ userId: id });
      if (res.data) {
        setBookings(res.data.bookings);
      }
    };
    getBookings();
  }, []);
  return (
    <div>
      <Modal onOutClick={onOutClick} Title="Your Bookings">
        <div className="mt-4 grid grid-cols-2 gap-3 overflow-auto">
          {bookings ? (
            bookings.map((book, id) => {
              return (
                <div className="text-sm mt-2 border-[1px] p-4 hover:shadow-md rounded-sm cursor-pointer space-y-1">
                  <div className="flex space-x-2">
                    <p className="font-bold">{book.bookingTime},</p>
                    <p className="font-bold">{book.bookingDate}</p>
                  </div>

                  <h1 className="">{book.futsalId.futsalName}</h1>
                  <div className="font-bold text-sm flex space-x-2">
                    <p>Status</p>
                    <p>: {book.status.toUpperCase()}</p>
                  </div>
                  <p className="text-xs">
                    {moment(book.createdAt).format("dddd, MMMM Do, h:mm a")}
                  </p>
                  <div className="flex justify-end">
                    {book.status === "pending" ? (
                      <AiFillDelete
                        className="text-yellow-400 h-6 w-6 hover:opacity-60"
                        onClick={(e) => onCancel(book._id, e)}
                      />
                    ) : (
                      <AiFillCheckCircle className="text-green-400 h-6 w-6" />
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p>You don't have any bookings.</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Userbookings;
