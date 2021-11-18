<template>
    <div class="dynamic-component">
        <h1>Async Component demo</h1>
        <base-button>Async Component</base-button>
    </div>
</template>

<script>
// import BaseButton from '../slots/BaseButton.vue'
import {defineAsyncComponent} from 'vue'

export default {
    components: { 
        // BaseButton,
        // BaseButton: () => import('../slots/BaseButton.vue') // Vue2
        BaseButton: defineAsyncComponent(() => import('../slots/BaseButton.vue')) // Vue3
    },
    name: 'AsyncComponent'
}
</script>