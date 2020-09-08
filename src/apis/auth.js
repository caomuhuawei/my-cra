import apis from "config/apis.config";
import axios from "config/axios.config";

const { login } = apis.account;
const account = {
  login: (data) => {
    return axios.post(login, {
      data,
      options: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  },
};
export default account;
