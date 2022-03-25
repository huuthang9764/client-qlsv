import axiosClient from "./axiosClient";

const classApi = {
  getClass(token) {
    const url = "/class";
    return axiosClient(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default classApi;
