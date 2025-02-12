import Link from "next/link";
import { PostCard } from "nextra-theme-blog";
import { getPosts, getTags } from "./get-posts";

export const metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const [tags, posts] = await Promise.all([getTags(), getPosts()]);

  // Count tag occurrences using reduce
  const tagCounts = tags.reduce((acc: Record<string, number>, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div data-pagefind-ignore="all">
      <h1>{metadata.title}</h1>
      <div
        className="not-prose"
        style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}
      >
        {sortedTags.map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map((post) => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  );
}
