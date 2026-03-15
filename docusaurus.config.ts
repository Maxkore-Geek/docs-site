import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Maxkore的文档站',
  tagline: '代码之外,思考之上.',
  favicon: 'https://github.githubassets.com/favicon.ico',

  url: 'https://nexus.bbroot.com',
  baseUrl: '/',

  organizationName: 'Maxkore-Geek',
  projectName: 'docs-site',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
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
          path: 'blog',
          routeBasePath: 'blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    // ✅ 完整的深浅色切换配置（只有两种模式）
    colorMode: {
      defaultMode: 'light',      // 默认浅色
      disableSwitch: false,      // 允许切换
      respectPrefersColorScheme: false, // 不跟随系统，只有手动切换
    },
    
    // ✅ Algolia 搜索配置
    algolia: {
      appId: 'ZHOZ1S2L94',
      apiKey: '8eade69f4d82f0dacc4c2a61f139e939',
      indexName: 'nexus.bbroot.com',
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
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
