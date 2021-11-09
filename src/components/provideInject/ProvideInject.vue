<template>
  <div class="container">
      <h1>Provide and Inject demo</h1>
      <h1>Đây là thằng cha</h1>
      <provide-inject-child :items="items" />
  </div>
</template>

<script>
import ProvideInjectChild from './ProvideInjectChild.vue'
export default {
  name: 'ProvideInject',
  components: {ProvideInjectChild},
  // provide: {
  //   user: 'Join'
  // },
  provide() { // Nhà cung cấp
    return {
      itemsProvide: this.items,
      alertDemo: this.alertDemo
    }
  },
  data() {
    return {
      items: [1,2,3]
    }
  },
  methods: {
    alertDemo() {
      alert('demo hehe')
    }
  }
}
</script>

<style>
</style>