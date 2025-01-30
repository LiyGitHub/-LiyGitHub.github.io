import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "海带带个人开发网",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '博客', link: '/java/类加载' }
    ],

    sidebar: [
      {
        text: 'java',
        collapsed: false,
        items: [
          { text: '类加载', link: '/java/类加载' },
          { text: '线程池', link: '/java/线程池' },
          { text: 'Java8', link: '/java/Java8' },
          { text: 'Spring', link: '/java/Spring' }
        ]
      },
      {
        text: 'mysql',
        collapsed: false,
        items: [
          { text: '数据库', link: '/mysql/数据库' }
        ]
      },
      {
        items: [
          { text: '关于我', link: 'README' }
        ]
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank" style="color: var(--vp-c-text-2)">陕ICP备2023011266号-1</a>`,
      copyright: '悠然小生 | 开源精神 | Copyright © 2025'
    }
  }
})
