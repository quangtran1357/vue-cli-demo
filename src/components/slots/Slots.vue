<template>
    <div class="slots">
        <h1>Slots demo</h1>
        <div>
            <container>
                <h2>Đây là content trong slot default</h2>
            </container>

            <container>
                <template v-slot:header>
                    <h3>Đây là header PAGE</h3>
                </template>
                <template v-slot:default>
                    <h3>Đây là content PAGE</h3>
                    <div class="row">row</div>
                    <div class="row">row</div>
                    <div class="row">row</div>
                </template>
                <template v-slot:footer>
                    <h3>Đây là footer PAGE</h3>
                </template>
            </container>

            <base-button>Cập nhật</base-button>
            <base-button>Thêm</base-button>
            <base-button>Xoá</base-button>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import Container from './Container.vue'

export default {
  components: { Container, BaseButton },
  name: 'Slots',
}
</script>