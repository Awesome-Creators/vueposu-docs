---
title: useDebounce
---

# useDebounce

> A hook that can use debounce to handle the value.

<br />

## Usage

<script>
import UseDebounceDemo from './../.vitepress/components/UseDebounceDemo.vue'

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

| Property         | Type     | Description     |
| ---------------- | -------- | --------------- |
| _debouncedValue_ | `Ref<T>` | debounced value |

<br />

## Params

| Property | Type     | Required     | Default | Description                  |
| -------- | -------- | ------------ | ------- | ---------------------------- |
| _value_  | `Ref<T>` | `true`       | `-`     | value that requires debounce |
| _wait_   | `number  | Ref<number>` | `false` | `0`                          | the number of milliseconds to delay |
