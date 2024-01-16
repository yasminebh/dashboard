import http from "./axiosContext";

const create = (data) => {
  return http.post("/admin", data);
};
const list = () => {
  return http.get("/admin");
};

const getById = (id) => {
  return http.get(`/admin/${id}`);
};

const update = (id, data) => {
  return http.put(`/admin/${id}`, data);
};

const validateAdmin = (id) => {
  return http.put(`/admin/admin/${id}`);
};

const remove = (id) => {
  return http.delete(`/admin/admin/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, list, validateAdmin, getById, update, remove };
