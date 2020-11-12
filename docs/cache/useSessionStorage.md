---
title: useSessionStorage
---

# useSessionStorage

> Reactive [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
>
> - You can storage `Array` and `PlainObject`.
> - You can use `sessionStorage.setItem` directly, it will effects and changes the sessionStorage item's value.
> - It will sync the sessionStorage item value when the page focus.

<br />

## Usage

<script>
import UseSessionStorageDemo from '../.vitepress/components/cache/UseSessionStorageDemo.vue'

export default {
  components: {
    UseSessionStorageDemo
  }
}
</script>
<div id="UseSessionStorageDemo" class="container">
  <UseSessionStorageDemo />
</div>

<<< ./docs/.vitepress/components/cache/UseSessionStorageDemo.vue

<br />

## Return

| Property    | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| _itemValue_ | `Ref<T>` | the sessionStorage item's value |

<br />

## Params

| Property       | Type     | Required | Default | Description                             |
| -------------- | -------- | -------- | ------- | --------------------------------------- |
| _key_          | `string` | `true`   | -       | the sessionStorage item's key name      |
| _defaultValue_ | `T`      | `false`  | `null`  | the defualt sessionStorage item's value |
