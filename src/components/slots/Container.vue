<template>
  <div class="container" :class=[className]>
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contaier',
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