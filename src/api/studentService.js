import axiosClient from "./axiosClient";

const getAll = () => {
  return axiosClient.get("/students");
};

const removeID = (id) => {
  return axiosClient.delete(`/students/${id}`);
};

export default { getAll, removeID };
