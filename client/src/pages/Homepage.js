import React from "react";
import Banner from "../components/shared/Banner";
import { AiOutlineRight } from "react-icons/ai";
import FutsalList from "../components/FutsalList";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="mt-4">
        <div className="flex justify-between mx-10">
          <h1 className="font-bold text-xl">Recommended Futsals</h1>
          <div className="flex items-center">
            <h1 className="text-primaryColor text-sm">See all</h1>
            <AiOutlineRight className="text-primaryColor h-3 w-3" />
          </div>
        </div>
        <div className="mx-10">
          <FutsalList />
        </div>

        <div className="m-10">
          <img
            src="images/couponsample.png"
            alt="coupon"
            loading="lazy"
            className="object-cover"
          />
        </div>

        <div className="mx-10 relative">
          <FutsalList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
