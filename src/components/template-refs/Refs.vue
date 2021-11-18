<template>
  <div class="refs">
        <!-- Refs dùng để truy xuất trực tiếp tới 1 đối tượng element hoặc 1 component nào đó -->
        <h1>Refs demo</h1>
        
        <div id="ref-div" ref="refDiv">
            <p>Ref div demo</p>
        </div>
        <p>Input ref element</p>
        <input id="input-name" class="input-name" type="text" ref="refInput">
        <br>
        <br>
        <button @click="focusInput">Focus Input</button>
        <br>
        <p>Input ref component</p>
        <refs-input ref="refInputComponent" />
        <br>
        <button @click="focusInputComponent">Focus Input Component</button>
  </div>
</template>

<script>
import RefsInput from './RefsInput.vue'
export default {
  components: { RefsInput },
  name: 'Refs',
  methods: {
      focusInput() {
        console.log(this.$refs)
        console.log(document.getElementById('input-name'))
        console.log(this.$refs.refInput)
        this.$refs.refInput.value = 'Quang 123'
        this.$refs.refInput.focus()
      },
      focusInputComponent() {
        const refInputComponent = this.$refs.refInputComponent
        console.log(refInputComponent.$refs.refInput)
        refInputComponent.$refs.refInput.focus()
      }
  }
}
</script>

<style>
</style>