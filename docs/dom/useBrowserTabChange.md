---
title: useBrowserTabChange
---

# useBrowserTabChange

> A hook that can handle change event when current page display change.

<br />

## Usage

<script>
import UseBrowserTabChangeDemo from '../.vitepress/components/dom/UseBrowserTabChangeDemo.vue'

export default {
  components: {
    UseBrowserTabChangeDemo
  }
}
</script>
<div id="UseBrowserTabChangeDemo" class="container">
  <UseBrowserTabChangeDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseBrowserTabChangeDemo.vue

<br />

## Params

| Property               | Type                           | Required | Default | Description             |
| ---------------------- | ------------------------------ | -------- | ------- | ----------------------- |
| _onHiddenStatusChange_ | `(isHidden?: boolean) => void` | `true`   | -       | change handler function |
