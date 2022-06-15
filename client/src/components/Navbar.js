import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      {/* leftlogo */}
      <h1 className="text-xl font-bold">GAME ON.</h1>

      {/* right texts */}
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
