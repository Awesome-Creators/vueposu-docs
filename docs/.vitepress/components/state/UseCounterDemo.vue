<template>
  <div>
    <p>count: {{ count }}</p>
    <p>min: <input v-model="min" /> | max: <input v-model="max" /> | step: <input v-model="step" /></p>
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
import { ref } from "vue";
import { useCounter } from "vueposu";

export default {
  setup() {
    const min = ref(1);
    const max = ref(10);
    const step = ref(2);
    const { count, inc, dec, set, reset } = useCounter(2, {
      min,
      max,
      step,
    });
    
    return {
      min,
      max,
      step,
      count,
      inc,
      dec,
      set,
      reset,
    };
  },
};
</script>