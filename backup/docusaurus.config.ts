import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Maxkore的文档站',
  tagline: '代码之外,思考之上.',
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
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          breadcrumbs: true,
          blogSidebarTitle: '近期文章',
          blogSidebarCount: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

   plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en', 'zh'],
      indexDocs: true,
      indexBlog: true,
      indexPages: false,
      docsRouteBasePath: ['docs'],
      blogRouteBasePath: ['blog'],
      searchResultLimits: 8,
    },
  ],
],

  themeConfig: {
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
        alt: 'Logo',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      items: [
        { to: '/docs', label: '文档', position: 'left' },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/Maxkore-Geek',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    // 页脚
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: '快速入门', to: '/docs/intro' },
            { label: '常见问题', to: '/docs/faq' },
          ],
        },
        {
          title: '社区',
          items: [
            { label: 'GitHub', href: 'https://github.com/Maxkore-Geek' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '博客', to: '/blog' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maxkore. Built with Docusaurus.`,
    },
    
    // 代码高亮
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'javascript'],
    },
    
    // 图片配置
    image: 'img/docusaurus-social-card.jpg',
  },
};

export default config;