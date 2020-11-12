---
title: useStorage
---

# useStorage

> Reactive [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)/[sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
>
> - You can storage `Array` and `PlainObject`.
> - You can use `Storage.setItem` directly, it will effects and changes the Storage item's value.
> - It will sync the Storage item value when the page focus.

<br />

## Usage

<script>
import UseStorageDemo from '../.vitepress/components/cache/UseStorageDemo.vue'

export default {
  components: {
    UseStorageDemo
  }
}
</script>
<div id="UseStorageDemo" class="container">
  <UseStorageDemo />
</div>

<<< ./docs/.vitepress/components/cache/UseStorageDemo.vue

<br />

## Return

| Property    | Type     | Description              |
| ----------- | -------- | ------------------------ |
| _itemValue_ | `Ref<T>` | the Storage item's value |

<br />

## Params

| Property       | Type     | Required | Default | Description                      |
| -------------- | -------- | -------- | ------- | -------------------------------- |
| _key_          | `string` | `true`   | -       | the Storage item's key name      |
| _defaultValue_ | `T`      | `false`  | `null`  | the defualt Storage item's value |
