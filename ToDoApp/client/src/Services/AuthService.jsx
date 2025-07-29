import axios from "axios";

// jokhon e keo register korbe tokhon e kono na kono data pass korate hobe to the backend like username, password, so we will pass data as the argument
const registerUser = (data) => {
  return axios.post("/api/v1/user/register", data);
};

const loginUser = (data) => {
  return axios.post("/api/v1/user/login", data);
};

const AuthServices = { registerUser, loginUser };

export default AuthServices;
