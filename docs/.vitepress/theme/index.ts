import DefaultTheme from "vitepress/dist/client/theme-default";

import type { Theme } from "vitepress";

import "./index.css";

const theme: Theme = {
  ...DefaultTheme,
  // enhanceApp({ app }) {},
};

export default theme;
