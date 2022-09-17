import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const FutsalList = ({ data }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Slider {...settings}>
      {data.map((item, id) => {
        const image = item.image[0][0].split("\\")[1];
        return (
          <div className="rounded-sm mr-6 p-3 shadow-sm" key={item._id}>
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_URL}/${image}`}
              alt="futsal"
              className="rounded-md mb-2 w-full h-[200px] object-cover "
            />

            <h1 className="text-md font-bold">{item.futsalName}</h1>
            <p className="text-sm font-bold opacity-70">{item.address}</p>
            <p className="text-xs font-bold text-green-400">Rs 1200</p>
            <div className="text-xs font-bold flex">
              {[...Array(id)].map((_, id) => {
                return (
                  <AiFillStar className="text-yellow-500" key={id * 200000} />
                );
              })}
            </div>
            <Link to={`futsal/${item._id}`}>
              <button className="seleected mt-2">Book now</button>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default FutsalList;
