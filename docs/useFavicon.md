---
title: useFavicon
---

# useFavicon

> A hook that can change the favicon.

<br />

## Usage

<script>
import UseFaviconDemo from './.vitepress/components/UseFaviconDemo.vue'

export default {
  components: {
    UseFaviconDemo
  }
}
</script>
<UseFaviconDemo />

```vue
<template>
  <div class="container">
    <span class="upload">
      <img v-if="icon" :src="icon" />
      <template v-else>Upload icon</template>
      <input type="file" @change="change" />
    </span>
    <button v-if="icon" @click="restore">restore icon</button>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { useFavicon } from "vueposu";

export default {
  setup() {
    const icon = ref();
    const { changeIcon, restoreIcon } = useFavicon();

    const change = ({ target }: Event) => {
      const file = target.files[0];
      if (file && file.type.indexOf("image") === 0) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          icon.value = this.result;
        };
      }
    };

    const restore = () => {
      icon.value = null;
      restoreIcon();
    };

    watch(icon, () => {
      if (icon.value) {
        changeIcon(icon.value);
      }
    });

    return {
      icon,
      change,
      restore,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-end;
}

.container .upload {
  width: 128px;
  height: 128px;
  border-radius: 2px;
  border: 1px dashed var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.container .upload img {
  width: 104px;
  height: 104px;
}

.container .upload input[type="file"] {
  width: 128px;
  height: 128px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  position: absolute;
}

.container button {
  margin-left: 12px;
}
</style>
```

<br />

<style>code { line-height: 1.85em; }</style>

<br />

## Result

| Property      | Type                    | Description                                     |
| ------------- | ----------------------- | ----------------------------------------------- |
| _changeIcon_  | `(url: string) => void` | function which can change favicon               |
| _restoreIcon_ | `() => void`            | function which will restore to original favicon |
