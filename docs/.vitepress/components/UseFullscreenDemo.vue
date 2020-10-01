<template>
  <div class="container" ref="a">
    <p>is fullscreen: {{ isFullscreen }}</p>
    <p>fullscreen times: {{ count }}</p>
    <p>
      <button @click="setFullscreen">set fullscreen</button>
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
    const a = ref();
    const count = ref(0);
    const [
      isFullscreen,
      { setFullscreen, exitFullscreen, toggleFullscreen },
    ] = useFullscreen(a, () => {
      if (isFullscreen.value) count.value++;
    });

    return {
      isFullscreen,
      setFullscreen,
      exitFullscreen,
      toggleFullscreen,
      count,
      a,
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
