import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/home",
  // {
  //   text: "网络相关",
  //   icon: "creative",
  //   prefix: "/posts/",
  //   link: "/posts/tool",
  //   children: "structure",
  // },
  {
    text: "网络相关",
    icon: "creative",
    prefix: "/posts/",
    children: [
      "proxy","tool",
    ],
  },
  {
    text: "YouTube",
    icon: "play",
    prefix: "/guide/youtube/",
    children: [
      "auto","before","use","after",
    ],
  },
]);
