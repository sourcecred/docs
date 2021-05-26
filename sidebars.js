module.exports = {
  sidebar: {
    "🌟 Beta Docs (WIP)": [
      {
        "Learn About SourceCred": [
          "beta/introduction",
          "beta/FAQ",
          "beta/cred",
          "beta/grain",
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
      {
        "Use SourceCred in Your Community": ["beta/setup-guide"],
      },
      {
        "Join Our Community": [
          "beta/get-involved",
          "onboarding/devs/getting-started",
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
    "Internal Docs": ["internal/home", "internal/cultivation", "internal/dev"],
  },
};
