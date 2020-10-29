<template>
  <div class="container">
    <p><input type="text" v-model="text" /></p>
    <p>
      Effect list:
      <ul>
        <li v-for="t in list">{{ t }}</li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import { useDebounceEffect } from "vueposu";

export default {
  setup() {
    const text = ref('');
    const list = reactive([]);

    useDebounceEffect(() => {
      list.push(text.value);
    }, text, 400);

    return {
      text,
      list,
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
</style>
