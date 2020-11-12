<template>
  <div>
    <template v-if="supported">
      <p>Current copied text: {{ text }}</p>
      <p>
        <input v-model="input" />
        <button @click="copy(input)">copy</button>
      </p>
    </template>
    <template v-else>
      It is seems like your browser does not support this fresh
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API"
        target="_blank"
        >Clipboard API</a
      >.
    </template>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useClipboard } from "vueposu";

export default {
  setup() {
    const input = ref();
    const { copy, text, supported } = useClipboard();

    return {
      input,
      copy,
      text,
      supported,
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
  margin-left: 6px;
}
</style>
