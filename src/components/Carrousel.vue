<template>
<div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item dark active">
            <img src="../assets/img/robotics1.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block ">
                <h5 class="">Robots Programmers</h5>
            </div>
            </div>
            <div class="carousel-item dark">
            <img src="../assets/img/plc1.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="align-middle">Pls Programmers</h5>
            </div>
            </div>
            <div class="carousel-item dark">
            <img src="../assets/img/offline1.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h5 class="align-middle">Offline Programmer</h5>
            </div>
            </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>

</template>
<script>
export default {
    name: 'Carrousel'
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}

.carousel {
    margin-top: 75px;
}

.dark::after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0.6;
  z-index: 1;
}

.carousel-caption h5 {
    margin-top: 50%;
    margin-bottom: 25%;
    font-size: 3rem;
    font-family: 'Open Sans', sans-serif;
    
}
.carousel-caption p {
    padding-left: 40px;
    padding-right: 40px;
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;

    
}
.carousel-inner{

    background:rgba(0,0,0,0.5);
    background-color:rgba(0,0,0,0.5);
}

.carousel-item img{
    width: 100vw;
    object-fit:cover;
    height: 75vh;
    background:rgba(0,0,0,0.5);
}


</style>