<template>
    <div>
        <button class="btn btn-primary" @click="followUser" v-text="buttonText"></button>
    </div>
</template>
<script>

import { userServiceApi } from '../services'

export default {
 
 props:['userId', 'follows'],
 
 mounted(){
     console.log('Component mounted');
 },

data: function(){
    return{
        status: this.follows,
    }
},
methods:{

    followUser() {
        userServiceApi.followUser(this.userId)
            .then(
                response => {
                    this.status = !this.status;
                    console.log(response);
                    //this.getProfile(this.userId);
                  this.$emit("update-profile");
                    
            })
            .catch(errors => {
                if (errors == 401) {
                    window.location = '/login';
                }
                        });
    }

},

computed:{
    buttonText(){
        return (this.status)? 'Unfollow': 'Follow'
    }
}

}
</script>
<style scoped>
    .btn-primary {
        height: 50px;
        width: 10vw;
        color: #fff;
        background-color: #007bff;
        border-radius: 35px;
        border: none;
    }


    .btn-primary:hover{
        background: rgb(49, 219, 15);
        color: #fff;
    }

</style>