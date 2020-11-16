<template>
  <div>
    <p>count: {{ count }}</p>
    <p>interval: <input v-model="interval" /></p>
    <p>isActive: {{ isActive }}</p>
    <p><button @click="start">start</button><button @click="stop">stop</button></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useInterval } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const interval = ref(1000);
    const { isActive, start, stop } = useInterval(() => {
      count.value++;
    }, interval);

    return {
      count,
      interval,
      isActive,
      start,
      stop
    }
  },
};
</script>