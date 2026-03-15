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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
