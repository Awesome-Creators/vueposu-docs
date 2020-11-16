<template>
  <div>
    <p><button ref="button">You clicked {{ count }} times</button></p>
    <hr />
    <p>Your press key is: {{ key }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useEventListener } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const button = ref();
    const key = ref('');

    useEventListener(button, 'click', () => count.value++);

    useEventListener('keydown', (event: KeyboardEvent) => {
      key.value = event.code;
    });

    return {
      count,
      button,
      key
    }
  },
};
</script>