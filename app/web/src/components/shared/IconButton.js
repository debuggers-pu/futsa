import React from "react";
import { NavLink } from "react-router-dom";

const IconButton = ({ title, children, isselected, path, onClick }) => {
  return (
    <NavLink to={`/${path}`}>
      <div
        className={`${
          isselected
            ? "bg-red-400 text-white px-3 py-2 rounded-md flex items-start justify-start space-x-4 cursor-pointer mx-1"
            : "px-3 py-2 rounded-md my-2 flex items-start justify-start space-x-4 cursor-pointer hover:bg-gray-200 mx-1 hover:text-backgroundDark opacity-90 "
        }`}
        onClick={onClick}
      >
        {children}
        <h1 className="text-sm">{title}</h1>
      </div>
    </NavLink>
  );
};

export default IconButton;
