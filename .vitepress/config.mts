import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "海带博客",
  description: "整理笔记，分享知识",

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: '示例', link: '/examples/' }
    ],

    sidebar: {
      '/java/': [
        {
          text: 'Java基础',
          items: [
            { text: '类加载机制', link: '/java/类加载' },
            // 其他 Java 相关文档...
          ]
        }
      ],

      '/examples/': [
        {
          text: '示例文档',
          items: [
            { text: 'Markdown 示例', link: '/markdown-examples' },
            { text: 'API 示例', link: '/api-examples' },
          ]
        }
      ]
    },

    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank" style="color: var(--vp-c-text-2)">浙ICP备XXXXXXXX号-1</a>`,
      copyright: '悠然小生 | 开源精神 | Copyright © 2024'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github-account' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },

    // 大纲级别
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
}) 