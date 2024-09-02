import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  title: "CWGI",
  description: "a small and beautiful comment system based on GitHub Issues",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '导航'
    },
    editLink: {
      pattern: 'https://github.com/llds66/cwgiDocs/tree/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/zh/started' },
      { text: '文档', link: '/zh/docs/githubApp' }
    ],
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: 'CWGI是什么', link: '/zh/introduce' },
          { text: '快速开始', link: '/zh/started' },
        ]
      },
      {
        text: 'Github',
        collapsed: false,
        items: [
          { text: 'GithubApp配置', link: '/zh/docs/githubApp' },
        ]
      },
      {
        text: '服务端',
        collapsed: false,
        items: [
          { text: '服务端配置', link: '/zh/docs/server' },
        ]
      },
      {
        text: '客户端',
        collapsed: false,
        items: [
          { text: '客户端配置', link: '/zh/docs/client' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jw-12138/cwgi-cli' }
    ],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
  }
})
