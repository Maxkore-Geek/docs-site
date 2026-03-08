import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Maxkore的文档站',
  tagline: '代码之外，思考之上',
  favicon: 'https://github.githubassets.com/favicon.ico',

  url: 'https://docs-site.bbroot.com',
  baseUrl: '/',

  organizationName: 'Maxkore-Geek',
  projectName: 'docs-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          routeBasePath: 'docs',
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // 颜色模式：只保留亮色和暗色
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    
    // Algolia 搜索配置
    algolia: {
  appId: 'ZHOZ1S2L94',
  apiKey: '8eade69f4d82f0dacc4c2a61f139e939',
  indexName: 'docs-site.bbroot.com',
  contextualSearch: true,
  searchParameters: {},
  searchPagePath: 'search',
},
    
    navbar: {
  title: 'Maxkore的文档站',
  logo: {
    alt: 'Logo',
    src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  items: [
    { to: '/docs', label: '文档', position: 'left' },
    { to: '/blog', label: '博客', position: 'left' },
    // ❌ 去掉自定义搜索
    // ❌ 去掉GitHub链接
  ],
},
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;