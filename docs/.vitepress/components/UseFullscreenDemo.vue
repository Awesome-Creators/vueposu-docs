<template>
  <div class="container" ref="container">
    <p>is fullscreen: {{ isFullscreen }}</p>
    <p>fullscreen times: {{ count }}</p>
    <p>
      <button @click="enterFullscreen">enter fullscreen</button>
      <button @click="exitFullscreen">exit fullscreen</button>
      <button @click="toggleFullscreen()">toggle fullscreen</button>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useFullscreen } from "vueposu";

export default {
  setup() {
    const container = ref();
    const count = ref(0);
    const {
      isFullscreen,
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
    } = useFullscreen(container, () => {
      if (isFullscreen.value) count.value++;
    });

    return {
      isFullscreen,
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
      container,
      count,
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
  background-color: #fff;
}

.container button {
  margin-right: 6px;
}
</style>
