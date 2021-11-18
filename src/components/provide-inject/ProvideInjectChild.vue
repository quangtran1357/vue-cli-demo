<template>
  <div class="container">
    <h3>Đây là thằng con</h3>
    <provide-inject-grand-son :items="items" />
  </div>
</template>

<script>
import ProvideInjectGrandSon from './ProvideInjectGrandSon.vue'
export default {
  components: { ProvideInjectGrandSon },
  name: 'ProvideInjectChild',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>