<template>
  <div>
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