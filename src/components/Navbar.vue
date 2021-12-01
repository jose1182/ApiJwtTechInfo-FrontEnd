<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light p-0 m-0 fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="text-logo align-text-item pl-5">
      <span>Family Tech</span>
    </div>
    <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto ml-auto justify-content-center">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="routeAllPosts()">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
          </ul>
          <div v-if="!status.loggedIn" class="text-login justify-content-center align-text-item pr-3">
            <i class="fas fa-search mx-3"></i>
            <span class="mx-3">Are you menber?</span> 
            <a class="mr-1 font-weight-bold" v-on:click="routeRegister()">Register </a>/<a  class="ml-1 font-weight-bold" v-on:click="routeLogin()">Log In</a> 
          </div>
          <div v-if="status.loggedIn" class="mr-5">
            <ul>
              <li class="nav-item dropdown text-login">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{user.user.name}}</a>
                  <div class="dropdown-menu p-0" aria-labelledby="dropdown01">
                  <a class="dropdown-item" v-on:click="logout" href="#">Logout</a>
                  <a class="dropdown-item" v-on:click="myProfile(user.user.id, user.user.name)">Edit Profile-{{user.user.id}}</a>
                  <a class="dropdown-item" href="#">???</a>
                  </div>
              </li>
            </ul>
          </div>
          <div v-if="!p">
              <Modal @update="reloadData"> </Modal>
          </div>
    </div>
  </nav>
</div>

</template>
<script>

import { mapState, mapActions} from 'vuex'
import Modal from '../components/card/Modal'

export default {
    name: 'Navbar',
   
    components:{
      Modal
    },

    data(){
        return{
            nameDefault: 'user'
        }
    },
    props:['p'],

    computed:{
        ...mapState('account',['status', 'user']),

        ...mapState({
            profile: state => state.profile.all.item,    
        }),

        ...mapState({
            categories: state => state.category.all.items,    
        }),
    },

    methods:{

        ...mapActions('account',['logout']),
        ...mapActions('posts', {
            getAllInHome: 'getAllInHome'
        }),

        ...mapActions('profile', {
            getProfile: 'getProfile',
        }),

        ...mapActions('category',['getCategory']),

        routeEditProfile(){
            this.$router.push('/profile');
        },
        routeAllPosts(){
            this.$router.push('/posts');           
        },
        routeLogin(){
            this.$router.push('/login');
        },
        routeRegister(){
            this.$router.push('/register');
        },

        reloadData(){
           this.getAllInHome();
           this.getProfile(this.user.user.id)
        },
        myProfile(id, name){
          this.$router.push({ name: 'Posts', params: { userId:  id, userName: name}})
        },
   
    },

    mounted(){
      this.getCategory();
    }
}
</script>
<style scoped>

*{
  margin: 0%;
  padding: 0%;
}

.navbar {
  height: 75px;
  border: none;
}

img {
  width: 120px;
}
ul li a {
  font-size: 1.2rem;
}

.text-login a {
  font-weight: normal;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-size: 0.9rem;
}

.text-login span {
  font-size: 0.9rem;
  text-transform: uppercase;
}

.text-logo span{
  font-size: 3rem;
  font-family: 'Faster One', cursive;;
}

ul {
  list-style: none;
}


@media (min-width: 375px){

  .text-logo span{
  font-size: 2rem;
  font-family: 'Faster One', cursive;
  }

.text-login{
  display: block!important;
  text-align: center;
}

}


.nav-item {
  margin: 20px;
}

</style>