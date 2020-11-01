<template>
  <div>
    <p>Typed text: <input type="text" v-model="typed" /></p>
    <p>Throttled text: {{ throttledValue }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useThrottled } from "vueposu";

export default {
  setup() {
    const typed = ref("");
    const throttledValue = Throttled(typed, 400);

    return {
      typed,
      throttledValue
    };
  },
};
</script>