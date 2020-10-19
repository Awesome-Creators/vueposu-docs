---
title: useTitle
---

# useTitle

> A hook that can set the page title.

<br />

## Usage

<script>
import UseTitleDemo from './.vitepress/components/UseTitleDemo.vue'

export default {
  components: {
    UseTitleDemo
  }
}
</script>
<UseTitleDemo />

```vue
<template>
  <div>
    <p>
      current title: <input v-model="title" />
      <button @click="restoreTitle">restore title</button>
    </p>
  </div>
</template>

<script lang="ts">
import { useTitle } from "vueposu";

export default {
  setup() {
    const { title, restoreTitle } = useTitle('custom title', false);

    return {
      title,
      restoreTitle,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property       | Type          | Description            |
| -------------- | ------------- | ---------------------- |
| _title_        | `Ref<number>` | current title value    |
| _restoreTitle_ | `() => void`  | restore title function |

<br />

## Params

| Property           | Type     | Required      | Default | Description      |
| ------------------ | -------- | ------------- | ------- | ---------------- |
| _overridedTitle_   | `string  | Ref<string>`  | `false` | `document.title` | set to override title value |
| _restoreOnUnmount_ | `boolean | Ref<boolean>` | `false` | `true`           | whether need restore the title on unmount |
