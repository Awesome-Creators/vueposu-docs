<template>
  <div>
    <p>state: {{ state }}</p>
    <p>
      <button @click="toggle()">toggle</button
      ><button @click="setLeft">set left</button
      ><button @click="setRight">set right</button>
    </p>
  </div>
</template>

<script lang="ts">
import { useToggle } from "vueposu";

export default {
  setup() {
    const { state, toggle, setLeft, setRight } = useToggle("left", "right");

    return {
      state,
      toggle,
      setLeft,
      setRight,
    };
  },
};
</script>