import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Posts live as flat markdown files; the file name becomes the slug,
// preserving the existing /posts/<slug> URLs.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Ani Ravi"),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

export const collections = { blog };
