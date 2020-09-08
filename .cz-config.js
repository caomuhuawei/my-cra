module.exports = {
  types: [
    { value: "feat", name: "feat: 新特性" },
    { value: "fix", name: "fix: 修复bug" },
    { value: "refactor", name: "refactor: 代码重构" },
    { value: "test", name: "test: 代码测试" },
    { value: "revert", name: "revert: 代码回退" },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'description (optional). Use "|" to break new line：\n',
    confirmCommit: "Commit above?",
  },
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "DC-",
  ticketNumberRegExp: "\\d{1,6}",
  allowCustomScopes: true,
  skipQuestions: ["scope", "footer"],
  subjectLimit: 50,
};
