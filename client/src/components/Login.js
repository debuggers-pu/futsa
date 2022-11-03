import React, { useState } from "react";
import InputField from "./shared/InputField";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";
import { setAuthModal } from "../redux/slices/modalSlice";
import { signin } from "../axios";
import toast from "react-hot-toast";

const Login = ({ onClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        const res = await signin({ email, password });
        if (res) {
          if (res.data.user.role === "futsal") {
            toast.error("User not found");
            return;
          }
          toast.success(res.data.message);
          dispatch(setAuthenticated(true));
          dispatch(setUser(res.data.user));
          dispatch(setAuthModal(false));
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <h1 className="font-bold text-2xl mb-4 text-center">
        Sign in to <span className="text-primaryColor italic">Futsa</span>
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

      <p
        className="text-xs font-bold hover-effect mb-2 text-left "
        onClick={onClick}
      >
        Don't have an account ? Register now.
      </p>
      <div
        className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
        onClick={onLogin}
      >
        Login
      </div>
    </div>
  );
};

export default Login;
