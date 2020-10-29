---
title: useThrottle
---

# useThrottle

> A hook that can use throttle to handle the value.

<br />

## Usage

<script>
import UseThrottleDemo from './.vitepress/components/UseThrottleDemo.vue'

export default {
  components: {
    UseThrottleDemo
  }
}
</script>
<UseThrottleDemo />

```vue
<template>
  <div>
    <p>Typed text: <input type="text" v-model="typed" /></p>
    <p>Throttled text: {{ throttledValue }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useThrottled } from "vueposu";

export default {
  setup() {
    const typed = ref("");
    const throttledValue = Throttled(typed, 400);

    return {
      typed,
      throttledValue
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
| _throttledValue_ | `Ref<T>` | throttled value |

<br />

## Params

| Property | Type     | Required     | Default | Description                  |
| -------- | -------- | ------------ | ------- | ---------------------------- |
| _value_  | `Ref<T>` | `true`       | `-`     | value that requires throttle |
| _wait_   | `number  | Ref<number>` | `false` | `0`                          | the number of milliseconds to delay |
