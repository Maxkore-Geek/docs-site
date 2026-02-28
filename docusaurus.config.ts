import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // 网站基本信息
  title: 'Maxkore的文档站',
  tagline: '代码之外,思考之上.',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // 生产环境配置
  url: 'https://docs-site.bbroot.com',
  baseUrl: '/',

  // GitHub 部署配置
  organizationName: 'Maxkore-Geek',
  projectName: 'docs-site',

  // 链接错误处理
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 国际化
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
      },
      en: {
        label: 'English',
      },
    },
  },

  // 预设配置
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Maxkore-Geek/docs-site/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Maxkore-Geek/docs-site/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // 主题配置
  themeConfig: {
    // 社交卡片图片
    image: 'img/docusaurus-social-card.jpg',
    
    // 颜色模式配置
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // 导航栏
    navbar: {
      title: 'Maxkore的文档站',
      logo: {
        alt: 'GitHub Logo',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        srcDark: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        href: 'https://github.com/Maxkore-Geek',
        target: '_blank',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '教程',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Maxkore-Geek/docs-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    // 页脚
    footer: {
      style: 'dark',
      footer: {
  style: 'dark',
  links: [
    {
      title: '文档',
      items: [
        {
          label: '入门指南',
          to: '/docs/intro',
        },
      ],
    },
    {
      title: '社区',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/Maxkore-Geek/docs-site',
        },
        {
          label: 'Issues',
          href: 'https://github.com/Maxkore-Geek/docs-site/issues',
        },
      ],
    },
    {
      title: '更多',
      items: [
        {
          label: '博客',
          to: '/blog',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Maxkore-Geek/docs-site',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Maxkore. Built with Docusaurus.`,
},
      copyright: `Copyright © ${new Date().getFullYear()} Maxkore. Built with Docusaurus.`,
    },
    
    // 代码高亮主题
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'javascript'],
    },
    
    // 文档侧边栏自动折叠
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    
    // 实时聊天（可选，去掉不需要的）
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    // },
  } satisfies Preset.ThemeConfig,  // ← 注意这里有个逗号！

  // 插件配置
  plugins: [],

  // 静态目录
  staticDirectories: ['static'],

  // 自定义脚本
  scripts: [],

  // 自定义样式
  stylesheets: [],

  // 网站头部标签
  headTags: [],
};

export default config;