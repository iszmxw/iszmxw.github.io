module.exports = {
  title: '开发文档',  // 设置网站标题
  dest: '../docs',    // 设置输出目录
  base: '/blog/docs/', // 设置站点根路径
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
          ['/login', '登录'],
          ['/dashboard', '系统首页'],
          ['/system/config', '系统设置'],
          ['/system/view_log', '访客记录'],
          ['/category/category_list', '栏目列表'],
          ['/category/navbar_list', '导航列表']
      ]
  }
}