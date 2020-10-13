import React, { useState } from "react";

import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

import "./LoginForm.css";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const switchModeHandler = () => {
    setIsLoggedIn((prevMode) => !prevMode);
  };

  return (
    <>
      <form type="submit" className="login-form">
        {!isLoggedIn && (
          <>
            <label id="1">Name</label>
            <Input
              id="1"
              element="input"
              type="text"
              errorText="Please write your name"
            />
          </>
        )}
        <label id="2">Email</label>
        <Input
          id="2"
          element="input"
          type="email"
          errorText="Please enter your e-mail"
        />
        <label id="3">Password</label>
        <Input
          id="3"
          element="input"
          type="password"
          errorText="Please enter your password"
        />
        <Button margin className="button--big ">
          {isLoggedIn ? "LOG IN" : "SIGN UP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoggedIn ? "SIGN UP" : "LOG IN"}
      </Button>
    </>
  );
};

export default LoginForm;
