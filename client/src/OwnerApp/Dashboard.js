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
import BookingsHistory from "./pages/BookingsHistory";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [active, setActive] = useState("home");
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
    <div className="flex h-full w-full">
      {/* left panel */}
      <div className="bg-backgroundDark h-full w-[250px] flex flex-col  text-white pt-4 px-2">
        <h1 className="text-xl font-bold text-center mb-6">FUTSA</h1>
        {/* Buttons */}
        <div className="mt-2">
          <IconButton
            title={"Dashboard"}
            isselected={active === "home" ? true : false}
            path={`owner/dashboard/${user.info.id}/`}
            onClick={() => setActive("home")}
          >
            <MdOutlineSpaceDashboard className="h-5 w-5 " />
          </IconButton>
          <IconButton
            title={"Booking Requests"}
            path={`owner/dashboard/${user.info.id}/bookings`}
            isselected={active === "req" ? true : false}
            onClick={() => setActive("req")}
          >
            <BiFootball className="h-5 w-5" />
          </IconButton>
          <IconButton
            title={"History"}
            path={`owner/dashboard/${user.info.id}/history`}
            isselected={active === "his" ? true : false}
            onClick={() => setActive("his")}
          >
            <AiOutlineHistory className="h-5 w-5 " />
          </IconButton>
          <IconButton
            title={"Teams"}
            path={`owner/dashboard/${user.info.id}/history`}
          >
            <AiOutlineTeam className="h-5 w-5" />
          </IconButton>
          <IconButton
            title={"Conversation"}
            path={`owner/dashboard/${user.info.id}/history`}
          >
            <BiConversation className="h-5 w-5 " />
          </IconButton>
          <IconButton
            title={"Help"}
            path={`owner/dashboard/${user.info.id}/history`}
          >
            <AiFillQuestionCircle className="h-5 w-5 " />
          </IconButton>
        </div>
      </div>
      {/* right panel */}
      <div className="h-full w-full flex flex-col">
        <Header />
        <div className="border-b-[1px]"></div>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/bookings" element={<BookingsDetails />} />
          <Route path="/history" element={<BookingsHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

const Header = () => {
  const futsalData = useSelector((state) => state.auth.user.details);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(setAuthenticated(false));
    dispatch(setUser(""));
    dispatch(setUserDetails(""));
    navigate("/owner/login");
  };
  return (
    <div className="flex space-x-4 items-center justify-between p-4 ">
      <div>
        <h1 className="font-bold">Welcome,</h1>
        <p className="text-sm"> {futsalData.futsalName}</p>
      </div>
      {/* <Searchbox /> */}
      <div className="flex items-center space-x-4">
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
    </div>
  );
};

const DashboardHome = () => {
  const futsalData = useSelector((state) => state.auth.user.details);
  return (
    <div className="p-4 h-full overflow-auto">
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
