---
title: useClickAway
---

# useClickAway

> A hook that can handle click event outside of target elements.

<br />

## Usage

<script>
import UseClickAwayDemo from './.vitepress/components/UseClickAwayDemo.vue'

export default {
    components: {
        UseClickAwayDemo
    }
}
</script>
<UseClickAwayDemo />

```vue
<template>
  <div>
    <p>count: {{ count }}</p>
    <p>
      <button ref="a">don't click me</button>
      <button ref="b">click me outside</button>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useClickAway } from "vueposu";

export default {
  setup() {
    const count = ref(0);
    const a = ref();
    const b = ref();

    useClickAway([a, b], () => {
      count.value += 1;
    });

    return {
      count,
      a,
      b,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

<br />

## Params

| Property       | Type                | Required            | Default                | Description           |
| -------------- | ------------------- | ------------------- | ---------------------- | --------------------- |
| _target_       | `HTMLElement        | () => HTMLElement   | Ref<HTMLElement>       | (HTMLElement          | (() => HTMLElement) | Ref<HTMLElement>)[]` | `true` | - | execution handler target |
| _eventHandler_ | `(event: MouseEvent | TouchEvent) => void | Ref<(event: MouseEvent | TouchEvent) => void>` | `true` | - | handler function on external click |
| _eventName_    | `string             | string[]            | Ref<string             | string[]>`            | `false` | `click` | event trigger |
