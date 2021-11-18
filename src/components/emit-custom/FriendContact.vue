<template>
  <div class="friend-contact" :class="{'is-favorite': isFavorite}">
    <h2>{{ name }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetail">Show Details</button>
    <ul>
        <li>Phone: {{phone}}</li>
        <li>Email: {{email}}</li>
    </ul>
    {{students}}
  </div>
</template>

<script>
export default {
  name: 'FriendContact',
//   props: ['name', 'phone', 'email'],
  props: {
    id: {
        type: Number,
        required: true
    },
    name: String, // 10,
    phone: {
        type: Number, //Number Array Boolean Object Date Function Symbol
        required: true //Default: false
    },
    email: {
        type: String,
        default: 'lan123@gmail.com'  //String, Number, Boolean. Data ex: '', 10, true,
                                  //Array, Object. Data ex: function () { return []; }, () => {}
    },
    color: {
        type: Object,
        default: () => {}
    },
    listStudent: {
        type: Array,
        default: () => []
    },
    isFavorite: {
        type: Boolean,
        dafault: false
    }
  },
//   emits: ['eventToggleFavorite', 'eventToggleDetail'], // define custom events (),
  emits: {
      eventToggleFavorite: (id) => {
          console.log(id)
          if (id > 1) {
              return true
          } else {
              console.log('ID đang bé hơn hoăc = 1')
              return false
          }
      }
  },
  data() {
      return {
          demoData: ''
      }
  },
  methods: {
      toggleFavorite() {
        this.$emit('eventToggleFavorite', this.id)
      },
      toggleDetail() {
        this.$emit('eventToggleDetail', this.id)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
