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
        text: 'Component',
        items: [
          { text: 'heading', link: '/component/heading' },
          { text: 'paragraph', link: '/component/paragraph' },
          { text: 'list', link: '/component/list' },
          { text: 'link', link: '/component/link' },
          { text: 'blockquote', link: '/component/blockquote' },
          { text: 'table', link: '/component/table' },
          { text: 'code', link: '/component/code' },
          { text: 'hr', link: '/component/hr' },
          { text: 'text-decorator', link: '/component/text-decorator' },
          { text: 'prettylights', link: '/component/prettylights' },
          { text: 'section', link: '/component/section' },
          { text: 'header', link: '/component/header' },
          { text: 'footer', link: '/component/footer' },
          { text: 'pagination', link: '/component/pagination' },
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: 'columns', link: '/layout/columns' }
        ]
      },
      {
        text: 'Decorator',
        items: []
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
