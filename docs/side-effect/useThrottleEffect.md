---
title: useThrottleEffect
---

# useThrottleEffect

> The throttle style side effect.

<br />

## Usage

<script>
import UseThrottleEffectDemo from '../.vitepress/components/side-effect/UseThrottleEffectDemo.vue'

export default {
  components: {
    UseThrottleEffectDemo
  }
}
</script>
<div id="UseThrottleEffectDemo" class="container">
  <UseThrottleEffectDemo />
</div>

<<< ./docs/.vitepress/components/side-effect/UseThrottleEffectDemo.vue

<br />

## Params

| Property         | Type                                | Required     | Default | Description                                     |
| ---------------- | ----------------------------------- | ------------ | ------- | ----------------------------------------------- |
| _effectListener_ | `(value?: T, oldValue?: T) => void` | `true`       | `-`     | the throttled listener function to watch effect |
| _deps_           | `Ref<T>                             | Ref<T>[]`    | `true`  | `-`                                             | effect source |
| _wait_           | `number                             | Ref<number>` | `false` | `0`                                             | the number of milliseconds to delay |
