<template>
    <div class="emit-custom">
        <h1>Emit Custom Event demo</h1>
        <div class="container">
            <friend-contact v-for="friend in friends"
                :id="friend.id"
                :name="friend.name"
                :phone="friend.phone"
                :email="friend.email"
                :isFavorite="friend.isFavorite"
                :key="friend.id"
                @eventToggleFavorite="handleEventToggleFavorite"
                @eventToggleDetail="handleEventToggleDetail"
            />
        </div>
    </div>
</template>

<script>
import FriendContact from "./FriendContact.vue"

export default {
    components: { FriendContact },
    name: 'EmitCustom',
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
    },
    methods: {
        handleEventToggleFavorite(id) {
        // Tất cả các cách đều được
        const friendIndex = this.friends.findIndex(item => item.id === id) //index
        if (friendIndex >= 0) {
            const friend = this.friends[friendIndex]
            friend.isFavorite = !friend.isFavorite
            // this.friend[friendIndex].isFavorite = !friend.isFavorite
            
        }
        // const friend = this.friends.find(item => item.id === id)
        // if (friend) {
        //   friend.isFavorite = !friend.isFavorite
        // }
        },
        handleEventToggleDetail(id) {
        console.log(id)
        }
    }
}
</script>