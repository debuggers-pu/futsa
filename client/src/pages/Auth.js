import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { ImCross } from "react-icons/im";

const Auth = () => {
  const [select, setSelect] = useState("login");
  const pages = {
    login: <Login />,
    signup: <Signup />,
  };
  return (
    <>
      <div className="bg-black opacity-60 absolute top-0 bottom-0 right-0 left-0"></div>
      <div className="bg-white flex flex-col rounded-md p-4 absolute z-10 w-[500px] left-[30%] top-[15%]">
        <div className="flex justify-between ">
          <div className="flex space-x-4 items-center justify-center">
            <h1
              className={` ${
                select === "login"
                  ? "selected"
                  : "text-md font-bold  hover-effect"
              }`}
              onClick={() => setSelect("login")}
            >
              Login
            </h1>
            <h1
              onClick={() => setSelect("signup")}
              className={` ${
                select === "signup"
                  ? "selected"
                  : "text-md font-bold  hover-effect "
              }`}
            >
              Register
            </h1>
          </div>
          <ImCross className="text-red-400 hover:opacity-75" />
        </div>
        <div>{select === "login" ? pages.login : pages.signup}</div>
      </div>
    </>
  );
};

export default Auth;
