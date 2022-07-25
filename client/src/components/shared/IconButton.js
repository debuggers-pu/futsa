import React from "react";

const IconButton = ({ title, children, isselected }) => {
  return (
    <div
      className={`${
        isselected
          ? "bg-red-400 text-white px-6 py-2 rounded-md flex items-center justify-start space-x-4 cursor-pointer mx-2 font-semibold "
          : " px-6 py-2 rounded-md my-2 flex items-center justify-start space-x-4 cursor-pointer hover:bg-gray-200 mx-2 font-semibold"
      }`}
    >
      {children}
      <h1 className="font-sm">{title}</h1>
    </div>
  );
};

export default IconButton;
