import React from "react";
import { ImLocation } from "react-icons/im";
import { IoTimeSharp } from "react-icons/io5";
import moment from "moment";

const BookingReq = () => {
  const getBookingByFutsalId = await;
  return (
    <div className="border-[1px] rounded-md shadow-sm mx-6 mt-4 px-6 py-2 hover:shadow-lg">
      <div className="flex items-center justify-between text-sm">
        <div className="bg-yellow-200 p-2 text-sm ">
          {moment().format("dddd, MMMM Do, h:mm a")}
          <p className="text-xs">id : 6304f31d494016bf52e3cbc7</p>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <img src="/images/avatar.png" alt="Userprofile" className="h-12" />

          <div>
            <h1 className="font-bold">Saroj Aryal</h1>
            <p className="opacity-80 font-bold text-xs">+977 9846168323</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="flex items-center font-bold opacity-60">
            <ImLocation className="mr-2" />
            Birauta-17, Pokhara
          </p>
          <p className="flex justify-center items-center font-bold opacity-60">
            <IoTimeSharp className="mr-2" /> 6AM - 7AM (16th sept)
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="seleected hover:opacity-80">Confirm</button>
          <button className="unseleected hover:opacity-80">Cancel</button>
        </div>
      </div>
    </div>
  );
};

const BookingsDetails = () => {
  return (
    <div>
      <BookingReq />
      <BookingReq />
      <BookingReq />
    </div>
  );
};

export default BookingsDetails;
