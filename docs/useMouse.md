---
title: useMouse
---

# useMouse

> A hook that can track cursor position.

<br />

## Usage

<script>
import UseMouseDemo from './.vitepress/components/UseMouseDemo.vue'

export default {
  components: {
    UseMouseDemo
  }
}
</script>
<UseMouseDemo />

```vue
<template>
  <div>
    <p>pageX: {{ pageX }}</p>
    <p>pageY: {{ pageY }}</p>
    <p>screenX: {{ screenX }}</p>
    <p>screenY: {{ screenY }}</p>
    <p>clientX: {{ clientX }}</p>
    <p>clientY: {{ clientY }}</p>
  </div>
</template>

<script lang="ts">
import { useMouse } from "vueposu";

export default {
  setup() {
    const { pageX, pageY, screenX, screenY, clientX, clientY } = useMouse();

    return { pageX, pageY, screenX, screenY, clientX, clientY };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property  | Type          | Description                                                                        |
| --------- | ------------- | ---------------------------------------------------------------------------------- |
| _pageX_   | `Ref<number>` | the horizontal coordinate relative to the left edge of the entire document         |
| _pageY_   | `Ref<number>` | the vertical coordinate relative to the left edge of the entire document           |
| _screenX_ | `Ref<number>` | the horizontal coordinate offset of the mouse pointer in global screen coordinates |
| _screenY_ | `Ref<number>` | the vertical coordinate offset of the mouse pointer in global screen coordinates   |
| _clientX_ | `Ref<number>` | the horizontal coordinate within the application's viewport                        |
| _clientY_ | `Ref<number>` | the vertical coordinate within the application's viewport                          |
