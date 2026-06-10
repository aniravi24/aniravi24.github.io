import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

// Build-time OG images: one PNG per post plus a site default.
const posts = await getCollection("blog");

const pages: Record<string, { title: string; description: string }> = {
  default: { title: "Ani Ravi", description: "Ani Ravi's personal website" },
};
for (const post of posts) {
  pages[post.id] = {
    title: post.data.title,
    description: post.data.description ?? "",
  };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [17, 17, 17],
      [30, 30, 30],
    ],
    border: { color: [37, 99, 235], width: 16, side: "inline-start" },
    padding: 60,
  }),
});
