import React from "react";
import { Link } from "react-router-dom";
import IconButton from "./shared/IconButton";
import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { MdEmojiEvents, MdAccountCircle } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="border-r-[1px] h-screen w-[200px]">
      <Link to={"/"}>
        <h1 className="text-red-500 font-bold text-3xl cursor-pointer text-center p-4 py-4 shadow-sm bg-white">
          FUTSA
        </h1>
      </Link>
      <div className="mt-4">
        <IconButton title={"Home"} isselected>
          <AiFillHome className="h-5 w-5 " />
        </IconButton>
        <IconButton title={"Events"}>
          <MdEmojiEvents className="h-5 w-5 " />
        </IconButton>
        <IconButton title={"Futsals"}>
          <BiFootball className="h-5 w-5" />
        </IconButton>
        <IconButton title={"Favourites"}>
          <BsBookmark className="h-5 w-5 " />
        </IconButton>
        <IconButton title={"Help"}>
          <AiFillQuestionCircle className="h-5 w-5 " />
        </IconButton>
      </div>
      <div className="text-red-400 absolute bottom-2 w-[200px] shadow-md">
        <IconButton title={"LOG IN"}>
          <MdAccountCircle className="h-5 w-5 " />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
