import { z } from "astro/zod";

export const zFrontmatter = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string().optional(),
  tags: z.array(z.string()),
});

export type Frontmatter = z.infer<typeof zFrontmatter>;

export const zHeading = z.object({
  depth: z.number(),
  slug: z.string(),
  text: z.string(),
});

export type Heading = z.infer<typeof zHeading>;

export type Article = {
  slug: string;
  frontmatter: Frontmatter;
  getHeadings: () => Heading[];
  Content: Function;
}
