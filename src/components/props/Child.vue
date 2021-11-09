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
  },
  data() {
    return {
      text: 'Đây là data của parent'
    }
  }
}
</script>

<style>
</style>