import { ref } from "vue";
import Layout from "./Layout.vue";
import Foo from '../components/Foo.vue';

export const testRef = ref({});

export default {
  Layout,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.component('Foo', Foo)
    Reflect.defineProperty(app.config.globalProperties, "$ass", {
      get() {
        return testRef.value;
      },
    });
    //   console.log(router)
    //   console.log(siteData)
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
