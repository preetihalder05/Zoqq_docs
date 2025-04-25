const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Zoqq Docs',
  tagline: 'API Documentation for Zoqq Platform',
  url: 'https://docs.zoqq.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Zoqq Logo',
        src: 'https://stylopay-sandbox-ohio-dev-dump-public.s3.amazonaws.com/zoqq.jpg',
      },
      items: [
        { to: '/docs/getting-started', label: 'Guides', position: 'left' },
        { to: '/docs/api-reference/authentication', label: 'API Reference', position: 'left' },
// { to: '/docs/api-reference/accounts', label: 'API Reference', position: 'left' },
        { to: '/docs/changelog', label: 'Changelog', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};