import React, { useEffect } from "react";
import Searchbox from "./Searchbox";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdNotifications } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setAuthModal, setProfileModal } from "../redux/slices/modalSlice";
import { setRole, setUserRole } from "../redux/slices/authSlice";
import DropDown from "./shared/DropDown";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  const onSignIn = () => {
    dispatch(setAuthModal(true));
  };

  const onClick = () => {
    dispatch(setUserRole("owner"));
  };

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    if (path === "owner") {
      dispatch(setUserRole("owner"));
    }
    console.log(path);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center p-3 px-10 w-full shadow-sm bg-backgroundDark ">
        <div className="flex items-end cursor-pointer space-x-8">
          <NavLink to={"/"}>
            <h1 className="text-white font-bold text-3xl cursor-pointer text-center">
              FUTSA
            </h1>
          </NavLink>
          <div>
            <Searchbox />
          </div>
        </div>
        {/* Searchbox */}

        <div className="flex items-center justify-center cursor-pointer space-x-5">
          <NavLink to={"/owner"} target={"_self"}>
            <p
              className="text-white opacity-80 hover:opacity-100 text-sm"
              onClick={onClick}
            >
              Have a futsal ?
            </p>
          </NavLink>
          {/* location */}
          <div>
            <DropDown Items={["Pokhara", "Kathmandu", "Chitwan", "Others"]} />
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
              onClick={() => dispatch(setProfileModal(true))}
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
