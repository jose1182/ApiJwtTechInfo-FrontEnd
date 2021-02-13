<template>
   <div class="container text-left col-sm-4 mt-5">
        
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
                    id="inline-form-input-Pasword" 
                    placeholder=" Password"
                    v-model="password"
                    class="mb-2 p-0" 
                    ></b-form-input>                    
                </div>                    
    {{email}} {{password}}
                <b-button block class="mt-4" type="submit" variant="primary">SignIn</b-button>

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
            password:''
        }
    },

    computed:{
        ...mapState('account',['status'])
    },


    methods:{
        ...mapActions('account', ['login']),
        submit(){
            console.log("I mm pulse");
            const {email, password} = this;
            this.login({email, password});
        }

    },

}
</script>