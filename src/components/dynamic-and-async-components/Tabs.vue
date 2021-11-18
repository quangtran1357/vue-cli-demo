<template>
    <div class="tabs">
        <h1 class="demo-tab">Dynamic and Async component demo</h1>
        <div id="dynamic-component-demo" class="demo">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="changeTab(tab.component)"
            >
                {{ tab.title }}
            </button>
            <!-- <keep-alive>
                <component :is="currentTab" class="tab"></component>
            </keep-alive> -->
            <component :is="currentTab" class="tab"></component>
        </div>
    </div>
</template>

<script>
import TabHome from './TabHome.vue'
import TabPost from './TabPost.vue'
import TabArchive from './TabArchive.vue'
export default {
    name: 'Tabs',
    components: {TabHome, TabPost, TabArchive},
    data() {
        return {
            currentTab: TabHome,
            tabs: [
                {
                    id: 1,
                    component: TabHome,
                    title: 'Tab Home'
                },
                {
                    id: 2,
                    component: TabPost,
                    title: 'Tab Post'
                },
                {
                    id: 3,
                    component: TabArchive,
                    title: 'Tab Archive'
                }
            ]
        }
    },
    // computed: {
    //     currentTabComponent() {
    //         return this.currentTab
    //     }
    // },
    methods: {
        changeTab(component) {
            this.currentTab = component
        }
    }
}
</script>