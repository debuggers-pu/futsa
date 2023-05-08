import React from "react";
import { ImCross } from "react-icons/im";
const Modal = ({ children, onOutClick, Title }) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-30 w-screen h-screen flex items-center justify-center">
      <div
        className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-80 z-30 text-white"
        onClick={onOutClick}
      ></div>
      <div className="bg-white min-w-[700px] rounded-sm shadow-sm m-auto px-10 py-5 absolute z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold opacity-80">{Title || ""}</h1>
          <ImCross
            className="text-red-400 hover:opacity-75"
            onClick={onOutClick}
          />
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
