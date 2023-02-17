import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from "@vuepress/plugin-search";

export default defineUserConfig({
    base: '/sunxx/',
    lang: 'zh-CN',
    title: '',
    description: '',
    theme: defaultTheme({
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            // NavbarGroup
            {
                text: '汇总',
                children: [
                    '/other/kexue.md',
                    '/other/moutai.md'
                ],
            },
            // 字符串 - 页面文件路径
        ],
    }),
    plugins: [
        searchPlugin({
            // 配置项
        }),

    ],

})
