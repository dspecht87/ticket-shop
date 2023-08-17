/* eslint-disable no-undef */
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    i18next: "<rootDir>/src/__mocks__/i18nextMock.ts",
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
};
