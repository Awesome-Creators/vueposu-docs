<template>
  <div class="container">
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
