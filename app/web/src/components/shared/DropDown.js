import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function DropDown({ Items }) {
  const [selectedItem, setSelectedItem] = useState("Pokhara");
  const [dropDown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const toggleDropDown = () => {
    setDropdown(!dropDown);
  };
  return (
    <div>
      <div
        className=" mr-10 px-3 py-1 flex space-x-2  text-white cursor-pointer relative items-center opacity-90"
        onClick={() => {
          toggleDropDown();
        }}
      >
        <h1 className="text-sm text-white ">
          {!selectedItem ? "Select your choice" : selectedItem}
        </h1>
        {!dropDown ? (
          <IoMdArrowDropdown className="h-6" />
        ) : (
          <IoMdArrowDropup className="h-6" />
        )}
      </div>
      {dropDown && (
        <div className=" mt-6 mb-8 shadow-md absolute z-50 ">
          {Items.map((item, index) => {
            return (
              <div
                className=" bg-secondaryDark px-3 py-2 cursor-pointer flex justify-between text-white text-sm hover:opacity-80 w-[200px]"
                key={index}
                onClick={() => {
                  setSelectedItem(item);
                  setDropdown(false);
                  navigate({
                    pathname: `/search`,
                    search: `?location=${item}`,
                  });
                }}
              >
                <h1>{item}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDown;
