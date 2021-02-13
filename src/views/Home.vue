<template>
  <div class="home">
    <Navbar/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  computed:{
    ...mapState({
      account: state => state
    })
  }
}
</script>
<style scoped>


</style>
