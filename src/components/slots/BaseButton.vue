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

<style scoped>
.base-button {
  font-size: 50px;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>