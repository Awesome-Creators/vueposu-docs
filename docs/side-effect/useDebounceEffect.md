---
title: useDebounceEffect
---

# useDebounceEffect

> The debounce style side effect.

<br />

## Usage

<script>
import UseDebounceEffectDemo from '../.vitepress/components/side-effect/UseDebounceEffectDemo.vue'

export default {
  components: {
    UseDebounceEffectDemo
  }
}
</script>
<div id="UseDebounceEffectDemo" class="container">
  <UseDebounceEffectDemo />
</div>

<<< ./docs/.vitepress/components/side-effect/UseDebounceEffectDemo.vue

<br />

## Params

| Property         | Type                                | Required     | Default | Description                                     |
| ---------------- | ----------------------------------- | ------------ | ------- | ----------------------------------------------- |
| _effectListener_ | `(value?: T, oldValue?: T) => void` | `true`       | `-`     | the debounced listener function to watch effect |
| _deps_           | `Ref<T>                             | Ref<T>[]`    | `true`  | `-`                                             | effect source |
| _wait_           | `number                             | Ref<number>` | `false` | `0`                                             | the number of milliseconds to delay |
