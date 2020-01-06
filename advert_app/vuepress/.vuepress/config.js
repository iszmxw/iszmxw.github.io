module.exports = {
    title: '开发文档',  // 设置网站标题
    dest: '../docs',    // 设置输出目录
    base: '/advert_app/docs/', // 设置站点根路径
    repo: 'https://iszmxw.github.io/', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '广告后台', link: 'http://advert.54zm.com' },
            { text: 'More', link: 'https://baidu.com/' },
        ],
        sidebar: [
            ['/', '首页'],
            ['/user', '用户中心'],
            ['/news', '新闻中心'],
            ['/advert', '广告接口']
        ]
    }
}