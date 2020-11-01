---
title: useMouse
---

# useMouse

> A hook that can track cursor position.

<br />

## Usage

<script>
import UseMouseDemo from '../.vitepress/components/sensors/UseMouseDemo.vue'

export default {
  components: {
    UseMouseDemo
  }
}
</script>
<div id="UseMouseDemo" class="container">
  <UseMouseDemo />
</div>

<<< ./docs/.vitepress/components/sensors/UseMouseDemo.vue

<br />

## Result

| Property  | Type          | Description                                                                        |
| --------- | ------------- | ---------------------------------------------------------------------------------- |
| _pageX_   | `Ref<number>` | the horizontal coordinate relative to the left edge of the entire document         |
| _pageY_   | `Ref<number>` | the vertical coordinate relative to the left edge of the entire document           |
| _screenX_ | `Ref<number>` | the horizontal coordinate offset of the mouse pointer in global screen coordinates |
| _screenY_ | `Ref<number>` | the vertical coordinate offset of the mouse pointer in global screen coordinates   |
| _clientX_ | `Ref<number>` | the horizontal coordinate within the application's viewport                        |
| _clientY_ | `Ref<number>` | the vertical coordinate within the application's viewport                          |
