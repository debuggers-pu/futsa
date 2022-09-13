import React from "react";
import { NavLink } from "react-router-dom";
import InputField from "../components/shared/InputField";

const OwnerRegister = () => {
  const onChangeHandler = () => {
    return;
  };

  const changeImage = () => {
    console.log("yes");
  };

  const signupHandler = () => {
    console.log("signup");
  };

  return (
    <div className="flex justify-center">
      <div className="mx-auto mt-8 p-6 shadow-md rounded-sm">
        <h1 className="font-bold text-2xl mb-4 text-center">
          Register your <span className="text-primaryColor italic">Futsal</span>
        </h1>
        <InputField
          placeholder={"Enter your futsal name."}
          name="futsalName"
          type={"text"}
          onChange={(e) => onChangeHandler("futsalName", e)}
        />
        <InputField
          placeholder={"Enter your Owner's name"}
          name="ownerName"
          type={"text"}
          onChange={(e) => onChangeHandler("ownerName", e)}
        />
        <div className="flex space-x-3">
          <InputField
            placeholder={"Enter the address of futsal."}
            name="address"
            type={"text"}
            onChange={(e) => onChangeHandler("address", e)}
          />
          <InputField
            placeholder={"Enter your phone number."}
            name="phoneNumber"
            type={"text"}
            onChange={(e) => onChangeHandler("phoneNumber", e)}
          />
        </div>
        <InputField
          placeholder={"Enter your email."}
          name="email"
          type="email"
          onChange={(e) => onChangeHandler("email", e)}
        />
        <InputField
          placeholder={"Enter your password."}
          name="password"
          type="password"
          onChange={(e) => onChangeHandler("password", e)}
        />
        <InputField
          placeholder={"Enter description about your futsal."}
          name="description"
          type="textfield"
          onChange={(e) => onChangeHandler("description", e)}
        />
        <InputField
          placeholder={"Upload your photos"}
          name="image"
          type="file"
          id="image"
          onChange={changeImage}
        />
        <NavLink to="/owner/login">
          <p className="text-xs font-bold hover-effect mb-2 text-left">
            Already have an account ? Signin.
          </p>
        </NavLink>
        <div
          className="text-sm font-bold px-4 py-2 mb-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer"
          onClick={signupHandler}
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default OwnerRegister;
