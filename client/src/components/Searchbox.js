import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Searchbox = ({ isCustomer }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
    navigate({
      pathname: "/search",
      search: `?q=${input}`,
    });
  };
  return (
    <div
      className="flex items-center space-x-1 w-[500px] border rounded-md pl-4 pr-2 bg-white"
      onClick={() => {
        navigate({
          pathname: "/search",
        });
      }}
    >
      <BsSearch className="h-8 w-8 text-secondaryDark  p-2 rounded-md" />
      <input
        className="w-full outline-none text-xs"
        type="text"
        placeholder="Search Futsals by name or location"
        onChange={onChange}
      />
    </div>
  );
};

export default Searchbox;
