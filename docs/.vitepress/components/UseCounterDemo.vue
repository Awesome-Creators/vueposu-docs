<template>
  <div class="container">
    <p>count: {{ count }} [min: 1; max: 10; step: 2;]</p>
    <p>
      <button @click="inc">inc</button>
      <button @click="inc(1)">inc(1)</button>
      <button @click="dec">dec</button>
      <button @click="dec(1)">dec(1)</button>
      <button @click="set(6)">set(6)</button>
      <button @click="reset">reset</button>
    </p>
  </div>
</template>

<script lang="ts">
import { useCounter } from "vueposu";

export default {
  setup() {
    const { count, inc, dec, set, reset } = useCounter(2, {
      min: 1,
      max: 10,
      step: 2,
    });
    
    return {
      count,
      inc,
      dec,
      set,
      reset,
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

.container button {
  margin-right: 6px;
}
</style>
