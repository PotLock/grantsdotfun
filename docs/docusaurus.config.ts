import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GRANTS.FUN',
  tagline: 'Deploy AI Grant Operators',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.grants.fun',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'POTLOCK', // Usually your GitHub org/user name.
  projectName: 'grantsdotfun', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/potlock/grantsdotfun',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/potlock/grantsdotfun',
          // Useful options to enforce blogging best practices
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

  themeConfig: {
    // Replace with your project's social card
    image: 'img/meta.png',
    navbar: {
      title: 'GRANTS.FUN',
      logo: {
        alt: 'GRANTS.FUN Docs Logo',
        src: 'img/grantsdotfun_icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://grants.fun',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://x.com/potlock_',
          label: 'X',
          position: 'right',
        },
        {
          href: 'https://github.com/potlock/grantsdotfun',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📚 Docs',
          items: [
            {
              label: '🚀 Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '🌐 Community',
          items: [
            {
              label: '💬 Telegram',
              href: 'https://t.me/grantsdotfun',
            },
            {
              label: '🐦 Twitter',
              href: 'https://twitter.com/potlock_',
            },
          ],
        },
        {
          title: '🛠️ Products',
          items: [
            {
              label: '🔒 POTLOCK',
              href: 'https://potlock.org',
            },
            {
              label: '🤖 AI-PGF',
              href: 'https://aipgf.com',
            },
          ],
        },
      ],
      copyright: `Built with ❤️ POTLOCK`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
