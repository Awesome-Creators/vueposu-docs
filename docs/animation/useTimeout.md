---
title: useTimeout
---

# useTimeout

> A hook that is wrapper for [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) with controls.

<br />

## Usage

<script>
import UseTimeoutDemo from '../.vitepress/components/animation/UseTimeoutDemo.vue'

export default {
  components: {
    UseTimeoutDemo
  }
}
</script>
<div id="UseTimeoutDemo" class="container">
  <UseTimeoutDemo />
</div>

<<< ./docs/.vitepress/components/animation/UseTimeoutDemo.vue

<br />

## Result

| Property   | Type         | Description               |
| ---------- | ------------ | ------------------------- |
| _isActive_ | `boolean`    | is it in execution status |
| _start_    | `() => void` | start the execution       |
| _stop_     | `() => void` | stop the execution        |

<br />

## Params

| Property    | Type         | Required      | Default | Description                                            |
| ----------- | ------------ | ------------- | ------- | ------------------------------------------------------ |
| _callback_  | `() => void` | `true`        | `-`     | a function to be executed every `timeout` milliseconds |
| _timeout_   | `number      | Ref<number>`  | `false` | `1000`                                                 | the number of milliseconds to delay |
| _immediate_ | `boolean     | Ref<boolean>` | `false` | `true`                                                 | is it start the execution immediately |
