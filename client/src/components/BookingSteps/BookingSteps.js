import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookModal } from "../../redux/slices/modalSlice";
import Modal from "../shared/Modal";

const BookingSteps = () => {
  const dispatch = useDispatch();
  function onOutClick(e) {
    e.preventDefault();
    dispatch(setBookModal(false));
  }
  // const booking = useSelector((state) => state.booking.booking);
  const onClickHandler = () => {};
  return (
    <div>
      <Modal onOutClick={onOutClick}>
        <div>
          <p>Futsals</p>
        </div>
        <div className="space-x-4">
          <button className=" seleected" onClick={onClickHandler()}>
            Back
          </button>
          <button className=" seleected" onClick={onClickHandler()}>
            Next
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingSteps;
