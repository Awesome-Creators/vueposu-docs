---
title: useThrottleFn
---

# useThrottleFn

> A hook that can use throttle to handle the function.

<br />

## Usage

<script>
import UseThrottleFnDemo from '../.vitepress/components/side-effect/UseThrottleFnDemo.vue'

export default {
  components: {
    UseThrottleFnDemo
  }
}
</script>
<div id="UseThrottleFnDemo" class="container">
  <UseThrottleFnDemo />
</div>

<<< ./docs/.vitepress/components/side-effect/UseThrottleFnDemo.vue

<br />

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
