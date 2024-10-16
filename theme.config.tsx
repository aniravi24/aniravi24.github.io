import React from "react";
import { NextraBlogTheme } from "nextra-theme-blog";

const defaultMeta = {
  title: "Ani Ravi",
  description: "Ani Ravi's personal website.",
};

// eslint-disable-next-line import/no-anonymous-default-export
const config: NextraBlogTheme = {
  comments: <></>,
  head: ({ title, meta }) => (
    <>
      <meta
        name="description"
        content={meta.description || defaultMeta.description}
      />
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <meta
        property="og:site_name"
        content={meta.title || title || defaultMeta.title}
      />
      <meta
        property="og:description"
        content={meta.description || defaultMeta.description}
      />
      <meta property="og:title" content={meta.title || defaultMeta.title} />
    </>
  ),
  footer: (
    <div className="my-4 border-t-2 mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-sm text-gray-500">Ani Ravi</p>
    </div>
  ),
  navs: [
    {
      url: "/feed.xml",
      name: "RSS",
    },
    {
      url: "https://github.com/aniravi24",
      name: "Github",
    },
  ],
  darkMode: true,
  // Not working for some reason
  dateFormatter(date) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      year: "numeric",
      month: "short",
    });
  },
};
export default config;
