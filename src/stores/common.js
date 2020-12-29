import { types } from "mobx-state-tree";

const CommonStore = types
  .model({
    localLoading: types.optional(types.frozen(), false), //局部loading
    loading: types.optional(types.frozen(), false), //全局loading
  })
  .actions((self) => ({
    setLocalLoading(val) {
      self.localLoading = val;
    },
    setLoading(val) {
      self.loading = val;
    },
  }));

export default CommonStore;
