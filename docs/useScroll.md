---
title: useScroll
---

# useScroll

> A hook that can track the scroll position of an element.

<br />

## Usage

<script>
import UseScrollDemo from './.vitepress/components/UseScrollDemo.vue'

export default {
  components: {
    UseScrollDemo
  }
}
</script>
<UseScrollDemo />

```vue
<template>
  <div>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <div
      ref="div"
      style="width: 300px; height: 300px; border: 1px solid; overflow: auto;"
    >
      <div style="width: 3000px; height: 3000px;"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useScroll } from "vueposu";

export default {
  setup() {
    const div = ref();
    const { x, y } = useScroll(div);

    return {
      div,
      x,
      y,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

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
