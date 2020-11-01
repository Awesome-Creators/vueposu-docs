<template>
  <div >
    <p>count: {{ count }}</p>
    <p><button @click="throttled">Click me faster!</button></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useThrottleFn } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const throttled = useThrottleFn(() => count.value++, 400);

    return {
      count,
      throttled,
    };
  },
};
</script>