module.exports = {
  title: 'SourceCred Documentation',
  tagline: 'SourceCred is an open source community and a reputation protocol for open collaboration.',
  url: 'https://sourcecred.github.io/docs',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'sourcecred', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SourceCred',
      logo: {
        alt: 'SourceCred Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sourcecred',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://sourcecred.io/cred/timeline/@sourcecred/',
          label: 'Prototype',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
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
