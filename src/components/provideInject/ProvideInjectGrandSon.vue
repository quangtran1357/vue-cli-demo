<template>
  <div class="container">
    <h4>Đây là thằng cháu</h4>
    <p>Đây là prop: {{ items }} (prop được truyền từ cha -> con -> cháu)</p>
    <p>Đây là data được gói bởi Provide: {{itemsProvide}} (Được gói bởi cha, inject trực tiếp vào thằng cháu)</p>
    <button @click="changeDataItems">Change Data Items</button>
  </div>
</template>

<script>
export default {
  name: 'ProvideInjectGrandSon',
  inject: ['itemsProvide', 'changeDataItems'],
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style>
</style>