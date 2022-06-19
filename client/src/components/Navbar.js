import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-10 my-4">
      {/* leftlogo */}
      <h1 className="text-xl font-bold">GAME ON.</h1>

      {/* right texts */}
      <ul className="flex space-x-3 text-sm font-bold opacity-90">
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
