import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from "@vuepress/plugin-search";

export default defineUserConfig({
    base: '/sunxx/',
    lang: 'zh-CN',
    title: '',
    description: '',
    theme: defaultTheme({
        docsRepo: 'https://github.com/sunxxmax/vue-sunxx',
        docsBranch: 'feature',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdatedText: '更新时间',
        editLinkText: '编辑此页',
        contributors: false,
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
