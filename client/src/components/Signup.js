import React from "react";
import InputField from "./shared/InputField";

const Signup = () => {
  return (
    <div className="mt-4">
      <InputField
        placeholder={"Enter your futsal name."}
        name="futsalName"
        type={"text"}
      />
      <InputField
        placeholder={"Enter the owner name."}
        name="ownerName"
        type={"text"}
      />
      <div className="flex space-x-3">
        <InputField
          placeholder={"Enter the address."}
          name="email"
          type={"email"}
        />
        <InputField
          placeholder={"Enter your phone number."}
          name="phoneNumber"
          type={"text"}
        />
      </div>
      <InputField
        placeholder={"Write short description about your futsal."}
        name="description"
        type="textarea"
      />
      <InputField
        placeholder={"Upload any document for verification."}
        name="images"
        type="file"
      />

      <div className="text-sm font-bold px-4 py-2 rounded-md bg-black text-white text-center hover:opacity-75 cursor-pointer">
        Register
      </div>
    </div>
  );
};

export default Signup;
