export const get = (key) => {
  const val = sessionStorage.getItem(key);
  try {
    if (val) {
      return JSON.parse(val);
    }
    return undefined;
  } catch (e) {
    return val;
  }
};

export const set = (key, val) => {
  let parsedVal;
  if (val != null && typeof val === "object") {
    parsedVal = JSON.stringify(val);
  } else {
    parsedVal = val;
  }
  window.sessionStorage.setItem(key, parsedVal);
};

export const remove = (key) => window.sessionStorage.removeItem(key);
export const clearALL = () => window.sessionStorage.clear();
export const removes = (keys) => {
  keys.forEach((key) => {
    remove(key);
  });
};
