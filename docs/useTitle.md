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
  <div class="container">
    <p>current title: <input v-model="title" /></p>
  </div>
</template>

<script lang="ts">
import { useTitle } from "vueposu";

export default {
  setup() {
    const title = useTitle();

    return {
      title,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property | Type | Description |
|-|-|-|
| _title_ | `Ref<number>` | current title value |

<br />

## Params

| Property | Type | Required | Default | Description |
|-|-|-|-|-|
| _overridedTitle_ | `string | Ref<string>` | `false` | `document.title` | set to override title value |