import React from "react";
const LoginButton = (props) => {
  return (
    <button style={{ width: "100%" }} onClick={props.loginHandler}>
      {props.buttonName}
    </button>
  );
};

export default LoginButton;
