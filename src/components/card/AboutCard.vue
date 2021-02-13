<template>
    <main role="main" class="container col-md-9 m-0 p-0">
      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
        <img class="mr-3" src="https://getbootstrap.com/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">
        <div class="lh-100">
          <h6 class="mb-0 text-white lh-100">New Post</h6>
          <a href="" v-on:click="routeAddPost">Add Post</a>
          <small>Since 2011</small>
        </div>
      </div>
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span class="d-block">{{ user['fullname'] }}</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Email</strong>
              <a href="#">Follow</a>
            </div>
            <span class="d-block">{{ user['email'] }}</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Phone</strong>
              <a href="#">Follow</a>
            </div>
            <span class="d-block">{{ user['phone'] }}</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Mobile</strong>
              <a href="#">Follow</a>
            </div>
            <span class="d-block">{{ user['mobile'] }}</span>
          </div>
        </div>        
        <small class="d-block text-right mt-3">
          <a href="#">All suggestions</a>
        </small>
      </div>
    </main>
</template>
<script>

export default {
    data(){
        return{
            fullname: ''
        }
    },

    props:{
      user:{
        type: Array,
      }

    },

    methods:{
        routeAddPost(){
            this.$router.push('/newPost');
        }
    }
}
</script>
<style scoped>
.bg-purple { 
    background-color: #3542ef;    
}

span{
  font-size: 15px;
}


</style>