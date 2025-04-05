import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Durian",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `/logo.ico` }],
  ],
  description: "一个可以集成到您项目的数据管理工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '传送门',
        items: [
          { text: 'GitHub', link: 'https://github.com/plumlanguage/Durian' },
          { text: '神秘的popo', link: 'https://space.bilibili.com/580686895' }
        ]
      },
      {
        text: '驱动包',
        items: [
          { text: 'Kotlin', link: 'docs/zh/驱动包/kotlin' },
        ]
      },
      {
        text: '数据格式',
        items: [
          { text: '类（Class）', link: 'docs/zh/数据格式/Class' },
            {text:'单值（X）', link: 'docs/zh/数据格式/X'}
        ]
      },
      {
        text: '命令DOC',
        items: [
          { text: '操作类', link: 'docs/zh/命令/Class' },
          { text: '初始化', link: 'docs/zh/命令/Init' },
            { text: '操作单值', link: 'docs/zh/命令/X' }
        ]
      }
    ],

    sidebar: [
      {
        text: '基本概念',
        items: [
          { text: 'Durian的工作原理', link: '/docs/zh/基本概念/Durian的工作原理' },
          { text: '配置Durian', link: '/docs/zh/基本概念/配置Durian' }
        ]
      },
      {
        text: '其他使用说明',
        items: [
          { text: '驱动包', link: '/docs/zh/其他使用说明/驱动包' }
        ]
      },
      {
        text: '驱动包API',
        items: [
          { text: 'Kotlin', link: '/docs/zh/驱动包API/DurianForKotlin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
