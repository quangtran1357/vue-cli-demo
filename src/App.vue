<template>
  <div class="wrap">
    <parent />
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <emit-custom/>
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <slots/>
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <scoped-slot/>
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <provide-inject/>
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <tabs/>
    <dynamic-component/>
    <async-component/>
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <refs/>
    <br>
    <div>---------------------------------------------------------------------------------------------------------------------------------</div>
    <br>
    <lifecycle v-if="isShowLifecycle"/>
    <button @click="isShowLifecycle = !isShowLifecycle">Toggle Lifecycle</button>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'
// import AsyncComponent from './components/dynamic-and-async-components/AsyncComponent.vue'
import DynamicComponent from './components/dynamic-and-async-components/DynamicComponent.vue'
import Tabs from './components/dynamic-and-async-components/Tabs.vue'
import EmitCustom from './components/emit-custom/EmitCustom.vue'
import Parent from './components/props/Parent.vue'
import ProvideInject from './components/provide-inject/ProvideInject.vue'
import ScopedSlot from './components/slots/ScopedSlot.vue'
import Slots from './components/slots/Slots.vue'
import Refs from './components/template-refs/Refs.vue'
import Lifecycle from './components/lifecycle/Lifecycle.vue'
export default {
  components: {
    ProvideInject,
    Parent,
    EmitCustom,
    Slots,
    ScopedSlot,
    Tabs,
    Refs,
    DynamicComponent,
  // AsyncComponent
    AsyncComponent: defineAsyncComponent(() => import('./components/dynamic-and-async-components/AsyncComponent.vue')),
    Lifecycle
  },
  name: 'App',
  data() {
    return {
      isShowLifecycle: true
    }
  },
  mounted() {
    // Cookie
    // const d = new Date();
    // d.setTime(d.getTime() + (5*1000));
    // let expires = "expires="+ d.toUTCString();
    // document.cookie = `username=Quang Tran; expires=${expires}`

    // LocalStorage
    // localStorage.setItem('dataDemoLocalStorage', 'demo demo demo')
    // console.log(localStorage.getItem('dataDemoLocalStorage'))
    // localStorage.removeItem('dataDemoLocalStorage')
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
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
.is-favorite {
    background-color: wheat
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
</style>
