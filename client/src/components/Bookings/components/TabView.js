import { returnDates } from "../../../utils/helperFunctions";
import React, { useState, useEffect } from "react";
import TabContent from "./TabContent";
import { getBookingByDate } from "../../../axios";

const TabView = ({ futsalData }) => {
  const [isActive, setIsActive] = useState(0);
  const [selectedDate, setSelectedDate] = useState(returnDates()[0]);
  const [estatusMap, seteStatusMap] = useState({});
  useEffect(() => {
    const getBookings = async () => {
      // api to query the booking on the given futsal and date.
      const res = await getBookingByDate({
        futsalId: futsalData._id,
        bookingDate: selectedDate,
      });
      console.log(res.data);
      if (res.data.bookings) {
        let statusMap = {};
        res.data.bookings.map((books, index) => {
          const { bookingTime, status } = books;
          statusMap[bookingTime] = status;
        });
        seteStatusMap(statusMap);
      } else {
        seteStatusMap({});
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
          statusMap={estatusMap}
        />
      </div>
    </div>
  );
};

export default TabView;
