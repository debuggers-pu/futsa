import { returnDates } from "../../../utils/helperFunctions";
import React, { useState } from "react";
import TabContent from "./TabContent";

const TabView = ({ futsalData }) => {
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
        <TabContent selectedDate={selectedDate} futsalData={futsalData} />
      </div>
    </div>
  );
};

export default TabView;
