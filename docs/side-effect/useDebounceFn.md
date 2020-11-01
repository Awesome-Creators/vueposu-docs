---
title: useDebounceFn
---

# useDebounceFn

> A hook that can use debounce to handle the function.

<br />

## Usage

<script>
import UseDebounceFnDemo from '../.vitepress/components/side-effect/UseDebounceFnDemo.vue'

export default {
  components: {
    UseDebounceFnDemo
  }
}
</script>
<div id="UseDebounceFnDemo" class="container">
  <UseDebounceFnDemo />
</div>

<<< ./docs/.vitepress/components/side-effect/UseDebounceFnDemo.vue

<br />

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
