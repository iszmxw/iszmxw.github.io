module.exports = {
    title: '开发文档',  // 设置网站标题
    dest: '../docs',    // 设置输出目录
    base: '/jidaxia/docs/', // 设置站点根路径
    repo: 'https://iszmxw.github.io/', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '文档申明', link: '/' },
            { text: '新增控制器', link: '/controller' },
            { text: 'More', link: 'https://baidu.com/' },
        ],
        sidebar: [
            ['/', '文档申明'],
            ['/qrcode', '扫码入口'],
            ['/controller', '新增控制器'],
            ['/admin', '后台修改'],
            ['/H5', '前台H5新增接口']
        ]
    }
}