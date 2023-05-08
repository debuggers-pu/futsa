import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signin } from "../axios";
import InputField from "../components/shared/InputField";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";

const OwnerLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        const res = await signin({ email, password });
        if (res) {
          if (res.data.user.role === "customer") {
            toast.error("User not found");
            return;
          }
          toast.success(res.data.message);
          dispatch(setAuthenticated(true));
          dispatch(setUser(res.data.user));
          navigate(`/owner/dashboard/${res.data.user.id}`);
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-24">
      <div className="m-auto p-8  shadow-md rounded-sm">
        <h1 className="font-bold text-2xl mb-4 text-center">
          Sign in as
          <span className="text-primaryColor "> Futsal Owner</span>
        </h1>
        <InputField
          placeholder={"Enter your email address"}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          placeholder={"Enter your password"}
          name="password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NavLink to="/owner/register">
          <p className="text-xs font-bold hover-effect mb-2 text-left ">
            Don't have an account ? Register now.
          </p>
        </NavLink>
        <div
          className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
          onClick={onLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;
