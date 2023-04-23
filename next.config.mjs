import { nodeTypes } from "@mdx-js/mdx";
import nextra from "nextra";
import rehypeRaw from "rehype-raw";
import remarkShikiTwoslash from "remark-shiki-twoslash";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
    remarkPlugins: [
      [
        remarkShikiTwoslash.default,
        {
          defaultCompilerOptions: {
            types: ["node"],
          },
          themes: ["dark-plus", "light-plus"],
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default withNextra(nextConfig);
