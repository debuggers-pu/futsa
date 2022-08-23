import React, { useState } from "react";
import InputField from "./shared/InputField";
import { signupUser } from "../axios";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../redux/slices/modalSlice";
import { setAuthenticated, setToken, setUser } from "../redux/slices/authSlice";

import toast from "react-hot-toast";

const Signup = ({ onClick }) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({});
  const onChangeHandler = (name, e) => {
    setCredentials({ ...credentials, [name]: e.target.value });
    console.log(credentials);
  };

  const changeImage = (e) => {
    setCredentials({ ...credentials, image: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  const signupHandler = async () => {
    try {
      if (
        credentials.email &&
        credentials.password &&
        credentials.firstName &&
        credentials.image &&
        credentials.phoneNumber &&
        credentials.lastName
      ) {
        const res = await signupUser(credentials);
        if (res.status === 200) {
          console.log("success");
          dispatch(setAuthModal(false));
          dispatch(setAuthenticated(true));
          dispatch(
            setUser({
              email: credentials.email,
            })
          );
          dispatch(setToken(res.data));
          toast.success(res.data.message);
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <h1 className="font-bold text-2xl mb-4 text-center">
        Register to <span className="text-primaryColor italic">Futsa</span>
      </h1>
      <div className="flex space-x-3">
        <InputField
          placeholder={"Enter your first name"}
          name="firstName"
          type={"text"}
          onChange={(e) => onChangeHandler("firstName", e)}
        />
        <InputField
          placeholder={"Enter your last name"}
          name="lastName"
          type={"text"}
          onChange={(e) => onChangeHandler("lastName", e)}
        />
      </div>
      {/* <InputField
        placeholder={"Enter the address."}
        name="address"
        type={"address"}
        onChange={(e) => onChangeHandler("address", e)}
      /> */}
      <InputField
        placeholder={"Enter your phone number"}
        name="phoneNumber"
        type={"number"}
        onChange={(e) => onChangeHandler("phoneNumber", e)}
      />

      <InputField
        placeholder={"Enter your email"}
        name="email"
        type="email"
        onChange={(e) => onChangeHandler("email", e)}
      />
      <InputField
        placeholder={"Enter your password"}
        name="password"
        type="password"
        onChange={(e) => onChangeHandler("password", e)}
      />
      <InputField
        placeholder={"Upload your photo."}
        name="image"
        type="file"
        id="image"
        onChange={changeImage}
      />

      <p
        className="text-xs font-bold hover-effect mb-2 text-left"
        onClick={onClick}
      >
        Already have an account ? Signin.
      </p>
      <div
        className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
        onClick={signupHandler}
      >
        Register
      </div>
    </div>
  );
};

export default Signup;
