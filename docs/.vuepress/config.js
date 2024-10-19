// docs/.vuepress/config.js
module.exports = {
    base: "/",
    title: "小生博客",
    description: "分享各类资源、教程、黑科技软件、工具等等",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    // theme : 'reco',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        subsidebar: 'auto',
        sidebar: [
            {
                title: 'Java资源',
                collapsable: true,
                children: [
                    '/java/Spring.md',
                    '/java/线程池.md',
                    '/java/Java8.md',
                    '/java/类加载.md',
                ]
            },
            {
                title: '数据库资源',
                collapsable: true,
                children: [
                    '/mysql/数据库.md',
                ]
            }
        ]
    },
};
