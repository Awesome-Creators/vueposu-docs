<template>
  <div>
    If you change this page display, you will see the page title change.
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { usePageHidden, useTitle } from "vueposu";

export default {
  setup() {
    const { title, restoreTitle } = useTitle(null, false);
    usePageHidden((isHidden) => {
      if (isHidden) {
        title.value = "page is hidden !";
      } else {
        restoreTitle();
      }
    });
  },
};
</script>