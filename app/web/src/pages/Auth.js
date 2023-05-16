import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Modal from "../components/shared/Modal";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../redux/slices/modalSlice";

const Auth = () => {
  const [select, setSelect] = useState("login");
  const pages = {
    login: <Login onClick={() => setSelect("signup")} />,
    signup: <Signup onClick={() => setSelect("login")} />,
  };
  const dispatch = useDispatch();
  const onOutClick = () => {
    dispatch(setAuthModal());
  };

  return (
    <>
      <Modal onOutClick={onOutClick}>
        <div className="flex flex-col justify-center">
          <div>{select === "login" ? pages.login : pages.signup}</div>
        </div>
      </Modal>
    </>
  );
};

export default Auth;
