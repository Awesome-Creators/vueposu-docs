const sidebar = require("./sidebar");

module.exports = {
  title: "Vueposu",
  description: "A hooks library based on Vue composition-api",

  docsRepo: 'Awesome-Creators/vueposu-doc',

  themeConfig: {
    // logo: ".vitepress/logo.jpg",
    search: {},
    nav: [
      {
        text: "Guide",
        link: "/guide/getting-started",
      },
      {
        text: "Hooks",
        link: sidebar.hooks[0].children[0].link,
      },
      {
        text: "GitHub",
        link: "https://github.com/Awesome-Creators/vueposu",
      },
    ],
    sidebar: {
      '/': sidebar.guide,
      '/hooks/': sidebar.hooks
    },
    // editLinks: true,
    // editLinkText: 'Help us improve this page!',
    // lastUpdated: true
  },
};
