const dom = require("./sidebar/dom");
const functionality = require("./sidebar/functionality");
const cache = require("./sidebar/cache");
const sideEffect = require("./sidebar/side-effect");

module.exports = {
  title: "Vueposu",
  description: "A hooks library based on Vue composition-api",

  themeConfig: {
    // logo: ".vitepress/logo.jpg",
    search: {},
    nav: [
      // {
      //   text: "DOM",
      //   items: Hooks.DOM,
      // },
      {
        text: "GitHub",
        link: "https://github.com/Awesome-Creators/vueposu",
      },
    ],
    sidebar: [dom, functionality, cache, sideEffect],
    // editLinks: true,
    // editLinkText: 'Help us improve this page!',
    // lastUpdated: true
  },
};
