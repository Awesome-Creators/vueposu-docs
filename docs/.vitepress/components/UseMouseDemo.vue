<template>
  <div class="container">
    <p>pageX: {{ pageX }}</p>
    <p>pageY: {{ pageY }}</p>
    <p>screenX: {{ screenX }}</p>
    <p>screenY: {{ screenY }}</p>
    <p>clientX: {{ clientX }}</p>
    <p>clientY: {{ clientY }}</p>
  </div>
</template>

<script lang="ts">
import { useMouse } from "vueposu";

export default {
  setup() {
    const { pageX, pageY, screenX, screenY, clientX, clientY } = useMouse();

    return { pageX, pageY, screenX, screenY, clientX, clientY };
  },
};
</script>

<style scoped>
.container {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: #fff;
}
</style>
