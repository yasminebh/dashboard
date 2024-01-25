import http from "./axiosContext";

const signup = (data) => {
  return http.post("/user/login", data);
};



const logout = (data) => {
  return http.post(`/user/`, data);
};


const forgetPassword = (data) => {
  return http.post(`/user/forgetPassword`,data);
}


const ResetPassword = (token , data) => {
  return http.put(`/user/resetPassword/${token}`, data);
};
export default { signup, logout, forgetPassword, ResetPassword };
