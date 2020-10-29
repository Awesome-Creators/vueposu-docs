import { Theme } from "vitepress";
import registerComponents from "./register-components";
import DefaultTheme from "vitepress/dist/client/theme-default";
import "./index.css";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    registerComponents(app);
  },
};

export default theme;
