<template>
  <div>
    <p>name: <input v-model="state.name" /></p>
    <p>type: <input v-model="state.type" /></p>
    <p><pre lang="json">{{JSON.stringify(state, null, 2)}}</pre></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useLocalStorage } from "vueposu";

export default {
  setup() {
    const state = useLocalStorage('useLocalStorage-demo-state', {
      name: 'Tom',
      type: 'Cat'
    });

    return {
      state
    }
  },
};
</script>