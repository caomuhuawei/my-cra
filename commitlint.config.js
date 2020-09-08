module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "refactor", "test", "revert"]],
    "header-max-length": [2, "always", 50],
    "subject-min-length": [2, "always", "8"],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [0, "never"],
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 72],
  },
};
