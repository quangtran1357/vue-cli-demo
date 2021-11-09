<template>
  <div class="container">
      <p>{{dataProp}}</p>
      <!-- dataProp là prop được truyền từ component cha (Parent.vue) -->
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    dataProp: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>