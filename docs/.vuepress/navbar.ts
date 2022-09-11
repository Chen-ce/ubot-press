import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "play", prefix: "/guide/", children: [
    { text: "自动发货", icon: "play", link: "youtube/auto" },
    { text: "售前", icon: "play", link: "youtube/before" },
    { text: "使用", icon: "play", link: "youtube/use" },
    { text: "售后", icon: "play", link: "youtube/after" },
  ]},
  {
    text: "网络",
    icon: "edit",
    prefix: "/posts/",
    children: [
      { text: "网络使用", icon: "edit", link: "proxy" },
      { text: "网络工具", icon: "edit", link: "tool" },
    ],
  },
  {
    text: "免费服务",
    icon: "edit",
    prefix: "/free/",
    children: [
      { text: "域名解析", icon: "edit", link: "domain" },
      { text: "YouTube视频下载", icon: "edit", link: "https://dl.ubot.ga" },
    ],
  },
  {
    text: "前往激活",
    icon: "note",
    link: "https://ubot.ga/youtube/",
  },
  {
    text: "邮箱账号",
    icon: "mail",
    link: "https://ka.htrsy.top",
  },
]);
