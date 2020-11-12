---
title: useLocalStorage
---

# useLocalStorage

> Reactive [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
>
> - You can storage `Array` and `PlainObject`.
> - You can use `localStorage.setItem` directly, it will effects and changes the localStorage item's value.
> - It will sync the localStorage item value when the page focus.

<br />

## Usage

<script>
import UseLocalStorageDemo from '../.vitepress/components/cache/UseLocalStorageDemo.vue'

export default {
  components: {
    UseLocalStorageDemo
  }
}
</script>
<div id="UseLocalStorageDemo" class="container">
  <UseLocalStorageDemo />
</div>

<<< ./docs/.vitepress/components/cache/UseLocalStorageDemo.vue

<br />

## Return

| Property    | Type     | Description                   |
| ----------- | -------- | ----------------------------- |
| _itemValue_ | `Ref<T>` | the localStorage item's value |

<br />

## Params

| Property       | Type     | Required | Default | Description                           |
| -------------- | -------- | -------- | ------- | ------------------------------------- |
| _key_          | `string` | `true`   | -       | the localStorage item's key name      |
| _defaultValue_ | `T`      | `false`  | `null`  | the defualt localStorage item's value |
