---
title: useDebounce
---

# useDebounce

> A hook that can use debounce to handle the value.

<br />

## Usage

<script>
import UseDebounceDemo from '../.vitepress/components/side-effect/UseDebounceDemo.vue'

export default {
  components: {
    UseDebounceDemo
  }
}
</script>
<div id="UseDebounceDemo" class="container">
  <UseDebounceDemo />
</div>

<<< ./docs/.vitepress/components/side-effect/UseDebounceDemo.vue

<br />

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
