---
title: useInterval
---

# useInterval

> A hook that is wrapper for [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) with controls.

<br />

## Usage

<script>
import UseIntervalDemo from '../.vitepress/components/animation/UseIntervalDemo.vue'

export default {
  components: {
    UseIntervalDemo
  }
}
</script>
<div id="UseIntervalDemo" class="container">
  <UseIntervalDemo />
</div>

<<< ./docs/.vitepress/components/animation/UseIntervalDemo.vue

<br />

## Result

| Property   | Type         | Description               |
| ---------- | ------------ | ------------------------- |
| _isActive_ | `boolean`    | is it in execution status |
| _start_    | `() => void` | start the execution       |
| _stop_     | `() => void` | stop the execution        |

<br />

## Params

| Property    | Type         | Required      | Default | Description                                             |
| ----------- | ------------ | ------------- | ------- | ------------------------------------------------------- |
| _callback_  | `() => void` | `true`        | `-`     | a function to be executed every `interval` milliseconds |
| _interval_  | `number      | Ref<number>`  | `false` | `1000`                                                  | the number of milliseconds to delay |
| _immediate_ | `boolean     | Ref<boolean>` | `false` | `true`                                                  | is it start the execution immediately |
