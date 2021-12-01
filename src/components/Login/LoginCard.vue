<template>
   <div class="container text-left col-sm-12 m-0 p-0">
        
       <b-card class="shadow col-lg-12 p-3 mb-5 bg-white rounded">
           <h2>Login</h2>
            <b-form @submit.prevent="submit">
                                   
                <div>
                    <label class="title-sr-only m-0" for="inline-form-input-username" >User Name</label>
                    <b-input-group prepend="@" class="p-0 m-0">
                    <b-form-input 
                        id="inline-form-input-username" 
                        v-model="email" 
                        placeholder="Username o email"
                    ></b-form-input>
                    </b-input-group>

                </div>
                <div>
                    <label class="title-sr-only mt-3 mb-0" for="inline-form-input-password">Password</label>
                    <b-form-input
                    type="password" 
                    id="inline-form-input-Pasword" 
                    placeholder=" Password"
                    v-model="password"
                    class="mb-2 p-0" 
                    ></b-form-input>                    
                </div>                    

                <b-button block class="btn btn-primary my-4" type="submit" variant="primary">SignIn</b-button>
                <router-link to="/register"><span class="color-text">Not a menber yet?</span>  <a> Sign Up</a> .</router-link> 
            </b-form>                  
       </b-card>
    </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: 'Login',
    data(){
        return{
            email:'',
            password:'',
            submitted: false
        }
    },

    computed:{
        ...mapState('account',['status'])
    },


    methods:{
        ...mapActions('account', ['login']),
        submit(){
            this.submitted = true;
            const {email, password} = this;
            if(email && password){
             this.login({email, password});
            }
        }
    },

}
</script>
<style scoped>

.btn-primary {
    height: 40px;
    width: 100%;
    color: #fff;
    background-color: #007bff;
    border-radius: 35px;
    border: none;
}

.color-text{
    color: black;
}
</style>