module.exports = {
  title: 'SourceCred',
  tagline: 'A tool for communities to measure and reward value creation.',
  url: 'https://sourcecred.github.io/docs',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'sourcecred', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    navbar: {
      title: 'SourceCred',
      logo: {
        alt: 'SourceCred Logo',
        src: 'img/favicon.png',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs/introduction',
          label: '🌟 Get Started',
          position: 'left',
        },
        {
          to: 'docs/concepts/cred',
          activeBasePath: 'docs/concepts',
          label: '🧠 Concepts',
          position: 'left',
        },
        {
          to: 'docs/guides/earning-cred',
          activeBasePath: 'docs/guides',
          label: '🗺 Guides',
          position: 'left',
        },
        {
          to: 'docs/setup/installation',
          activeBasePath: 'docs/setup',
          label: '🛠 Setup',
          position: 'left',
        },
        {
          href: 'http://cred.sourcecred.io/timeline/@sourcecred/',
          label: 'Prototype',
          position: 'right',
        },
        {
          to: 'blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/sourcecred',
          label: 'GitHub',
          position: 'right',
        },

      ],
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Chat",
              href: "https://sourcecred.io/discord"
            },
            {
              label: "Forums",
              href: "https://discourse.sourcecred.io"
            },
            {
              label: 'Prototype',
              to: 'https://sourcecred.io/cred/timeline/@sourcecred/',
            },
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Homepage',
              href: "https://sourcecred.io"
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sourcecred',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sourcecred',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://sourcecred.io/admin/#/?',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
