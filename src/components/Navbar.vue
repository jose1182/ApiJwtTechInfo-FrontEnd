<template>
    <div>
        <header class="header">
            <div class="bg-dark">
                <div class="container-fluid p-0">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse w-100 justify-content-between" id="navbarTogglerDemo03">
                        <a href=""></a>
                            <div class="col-auto nav_a">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-auto nav_a">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                        <a class="nav-link" v-on:click="routeLogin" href="#">Login</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" v-on:click="routeRegister" href="#">Register</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div class="text-header d-flex align-items-center">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8 text-left">
                            <h2>Share<span>Your skills</span> </h2>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                            <a href="" class="btn btn-user"> <span>Mis datos</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-header-v2">
                <div class="card-deck">
                    <div class="card mb-5">
                        <img src="../assets/img/persona1.jpeg" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card mb-5">
                        <img src="../assets/img/persona2.jpeg" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card mb-5">
                        <img src="../assets/img/persona3.jpeg" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>            
            </div>
        </header>
            <!-- Footer -->
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 footer-copyright">
                        &copy; Bootstrap Navbar Template by <a href="">Leoni</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</template>
<script>

export default {
    data(){
        return{

        }
    },
    
    methods:{
        routeLogin(){
            this.$router.push('/login');
        },
        routeRegister(){
            this.$router.push('/register');
        }
    }
}
</script>
<style scoped>
.header{
    width: 100%;
    min-height: 80px;
    background-image: url(../assets/img/home.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    background-attachment: fixed;
}
.header::before{
    content: '';
    width: 100%;
    max-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(rgba(255, 255, 255, .1), rgba(34, 40, 51, 1))!important;
}
.bg-dark{
    position: fixed;
    z-index: 20;
    width: 100%;
}

@media (min-width: 768px){
    .bg-dark{
        background-color: transparent!important;;
    };
    .nav_a a:hover{
        background-color: #c10000a2!important;
    };
}


a { 
    color: #f4f4f4!important;
    text-transform: uppercase;
    font-size: 25px;
}

.nav_a a{
    color: #f4f4f4!important;
    font-family: 'Roboto';
    font-size: 20px;
    padding: 10px 15px;
    text-align: center;
    text-transform: uppercase;
}
.nav_a a:hover{
    background-color: #c10000a2;
}
.text-header{
    min-height: 60vh;
    font-family: 'Monserrat';
    color: #f4f4f4;
    padding-left: 5%;
}

.text-header-v2{
    min-height: 60vh;
    font-family: 'Monserrat';
    color: rgb(0, 0, 0);
    padding-left: 5%;
}


.text-header h2{
    font-family: 'Anton';
}
.text-header span{
    letter-spacing: 5px;
    font-size: 1.3em;
    font-family: 'Anton';
    margin: 0 0 0 5px;
}
.text-header p{
    font-size: 1em;
}
.btn-user{
    padding: 7px 12px;
    color: #f4f4f4!important;
    background-color: #c10000e0;
}
.btn-user:hover{
    color: #f4f4f4!important;
    background-color: #c10000;
}
footer { 
    padding: 40px 50px 45px 50px; 
    background: #f8f8f8; 
}

</style>