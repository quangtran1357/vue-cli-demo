<template>
  <!-- Scoped Slots -->
  <ul class="friend-list">
    <li v-for="(friend, index) in items" :key="index">
        <slot :item="friend" :keyIndex="index"></slot>
        <!-- :item, :keyIndex -> Tên biến muốn truyền ra ngoài, đặt bất kỳ -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FriendList',
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