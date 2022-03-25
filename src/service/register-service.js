import axios from "axios";
export default function register(data) {
  axios
    .post("https://xdpm.herokuapp.com/api/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("12");
      console.log(res.data.token);
      // localStorage.setItem("token", res.data.token);
      // console.log(localStorage.setItem("token", res.data.token));
      // window.location.assign("/");
    })
    .catch((error) => console.log(error));
}
