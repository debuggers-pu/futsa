import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookModal } from "../../../redux/slices/modalSlice";
import Modal from "../../shared/Modal";
import InputField from "../../shared/InputField";
import { addBooking } from "../../../axios";
import toast from "react-hot-toast";

const BookingSteps = () => {
  const dispatch = useDispatch();
  const bookingDetail = useSelector((state) => state.booking.booking);
  function onOutClick(e) {
    e.preventDefault();
    dispatch(setBookModal(false));
  }
  const [step, setStep] = useState(0);
  const Steps = {
    0: <Summary />,
    1: <PaymentMethod />,
  };

  const steps = Steps[step];
  const onNextHandler = async () => {
    if (step !== 1) {
      setStep(step + 1);
      return;
    }
    if (step === 1) {
      const _book = {
        customerId: bookingDetail.userId,
        futsalId: bookingDetail.futsal._id,
        bookingTime: bookingDetail.selectedTime,
        bookingDate: bookingDetail.date,
      };
      try {
        const res = await addBooking(_book);
        if (res) {
          toast.success("Booking Successful.");
          dispatch(setBookModal(false));
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  const onBackHandler = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };
  return (
    <div>
      <Modal onOutClick={onOutClick}>
        {steps}
        <div className="border-b-[1px] mt-4"></div>
        <div className="mt-6 flex">
          <button
            className="seleected w-full hover:opacity-80"
            onClick={onBackHandler}
          >
            Back
          </button>
          <button
            className="seleected ml-4 w-full hover:opacity-80"
            onClick={onNextHandler}
          >
            {step === 1 ? "Submit" : "Next"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingSteps;

const Summary = () => {
  const bookingDetail = useSelector((state) => state.booking.booking);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>
      <div className="flex items-start justify-between">
        <div className="">
          <p className="text-sm font-bold mb-1">
            {bookingDetail.futsal.futsalName}
          </p>
          <p className="text-sm font-bold mb-1">
            {bookingDetail.futsal.address}
          </p>
          <p className="text-sm font-bold mb-1">
            {bookingDetail.date} ,{bookingDetail.selectedTime}
          </p>
        </div>
        <p className="text-sm mb-1">Rs. 1200</p>
      </div>
    </div>
  );
};

const PaymentMethod = () => {
  const [onDiscount, setOnDiscount] = useState(false);
  return (
    <div>
      <h1>Choose payment Option</h1>
      <p className="text-sm font-bold text-red-600">* Must pay 50%</p>
      <div className="flex items-center justify-between space-x-2 ">
        <InputField
          name={"couponcode"}
          placeholder={"Enter any coupon code"}
          type="text"
        />
        <button
          className="px-4 py-1 bg-blue-500 text-white rounded-sm text-sm"
          onClick={() => setOnDiscount(true)}
        >
          Activate
        </button>
      </div>
      {/* TODO: Here we can make discount amount added when clicking activate and decrease the value might do it later */}

      <div className="border-b-[1px] mt-4 mb-4"></div>
      {onDiscount ? (
        <div className="flex justify-between items-center">
          <p className="font-bold text-sm">Discount </p>
          <p className="text-sm">- Rs. 100 </p>
        </div>
      ) : (
        " "
      )}

      <div className="flex justify-between items-center">
        <p className="font-bold">Total </p>
        <p>{onDiscount ? "Rs. 1100" : "Rs. 1200"} </p>
      </div>
    </div>
  );
};
