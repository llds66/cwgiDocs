import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "CWGI",
  lang: 'en-US',
  description: "a small and beautiful comment system based on GitHub Issues",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: 'Navigation'
    },
    editLink: {
      pattern: 'https://github.com/llds66/cwgiDocs/tree/main/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/started' },
      { text: 'Docs', link: '/docs/githubApp' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is CWGI?', link: '/introduce' },
          { text: 'Quickstart', link: '/started' },
        ]
      },
      {
        text: 'Github',
        collapsed: false,
        items: [
          { text: 'GithubApp Setup', link: '/docs/githubApp' },
        ]
      },
      {
        text: 'Server',
        collapsed: false,
        items: [
          { text: 'Server Setup', link: '/docs/server' },
        ]
      },
      {
        text: 'Client',
        collapsed: false,
        items: [
          { text: 'Client Setup', link: '/docs/client' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jw-12138/cwgi-cli' }
    ]
  }
})
