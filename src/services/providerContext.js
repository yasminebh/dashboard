import http from "./axiosContext";

const create = (data) => {
  return http.post("/provider", data);
};

const list = () => {
  return http.get("/provider");
};

const getById = (id) => {
  return http.get(`/provider/${id}`);
};

const update = (id, data) => {
  return http.put(`/provider/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/provider/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, list, getById, update, remove };
