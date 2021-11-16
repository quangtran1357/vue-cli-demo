<template>
    <div class="lifecycle">
        <h1 id="lifecycle-title">{{text}}</h1>
        <button @click="changeText">Change Text</button>
    </div>
</template>

<script>

export default {
    name: 'Lifecycle',
    data() {
        return {
            text: 'lifecycle demo'
        }
    },
    watch: {
        text() {
            console.log('text thay đổi')
        }
    },
    methods: {
        changeText() {
            this.text='lifecycle demo changed'
        }
    },
    beforeCreate() {
        console.log(this.text)
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
        console.log(this.text)
        // Call API
    },
    beforeMount() {
        console.log('beforeMount')
        console.log(document.getElementById('lifecycle-title'))
    },
    //render
    mounted() {
        // Call API
        // Sử dụng nhiều nhất vì mọi thứ đã được khởi tạo và kết xuất
        console.log('mounted')
        console.log(document.getElementById('lifecycle-title'))
    },
    beforeUpdate() {
        console.log(this.text)
        console.log('beforeUpdate')
    },
    //render
    updated() {
        console.log('updated')
        console.log(this.text)
    },
    // beforeDestroy() { //Vue 2
    //     console.log('beforeDestroy')
    // },
    // destroyed() { //Vue 2
    //     console.log('destroyed')
    // },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
        alert('Component Lifecycle đã bị mất!!!')
    }
}
</script>