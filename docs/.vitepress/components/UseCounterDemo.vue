
<template>
  <div>
    <p>{{ count }} [min: 1; max: 10; x: 2;]</p>
    <button style="margin-right: 6px;" @click="inc">inc</button>
    <button style="margin-right: 6px;" @click="dec">dec</button>
    <button style="margin-right: 6px;" @click="set(6)">set(6)</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts">
import { useCounter } from "vueposu";

export default {
  setup() {
    const [count, { inc, dec, set, reset }] = useCounter(100, { min: 1, max: 10, x: 2 });

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