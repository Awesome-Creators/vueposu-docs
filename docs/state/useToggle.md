---
title: useToggle
---

# useToggle

> A hook that can toggle the state of a switch.

<br />

## Usage

<script>
import UseToggleDemo from '../.vitepress/components/state/UseToggleDemo.vue'

export default {
  components: {
    UseToggleDemo
  }
}
</script>
<div id="UseToggleDemo" class="container">
  <UseToggleDemo />
</div>

<<< ./docs/.vitepress/components/state/UseToggleDemo.vue

<br />

## Result

| Property   | Type                    | Description          |
| ---------- | ----------------------- | -------------------- |
| _state_    | `Ref<any>`              | current state value  |
| _toggle_   | `(value?: any) => void` | state change trigger |
| _setLeft_  | `() => void`            | set default value    |
| _setRight_ | `() => void`            | set reverse value    |

<br />

## Params

| Property       | Type    | Required | Default | Description |
| -------------- | ------- | -------- | ------- | ----------- |
| _defaultValue_ | `string | number   | boolean | Ref<string  | number | boolean>` | `false` | `true` | set the default value |
| _reverseValue_ | `string | number   | boolean | Ref<string  | number | boolean>` | `false` | `!defaultValue` | set the reverse value |
