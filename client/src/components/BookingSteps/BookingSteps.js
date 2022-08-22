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
  const booking = useSelector((state) => state.booking.selectedDate);
  const onClickHandler = () => {};
  return (
    <div>
      <Modal onOutClick={onOutClick}>
        <div>
          <h1>{booking}</h1>
        </div>
        <button className=" seleected" onClick={onClickHandler()}>
          Next
        </button>
      </Modal>
    </div>
  );
};

export default BookingSteps;
