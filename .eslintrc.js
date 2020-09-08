module.exports = {
  globals: {
    window: true,
    document: true,
    lottTranslator: true,
    FormData: true,
    FileReader: true,
    CryptoJS: true,
    location: true,
    history: true,
    reRsa: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier"],
  extends: ["react-app", "plugin:prettier/recommended", "prettier/react"],
  settings: {
    react: {
      version: "15.5.4",
    },
  },
  rules: {
    "max-len": [1, 120, 2, { ignoreComments: true }],
    "prettier/prettier": "error",
    eqeqeq: [2, "smart"],
    "import/no-webpack-loader-syntax": ["off"],
    "no-restricted-globals": 0,
    "no-unused-vars": ["off"],
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-deprecated": 0,
    "no-unused-expressions": ["off"],
  },
};
