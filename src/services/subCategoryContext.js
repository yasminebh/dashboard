import http from "./axiosContext";

const create = (data) => {
  return http.post("/subcategories", data);
};
const list = () => {
  return http.get("/subcategories");
};
const update = (id, data) => {
  return http.put(`/subcategories/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/subcategories/${id}`);
};
const getById = (id, data) => {
  return http.get(`/subcategories/${id}`, data);
};

console.log("Axios Default Headers:", http.defaults.headers);

export default { create, list, update, remove, getById };
