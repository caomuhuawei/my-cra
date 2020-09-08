import { types } from "mobx-state-tree";
import CN from "../language/CN";
import EN from "../language/EN";

const LangStore = types.model(
  "LangStore",
  {
    lang: types.frozen(),
  },
  {
    changeLang(lang) {
      this.lang = lang;
    },
  }
);

export default LangStore;
