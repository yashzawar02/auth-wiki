import { zFrontmatter, type Article } from "../types";

const rawArticles = Object.values(
  import.meta.glob("../articles/*.md", { eager: true }),
);

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export const articles = rawArticles.map<Article>((article) => {
  if (!isRecord(article)) {
    throw new Error("Article is not a record");
  }

  if (typeof article.Content !== "function") {
    throw new Error("Article Content is not a function");
  }

  return {
    frontmatter: zFrontmatter.parse(article.frontmatter),
    Content: article.Content,
  }
});
