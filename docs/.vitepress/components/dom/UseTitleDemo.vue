<template>
  <div>
    <p>current title: <input v-model="title" /> <button @click="restoreTitle">restore title</button></p>
  </div>
</template>

<script lang="ts">
import { useTitle } from "vueposu";

export default {
  setup() {
    const { title, restoreTitle } = useTitle('custom title', false);

    return {
      title,
      restoreTitle
    };
  },
};
</script>