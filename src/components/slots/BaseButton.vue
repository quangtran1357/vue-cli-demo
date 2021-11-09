<template>
  <button class="base-button" :class=[className]>
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
      className: {
          type: String,
          default: ''
      }
  }
}
</script>

<style>
</style>