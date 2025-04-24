import type { Linter } from "eslint";
import globals from "globals";

export const getBaseConfig = () =>
  [
    {
      languageOptions: {
        ecmaVersion: 2025,
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2025,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: "module",
      },
      rules: {
        "no-console": "error",
        "no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^_",
          },
        ],
      },
    },
  ] satisfies Linter.Config[];
