// Zero-dependency reading-time estimate, injected into each post's frontmatter
// at build time. Read it back via `remarkPluginFrontmatter.minutesRead`.
export function remarkReadingTime() {
  return (tree, file) => {
    let words = 0;
    const walk = (node) => {
      if (typeof node.value === "string") {
        words += node.value.split(/\s+/).filter(Boolean).length;
      }
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);
    const minutes = Math.max(1, Math.round(words / 200));
    file.data.astro.frontmatter.minutesRead = `${minutes} min read`;
  };
}
