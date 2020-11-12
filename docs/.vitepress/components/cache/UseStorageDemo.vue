<template>
  <div>
    <p><input v-model="state[0]" /></p>
    <p><input v-model="state[1]" /></p>
    <p><input v-model="state[2]" /></p>
    <p><pre lang="json">{{JSON.stringify(state, null, 2)}}</pre></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useStorage } from "vueposu";

export default {
  setup() {
    const state = useStorage('useStorage-demo-state', ['Tom', 'and', 'Jerry']);

    return {
      state
    }
  },
};
</script>