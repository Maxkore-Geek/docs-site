import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Maxkore的极客空间',
  tagline: '代码之外，思考之上',
  favicon: 'https://github.githubassets.com/favicon.ico',

  url: 'https://geek.bbroot.com',
  baseUrl: '/',

  organizationName: 'Maxkore-Geek',
  projectName: 'geek-space',

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
          path: 'help',
          routeBasePath: 'help',
          breadcrumbs: true,
        },
        blog: {
          path: 'geek',
          routeBasePath: 'geek',
          blogSidebarTitle: '近期极客',
          blogSidebarCount: 5,
          showReadingTime: true,
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            require.resolve("@slashid/react/style.css"),
          ],
        },
      },
    ],
  ],

  // ✅ 插件列表
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        blogSidebarTitle: '维基知识库',
        blogSidebarCount: 10,
        showReadingTime: true,
        postsPerPage: 20,
      },
    ],
    
    './src/plugins/dashboard',
  ],

  // ✅ 主题配置（包含登录认证）
  themeConfig: {
    // 颜色模式
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    
    // ✅ SlashID 登录认证配置
    slashID: {
      orgID: "069b1618-f70f-7671-8904-de40f5af6267",
      forceLogin: false,
      privatePaths: [
        {
          path: "/dashboard/**",        // 控制台需要登录
          groups: ["member"],
        },
        {
          path: "/wiki/private/**",      // 部分维基需要登录
          groups: ["member"],
        },
      ],
      formConfiguration: {
        factors: [{ method: "email_link" }, { method: "password" }],
        text: {
          "initial.title": "登录 Maxkore 极客空间",
        },
      },
    },
    
    // 导航栏
    navbar: {
      title: 'Maxkore的极客空间',
      logo: {
        alt: 'Logo',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      items: [
        { to: '/geek', label: '极客', position: 'left' },
        { to: '/help', label: '帮助', position: 'left' },
        { to: '/wiki', label: '维基', position: 'left' },
        { to: '/dashboard', label: '控制台', position: 'left' },
      ],
    },
    
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },

  // ✅ 添加 SlashID 主题
  themes: ["@slashid/docusaurus-theme-slashid"],
};

export default config;
