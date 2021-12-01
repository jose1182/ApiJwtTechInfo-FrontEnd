<template>
    <main role="main" class="container col-md-9 m-0 p-0">
      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-white rounded box-shadow">
        <img class="mr-3" src="@/assets/img/default-avatar.png" alt="" width="48" height="48">
            <b-button block pill variant="outline-secondary"  class="btn" id="resetModal" @click="routeAddPost"> New post</b-button>
      </div>
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Full Name</strong>
                <img class="img ml-3" src="@/assets/icons/edit.svg"/> 
            </div>
            <span class="d-block">{{ user.fullname}}</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Email</strong>
            </div>
            <span class="d-block">{{ user.email}}</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Phone</strong>
            </div>
            <span class="d-block">{{user.phone}}</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-gray-dark">Mobile</strong>
            </div>
            <span class="d-block">{{ user.mobile }}</span>
          </div>
        </div>       
        <small class="d-block text-right mt-3">
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
        type: Object,
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
  .bg-white { 
      background-color: #fafaff;    
  }

  span{
    font-size: 15px;
  }

  .btn{
      text-align: left;
      height: 50px;
  }
  .img{
    width: 20px;
    height: 20px;
}



</style>