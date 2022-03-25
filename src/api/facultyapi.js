import axiosClient from "./axiosClient";

const facultyApi = {
  getFaculty(token) {
    const url = "/faculty";
    return axiosClient(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default facultyApi;
