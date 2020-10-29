---
title: useBrowserTabChange
---

# useBrowserTabChange

> A hook that can handle change event when current page display change.

<br />

## Usage

<script>
import UseBrowserTabChangeDemo from './.vitepress/components/UseBrowserTabChangeDemo.vue'

export default {
  components: {
    UseBrowserTabChangeDemo
  }
}
</script>
<UseBrowserTabChangeDemo />

```vue
<template>
  <div>
    If you change this page display, you will see the page title change.
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useBrowserTabChange, useTitle } from "vueposu";

export default {
  setup() {
    const { title, restoreTitle } = useTitle(document.title, false);
    useBrowserTabChange((isHidden) => {
      if (isHidden) {
        title.value = "page is hidden !";
      } else {
        restoreTitle();
      }
    });
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
| _onHiddenStatusChange_       | `(isHidden?: boolean) => void` | `true` | - | change handler function |