type TypescriptOptions =
  | { enableTypescript: true; tsconfigRootDir: string }
  | { enableTypescript?: false | never; tsconfigRootDir?: never };

export type SculptorOptions = TypescriptOptions & {
  enableTs?: boolean;

  ignorePaths?: string[];
  tsconfigRootDir?: string;
};
