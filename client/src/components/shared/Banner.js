import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative mx-6">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={2000}
      >
        <div>
          <img loading="lazy" src="images/banner1.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="images/banner2.png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="images/banner3.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
