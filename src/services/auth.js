import http from "./axiosContext";

const signup = (data) => {
  return http.post("/user/login", data);
};



const logout = (data) => {
  return http.post(`/user/`, data);
};


export default { signup, logout };
