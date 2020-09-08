import { types } from "mobx-state-tree";

const CommonStore = types.model(
  "CommonStore",
  {
    localLoading: types.optional(types.frozen(), false), //局部loading
    loading: types.optional(types.frozen(), false), //全局loading
  },
  {
    setLocalLoading(val) {
      this.localLoading = val;
    },
    setLoading(val) {
      this.loading = val;
    },
  }
);

export default CommonStore;
