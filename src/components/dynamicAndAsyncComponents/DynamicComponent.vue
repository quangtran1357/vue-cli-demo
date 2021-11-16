<template>
    <div class="dynamic-component">
        <h1>Dynamic Component demo</h1>
        <component :is="component"></component>

        <button @click="changeComponent">Change component</button>
    </div>
</template>

<script>
import TabHome from './TabHome.vue'
import TabPost from './TabPost.vue'
import TabArchive from './TabArchive.vue'
export default {
  components: { TabHome, TabPost, TabArchive },
    name: 'DynamicComponent',
    data() {
        return {
            component: TabPost
        }
    },
    computed: {
        currentComponent() {
            return this.component;
        }
    },
    methods: {
        changeComponent() {
            this.component = TabArchive
        }
    }
}
</script>