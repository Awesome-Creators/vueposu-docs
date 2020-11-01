---
title: useThrottle
---

# useThrottle

> A hook that can use throttle to handle the value.

<br />

## Usage

<script>
import UseThrottleDemo from '../.vitepress/components/side-effect/UseThrottleDemo.vue'

export default {
  components: {
    UseThrottleDemo
  }
}
</script>
<div id="UseThrottleDemo" class="container">
  <UseThrottleDemo />
</div>

<<< ./docs/.vitepress/components/side-effect/UseThrottleDemo.vue

<br />

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
