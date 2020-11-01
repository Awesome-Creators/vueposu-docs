<template>
  <div>
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