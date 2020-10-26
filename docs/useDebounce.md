---
title: useDebounce
---

# useDebounce

> A hook that can use debounce to handle the value.

<br />

## Usage

<script>
import UseDebounceDemo from './.vitepress/components/UseDebounceDemo.vue'

export default {
  components: {
    UseDebounceDemo
  }
}
</script>
<UseDebounceDemo />

```vue
<template>
  <div>
    <p>Typed text: <input type="text" v-model="typed" /></p>
    <p>Debounced text: {{ debouncedValue }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useDebounce } from "vueposu";

export default {
  setup() {
    const typed = ref("");
    const debouncedValue = useDebounce(typed, 400);

    return {
      typed,
      debouncedValue,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property | Type          | Description                  |
| -------- | ------------- | ---------------------------- |
| _debouncedValue_  | `Ref<string>` | debounced value |

<br />

## Params

| Property           | Type     | Required      | Default | Description      |
| ------------------ | -------- | ------------- | ------- | ---------------- |
| _value_   | `Ref<string>`  | `true` | `-` | value that requires debounce |
| _restoreOnUnmount_ | `boolean | Ref<boolean>` | `false` | `true`           | whether need restore the title on unmount |
