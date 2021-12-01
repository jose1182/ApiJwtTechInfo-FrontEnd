<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" v-on:click="routeEditProfile()">MyProfile</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                <a class="nav-link" v-on:click="routeAllPosts()">Posts</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link">Schedule</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" >Tips</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" >Projects</a>
                </li>
                <li class="nav-item ">
                <a class="nav-link" >CONTACT ME</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{username}}</a>
                    <div class="dropdown-menu p-0" aria-labelledby="dropdown01">
                    <a class="dropdown-item" v-on:click="logout()" href="#">Logout</a>
                    <a class="dropdown-item" v-on:click="routeEditProfile" href="#">Edit Profile</a>
                    <a class="dropdown-item" href="#">???</a>
                    </div>
                </li>
            </ul>
            <div>
                <ModalPost/>
            </div>
            </div>
        </nav>
    </header>  
</template>

<script>

import { mapState, mapActions} from 'vuex'
import ModalPost from '../card/ModalPost'

export default {
    name: 'NavbarProfile',
    
    components:{
        ModalPost
    },

    data(){
        return{
            nameDefault: 'user'
        }
    },
    computed:{
        ...mapState('account',['status'])
    },

    methods:{

        ...mapActions('account',['logout']),

        routeEditProfile(){
            this.$router.push('/profile');
        },
        routeAllPosts(){
            this.$router.push('/posts');           
        }
    },
    
    props:['username'],

}
</script>
<style scoped>

.navbar{
    width: 100%;
    height: 70px;
    background: #3542ef!important;

}

nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}
nav ul li a{
    color: aliceblue;
    font-size: 15px;
    text-transform: uppercase;
    padding: 7px 13px;
    margin: 0 40px;
    font-weight: bold;
}

a:hover, a.active{
    background: aliceblue;
    transition: 3s;
    color: #3542ef!important;
}


.dropdown-item:hover{
    background: rgb(240, 255, 244);
    transition: 3s;
    color: #3542ef!important;
}

@media (max-width: 428px){

    ul{
        position: fixed;
        text-align: center;
        width: 100%;
        background:#3542ef!important;
        top: 80px;
    }
    .navbar{
        width: 100%;
        height: 80px;
        background: #3542ef!important;

    }

}

.dropdown-menu{
    margin-top: -13px;
    background: #3542ef!important;
    border: none;
    
}


</style>