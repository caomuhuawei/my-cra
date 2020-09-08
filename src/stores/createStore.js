import LangStore from "./lang";
import AuthStore from "./auth";
import CommonStore from "./common";

export const allStore = {
  lang: LangStore.create({
    lang: "CN",
  }),
  auth: AuthStore.create({ token: "" }),
  common: CommonStore.create(),
};
