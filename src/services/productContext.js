import http from "./axiosContext";

const create = (data) => {
  return http.post("/products", data);
};

const list = () => {
  return http.get("/products");
};

const getById = (id) => {
  return http.get(`/products/${id}`);
};

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/products/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, list, getById, update, remove };
