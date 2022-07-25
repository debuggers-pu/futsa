import React from "react";
import Banner from "../components/shared/Banner";
import { AiOutlineRight } from "react-icons/ai";

const Homepage = () => {
  return (
    <div className="max-w-screen">
      <Banner />
      <div className="mx-10 mt-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Recommended Futsals</h1>
          <div className="flex items-center">
            <h1 className="text-primaryColor text-sm">See all</h1>
            <AiOutlineRight className="text-primaryColor h-3 w-3" />
          </div>
        </div>
        <div>{/* Recommended Futsals */}</div>
      </div>
    </div>
  );
};

export default Homepage;
