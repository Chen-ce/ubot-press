import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";



export default defineUserConfig({
  lang: "zh-CN",
  title: "uBot生态",
  description: "uBot生态内容文档",

  base: "/ubot-press/",
  plugins: [
    
    searchPlugin({
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      // 你的选项
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/zh/': {
          placeholder: '搜索',
        },
        
      },
    }),
  ],

  theme,
});