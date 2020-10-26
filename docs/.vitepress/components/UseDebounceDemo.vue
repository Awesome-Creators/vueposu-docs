<template>
  <div class="container">
    <p>Typed text: <input type="text" v-model="typed" /></p>
    <p>Debounced text: {{ debouncedValue }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useDebounce } from "vueposu";

export default {
  setup() {
    const typed = ref("");
    const debouncedValue = useDebounce(typed, 400);

    return {
      typed,
      debouncedValue
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
