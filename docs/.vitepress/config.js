const sidebar = require("./sidebar");

module.exports = {
  title: "vueposu",
  description: "A hooks library based on Vue composition-api",

  docsRepo: 'Awesome-Creators/vueposu-doc',

  themeConfig: {
    // logo: ".vitepress/logo.jpg",
    search: {},
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/Awesome-Creators/vueposu",
      },
    ],
    sidebar,
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: true
  },
};
