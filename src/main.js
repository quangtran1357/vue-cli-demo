import { createApp } from 'vue'
import App from './App.vue'
// import demo from './assets/js/demo'
// import {addTwoNumbers, VARIABLE} from './util.js'
// import * as util from './util.js'
// import customNameByExportDefault from './util.js'

const vue = createApp(App)
// Mixin global
// vue.mixin({
//     data() {
//         return {
//             demoGlobal: 'demo global'
//         }
//     }
// })
// vue.component('base-button', BaseButton)
vue.mount('#app')

// console.log(addTwoNumbers(5, 10))

// console.log(util)
// console.log(util.addTwoNumbers(5, 10))
// console.log(util.VARIABLE)
