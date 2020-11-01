<template>
  <div>
    <p>count: {{ count }}</p>
    <p>
      <button ref="a">don't click me</button>
      <button ref="b">click me outside</button>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useClickAway } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const a = ref();
    const b = ref();

    useClickAway([a, b], () => {
      count.value += 1;
    });

    return {
      count,
      a,
      b,
    };
  },
};
</script>