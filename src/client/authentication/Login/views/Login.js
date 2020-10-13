import React from "react";

import LoginForm from "../components/LoginForm";
import MainHeader from "../../../shared/components/Navigation/MainHeader";

import "./Login.css";

const Login = () => {
  return (
    <>
      <MainHeader>
        <div className="login">
          <h2>Welcome to Flashcards</h2>
        </div>
      </MainHeader>
      <div className="login__wrapper">
        <div className="login__title">
          <h2>Fields are required</h2>
        </div>
        <div className="login__form">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
