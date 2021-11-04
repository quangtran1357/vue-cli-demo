<template>
  <div class="container">
    <friend-contact v-for="teacher in teachers"
    :id="teacher.id" 
    :name="teacher.name" 
    :phone="teacher.phone" 
    :email="teacher.email"
    :isFavorite="teacher.isFavorite"
    :key="teacher.id"
    @eventToggleFavorite="handleEventToggleFavorite"
    @eventToggleDetail="handleEventToggleDetail"
    />
  </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
  name: 'App',
  data() {
    return {
      teachers: [
        {
          id: 1,
          name: 'Quang',
          phone: 123123123,
          email: 'quang@gmail.com',
          isFavorite: false
        },
        {
          id: 2,
          name: 'Lan',
          phone: 321321321,
          email: 'lan@gmail.com',
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    handleEventToggleFavorite(id) {
      // Tất cả các cách đều được
      const teacherIndex = this.teachers.findIndex(item => item.id === id) //index
      if (teacherIndex >= 0) {
        const teacher = this.teachers[teacherIndex]
        teacher.isFavorite = !teacher.isFavorite
        // this.teachers[teacherIndex].isFavorite = !teacher.isFavorite
        
      }

      // const teacher = this.teachers.find(item => item.id === id)
      // if (teacher) {
      //   teacher.isFavorite = !teacher.isFavorite
      // }
    },
    handleEventToggleDetail(id) {
      console.log(id)
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
