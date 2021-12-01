<template>
    <div>
        <div class="card" >
            <img class="card-img-top" src="../../assets/img/persona1.jpeg" alt="Card image cap">
            <div class="card-body d-flex justify-content-center">
                <h5 class="card-title font-weight-bold m-0">{{user.fullname}}</h5>
                <img class="img ml-5" src="@/assets/icons/edit.svg" v-on:click="editTask"/> 
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item">Software Developer</li>
                <li class="list-group-item">Barcelona, Spain</li>
                <li class="list-group-item">Available</li>
            </ul>
            <div class="d-flex justify-content-between p-2">
                <div class="pr-2"><strong>{{ user.postCount }}</strong> posts</div>
                <div class="pr-2"><strong>{{ user.followersCount }}</strong> followers</div>
                <div class="pr-2"><strong>{{ user.followingCount }}</strong> following</div>
            </div>
        </div>       
    </div>

</template>
<script>

export default {
    data(){
        return{
         
        }
    },
    components:{
        
    },
    props:{
      user:{
        type: Object,
      }

    },
    
    methods:{
        editTask(){
            
        }
    }
}
</script>

<style scoped>

ul {
    border: 0!important;
}

ul li{
    font-size: 15px;
    padding: 3px;
    border: 0;
}
a {
    padding-top: 8px;
}
.img{
    width: 20px;
    height: 20px;
}



</style>
