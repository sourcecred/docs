module.exports = {
  title: 'SourceCred',
  tagline: 'An open source community and reputation protocol for open collaboration.',
  url: 'https://sourcecred.github.io/docs',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'sourcecred', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SourceCred',
      logo: {
        alt: 'SourceCred Logo',
        src: 'img/favicon.png',
      },
      links: [
        {
          to: 'docs/community/intro',
          activeBasePath: 'docs',
          label: '📖 Docs',
          position: 'left',
        },
        {
          href: 'https://sourcecred.io/cred/timeline/@sourcecred/',
          label: '🧬 Prototype',
          position: 'left',
        },
        {
          to: 'blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://discourse.sourcecred.io/',
          label: 'Forums',
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
              href: "https://discord.gg/SXreMyQ"
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
            'https://github.com/sourcecred/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
