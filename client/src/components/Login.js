import React from "react";
import InputField from "./shared/InputField";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onLogin(e) {
    e.preventDefault();
    console.log("login");
    dispatch(setAuthenticated(true));
    navigate("/");
  }
  return (
    <div className="mt-4">
      <InputField
        placeholder={"Enter your email address"}
        name="email"
        type={"email"}
      />
      <InputField
        placeholder={"Enter your password"}
        name="email"
        type={"password"}
      />
      <div
        className="text-sm font-bold px-4 py-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
        onClick={onLogin}
      >
        Login
      </div>
    </div>
  );
};

export default Login;
