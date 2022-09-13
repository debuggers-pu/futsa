import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import OwnerLogin from "./OwnerLogin";
import OwnerRegister from "./OwnerRegister";
import Dashboard from "./Dashboard";

const OwnerApp = () => {
  useEffect(() => {});
  return (
    <div>
      <Routes>
        <Route path="/login" element={<OwnerLogin />} />
        <Route path="/register" element={<OwnerRegister />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default OwnerApp;
