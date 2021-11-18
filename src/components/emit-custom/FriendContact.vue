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
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
