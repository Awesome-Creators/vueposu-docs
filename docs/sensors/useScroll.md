---
title: useScroll
---

# useScroll

> A hook that can track the scroll position of an element.

<br />

## Usage

<script>
import UseScrollDemo from '../.vitepress/components/sensors/UseScrollDemo.vue'

export default {
  components: {
    UseScrollDemo
  }
}
</script>
<div id="UseScrollDemo" class="container">
  <UseScrollDemo />
</div>

<<< ./docs/.vitepress/components/sensors/UseScrollDemo.vue

<br />

## Result

| Property | Type          | Description             |
| -------- | ------------- | ----------------------- |
| _x_      | `Ref<number>` | scroll x position value |
| _y_      | `Ref<number>` | scroll y position value |

<br />

## Params

| Property | Type         | Required          | Default          | Description  |
| -------- | ------------ | ----------------- | ---------------- | ------------ |
| _target_ | `HTMLElement | () => HTMLElement | Ref<HTMLElement> | (HTMLElement | (() => HTMLElement)` | `false` | `document` | execution handler target |
