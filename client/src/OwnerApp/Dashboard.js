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
        <TabView />
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

const TabView = () => {
  const [isActive, setIsActive] = useState(0);
  const [selectedDate, setSelectedDate] = useState(returnDates()[0]);
  const activeTab = `after:absolute after:bg-white after:h-[4px] after:w-16 after:justify-center after:flex after:bottom-0 opacity-100`;
  return (
    <div>
      <ul className="bg-secondaryDark text-xs text-white flex items-center justify-center space-x-10 py-3 relative">
        {returnDates().map((date, index) => {
          return (
            <li
              key={index}
              className={`opacity-80 hover:opacity-100 cursor-pointer text-center w-16 ${
                isActive === index ? activeTab : ""
              }`}
              onClick={() => {
                setIsActive(index);
                setSelectedDate(date);
              }}
            >
              {date}
            </li>
          );
        })}
      </ul>
      <div>
        <TabContent selectedDate={selectedDate} />
      </div>
    </div>
  );
};
// will be extracted from the database.
const timeSlots = [
  {
    time: "9:00 AM",
    available: false,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "10:00 AM",
    available: false,
    booked: true,
    selected: false,
    disabled: false,
  },
  {
    time: "11:00 AM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "12:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "1:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "2:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "3:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "4:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "5:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "6:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "7:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
  {
    time: "8:00 PM",
    available: true,
    booked: false,
    selected: false,
    disabled: false,
  },
];
const available =
  "bg-secondaryDark text-white cursor-pointer opacity-100 hover:opacity-80";
const pending = "bg-yellow-400 text-white cursor-pointer opacity-80";
const booked = "bg-green-500 text-white cursor-pointer opacity-80";

const TabContent = ({ selectedDate }) => {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-xl text-center">
        Board for {selectedDate}, 2022
      </h1>
      <div className="mt-2">
        <div className="flex item-center justify-center space-x-3">
          <div className="bg-secondaryDark text-white text-xs px-3 py-1 font-bold rounded-sm">
            Available
          </div>
          <div className="bg-green-500 text-white text-xs px-3 py-1 font-bold rounded-sm">
            Booked
          </div>
          <div className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-sm">
            Pending
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {timeSlots.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center ${
                item.available ? available : item.booked ? booked : pending
              }  px-6 py-6 rounded-md text-white cursor-pointer`}
              onClick={(e) => {
                if (item.available) {
                  //   onClickHandler(item, selectedDate, e);
                }
              }}
            >
              <p className="text-xl font-bold">{item.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// helper function
const returnDates = () => {
  const dates = [];
  const start = moment();
  const end = moment().add(7, "days");
  while (start.isBefore(end)) {
    dates.push(start.format("MMM DD"));
    start.add(1, "days");
  }
  return dates;
};
