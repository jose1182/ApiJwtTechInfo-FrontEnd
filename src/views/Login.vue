<template>
<div class="container-fluid h-100 m-0 p-0">
    <div class="row align-items-center header">
        <LoginCard/>
    </div>
</div>
</template>
<script>

import LoginCard from '../components/Login/LoginCard'

export default {
    name: 'Login',
    components:{
        LoginCard
    },

    data(){
        return{

        }
    },
}
</script>
<style scoped>

.header{
    width: 100%;
    min-height: 100vh;
    margin: 0;
    background-image: url(../assets/img/home.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    background-attachment: fixed;

}

</style>
