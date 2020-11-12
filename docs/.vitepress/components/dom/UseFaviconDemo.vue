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
        reader.onloadend = (theFile) => {
          icon.value = theFile.target.result;
          setTimeout(() => {
            target.value = null;
          })
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
.upload {
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

.upload img {
  width: 104px;
  height: 104px;
}

.upload input[type="file"] {
  width: 128px;
  height: 128px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  position: absolute;
}
</style>