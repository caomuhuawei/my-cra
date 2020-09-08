import { types } from "mobx-state-tree";
import auth from "../apis/auth";

const AuthStore = types.model(
  "AuthStore",
  {
    token: types.string,
  },
  {
    setToken(token) {
      this.token = token;
    },
    login(params) {
      return auth.login(params);
    },
  }
);
export default AuthStore;
