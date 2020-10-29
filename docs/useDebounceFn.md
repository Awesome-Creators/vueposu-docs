---
title: useDebounceFn
---

# useDebounceFn

> A hook that can use debounce to handle the function.

<br />

## Usage

<script>
import UseDebounceFnDemo from './.vitepress/components/UseDebounceFnDemo.vue'

export default {
  components: {
    UseDebounceFnDemo
  }
}
</script>
<UseDebounceFnDemo />

```vue
<template>
  <div>
    <p>count: {{ count }}</p>
    <p><button @click="debounced">Click me faster!</button></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useDebounceFn } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const debounced = useDebounceFn(() => count.value++, 400);

    return {
      count,
      debounced,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property           | Type                         | Description                                                 |
| ------------------ | ---------------------------- | ----------------------------------------------------------- |
| _debounced_        | `Ref<(...args: any) => any>` | debounced function                                          |
| _debounced.cancel_ | `() => void`                 | throw away any pending invokation of the debounced function |

<br />

## Params

| Property   | Type                    | Required     | Default | Description                           |
| ---------- | ----------------------- | ------------ | ------- | ------------------------------------- |
| _callback_ | `(...args: any) => any` | `true`       | `-`     | the function or a promise to debounce |
| _wait_     | `number                 | Ref<number>` | `false` | `0`                                   | the number of milliseconds to delay |
