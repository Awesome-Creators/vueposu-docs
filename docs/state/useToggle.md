---
title: useToggle
---

# useToggle

> A hook that can toggle the state of a switch.

<br />

## Usage

<script>
import UseToggleDemo from './../.vitepress/components/UseToggleDemo.vue'

export default {
  components: {
    UseToggleDemo
  }
}
</script>
<UseToggleDemo />

```vue
<template>
  <div>
    <p>state: {{ state }}</p>
    <p>
      <button @click="toggle()">toggle</button
      ><button @click="setLeft">set left</button
      ><button @click="setRight">set right</button>
    </p>
  </div>
</template>

<script lang="ts">
import { useToggle } from "vueposu";

export default {
  setup() {
    const { state, toggle, setLeft, setRight } = useToggle("left", "right");

    return {
      state,
      toggle,
      setLeft,
      setRight,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

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