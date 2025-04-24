import type { Linter } from "eslint";
import { getBaseConfig } from "./configs";
import type { SculptorOptions } from "./types";
import { IGNORE_GLOBS } from "./globs";

export const initSculptorConfig = ({ ignorePaths }: SculptorOptions) => {
  const config = [
    ...getBaseConfig(),
    {
      ignores: [...(ignorePaths ?? []), ...IGNORE_GLOBS],
    },
  ] satisfies Linter.Config[];

  return config;
};
