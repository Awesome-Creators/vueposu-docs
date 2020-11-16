<template>
  <div>
    <p><input type="text" v-model="q" /> <button @click="emit(q)">say hi</button></p>
    <p>hi, {{ a }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useEventEmitter } from "vueposu";

export default {
  setup() {
    const q = ref('');
    const a = ref('');
    const { emit, on } = useEventEmitter();

    on((text) => {
        a.value = text;
    });

    return {
      q,
      a,
      emit
    };
  },
};
</script>