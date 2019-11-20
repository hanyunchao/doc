const { description } = require('../../package')

module.exports = {
<<<<<<< HEAD
  // theme:"Layout",
  base:'/doc/',
  catch:false,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Some Tips',
=======
  base:'https://github.com/hanyunchao/doc',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
>>>>>>> fa9c05543ac4b381534e81b744d16e54396b3b60
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
<<<<<<< HEAD
        text: '基础',
        link: '/typescript/',
      },
      {
        text: '框架',
        link: '/config/'
      },
      {
        text: 'others',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    // sidebar: {
    //   '/typescript/': [
    //     // '',     /* /foo/ */
    //     'one',  /* /foo/one.html */
    //     'two',
    //   ],

    //   '/config/': [
    //     '',      /* /bar/ */
    //     'three', /* /bar/three.html */
    //     'four'   /* /bar/four.html */
    //   ],

    //   '/problems/':[
    //     '',
    //     'vscode',
    //   ],

    //   // fallback
    //   '/': [
    //     '',        /* / */
    //     'contact', /* /contact.html */
    //     'about'    /* /about.html */
    //   ]
    // },

    sidebar: [
      {
        title: 'TypeScript',   // 必要的
        path: '/typescript/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          // '/',
          // '/typescript/',
          ['/typescript/sometips_ts', 'sometips_ts'],
          '/typescript/one',
          
        ]
      },
      // {
      //   title:'设计模式',
      //   path:'/设计模式/',
      //   collapsable:true,
      //   sidebarDepth:2,
      //   children:[
      //     '/',
      //   ]
      // },
      {
        title: 'problems',
        path:'/problems/',
        collapsable:true,
        sidebarDepth:2,
        children: [
          '/problems/vscode',
         ]
      }
    ],
=======
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },
>>>>>>> fa9c05543ac4b381534e81b744d16e54396b3b60

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
<<<<<<< HEAD
    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
    ]
  }
=======
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
>>>>>>> fa9c05543ac4b381534e81b744d16e54396b3b60
}
