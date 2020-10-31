---
title: useCounter
---

# useCounter

> A hook that can manage the count.

<br />

## Usage

<script>
import UseCounterDemo from './../.vitepress/components/UseCounterDemo.vue'

export default {
  components: {
    UseCounterDemo
  }
}
</script>
<UseCounterDemo />

```vue
<template>
  <div>
    <p>count: {{ count }} [min: 1; max: 10; step: 2;]</p>
    <p>
      <button @click="inc">inc</button>
      <button @click="inc(1)">inc(1)</button>
      <button @click="dec">dec</button>
      <button @click="dec(1)">dec(1)</button>
      <button @click="set(6)">set(6)</button>
      <button @click="reset">reset</button>
    </p>
  </div>
</template>

<script lang="ts">
import { useCounter } from "vueposu";

export default {
  setup() {
    const { count, inc, dec, set, reset } = useCounter(2, {
      min: 1,
      max: 10,
      step: 2,
    });
    
    return {
      count,
      inc,
      dec,
      set,
      reset,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property | Type | Description |
|-|-|-|
| _count_ | `Ref<number>` | current count |
| _inc_ | `(x?: number | string | Ref<number | string>) => void` | increment incoming number or step number |
| _dec_ | `(x?: number | string | Ref<number | string>) => void` | decrement incoming number or step number |
| _set_ | `(setCount: number | string | Ref<number | string> | ((current: number) => number)) => void` | set current count |
| _reset_ | `() => void` | reset to initial count |

<br />

## Params

| Property | Type | Required | Default | Description |
|-|-|-|-|-|
| _initialCount_ | `number | string | Ref<number | string>` | `false` | `0` | initial count |
| _min_ | `number | string | Ref<number | string>` | `false` | - | minimum limit |
| _max_ | `number | string | Ref<number | string>` | `false` | - | maximum limit |
| _step_ | `number | string | Ref<number | string>` | `false` | `1` | step number |