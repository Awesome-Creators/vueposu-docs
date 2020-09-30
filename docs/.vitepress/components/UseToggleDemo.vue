<template>
  <div class="container">
    <p>status: {{ status }}</p>
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
    const [status, { toggle, setLeft, setRight }] = useToggle("left", "right");

    return {
      status,
      toggle,
      setLeft,
      setRight,
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
