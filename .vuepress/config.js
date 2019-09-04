module.exports = {
    title: '开发文档',  // 设置网站标题
    dest: './docs/docs',    // 设置输出目录
    base: '/docs/', // 设置站点根路径
    repo: 'https://iszmxw.github.io/', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '商户后台', link: 'http://localhost:9528' },
            { text: 'More', link: 'https://baidu.com/' },
        ],
        sidebar: [
            ['/', '首页'],
            ['/singe', '签名'],
            ['/advert', '广告对接']
        ]
    }
}