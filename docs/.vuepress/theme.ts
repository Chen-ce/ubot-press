import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  lastUpdated: true,
  pure: true,
  darkmode : "switch",
  hostname: "https://doc.ubot.ga",

  author: {
    name: "Chence",
  },

  iconAssets: "iconfont",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "uBot帮助",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "喜爱钻研的程序猿",
    medias: {
      Email: "https://example.com",
      Gmail: "https://example.com",
    },
  },

  plugins: {
    copyCode: {
      showInMobile: true,
      duration: 2000,
    },
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      container: true,
      codetabs: true,
      tabs: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
