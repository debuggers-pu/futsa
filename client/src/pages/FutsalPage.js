import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import Slider from "react-slick";
import moment from "moment";
import BookingSteps from "../components/BookingSteps/BookingSteps";
import { useDispatch, useSelector } from "react-redux";
import { setBookModal } from "../redux/slices/modalSlice";
import {
  setBookTime,
  setBookDate,
  setBookingSelectedTime,
} from "../redux/slices/bookingSlice";

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

const FutsalPage = () => {
  const bookModal = useSelector((state) => state.modal.bookModal);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="w-full h-[500px] relative">
        <img
          src="/images/bgsample.jpg"
          alt="background of a futsal grass"
          className="w-screen h-[500px] shadow-lg"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-70 z-10"></div>
        <div className="absolute z-20 top-16 left-20 flex items-center space-x-16 ">
          <div className="w-[500px]">
            <Slider {...settings}>
              <div>
                <img
                  src="/images/futsal.jpg"
                  alt="Futsal"
                  className="rounded-md"
                />
              </div>
              <div>
                <img
                  src="/images/futsal.jpg"
                  alt="Futsal"
                  className="rounded-md"
                />
              </div>
              <div>
                <img
                  src="/images/futsal.jpg"
                  alt="Futsal"
                  className="rounded-md"
                />
              </div>
            </Slider>
          </div>
          <div className="text-white space-y-2">
            <h1 className="text-white text-3xl font-bold">
              ABC Futsal Pvt. ltd
            </h1>
            <p className="text-sm lg:w-[600px] opacity-90">
              Futsal is an association football-based game played on a hard
              court smaller than a football pitch, and mainly indoors. It has
              similarities to five-a-side football and indoor soccer.
            </p>
            <div className="flex items-center space-x-1 ">
              <IoLocationSharp className="text-white text-sm" />
              <p className="text-sm font-bold ">Nadipur, pokhara</p>
            </div>
            <div className="flex items-center space-x-1">
              <IoCall className="text-white text-sm" />
              <p className="text-sm font-bold">+977 9846168323</p>
            </div>
            <div>
              <p className="text-sm font-bold">Rs 1600/hr</p>
            </div>
            <div className="text-xs font-bold flex">
              {[...Array(5)].map((_) => {
                return <AiFillStar className="text-yellow-500" />;
              })}
            </div>
            <button className="seleected">Rate now</button>
          </div>
        </div>
      </div>
      <section className="mb-4">
        <TabView />
      </section>
      {bookModal && <BookingSteps />}
    </div>
  );
};

export default FutsalPage;

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
  const dispatch = useDispatch();
  function onClickHandler(item, selectedDate, e) {
    e.preventDefault();
    dispatch(setBookModal());
    dispatch(setBookingSelectedTime(item.time));
    dispatch(setBookDate(selectedDate));
  }
  return (
    <div className="mx-10 mt-4">
      <h1 className="font-bold text-xl text-center">
        Available slots for {selectedDate}, 2022
      </h1>
      <p className="text-center">Please choose an available time </p>
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
      <div className="grid grid-cols-4 gap-10 mt-4">
        {timeSlots.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center ${
                item.available ? available : item.booked ? booked : pending
              }  px-6 py-6 rounded-md text-white cursor-pointer`}
              onClick={(e) => {
                if (item.available) {
                  onClickHandler(item, selectedDate, e);
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
