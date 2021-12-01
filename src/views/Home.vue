<template>
  <div class="home">
    <Navbar/>
    <Carrousel/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Carrousel from '../components/Carrousel.vue'
import Content from '../components/Content/Content.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carrousel,
    Content,
    Footer
  },
}
</script>
<style scoped>

</style>
