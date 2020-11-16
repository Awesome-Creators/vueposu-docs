<template>
  <div>
    <p>count: {{ count }}</p>
    <p>timeout: <input v-model="timeout" /></p>
    <p>isActive: {{ isActive }}</p>
    <p><button @click="start">start</button><button @click="stop">stop</button></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useTimeout } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const timeout = ref(2000);
    const { isActive, start, stop } = useTimeout(() => {
      count.value++;
    }, timeout);

    return {
      count,
      timeout,
      isActive,
      start,
      stop
    }
  },
};
</script>