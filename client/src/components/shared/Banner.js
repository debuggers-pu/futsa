import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";

const Banner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "250px",
    display: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-4 mx-8">
      <Slider {...settings}>
        <div>
          <img
            loading="lazy"
            src="images/banner1.png"
            alt=""
            className="w-full px-2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="images/banner2.png"
            alt=""
            className="w-full px-2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="images/banner3.png"
            alt=""
            className="w-full px-2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="images/banner2.png"
            alt=""
            className="w-full px-2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
