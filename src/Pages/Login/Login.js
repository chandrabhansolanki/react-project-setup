import React, { useState } from "react";
import InputContainer from "../../Components/InputFields/InputContainer";
import LoginButton from "../../Components/Button/LoginButton";

const Login = () => {
  const onChangeHandler = () => {};

  const loginHandler = () => {};

  return (
    <div>
      <InputContainer
        label="Email Id :"
        IconRequired={true}
        type="email-address"
        labelStatus={true}
        placeholder="Enter Your Email"
      />
      <InputContainer
        label="Password :"
        onChangeHandler={onChangeHandler}
        labelStatus={true}
        placeholder="Enter Your Password"
      />
      <div>
        <LoginButton buttonName="Login Now" loginHandler={loginHandler} />
      </div>
    </div>
  );
};

export default Login;
