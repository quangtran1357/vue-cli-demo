<template>
  <div class="container">
      <h1>Props demo</h1>
      <!-- Props là 1 custom attributes, thuộc tính đặc biệt có thẻ đăng ký ở trên component.
      props dùng để truyền data từ component cha xuống component con (cha -> con -> cháu -> chắt) -->
      <child :dataProp='text' />
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: { Child },
  name: 'Parent',
  data() {
    return {
      text: 'Đây là data của parent'
    }
  }
}
</script>

<style>
</style>