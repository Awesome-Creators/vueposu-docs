---
title: useEventListener
---

# useEventListener

> A hook that register using [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on mounted, and [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) automatically on unmounted.

<br />

## Usage

<script>
import UseEventListenerDemo from '../.vitepress/components/dom/UseEventListenerDemo.vue'

export default {
  components: {
    UseEventListenerDemo
  }
}
</script>
<div id="UseEventListenerDemo" class="container">
  <UseEventListenerDemo />
</div>

<<< ./docs/.vitepress/components/dom/UseEventListenerDemo.vue

<br />

## Params

| Property       | Type                     | Required                 | Default     | Description       |
| -------------- | ------------------------ | ------------------------ | ----------- | ----------------- |
| _target_       | `Window                  | Document                 | HTMLElement | () => HTMLElement | Ref<HTMLElement>` | `false` | `window` | execution handler target |
| _eventName_    | `string                  | Ref<string>`             | `true`      | -`                | event trigger |
| _eventHandler_ | `(event: Event) => void` | `true`                   | -           | handler function  |
| _options_      | `boolean                 | AddEventListenerOptions` | `false`     | `false`           | an options object specifies characteristics about the event listener |
