<template>
<div class="container-fluid m-0 p-0">
    <div class="pt-3 m-0">
        <router-link class="bg-color" to="/">Home</router-link>
        <router-link class="bg-color ml-2" to="/login">Login</router-link>
    </div>
    <div class="row  d-flex justify-content-center align-items-center">
        <div class="m-4 col-sm-4">
            <div v-if="alert.message" :class="`alert ${alert.type}`">
                <p class="text-center m-0">{{alert.message}}</p>
            </div>
            <div>
                <RegisterCard/>
            </div>
        </div>
    </div>
</div>
</template>
<script>

import RegisterCard from '../components/Login/RegisterCard'
import {mapState, mapActions } from 'vuex'


export default {
    name: 'Register',
    components:{
        RegisterCard
    },
    data(){
        return{

        }
    },
    created(){
        this.clearAlert()
    },
    computed:{
        ...mapState({ 
            alert : state => state.alert
        })
    },
    methods:{
        ...mapActions({
            clearAlert: 'alert/clear'
        })
    },
    watch:{
        $route (){
            this.clearAlert()
        }
    }
}
</script>
<style scoped>

.bg-color{
    color: #fff;
}

.container-fluid{
    height: 100vh;
    background: #5654E6;
}


</style>
