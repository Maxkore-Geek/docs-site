import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Maxkore的文档站',
  tagline: '代码之外,思考之上.',
  favicon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',

  future: {
    v4: true,
  },

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
      'zh-Hans': { label: '中文' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 暂时移除 editUrl 和其他选项，只保留核心配置
          // editUrl: 'https://github.com/Maxkore-Geek/docs-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl: 'https://github.com/Maxkore-Geek/docs-site/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    navbar: {
      title: 'Maxkore的文档站',
      logo: {
        alt: 'GitHub Logo',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        srcDark: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        width: 32,
        height: 32,
      },
      items: [],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [{ label: '入门指南', to: '/docs/intro' }],
        },
        {
          title: '社区',
          items: [{ label: 'GitHub', href: 'https://github.com/Maxkore-Geek/docs-site' }],
        },
        {
          title: '更多',
          items: [{ label: '博客', to: '/blog' }],
        },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'javascript'],
    },
    
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [],
  staticDirectories: ['static'],
  scripts: [],
  stylesheets: [],
  headTags: [],
};

export default config;
