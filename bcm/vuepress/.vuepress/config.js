module.exports = {
    title: '开发文档',  // 设置网站标题
    dest: '../docs',    // 设置输出目录
    base: '/advert/docs/', // 设置站点根路径
    repo: 'https://iszmxw.github.io/', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'More', link: 'https://baidu.com/' },
        ],
        sidebar: [
            ['/', '首页'],
            ['/bcmso', '动态库加载封装']
        ]
    }
}