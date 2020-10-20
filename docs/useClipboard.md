---
title: useClipboard
---

# useClipboard

> Reactive [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). Provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. Access to the contents of the clipboard is gated behind the Permissions API; without user permission, reading or altering the clipboard contents is not permitted.

<br />

## Usage

<script>
import UseClipboardDemo from './.vitepress/components/UseClipboardDemo.vue'

export default {
  components: {
    UseClipboardDemo
  }
}
</script>
<UseClipboardDemo />

```vue
<template>
  <div>
    <template v-if="supported">
      <p>Current copied text: {{ text }}</p>
      <p>
        <input v-model="input" />
        <button @click="copy(input)">copy</button>
      </p>
    </template>
    <template v-else>
      It is seems like your browser does not support this fresh
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API"
        target="_blank"
        >Clipboard API</a
      >.
    </template>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useClipboard } from "vueposu";

export default {
  setup() {
    const input = ref();
    const { copy, text, supported } = useClipboard();

    return {
      input,
      copy,
      text,
      supported,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Result

| Property    | Type                              | Description                                          |
| ----------- | --------------------------------- | ---------------------------------------------------- |
| _copy_      | `(text: string) => Promise<void>` | writes the given string in the clipboard             |
| _text_      | `Ref<string>`                     | the current text in the clipboard                    |
| _supported_ | `boolean`                         | the current environment support Clipboard API or not |
