<template>
  <div class="container">
    <p>current title: <input v-model="title" /></p>
  </div>
</template>

<script lang="ts">
import { useTitle } from "vueposu";

export default {
  setup() {
    const title = useTitle();

    return {
      title,
    };
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

.container input {
  margin-left: 6px;
}
</style>
