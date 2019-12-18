module.exports = {
    title: "Prompts",
    description: "Lightweight, beautiful and user-friendly interactive prompts",
    configureWebpack: {
        resolve: {}
    },
    base: "/prompts_docs_cn/",
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/medium-zoom', true],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/back-to-top', true],
        ["@vuepress/last-updated"],
        ["@vuepress/nprogress"]
    ],
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        activeHeaderLinks: true,
        smoothScroll: true,
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "Github",
                link: "https://github.com/terkelg/prompts"
            }
        ],
        sidebar: [
            {
                title: "安装",
                path: "/routes/install.html",
                sidebarDepth: 2
            },
            {
                title: "使用",
                path: "/routes/usage.html",
                sidebarDepth: 2
            },
            {
                title: "示例",
                path: "/routes/examples.html",
                sidebarDepth: 2
            },
            {
                title: "API",
                path: "/routes/api.html",
                sidebarDepth: 2
            },
            {
                title: "Prompt对象",
                path: "/routes/prompt_object.html",
                sidebarDepth: 2
            },
            {
                title: "Types",
                path: "/routes/types.html",
                sidebarDepth: 2
            },
            {
                title: "谢谢",
                path: "/routes/thanks.html"
            }
        ],
        lastUpdated: "上次更新",
        repo: ""
    },
    head: [["link", { rel: "icon", href: "/images/favicon.ico" }]]
}