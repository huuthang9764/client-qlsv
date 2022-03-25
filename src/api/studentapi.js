import axiosClient from "./axiosClient";

const studentApi = {
  getStudents(token) {
    const url = "/students";
    return axiosClient(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default studentApi;
