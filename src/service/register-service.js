import axios from "axios";
export default function register(data) {
  axios
    .post("https://xdpm.herokuapp.com/api/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
}
