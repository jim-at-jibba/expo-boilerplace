module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
  setupFiles: ["<rootDir>/.jest/jestSetupFile.js"],
}
