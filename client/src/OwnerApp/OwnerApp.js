import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import OwnerLogin from "./OwnerLogin";
import OwnerRegister from "./OwnerRegister";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";

const OwnerApp = () => {
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  useEffect(() => {});
  return (
    <div>
      <Routes>
        <Route path="/" element={<OwnerLogin />} />
        <Route path="/login" element={<OwnerLogin />} />
        <Route path="/register" element={<OwnerRegister />} />
        <Route
          path="/dashboard/:id/*"
          element={isAuthenticated ? <Dashboard /> : <OwnerLogin />}
        />
      </Routes>
    </div>
  );
};

export default OwnerApp;
