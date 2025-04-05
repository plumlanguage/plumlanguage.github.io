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
          { text: 'Kotlin', link: '/驱动包/kotlin' },
        ]
      },
      {
        text: '数据格式',
        items: [
          { text: '类（Class）', link: 'shell操作/数据格式/Class' },
            {text:'单值（X）', link: 'shell操作/数据格式/X'}
        ]
      },
      {
        text: '命令DOC',
        items: [
          { text: '操作类', link: 'shell操作/命令/Class' },
          { text: '初始化', link: 'shell操作/命令/Init' },
            { text: '操作单值', link: 'shell操作/命令/X' }
        ]
      }
    ],
    sidebar: {
      '/快速开始/': [
        {
          text: '基本概念',
          items: [
            { text: 'Durian的工作原理', link: '/快速开始/基本概念/Durian的工作原理' },
            { text: '配置Durian', link: '/快速开始/基本概念/配置Durian' }
          ]
        },
        {
          text: '其他使用说明',
          items: [
            { text: '驱动包', link: '/快速开始/其他使用说明/驱动包' }
          ]
        },
        {
          text: '驱动包API',
          items: [
            { text: 'Kotlin', link: '/快速开始/驱动包API/DurianForKotlin' }
          ]
        }
      ],
      '/shell操作/': [
          {
          text: '数据格式',
          items: [
            { text: '类（Class）', link: 'shell操作/数据格式/Class' },
            { text: '单值（X）', link: 'shell操作/数据格式/X' }
          ]
          },
          {
          text: '命令',
          items: [
            { text: '操作类', link: 'shell操作/命令/Class' },
            { text: '初始化', link: 'shell操作/命令/Init' },
            { text: '操作单值', link: 'shell操作/命令/X' }
          ]
        }
      ],
      '/驱动包/': [
          { text: 'Durian for Kotlin', link: '/驱动包/kotlin' },
        { text: 'Durian for Java', link: '/驱动包/java' }
      ]
    }


    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
