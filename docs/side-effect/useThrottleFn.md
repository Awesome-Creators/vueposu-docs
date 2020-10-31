---
title: useThrottleFn
---

# useThrottleFn

> A hook that can use throttle to handle the function.

<br />

## Usage

<script>
import UseThrottleFnDemo from './../.vitepress/components/UseThrottleFnDemo.vue'

export default {
  components: {
    UseThrottleFnDemo
  }
}
</script>
<UseThrottleFnDemo />

```vue
<template>
  <div>
    <p>count: {{ count }}</p>
    <p><button @click="throttled">Click me faster!</button></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useThrottleFn } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const throttled = useThrottleFn(() => count.value++, 400);

    return {
      count,
      throttled,
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
| _throttled_        | `Ref<(...args: any) => any>` | throttled function                                          |
| _throttled.cancel_ | `() => void`                 | throw away any pending invokation of the throttled function |

<br />

## Params

| Property   | Type                    | Required     | Default | Description                           |
| ---------- | ----------------------- | ------------ | ------- | ------------------------------------- |
| _callback_ | `(...args: any) => any` | `true`       | `-`     | the function or a promise to throttle |
| _wait_     | `number                 | Ref<number>` | `false` | `0`                                   | the number of milliseconds to delay |
