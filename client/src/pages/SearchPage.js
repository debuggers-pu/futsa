import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [futsals, setFutsals] = useState([]);
  const [searchParams] = useSearchParams();
  const key = searchParams.get("q");
  const locationKey = searchParams.get("location");

  useEffect(() => {
    const getFutsal = async () => {
      const futsal = await axios.get(
        `http://localhost:8000/api/book/search/${key}`
      );
      if (key) {
        setFutsals(futsal.data.futsal);
        console.log(futsal);
      } else {
        console.log("Not found");
      }
    };
    const getFutsalByLocation = async () => {
      const futsal = await axios.get(
        `http://localhost:8000/api/book/search/${locationKey}`
      );
      if (key) {
        setFutsals(futsal.data.futsal);
        console.log(futsal);
      } else {
        console.log("Not found");
      }
    };
    if (key) {
      getFutsal();
    } else {
      getFutsalByLocation();
    }
  }, [key, locationKey]);
  return (
    <div>
      <p className="text-sm font-bold m-4">Search Results</p>
      <div className="mx-10 grid grid-cols-2 gap-4">
        {/* rightside */}
        {futsals.map((item, id) => {
          const image = item.image[0][0].split("\\")[1];
          return (
            <div
              className="rounded-sm p-3 shadow-sm flex justify-start space-x-12 items-center"
              key={item._id}
            >
              <img
                loading="lazy"
                src={`${process.env.REACT_APP_URL}/${image}`}
                alt="futsal"
                className="rounded-md mb-2 w-[100px] h-[100px] object-cover "
              />
              <div>
                <h1 className="text-md font-bold">{item.futsalName}</h1>
                <p className="text-sm font-bold opacity-70">{item.address}</p>
                <p className="text-xs font-bold text-green-400">Rs 1200</p>
                <div className="text-xs font-bold flex">
                  {[...Array(id + 1)].map((_, id) => {
                    return (
                      <AiFillStar
                        className="text-yellow-500"
                        key={id * 200000}
                      />
                    );
                  })}
                </div>
              </div>
              <NavLink to={`/futsal/${item._id}`}>
                <button className="seleected mt-2">Book now</button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
