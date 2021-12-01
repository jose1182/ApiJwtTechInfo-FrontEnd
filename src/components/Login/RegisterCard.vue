<template>
   <div class="container text-left col-sm-12 m-0 p-0">
        
            <b-card class="shadow col-lg-12 p-3 mb-5 bg-white rounded">
                <h2>Register</h2>
                    <b-form @submit.prevent="submit">
                        <div class="d-flex justify-content-center">
                            <div class="col-lg-6 col-sm-2 m-0 p-0">
                                <label class="title-sr-only m-0" for="inline-form-input-login" >Login</label>
                                <b-form-input
                                id="inline-form-input-login"
                                placeholder=" Login not available"
                                v-model="login" 
                                class="mb-2 p-0"
                                disabled
                                ></b-form-input>
                            </div>
                            
                            <div class="col-lg-6 ml-2 p-0">
                                <label class="title-sr-only m-0" for="inline-form-input-phone" >Phone Number</label>
                                <b-input-group prepend="#" class="p-0 m-0">
                                <b-form-input 
                                    id="inline-form-input-phone" 
                                    v-model="user.phonenumber" 
                                    placeholder="Phone" 
                                ></b-form-input>
                                </b-input-group>
                            </div>

                        </div>

                        <div>
                            <label class="title-sr-only mt-3 mb-0" for="inline-form-input-name">Name</label>
                            <b-form-input 
                            id="inline-form-input-name" 
                            placeholder=" Name"
                            v-model="user.name"
                            class="mb-2 p-0"
                            ></b-form-input>
                        </div>

                        <div>
                            <label class="title-sr-only mt-3 mb-0" for="inline-form-input-surname">Last Name</label>
                            <b-form-input 
                            id="inline-form-input-surname" 
                            placeholder=" Last Name"
                            v-model="user.surname"
                            class="mb-2 p-0"
                            ></b-form-input>
                        </div>
                        <div>
                            <label class="title-sr-only mt-3 mb-0" for="inline-form-input-password">Email</label>
                            <b-form-input 
                            id="inline-form-input-Email" 
                            placeholder=" Email"
                            v-model="user.email"
                            class="mb-2 p-0"
                            ></b-form-input>
                        </div>
                        <div>
                            <label class="title-sr-only mt-3 mb-0" for="inline-form-input-confirmEmail">Confirm Email</label>
                            <b-form-input 
                            id="inline-form-input-confirmEmail" 
                            placeholder=" Confirm Email"
                            v-model="email_confirm"
                            class="mb-2 p-0" 
                            ></b-form-input>
                        </div>
                        <div>
                            <label class="title-sr-only mt-3 mb-0" for="inline-form-input-password">Password</label>
                            <b-form-input 
                            id="inline-form-input-Pasword"
                            type="password" 
                            placeholder=" Password"
                            v-model="user.password"
                            class="mb-2 p-0" 
                            ></b-form-input>                 
                        </div>                    

                        <div>
                            <label class="title-sr-only mt-3 mb-0" for="inline-form-input-confirmPassword">Confirm Password</label>
                            <b-form-input 
                            id="inline-form-input-confirmPassword" 
                            type="password"
                            placeholder=" Confirm Password"
                            v-model="user.password_confirmation"
                            class="mb-2 p-0"
                            ></b-form-input>
                        </div>

                        <b-button block class="btn btn-primary my-4" type="submit" variant="primary">Submit</b-button>

                    </b-form>                   
            </b-card>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'

export default {

    data(){
        return{
            user:{
                name: "",
                surname: "",
                phonenumber: "",
                email: "",
                password: "",
                password_confirmation:""
            },
            login:"",
            newUser:{},
            email_confirm: "",
            password_confirm: "",
            submitted: false,
            show: false,
            msgAct : ''

        }
    },

    computed:{
        ...mapState('account', ['status'])
    },
    methods:{
        ...mapActions('account', ['register']),
        submit(){
            const formUser = new FormData();
            formUser.append('name', this.user.name);
            formUser.append('surname', this.user.surname);     
            formUser.append('phonenumber', this.user.phonenumber);       
            formUser.append('email', this.user.email);
            formUser.append('password', this.user.password);
            formUser.append('password_confirmation', this.user.password_confirmation);
            this.submitted = true;
            this.register(formUser);
        }
    }

}
</script>
<style scoped>

.container-card{
    width: auto;
}

label{
     font-weight: bold;
}

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