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
    <!-- <tabs/> -->
    <refs/>
  </div>
</template>

<script>
// import Tabs from './components/dynamicAndAsyncComponents/Tabs.vue'
import EmitCustom from './components/emitCustom/EmitCustom.vue'
import Parent from './components/props/Parent.vue'
import ProvideInject from './components/provideInject/ProvideInject.vue'
import ScopedSlot from './components/slots/ScopedSlot.vue'
import Slots from './components/slots/Slots.vue'
import Refs from './components/templateRefs/Refs.vue'
export default {
  components: { ProvideInject, Parent, EmitCustom, Slots, ScopedSlot, Refs },
  name: 'App'
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
