import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, []);
};
