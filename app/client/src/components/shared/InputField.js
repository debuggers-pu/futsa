import React from "react";

const InputField = ({ onChange, isError, name, type, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className="text-xs opacity-60">
        {placeholder}
      </label>
      <input
        name={name}
        className={`shadow-sm appearance-none border ${
          isError && " border-red-500 "
        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-gray-50 text-sm mb-2`}
        id={id}
        type={!type ? "text" : type}
        // placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
