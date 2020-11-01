---
title: useClipboard
---

# useClipboard

> Reactive [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). Provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. Access to the contents of the clipboard is gated behind the Permissions API; without user permission, reading or altering the clipboard contents is not permitted.

<br />

## Usage

<script>
import UseClipboardDemo from '../.vitepress/components/dom/UseClipboardDemo.vue'

export default {
  components: {
    UseClipboardDemo
  }
}
</script>
<div id="UseClipboardDemo" class="container">
  <UseClipboardDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseClipboardDemo.vue

<br />

## Result

| Property    | Type                              | Description                                          |
| ----------- | --------------------------------- | ---------------------------------------------------- |
| _copy_      | `(text: string) => Promise<void>` | writes the given string in the clipboard             |
| _text_      | `Ref<string>`                     | the current text in the clipboard                    |
| _supported_ | `boolean`                         | the current environment support Clipboard API or not |
