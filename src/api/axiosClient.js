import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://xdpm.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
export default axiosClient;
