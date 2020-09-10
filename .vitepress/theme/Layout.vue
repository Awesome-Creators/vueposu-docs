<template>
  <h1>Custom Layout!</h1>
  <p>{{ count }} <button @click="add">add</button></p>
  <Content /><!-- make sure to include markdown outlet -->
</template>

<script lang="ts">
import {
  usePageData,
  useRoute,
  useRouter,
  useSiteData,
  useSiteDataByRoute,
} from "vitepress";
import { ref } from "vue";
import {testRef} from '.';

export default {
  setup() {
    const count = ref(0);

    const siteData = useSiteData();
    const pageData = usePageData();
    const route = useRoute();
    const router = useRouter();

    testRef.value.count = count;
    testRef.value.add = () => count.value++;

    return {
      count,
      add: () => count.value++,
    };
  },
};
</script>
