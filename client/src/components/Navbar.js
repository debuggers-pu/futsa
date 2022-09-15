import React from "react";
import Searchbox from "./Searchbox";
import { Link, NavLink } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "../redux/slices/modalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  const user = useSelector((state) => state.auth.user);

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

        <div className="flex items-center justify-center cursor-pointer space-x-5">
          <NavLink to={"/owner"}>
            <p className="text-white opacity-80 hover:opacity-100 text-sm">
              Have a futsal ?
            </p>
          </NavLink>
          {/* location */}
          <div className="flex items-center cursor-pointer">
            <p className="text-sm text-white opacity-80">Pokhara</p>
            <IoMdArrowDropdown className="h-6 w-6 text-white" />
          </div>
          {isAuthenticated ? (
            <img
              src={`${
                user.details.image
                  ? `http://localhost:8000/${user.details.image.split("\\")[1]}`
                  : ""
              }`}
              alt="image"
              loading="lazy"
              className="h-6 w-6 rounded-md"
            />
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
