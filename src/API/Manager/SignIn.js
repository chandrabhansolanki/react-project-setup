import { post } from "../clients";

const SignIn = (params) => {
  return post("api/auth/signin", params);
};

export default SignIn;
