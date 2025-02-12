import { useMDXComponents as getBlogMDXComponents } from "nextra-theme-blog";

const blogComponents = getBlogMDXComponents();

export function useMDXComponents(components: any) {
  return {
    ...blogComponents,
    ...components,
    DateFormatter: ({ date }: { date: string }) => (
      <time dateTime={date}>
        {new Date(date).toLocaleDateString("en-US", {
          day: "2-digit",
          year: "numeric",
          month: "short",
        })}
      </time>
    ),
  };
}
