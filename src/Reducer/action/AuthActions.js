import { SIGN_IN, SIGN_UP } from "../actionType/actionType";
import SignIn from "../../API/Manager/SignIn";

export function loginAction(email, password, navigate) {
  const params = { email, password };
  return async (dispatch) => {
    const data = await SignIn(params);
    dispatch(loginConfirmedAction(data[0]?.data[0]));
    localStorage.setItem("auth", JSON.stringify(data[0]));
    localStorage.setItem(
      "token",
      `Bearer ${JSON.stringify(data[0]?.data[0]?.token)}`
    );
    navigate("/");
  };
}

export function loginConfirmedAction(data) {
  return {
    type: SIGN_IN,
    payload: data,
  };
}

export function signupConfirmAction(data) {
  return {
    type: SIGN_UP,
    payload: data,
  };
}
