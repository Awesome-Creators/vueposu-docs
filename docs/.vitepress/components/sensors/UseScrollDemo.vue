<template>
  <div>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <div ref="div" style="width: 300px; height: 300px; border: 1px solid; overflow: auto;">
      <div style="width: 3000px; height: 3000px;"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useScroll } from "vueposu";

export default {
  setup() {
    const div = ref();
    const { x, y } = useScroll(div);

    return {
      div,
      x,
      y,
    };
  },
};
</script>