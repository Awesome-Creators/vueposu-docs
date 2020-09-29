<template>
  <div>
    <p>{{ count }} [min: 1; max: 10; x: 2;]</p>
    <button style="margin-right: 6px" @click="inc">inc</button>
    <button style="margin-right: 6px" @click="dec">dec</button>
    <button style="margin-right: 6px" @click="set(6)">set(6)</button>
    <button style="margin-right: 6px" @click="reset">reset</button>
    <button @click="toggle()">toggle</button>
  </div>
</template>

<script>
import { ref, unref, computed } from "vue";
// import { useCounter } from "vueposu";
import useCounter from "./useCounter";

export default {
  setup() {
    const [count, { inc, dec, set, reset }] = useCounter(2, {
      min: 1,
      max: 10,
      x: 2,
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
