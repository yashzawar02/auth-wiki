import path from "node:path";
import { zFrontmatter, zHeading, type Article } from "../types";

const rawArticles = Object.entries(
  import.meta.glob("../articles/*.md", { eager: true }),
);

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export const articles = rawArticles.map<Article>(([key, article]) => {
  if (!isRecord(article)) {
    throw new Error("Article is not a record");
  }

  if (typeof article.Content !== "function") {
    throw new Error("Article Content is not a function");
  }

  const frontmatter = zFrontmatter.parse(article.frontmatter);

  return {
    slug: frontmatter.slug ?? path.basename(key, '.md'),
    frontmatter,
    getHeadings: () => zHeading.array().parse(typeof article.getHeadings === 'function' && article.getHeadings()),
    Content: article.Content,
  }
});
