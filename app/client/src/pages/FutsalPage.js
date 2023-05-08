import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import Slider from "react-slick";
import BookingSteps from "../components/Bookings/BookingSteps/BookingSteps";
import { useSelector } from "react-redux";
import { getOneFutsalById } from "../axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import TabView from "../components/Bookings/components/TabView";

const FutsalPage = () => {
  let { id } = useParams();
  const bookModal = useSelector((state) => state.modal.bookModal);
  useAuth();
  const [futsal, setFutsal] = useState([]);
  useEffect(() => {
    const getFutsal = async () => {
      const res = await getOneFutsalById({ id: id });
      if (res.status === 200) {
        setFutsal(res.data.futsal);
      }
    };
    getFutsal();
  }, [id]);

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
              {futsal.futsalName}
            </h1>
            <p className="text-sm lg:w-[600px] opacity-90">
              Futsal is an association football-based game played on a hard
              court smaller than a football pitch, and mainly indoors. It has
              similarities to five-a-side football and indoor soccer.
            </p>
            <div className="flex items-center space-x-1 ">
              <IoLocationSharp className="text-white text-sm" />
              <p className="text-sm font-bold ">{futsal.address}</p>
            </div>
            <div className="flex items-center space-x-1">
              <IoCall className="text-white text-sm" />
              <p className="text-sm font-bold">{futsal.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm font-bold">Rs 1200/hr</p>
            </div>
            <div className="text-xs font-bold flex">
              {[...Array(5)].map((_, id) => {
                return <AiFillStar className="text-yellow-500" key={id} />;
              })}
            </div>
            <button className="seleected">Rate now</button>
          </div>
        </div>
      </div>
      <section className="mb-4">
        <TabView futsalData={futsal} />
      </section>
      {bookModal ? <BookingSteps /> : null}
    </div>
  );
};

export default FutsalPage;

// will be extracted from the database.
// import TimeSlot
