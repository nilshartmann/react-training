// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// ts-jest:
// https://github.com/kulshekhar/ts-jest

module.exports = {
  testResultsProcessor: "../../node_modules/jest-html-reporter",
  setupFilesAfterEnv: ["./test/setup-test.ts"],
  preset: "ts-jest/presets/js-with-ts"
};
