import { getPosts } from '../posts/get-posts'

export const dynamic = 'force-static'

const CONFIG = {
  title: "Ani Ravi - personal website",
  siteUrl: "https://aniravi.com",
  feedUrl: "https://aniravi.com/feed.xml",
  description: "Ani Ravi's personal website",
  lang: 'en-us'
}

export async function GET() {
  const allPosts = await getPosts()
  const posts = allPosts
    .map(
      post => `    <item>
        <title>${post.title}</title>
        <description><![CDATA[${post.frontMatter.description}]]></description>
        <link>${CONFIG.siteUrl}${post.route}</link>
        <guid>${CONFIG.siteUrl}${post.route}</guid>
        <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
        ${post.frontMatter.tags ? `<category>${post.frontMatter.tags.map(t => t.trim()).join('</category><category>')}</category>` : ''}
        ${post.frontMatter.author ? `<dc:creator>${post.frontMatter.author}</dc:creator>` : ''}
    </item>`
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${CONFIG.title}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>${CONFIG.description}</description>
    <language>${CONFIG.lang}</language>
    <atom:link href="${CONFIG.feedUrl}" rel="self" type="application/rss+xml"/>
${posts}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  })
}