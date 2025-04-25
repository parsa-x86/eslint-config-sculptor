import type { Linter } from "eslint";

import { parser, plugin } from "typescript-eslint";
import tseslint from "typescript-eslint";

import { TS_GLOBS, TSX_GLOBS } from "../globs";
import type { SculptorOptions } from "../types";

export const getTypescriptConfig = ({ tsconfigRootDir }: SculptorOptions) =>
  [
    tseslint.config({
      files: [TS_GLOBS, TSX_GLOBS],
    }),
    {
      // languageOptions: {
      //   parser,
      //   parserOptions: {
      //     projectService: true,
      //     tsconfigRootDir,
      //   },
      // },
      // plugins: { "@typescript-eslint": plugin },
      // rules: {
      //   "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      //   "@typescript-eslint/consistent-type-exports": [
      //     "error",
      //     { fixMixedExportsWithInlineTypeSpecifier: true },
      //   ],
      //   "@typescript-eslint/consistent-type-imports": [
      //     "error",
      //     { fixStyle: "inline-type-imports" },
      //   ],
      //   "@typescript-eslint/no-explicit-any": "error",
      //   "@typescript-eslint/no-use-before-define": [
      //     "error",
      //     {
      //       allowNamedExports: false,
      //       classes: true,
      //       functions: false,
      //       variables: true,
      //     },
      //   ],
      // },
    },
  ] as Linter.Config[];
