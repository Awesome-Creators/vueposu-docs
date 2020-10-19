<template>
  <div class="container">
    If you change this page display, you will see the page title change.
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useBrowserTabChange, useTitle } from "vueposu";

export default {
  setup() {
    const { title, restoreTitle } = useTitle(null, false);
    useBrowserTabChange((isHidden) => {
      if (isHidden) {
        title.value = "page is hidden !";
      } else {
        restoreTitle();
      }
    });
  },
};
</script>

<style scoped>
.container {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
}
</style>
