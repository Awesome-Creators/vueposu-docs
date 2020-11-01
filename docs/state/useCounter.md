---
title: useCounter
---

# useCounter

> A hook that can manage the count.

<br />

## Usage

<script>
import UseCounterDemo from '../.vitepress/components/state/UseCounterDemo.vue'

export default {
  components: {
    UseCounterDemo
  }
}
</script>
<div id="UseCounterDemo" class="container">
  <UseCounterDemo />
</div>

<<< ./docs/.vitepress/components/state/UseCounterDemo.vue

<br />

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