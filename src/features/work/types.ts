export type WorkNode = {
  readonly frontmatter: {
    readonly title: string;
    readonly path: string;
    readonly date: string;
    readonly active: boolean;
    readonly tags: ReadonlyArray<string>;
  };
};
