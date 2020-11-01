---
title: useFullscreen
---

# useFullscreen

> A hook that can display the target element in full screen.

<br />

## Usage

<script>
import UseFullscreenDemo from '../.vitepress/components/dom/UseFullscreenDemo.vue'

export default {
  components: {
    UseFullscreenDemo
  }
}
</script>
<div id="UseFullscreenDemo" class="container">
  <UseFullscreenDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseFullscreenDemo.vue

<br />

## Result

| Property           | Type               | Description            |
| ------------------ | ------------------ | ---------------------- |
| _isFullscreen_     | `Ref<boolean>`     | full screen status     |
| _enterFullscreen_    | `() => void`       | enter full screen        |
| _exitFullscreen_   | `() => void`       | exit full screen       |
| _toggleFullscreen_ | `(status?: boolean | Ref<boolean>) => void` | toggle full screen status |

<br />

## Params

| Property                   | Type         | Required          | Default           | Description                            |
| -------------------------- | ------------ | ----------------- | ----------------- | -------------------------------------- |
| _target_                   | `HTMLElement | () => HTMLElement | Ref<HTMLElement>` | `true`                                 | - | full screen target |
| _onFullscreenStatusChange_ | `() => void` | `false`           | -                 | handler for full screen status changed |
