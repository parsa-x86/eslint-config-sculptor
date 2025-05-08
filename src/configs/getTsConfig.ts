import type { Linter } from "eslint";

import tseslint from "typescript-eslint";

import { TS_GLOBS, TSX_GLOBS } from "../globs";
import type { SculptorOptions } from "../types";

export const getTypescriptConfig = ({
  tsconfigRootDir,
  skipExpensiveRules,
}: SculptorOptions) =>
  tseslint.config(
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir,
        },
      },
    },
    skipExpensiveRules
      ? tseslint.configs.recommended
      : tseslint.configs.recommendedTypeChecked,
    {
      files: [TS_GLOBS, TSX_GLOBS],
      rules: {
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            allowNamedExports: false,
            classes: true,
            functions: false,
            variables: true,
          },
        ],
      },
    }
  ) as Linter.Config[];
