import DefaultTheme from 'vitepress/theme'
// import './style/index.css'
import { watch } from 'vue'
import backtotop from "./components/backtotop.vue"
import { h } from 'vue'
import xgplayer from "./components/xgplayer.vue"
// import HomeSponsors from './components/HomeSponsors.vue'
import '@theojs/lumen/theme'
import { DocAsideLogo } from '@theojs/lumen'
import { Aside_Data } from './data/AsideData'
import { Footer_Data } from './data/footerData'
import { HomeFooter } from '@theojs/lumen'
import { HomeUnderline } from '@theojs/lumen'
import { Announcement } from '@theojs/lumen'
import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

export default {
    extends: DefaultTheme,
    // ...DefaultTheme, //或者这样写也可,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }), // 使用aside-ads-before插槽
            'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
            // 'layout-bottom': () => h(HomeFooter, { Footer_Data }) // 使用layout-bottom插槽
            'home-hero-info-before': () => h(Announcement)
        })
    },
    markdown: {
        lineNumbers: true
    },
    enhanceApp({app , router }) {
        app.component('Box', DocBox)
        app.component('Pill', DocPill)
        app.component('Links', DocLinks)
        app.component('BoxCube', DocBoxCube)
        app.component('Home', HomeUnderline)
        app.component('xgplayer' , xgplayer)
        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                { immediate: true },
            )
        }
    },
}

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}