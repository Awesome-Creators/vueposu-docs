---
title: useTitle
---

# useTitle

> A hook that can set the page title.

<br />

## Usage

<script>
import UseTitleDemo from '../.vitepress/components/dom/UseTitleDemo.vue'

export default {
  components: {
    UseTitleDemo
  }
}
</script>
<div id="UseTitleDemo" class="container">
  <UseTitleDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseTitleDemo.vue

<br />

## Result

| Property       | Type          | Description            |
| -------------- | ------------- | ---------------------- |
| _title_        | `Ref<string>` | current title value    |
| _restoreTitle_ | `() => void`  | restore title function |

<br />

## Params

| Property           | Type     | Required      | Default | Description      |
| ------------------ | -------- | ------------- | ------- | ---------------- |
| _overridedTitle_   | `string  | Ref<string>`  | `false` | `document.title` | set to override title value |
| _restoreOnUnmount_ | `boolean | Ref<boolean>` | `false` | `true`           | whether need restore the title on unmount |
