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
// import AsyncComponent from './components/dynamicAndAsyncComponents/AsyncComponent.vue'
import DynamicComponent from './components/dynamicAndAsyncComponents/DynamicComponent.vue'
import Tabs from './components/dynamicAndAsyncComponents/Tabs.vue'
import EmitCustom from './components/emitCustom/EmitCustom.vue'
import Parent from './components/props/Parent.vue'
import ProvideInject from './components/provideInject/ProvideInject.vue'
import ScopedSlot from './components/slots/ScopedSlot.vue'
import Slots from './components/slots/Slots.vue'
import Refs from './components/templateRefs/Refs.vue'
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
    AsyncComponent: defineAsyncComponent(() => import('./components/dynamicAndAsyncComponents/AsyncComponent.vue')),
    Lifecycle
  },
  name: 'App',
  data() {
    return {
      isShowLifecycle: true
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
</style>
