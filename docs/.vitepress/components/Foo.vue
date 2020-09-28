<template>
  <div>{{ count }} <button @click="add">click me</button></div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return {
      count,
      add: () => count.value++,
    };
  },
};
</script>
