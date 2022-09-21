import React, { useEffect, useState } from "react";
import IconButton from "../components/shared/IconButton";
import {
  AiFillQuestionCircle,
  AiOutlineHistory,
  AiOutlineTeam,
} from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdNotifications } from "react-icons/md";
import { BiFootball, BiConversation } from "react-icons/bi";
import Searchbox from "../components/Searchbox";
import moment from "moment";
import BookingsDetails from "./pages/BookingsDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFutsalDetail } from "../axios";
import {
  setAuthenticated,
  setUser,
  setUserDetails,
} from "../redux/slices/authSlice";
import TabView from "../components/Bookings/components/TabView";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.info.id && user.info.role === "futsal") {
      const getFutsal = async () => {
        const res = await getFutsalDetail({ userId: user.info.id });
        dispatch(setUserDetails(res.data));
      };
      getFutsal();
    }
  }, [user.info.id]);
  return (
    <div className="flex h-screen w-screen">
      {/* left panel */}
      <div className="bg-backgroundDark h-full w-[250px] flex flex-col  text-white pt-4 px-2">
        <h1 className="text-xl font-bold text-center mb-6">FUTSA</h1>
        {/* Buttons */}
        <div className="mt-2">
          <IconButton
            title={"Dashboard"}
            isselected
            path={`owner/dashboard/${user.info.id}`}
          >
            <MdOutlineSpaceDashboard className="h-5 w-5 " />
          </IconButton>
          <IconButton
            title={"Bookings"}
            path={`owner/dashboard/${user.info.id}/bookings`}
          >
            <BiFootball className="h-5 w-5 " />
          </IconButton>
          <IconButton title={"History"} path="owner/dashboard/bookings">
            <AiOutlineHistory className="h-5 w-5 " />
          </IconButton>
          <IconButton title={"Teams"} path="owner/dashboard/bookings">
            <AiOutlineTeam className="h-5 w-5" />
          </IconButton>
          <IconButton title={"Conversation"} path="owner/dashboard/bookings">
            <BiConversation className="h-5 w-5 " />
          </IconButton>
          <IconButton title={"Help"} path="owner/dashboard/bookings">
            <AiFillQuestionCircle className="h-5 w-5 " />
          </IconButton>
        </div>
      </div>
      {/* right panel */}
      <div className="h-full w-full">
        <Header />
        <div className="border-b-[1px]"></div>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/bookings" element={<BookingsDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(setAuthenticated(false));
    dispatch(setUser(""));
    dispatch(setUserDetails(""));
    navigate("/owner/login");
  };
  return (
    <div className="flex space-x-4 items-center justify-end p-4">
      <Searchbox />
      <MdNotifications className="h-6 w-6 text-primaryColor p-1 rounded-md bg-white hover-effect" />

      <img
        src={"/images/avatar.png"}
        alt="image"
        loading="lazy"
        className="h-6 w-6"
      />

      <button className="seleected" onClick={onSignOut}>
        Logout
      </button>
    </div>
  );
};

const DashboardHome = () => {
  const futsalData = useSelector((state) => state.auth.user.details);
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Quick Stats</h1>
      <div className="flex space-x-4">
        <StatBoxes title={"Total Booking"} value={"400"} />
        <StatBoxes title={"Pending Approvals"} value={"10"} />
        <StatBoxes title={"New Clients"} value={"4"} />
      </div>

      {/* bookings */}
      <div className="mt-4">
        <TabView futsalData={futsalData} />
      </div>
    </div>
  );
};

const StatBoxes = ({ title, value }) => {
  return (
    <div>
      <div className="w-[200px] border-[2px] rounded-md p-4 mt-2 text-center hover:border-red-400 cursor-pointer">
        <h1 className="text-lg">{title}</h1>
        <p className="font-bold text-xl">{value}</p>
      </div>
    </div>
  );
};
