import type { Linter } from "eslint";
import globals from "globals";
import type { SculptorOptions } from "../../types";

export const getBaseConfig = ({ enableJsx }: SculptorOptions) =>
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
            jsx: enableJsx,
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
