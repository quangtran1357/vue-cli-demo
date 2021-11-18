<template>
    <div class="tabs">
        <h1 class="demo-tab">Dynamic and Async component demo</h1>
        <div id="dynamic-component-demo" class="demo">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="changeTab(tab.componentName)"
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
import tabsMixin from '../../mixins/tabs.js'

export default {
    name: 'Tabs',
    mixins: [tabsMixin], // Mixin local
    components: {TabHome, TabPost, TabArchive},
    data() {
        return {
            currentTab: 'tab-home',
            // currentTab: TabHome,
            tabs: [
                {
                    id: 1,
                    component: TabHome,
                    title: 'Tab Home',
                    componentName: 'tab-home'
                },
                {
                    id: 2,
                    component: TabPost,
                    title: 'Tab Post',
                    componentName: 'tab-post'
                },
                {
                    id: 3,
                    component: TabArchive,
                    title: 'Tab Archive',
                    componentName: 'tab-archive'
                }
            ],
            tabIndex: 10
        }
    },
    methods: {
        changeTab(component) {
            this.currentTab = component
        }
    }
}
</script>