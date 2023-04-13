import { post } from "../clients";

const Signup = (params) => {
  return post("api/auth/signin", params);
};

export default Signup;
