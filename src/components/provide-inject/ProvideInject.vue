<template>
  <div class="container">
      <h1>Provide and Inject demo</h1>
      <h1>Đây là thằng cha</h1>
      <provide-inject-child :items="items" />
  </div>
</template>

<script>
import { computed } from 'vue'
import ProvideInjectChild from './ProvideInjectChild.vue'
export default {
  name: 'ProvideInject',
  components: {ProvideInjectChild},
  // provide: {
  //   user: 'Join'
  // },
  provide() { // Nhà cung cấp
    return {
      // itemsProvide: this.items, // Vue2 syntax, data static
      itemsProvide: computed(() => this.items), // Vue3 syntax, data can be reactive
      changeDataItems: this.changeDataItems
    }
  },
  data() {
    return {
      items: [1,2,3]
    }
  },
  methods: {
    changeDataItems() {
      this.items = [4,5,6]
    }
  }
}
</script>

<style>
</style>
