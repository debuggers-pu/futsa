import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchbox = () => {
  return (
    <div className="flex items-center space-x-1 w-[500px] border rounded-md pl-4 pr-2 bg-white">
      <BsSearch className="h-8 w-8 text-secondaryDark  p-2 rounded-md" />
      <input
        className="w-full outline-none text-xs"
        type="text"
        placeholder="Search Futsals by name or location"
      />
    </div>
  );
};

export default Searchbox;
