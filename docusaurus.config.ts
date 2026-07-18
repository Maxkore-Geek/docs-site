import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Maxkore的极客空间',
  tagline: '代码之外,思考之上.',
  favicon: 'https://github.githubassets.com/favicon.ico',

  url: 'https://nexus.bbroot.com',
  baseUrl: '/',

  organizationName: 'Maxkore-Geek',
  projectName: 'docs-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // 移除 i18n 配置，暂时只保留中文
  // i18n: { ... },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          routeBasePath: 'docs',
          breadcrumbs: true,
          // 移除 editUrl 和 showLastUpdate
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          routeBasePath: 'blog',
          // 移除 editUrl
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    
    // Algolia 搜索
    algolia: {
      appId: 'EGEY2PE1PM',
      apiKey: 'bc69655a501bc6f2b825af8ad8daed45',
      indexName: 'nexus.bbroot.com',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    
    navbar: {
      title: 'Maxkore的极客空间',
      logo: {
        alt: 'Logo',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      items: [
        { to: '/docs', label: '文档', position: 'left' },
        { to: '/blog', label: '博客', position: 'left' },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // 不使用任何自定义 webpack 配置
};

export default config;
