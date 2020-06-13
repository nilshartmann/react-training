// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testResultsProcessor: "../../../node_modules/jest-html-reporter",
  setupFilesAfterEnv: ["./test/setup-test.js"]
};
