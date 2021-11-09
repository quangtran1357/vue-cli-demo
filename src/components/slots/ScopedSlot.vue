<template>
    <div class="slots">
        <h1>Scoped Slot demo</h1>
        <!-- const {item} = slotProps -->
        <friend-list :items="friends" v-slot:default="{item}">
            <!-- <friend-list :friends="friends" v-slot:default="slotProps"> -->
            <!-- slotProps sẽ là biến chứa tất cả các biến được truyền ra ngoài -->
            <!-- {{slotProps.item}} -->
            {{item.name}} - {{item.email}} - {{item.phone}}
        </friend-list>
    </div>
</template>

<script>
import FriendList from './FriendList.vue'
export default {
    components: { FriendList },
    name: 'ScopedSlot',
    data() {
        return {
            friends: [
                {
                    id: 1,
                    name: 'Quang',
                    phone: 123123123,
                    email: 'quang@gmail.com',
                    isFavorite: false
                },
                {
                    id: 2,
                    name: 'Lan',
                    phone: 321321321,
                    email: 'lan@gmail.com',
                    isFavorite: false
                }
            ]
        }
    }
}
</script>