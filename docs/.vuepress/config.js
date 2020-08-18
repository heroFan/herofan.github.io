module.exports = {
  title: 'heroFan ', // 设置网站标题
  base: '/',
  description: '记录日常开发知识点', //描述
  dest: './dist',   // 设置输出目录
  port: 3001, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件', link: '/component/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '可视化', link: '/visualization/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'heroFan', link: 'https://github.com/heroFan' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/component/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        },
        {
          title: 'JS知识库',
          collapsable: true,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: true,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/visualization/':[
        {
          title: '可视化',
          collapsable: true,
          children: [
            
          ]
        },
      ]
    }
  }
}