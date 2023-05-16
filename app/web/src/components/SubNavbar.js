import React from "react";

const SubNavbar = () => {
  return (
    <div className=" bg-secondaryDark text-white text-xs px-10 ">
      <ul className="flex items-center space-x-4 p-3 cursor-pointer">
        <li className="opacity-80 hover:opacity-100">Events</li>
        <li className="opacity-80 hover:opacity-100">Offers</li>
        <li className="opacity-80 hover:opacity-100">Activities</li>
        <li className="opacity-80 hover:opacity-100">Buzz</li>
      </ul>
    </div>
  );
};

export default SubNavbar;
