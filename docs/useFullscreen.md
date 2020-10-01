---
title: useFullscreen
---

# useFullscreen

> A hook that can display the target element in full screen.

<br />

## Usage

<script>
import UseFullscreenDemo from './.vitepress/components/UseFullscreenDemo.vue'

export default {
    components: {
        UseFullscreenDemo
    }
}
</script>
<UseFullscreenDemo />

```vue
<template>
  <div ref="a">
    <p>is fullscreen: {{ isFullscreen }}</p>
    <p>fullscreen times: {{ count }}</p>
    <p>
      <button @click="setFullscreen">set fullscreen</button>
      <button @click="exitFullscreen">exit fullscreen</button>
      <button @click="toggleFullscreen()">toggle fullscreen</button>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useFullscreen } from "vueposu";

export default {
  setup() {
    const a = ref();
    const count = ref(0);
    const [
      isFullscreen,
      { setFullscreen, exitFullscreen, toggleFullscreen },
    ] = useFullscreen(a, () => {
      if (isFullscreen.value) count.value++;
    });

    return {
      isFullscreen,
      setFullscreen,
      exitFullscreen,
      toggleFullscreen,
      count,
      a,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property           | Type               | Description            |
| ------------------ | ------------------ | ---------------------- |
| _isFullscreen_     | `Ref<boolean>`     | full screen status     |
| _setFullscreen_    | `() => void`       | set full screen        |
| _exitFullscreen_   | `() => void`       | exit full screen       |
| _toggleFullscreen_ | `(status?: boolean | Ref<boolean>) => void` | toggle full screen status |

<br />

## Params

| Property                   | Type         | Required          | Default           | Description                            |
| -------------------------- | ------------ | ----------------- | ----------------- | -------------------------------------- |
| _target_                   | `HTMLElement | () => HTMLElement | Ref<HTMLElement>` | `true`                                 | - | full screen target |
| _onFullscreenStatusChange_ | `() => void` | `false`           | -                 | handler for full screen status changed |
