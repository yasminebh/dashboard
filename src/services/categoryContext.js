import http from './axiosContext'

const create=(data) => {
  return http.post("/categories", data);
}

const list= () => {
  return http.get('/categories')
}

const getById= (id) => {
  return http.get(`/categories/${id}`)
}

const update = (id,data) => {
  return http.put(`/categories/${id}`, data)
}
const remove = (id) => {
  return http.delete(`/categories/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, list, getById, update, remove}