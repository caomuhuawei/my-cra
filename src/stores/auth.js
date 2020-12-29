import { types } from "mobx-state-tree";
import auth from "../apis/auth";

const AuthStore = types
  .model({
    token: types.string,
  })
  .actions((self) => ({
    setToken(token) {
      self.token = token;
    },
    login(params) {
      return auth.login(params);
    },
  }));
export default AuthStore;
