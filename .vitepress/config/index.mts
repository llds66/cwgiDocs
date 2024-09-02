import { defineConfig } from 'vitepress'
import { en } from './en.mjs'
import { zh } from './zh.mjs'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh },
  },
})