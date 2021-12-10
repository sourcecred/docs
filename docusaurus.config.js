module.exports = {
  title: "SourceCred",
  tagline: "A tool for communities to measure and reward value creation.",
  url: "https://sourcecred.github.io/docs",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "sourcecred", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'winter_break_2021',
      content:
        'We will be taking radical rest from Dec 15 - Jan 17, and you might not hear back from us much. For info on how this affects Grain, etc, <a target="_blank" rel="noopener noreferrer" href="https://discourse.sourcecred.io/t/finalized-proposal-dec-jan-break-and-airdrop-2021/1306">click here</a>.',
      backgroundColor: '#ff66ed',
      textColor: '#091E42',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "SourceCred",
      logo: {
        alt: "SourceCred Logo",
        src: "img/favicon.png",
      },
      items: [
        { to: "docs", label: "Beta Docs", position: "left" },
        {
          href: "https://github.com/sourcecred",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Join our Community",
          items: [
            {
              label: "Discord Chat",
              href: "https://sourcecred.io/discord",
            },
            {
              label: "Calendar",
              href: "https://sourcecred.io/calendar",
            },
            {
              label: "Our Cred Explorer",
              to: "http://cred.sourcecred.io/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Homepage",
              href: "https://sourcecred.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/sourcecred",
            },
            {
              label: "Discourse Forums",
              href: "https://discourse.sourcecred.io",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/sourcecred",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({
            version,
            versionDocsDirPath,
            docPath,
            permalink,
            locale,
          }) => {
            const parts = docPath.replace(".md", "").split("/");
            const docName = parts.pop();
            parts.push("entries");
            parts.push(docName);
            const partsWithMergedBase = [
              parts.slice(0, -2).join("-"),
              ...parts.slice(-2),
            ];
            return (
              "https://sourcecred.io/admin/#/collections/" +
              partsWithMergedBase.join("/")
            );
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
};
