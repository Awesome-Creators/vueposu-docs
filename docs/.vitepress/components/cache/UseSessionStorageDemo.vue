<template>
  <div>
      <p>name: <input v-model="state.name" /></p>
      <p>type: <input v-model="state.type" /></p>
      <p><pre lang="json">{{JSON.stringify(state, null, 2)}}</pre></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useSessionStorage } from "vueposu";

export default {
  setup() {
      const state = useSessionStorage('useSessionStorage-demo-state', {
        name: 'Jerry',
        type: 'Mouse'
      });

      return {
        state
      }
  },
};
</script>