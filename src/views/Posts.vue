<template>
    <div class="row centered-form center-block content">
        <div class="container col-md-10 col-md-offset-1">
            <div class="row">
                <NavbarProfile/>
            </div>
        </div>
    </div>
</template>
<script>


import NavbarProfile from '../components/navbar/NavbarProfile'

export default {
    name: 'Posts',

    components:{
        NavbarProfile,
    },

    data(){
        return{
           posts: {},

        }
    },
    
}
</script>
<style scoped>


.content{
    margin-top: 80px;
    background: #d8dbe9;
    padding-top: 40px;

}
.about{
    display: flex;

}

@media (max-width: 428px){

.about{
    display: block;
    align-items: center;
   
}
.card-margin{
    margin: 0%;
    padding: 0%;
}

}
