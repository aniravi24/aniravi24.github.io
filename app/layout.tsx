import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { ReactNode } from "react";
// Required for theme styles, previously was imported under the hood
import "nextra-theme-blog/style.css";

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

const navItems = [
  {
    key: "rss",
    href: "/feed.xml",
    children: "RSS",
  },
  {
    key: "github",
    href: "https://github.com/aniravi24",
    children: "Github",
  },
];

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            {navItems.map((item) => (
              <a key={item.key} href={item.href}>
                {item.children}
              </a>
            ))}
            <ThemeSwitch />
            <Search placeholder="Search..." />
          </Navbar>

          {children}

          <Footer>
            <div className="my-4 border-t-2 mx-auto flex items-center sm:flex-row flex-col">
              <p className="text-sm text-gray-500">Ani Ravi</p>
            </div>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
