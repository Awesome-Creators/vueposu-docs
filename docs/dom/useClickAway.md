---
title: useClickAway
---

# useClickAway

> A hook that can handle click event outside of target elements.

<br />

## Usage

<script>
import UseClickAwayDemo from '../.vitepress/components/dom/UseClickAwayDemo.vue'

export default {
  components: {
    UseClickAwayDemo
  }
}
</script>
<div id="UseClickAwayDemo" class="container">
  <UseClickAwayDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseClickAwayDemo.vue

<br />

## Params

| Property       | Type                | Required            | Default                | Description           |
| -------------- | ------------------- | ------------------- | ---------------------- | --------------------- |
| _target_       | `HTMLElement        | () => HTMLElement   | Ref<HTMLElement>       | (HTMLElement          | (() => HTMLElement) | Ref<HTMLElement>)[]` | `true` | - | execution handler target |
| _eventHandler_ | `(event: MouseEvent | TouchEvent) => void | Ref<(event: MouseEvent | TouchEvent) => void>` | `true` | - | handler function on external click |
| _eventName_    | `string             | string[]            | Ref<string             | string[]>`            | `false` | `click` | event trigger |
