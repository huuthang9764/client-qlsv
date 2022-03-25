import axios from "axios";
export default function login(data) {
  axios
    .post("https://xdpm.herokuapp.com/api/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      window.location.assign("/");
    })
    .catch((error) => console.log(error));
}
