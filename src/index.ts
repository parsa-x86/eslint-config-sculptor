import type { Linter } from "eslint";
import { getBaseConfig, getTypescriptConfig } from "./configs";
import type { SculptorOptions } from "./types";
import { IGNORE_GLOBS } from "./globs";

export const initSculptorConfig = (options: SculptorOptions) => {
  const config = [
    ...getBaseConfig(options),
    ...(options.enableTs ? getTypescriptConfig(options) : []),
    {
      ignores: [...(options.ignorePaths ?? []), ...IGNORE_GLOBS],
    },
  ] satisfies Linter.Config[];

  return config;
};
