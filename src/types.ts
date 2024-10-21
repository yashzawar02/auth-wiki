import { z } from "astro/zod";

export const zFrontmatter = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  tags: z.array(z.string()),
});

export type Frontmatter = z.infer<typeof zFrontmatter>;

export type Article = {
  frontmatter: Frontmatter;
  Content: Function;
}
