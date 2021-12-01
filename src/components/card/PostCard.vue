<template>
    <div class="card">
      <figure class="rollover">
        <div class="box-photo">
          <img :src="getImage()" class="img-fluid lazy lazy-loaded" alt="A generic square placeholder image with rounded corners in a figure.">
            <div class="show-title">
                <h4 v-if="post.user" class="text-center">{{ post.user.name }}</h4>
            </div>
        </div>
        <div class="hover-item top left">
            <div class="social-media  list-share-circles">
                <ul class="d-flex m-0">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            <div class="social-media mr-3">
                <ul class="d-block"> 
                    <li><ModalPost 
                        v-bind:postId="post.id"
                        @update="reload"
                    ></ModalPost></li>
                </ul>
            </div>          
        </div>
      </figure>
        <div class="card-body p-3">
            <div class="col-12">
                <div class="row">
                    <span class="city">Spain</span>
                </div>
                <div class="row my-1">
                    <strong><span class="profesion">Robot Programmee </span></strong>
                </div>
                <div class="row content-height my-1">
                    <p class="description">{{ post.content }}</p>
                </div>
                <div class="row">
                    <div class="col-6 text-left">
                        <span>Robot Programmer</span>
                    </div>
                    <div class="col-6 text-right">
                        Likes: <strong>{{ post.likes }}</strong>
                    </div>
                </div>
            </div>
        </div>
      </div>


</template>
<script>

import ModalPost from './ModalPost'
export default {
    name: 'PostCard',
    components:{
       ModalPost
    },
    methods:{
        getImage: function() {
            return 'http://localhost:8001/storage/' + this.post.image;
        },
        reload(){
            this.$emit("update");
        }        

    },
    props:{
        name:String,
        post:{
            type: Object
        },
    },
    created(){
        this.getImage();
    },
    computed:{
        src_img(){
            return  this.getImage();
        }
    },
    
}
</script>

<style scoped>

*, ::before, ::after {
    box-sizing: inherit;
}
* {
    margin: 0;
    padding: 0;
}

body {
  background-color: #2C3A47;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

article, aside, details, figcaption, figure, footer, header, nav, section {
    display: block;
}


.rollover:not(.no-overlay):hover .box-photo img {
    opacity: 0.5;}

.rollover:hover:not(.no-scale) .box-photo img {
    transform: scale(1.05);
}

.rollover:hover:not(.no-scale) .box-photo h4{
    transform: scale(1.05);
}


.rollover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #202121;
    opacity: 0;
    z-index: 0;
    transition: all 0.3s ease-in-out;
}


.rollover {
    display: block;
    background-color: #000;
    height: 100%;
    transition: all 0.3s ease-in-out;
    transition: transform 0.3s ease-out;
    z-index: 2;
}

figure {
    position: relative;
    display: inline-block;

}

figure::after {
    content: '';
    display: block;
    clear: both;
}


.rollover .box-photo {
    position: relative;
    overflow: hidden;
    z-index: 1;
}


.rollover img {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    z-index: 1;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    transform: translateZ(0);
}

figure img {
    display: block;
    max-width: 100%;
    height: auto;
}

img {
    max-width: 100%;
    height: auto;
    border: none;
}

.lazy-loaded {
    opacity: 1;
}


p {
    font-size: 1.2rem;
}

.card {
    border: none;
}

.rollover .above-item, .rollover .hover-item {
    display: flex;
    width: 100%;
    position: absolute;
    right: 20px;
}

.rollover .above-item.left, .rollover .hover-item.left {
    right: auto;
    left: 10px;
}
.rollover .above-item.top, .rollover .hover-item.top {
    top: 20px;
}

.rollover .hover-item {
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: opacity 0.3s ease-in-out;
}



.rollover .hover-item {
    left: 10%;
    top: 10%;
    visibility:hidden;
    opacity: 1;
    z-index: 8;
    transition: opacity 0.3s ease-in-out;
}



.list-share-circles {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    z-index: 4;
}

.rollover .hover-item {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s ease-in-out;
}

li {
    list-style: none;
}


.rollover .hover-item .list-share-circles ul{
    margin-top: 50px;
}


.rollover:hover .hover-item {
    visibility: visible;
    opacity: 1;
}


.social-media li a {
  display: block;
  height: 50px;
  width: 50px;
  background-color: transparent;
  text-align: center;
  color: #FFF;
  margin: 0;
  border-radius: 50%;
  opacity: 1;
  transition: all 0.5s ease-out;

}

.social-media li a .fab{
  font-size: 30px;
  line-height: 50px;
  transition: transform 0.3s ease-out;
}


.social-media li a .fas{
  font-size: 30px;
  line-height: 50px;
  transition: transform 0.3s ease-out;
  margin-left: 140px;
}

a:hover .fab {
    transform: rotateY(360deg);
    transition: transform 6s ease-out;
    transition-delay: 6s;  }
    
h4{
    color: #fff;
    font-family: 'Belleza', sans-serif;
    text-transform: uppercase;
    
}

.rollover .box-photo  .show-title h4{
    z-index: 8;
    visibility: visible;
    position: absolute;
    width: 100%;
    top: 90%;
    margin: 0;
    padding: 0%;
    transition: all 0.3s ease-in-out;
    transition: transform 0.3s ease-out;
}

.city {
    font-size: 1rem;
}

.profesion{
    color: #2EE6D7;
    text-transform:capitalize;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.3rem;
}

.description {
    color: #000;
    font-weight: normal;
    font-size: 1rem;
}

.content-height{
    width: 100%;
    height: 10vh;
}

.card-body {
   background: #fcfcfc!important;
}

</style>