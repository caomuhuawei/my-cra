import { types } from "mobx-state-tree";
import CN from "../language/CN";
import EN from "../language/EN";

const LangStore = types
  .model({
    lang: types.frozen(),
  })
  .actions((self) => ({
    changeLang(lang) {
      this.lang = lang;
    },
  }));

export default LangStore;
