import React from "react";
import Searchbox from "./Searchbox";
import { IoLocation } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 w-full shadow-sm bg-white ">
        <div className="flex items-end space-x-1 cursor-pointer">
          {/* location */}
          <IoLocation className="h-6 w-6 text-red-400" />
          <p className="text-sm font-bold underline ">Pokhara</p>
        </div>
        {/* Searchbox */}
        <div>
          <Searchbox />
        </div>
        {/* notificationicon */}
        <MdNotifications className="h-8 w-8 bg-blue-300 text-white p-2" />
      </div>
    </>
  );
};

export default Header;
