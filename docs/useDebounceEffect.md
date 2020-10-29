---
title: useDebounceEffect
---

# useDebounceEffect

> The debounce style side effect.

<br />

## Usage

<script>
import UseDebounceEffectDemo from './.vitepress/components/UseDebounceEffectDemo.vue'

export default {
  components: {
    UseDebounceEffectDemo
  }
}
</script>
<UseDebounceEffectDemo />

```vue
<template>
  <div>
    <p><input type="text" v-model="text" /></p>
    <p>
      Effect list:
      <ul>
        <li v-for="t in list">{{ t }}</li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import { useDebounceEffect } from "vueposu";

export default {
  setup() {
    const text = ref('');
    const list = reactive([]);

    useDebounceEffect(() => {
      list.push(text.value);
    }, text, 400);

    return {
      text,
      list,
    };
  },
};
</script>
```

<br />

<style>code { line-height: 1.85em; }</style>

## Params

| Property         | Type                                | Required     | Default | Description                                     |
| ---------------- | ----------------------------------- | ------------ | ------- | ----------------------------------------------- |
| _effectListener_ | `(value?: T, oldValue?: T) => void` | `true`       | `-`     | the debounced listener function to watch effect |
| _deps_           | `Ref<T>                             | Ref<T>[]`    | `true`  | `-`                                             | effect source |
| _wait_           | `number                             | Ref<number>` | `false` | `0`                                             | the number of milliseconds to delay |
