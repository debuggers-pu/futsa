import React from "react";
import Searchbox from "./Searchbox";
import { Link } from "react-router-dom";
import { MdNotifications, MdAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "../redux/slices/modalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  const onSignIn = () => {
    dispatch(setAuthModal(true));
  };
  return (
    <div>
      <div className="flex justify-between items-center p-3 px-10 w-full shadow-sm bg-backgroundDark ">
        <div className="flex items-end cursor-pointer space-x-8">
          <Link to={"/"}>
            <h1 className="text-white font-bold text-3xl cursor-pointer text-center">
              FUTSA
            </h1>
          </Link>
          <div>
            <Searchbox />
          </div>
        </div>
        {/* Searchbox */}

        <div className="flex items-center cursor-pointer space-x-5">
          <p className="text-white opacity-80 hover:opacity-100 text-sm">
            Have a futsal ?
          </p>
          {/* location */}
          <div className="flex items-center cursor-pointer">
            <p className="text-sm text-white opacity-80">Pokhara</p>
            <IoMdArrowDropdown className="h-6 w-6 text-white" />
          </div>
          {isAuthenticated ? (
            <img src={"/images/avatar.png"} alt="image" />
          ) : (
            <button className="seleected" onClick={onSignIn}>
              Sign in
            </button>
          )}

          <MdNotifications className="h-6 w-6 text-primaryColor p-1 rounded-md bg-white hover-effect" />
        </div>
        {/* notificationicon */}
      </div>
    </div>
  );
};

export default Navbar;
