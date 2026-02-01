import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Marp Theme Canvas',
  description: 'Demo slides for marp-theme-canvas',
  base: '/marp-theme-canvas/',
  outDir: '../dist',
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Token',
        items: [
          { text: 'color', link: '/token/color' },
          { text: 'typography', link: '/token/typography' },
          { text: 'corner-radius', link: '/token/corner-radius' }
        ]
      },
      {
        text: 'Element',
        items: [
          { text: 'heading', link: '/element/heading' },
          { text: 'paragraph', link: '/element/paragraph' },
          { text: 'list', link: '/element/list' },
          { text: 'link', link: '/element/link' },
          { text: 'blockquote', link: '/element/blockquote' },
          { text: 'table', link: '/element/table' },
          { text: 'code', link: '/element/code' },
          { text: 'hr', link: '/element/hr' },
          { text: 'text-decorator', link: '/element/text-decorator' },
          { text: 'prettylights', link: '/element/prettylights' }
        ]
      },
      {
        text: 'Component',
        items: [
          { text: 'section', link: '/component/section' },
          { text: 'header', link: '/component/header' },
          { text: 'footer', link: '/component/footer' },
          { text: 'pagination', link: '/component/pagination' },
          { text: 'columns', link: '/component/columns' }
        ]
      },
      {
        text: 'Pattern',
        items: [
          { text: 'title', link: '/pattern/title' },
          { text: 'section', link: '/pattern/section' },
          { text: 'toc', link: '/pattern/toc' },
          { text: 'agenda', link: '/pattern/agenda' },
          { text: 'display', link: '/pattern/display' }
        ]
      }
    ]
  }
})
