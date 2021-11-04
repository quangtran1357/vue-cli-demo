<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <p>----------------------------------------</p>=
  <!-- <hello-world /> -->
  <teacher-item />
  <TeacherItem />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TeacherItem from './components/teachers/item.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TeacherItem
  },
  data() {
    return {
      demo: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
