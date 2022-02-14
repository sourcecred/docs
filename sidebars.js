module.exports = {
  sidebar: {
    "🌟 Beta Docs (WIP)": [
      {
        "Learn About SourceCred": [
          "beta/introduction",
          "beta/FAQ",
          "beta/cred",
          "beta/grain",
          "beta/who-uses-us",
        ],
      },
      {
        "Use SourceCred in Your Community": [
          "beta/setup-guide",
          "external/template-instance",
          "setup/FAQ",
          "setup/pairs-well-with-sourcecred",
          {
            "🔌 Plugins": [
              "beta/plugins/github",
              "beta/plugins/discourse",
              "beta/plugins/discord",
              "beta/plugins/initiatives",
            ],
          },
        ],
      },
      "beta/help-us-help-you",
      {
        "Join Our Community": [
          "beta/get-involved",
          "onboarding/devs/getting-started",
          "beta/our-values",
          "beta/our-platforms",
          "beta/our-calls",
          "beta/best-resources-for-new-contributors",
          "concepts/trust_levels",
        ],
      },
      "api/documentation",
      {
        type: "link",
        href: "/docs/internal/home",
        label: "Internal Docs",
      },
    ],
  },
  internalSidebar: {
    "Internal Docs": ["internal/home", "internal/cultivation", "internal/dev", "internal/treasury"],
  },
};
