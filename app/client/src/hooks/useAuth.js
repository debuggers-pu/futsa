import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthModal } from "../redux/slices/modalSlice";

export const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isauthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setAuthModal(true));
    }
  }, []);
};
