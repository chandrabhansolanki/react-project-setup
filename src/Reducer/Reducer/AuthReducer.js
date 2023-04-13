import { SIGN_IN, LOGOUT_ACTION } from "../actionType/actionType";

const initialState = {
  auth: {
    email: "",
    idToken: "",
    localId: "",
    expiresIn: "",
    refreshToken: "",
  },
  errorMessage: "",
  successMessage: "",
  showLoading: false,
  isAuthenticated: false,
};

export function AuthReducer(state = initialState, action) {
  if (action.type === SIGN_IN) {
    // console.log(action.payload, "hello");
    return {
      ...state,
      auth: { ...action.payload, idToken: action.payload.token },
      errorMessage: "",
      successMessage: "Signin Successfully Completed",
      showLoading: false,
      isAuthenticated: true,
    };
  }
  if (action.type === LOGOUT_ACTION) {
    return {
      ...state,
      errorMessage: "",
      successMessage: "",
      isAuthenticated: false,
      auth: {
        email: "",
        idToken: "",
        localId: "",
        expiresIn: "",
        refreshToken: "",
      },
    };
  }
  return state;
}
