<template>
    <div class="tabs">
        <h2 class="demo-tab">Home component</h2>
        <div id="dynamic-component-demo" class="demo">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab.title"
            >
                {{ tab }}
            </button>
            <component :is="TabHome" class="tab"></component>
        </div>
    </div>
</template>

<script>
import TabHome from './TabHome.vue'
import TabPost from './TabPost.vue'
import TabArchive from './TabArchive.vue'
export default {
    name: 'Tabs',
    data() {
        return {
            currentTab: TabHome,
            tabs: [
                {
                    id: 1,
                    component: TabHome,
                    title: 'TabHome'
                },
                {
                    id: 2,
                    component: TabPost,
                    title: 'TabPost'
                },
                {
                    id: 3,
                    component: TabArchive,
                    title: 'TabArchive'
                }
            ]
        }
    },
    computed: {
        currentTabComponent() {
            return this.currentTab
        }
    }
}
</script>