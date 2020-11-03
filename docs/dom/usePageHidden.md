---
title: usePageHidden
---

# usePageHidden

> A hook that can handle event when current page display change.

<br />

## Usage

<script>
import UsePageHiddenDemo from '../.vitepress/components/dom/UsePageHiddenDemo.vue'

export default {
  components: {
    UsePageHiddenDemo
  }
}
</script>
<div id="UsePageHiddenDemo" class="container">
  <UsePageHiddenDemo />
</div>

<<< ./docs/.vitepress/components/dom/UsePageHiddenDemo.vue

<br />

## Params

| Property               | Type                           | Required | Default | Description             |
| ---------------------- | ------------------------------ | -------- | ------- | ----------------------- |
| _onHiddenStatusChange_ | `(isHidden?: boolean) => void` | `true`   | -       | change handler function |
