import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const flist = [
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 5,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1200/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 3,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1500/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 3,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1600/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 2,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1200/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 4,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1500/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 5,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1600/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 1,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1500/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 3,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1600/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 2,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1500/hr",
  },
  {
    name: "ABC Futsal Pvt. ltd",
    location: "Nadipur Pokhara",
    rating: 5,
    images: ["fimage1.png", "fimage2.png"],
    price: "Rs 1600/hr",
  },
];

const FutsalList = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <Slider {...settings}>
      {flist.map((item, id) => {
        return (
          <div className="rounded-sm mr-6 p-3 shadow-sm" key={id}>
            <img
              loading="lazy"
              src="images/futsal.jpg"
              alt="futsal"
              className="rounded-md mb-2"
            />
            <h1 className="text-md font-bold">{item.name}</h1>
            <p className="text-sm font-bold opacity-70">{item.location}</p>
            <p className="text-xs font-bold text-green-400">{item.price}</p>
            <div className="text-xs font-bold flex">
              {[...Array(item.rating)].map((_, id) => {
                return <AiFillStar className="text-yellow-500" key={id} />;
              })}
            </div>
            <Link to={`futsal/${id}`}>
              <button className="seleected mt-2">Book now</button>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default FutsalList;
