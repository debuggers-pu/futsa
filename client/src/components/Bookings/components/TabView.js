import { returnDates } from "../../../utils/helperFunctions";
import React, { useState, useEffect } from "react";
import TabContent from "./TabContent";
import { getBookingByDate } from "../../../axios";
// import TimeSlots from "../../../dummuydata/timeslots.json";

const TabView = ({ futsalData }) => {
  const [isActive, setIsActive] = useState(0);
  const [selectedDate, setSelectedDate] = useState(returnDates()[0]);
  // const [estatusMap, seteStatusMap] = useState({});
  const initialState = [
    {
      time: "9:00 AM",
      status: "available",
    },
    {
      time: "10:00 AM",
      status: "available",
    },
    {
      time: "11:00 AM",
      status: "available",
    },
    {
      time: "12:00 PM",
      status: "available",
    },
    {
      time: "1:00 PM",
      status: "available",
    },
    {
      time: "2:00 PM",
      status: "available",
    },
    {
      time: "3:00 PM",
      status: "available",
    },
    {
      time: "4:00 PM",
      status: "available",
    },
    {
      time: "5:00 PM",
      status: "available",
    },
    {
      time: "6:00 PM",
      status: "available",
    },
    {
      time: "7:00 PM",
      status: "available",
    },
    {
      time: "8:00 PM",
      status: "available",
    },
  ];
  const [timeSlot, setTimeSlot] = useState(initialState);

  useEffect(() => {
    const getBookings = async () => {
      // api to query the booking on the given futsal and date.
      const res = await getBookingByDate({
        futsalId: futsalData._id,
        bookingDate: selectedDate,
      });
      if (res.data.bookings) {
        setTimeSlot(initialState);
        let statusMap = {};
        res.data.bookings.map((books, index) => {
          const { bookingTime, status } = books;
          statusMap[bookingTime] = status;
        });
        const updateTimeSlots = (sMap) => {
          timeSlot.map((time) => {
            Object.keys(sMap).map((element) => {
              if (time.time === element) {
                setTimeSlot((currentData) => {
                  return [...currentData, (time.status = statusMap[element])];
                });
              } else {
                setTimeSlot(initialState);
              }
            });
          });
          return updateTimeSlots;
        };
        if (Object.keys(statusMap).length > 0) {
          const updatedTimeSlot = updateTimeSlots(statusMap);
          setTimeSlot(updatedTimeSlot);
        } else {
          setTimeSlot(initialState);
        }
      } else {
        setTimeSlot(initialState);
      }
    };
    getBookings();
  }, [selectedDate]);

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
        <TabContent
          selectedDate={selectedDate}
          futsalData={futsalData}
          timeSlot={timeSlot}
        />
      </div>
    </div>
  );
};

export default TabView;
