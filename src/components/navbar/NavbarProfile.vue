<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">MyProfile</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">ABOUT ME</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#">Schedule</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#">Tips</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item ">
                <a class="nav-link" href="#">CONTACT ME</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{username}}</a>
                    <div class="dropdown-menu p-0" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="#">Logout</a>
                    <a class="dropdown-item" v-on:click="routeEditProfile" href="#">Edit Profile</a>
                    <a class="dropdown-item" href="#">???</a>
                    </div>
                </li>


            </ul>
            </div>
        </nav>
    </header>  
</template>

<script>
export default {
    name: 'NavbarProfile',
    data(){
        return{
            nameDefault: 'user'
        }
    },
    methods:{
        routeEditProfile(){
            this.$router.push('/profile');
        }
    },
    
    props:['username'],

}
</script>
<style scoped>

.navbar{
    width: 100%;
    height: 80px;
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
    margin-top: -10px;
    background: #3542ef!important;
    border: none;
    
}

</style>