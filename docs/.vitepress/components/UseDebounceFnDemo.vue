<template>
  <div class="container">
    <p>count: {{ count }}</p>
    <p><button @click="debounced">Click me faster!</button></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useDebounceFn } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const debounced = useDebounceFn(() => count.value++, 400);

    return {
      count,
      debounced,
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
</style>
