---
title: useFavicon
---

# useFavicon

> A hook that can change the favicon.

<br />

## Usage

<script>
import UseFaviconDemo from '../.vitepress/components/dom/UseFaviconDemo.vue'

export default {
  components: {
    UseFaviconDemo
  }
}
</script>
<div id="UseFaviconDemo" class="container">
  <UseFaviconDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseFaviconDemo.vue

<br />

## Result

| Property      | Type                    | Description                                     |
| ------------- | ----------------------- | ----------------------------------------------- |
| _changeIcon_  | `(url: string) => void` | function which can change favicon               |
| _restoreIcon_ | `() => void`            | function which will restore to original favicon |
