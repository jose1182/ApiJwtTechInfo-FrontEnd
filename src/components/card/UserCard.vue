<template>
    <div>
        <div class="card p-2 my-3" >
            <img class="card-img-top" src="../../assets/img/persona1.jpeg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title font-weight-bold m-0">{{fullName}}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item">Software Developer</li>
                <li class="list-group-item">Barcelona, Spain</li>
                <li class="list-group-item">Available</li>
            </ul>
            <div class="card-body m-0 p-2">
                <a href="#" class="btn btn-primary mr-2">Follow</a>
                <a href="#" class="btn btn-outline-primary">Message</a>
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

    props:['fullName'],
    
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



</style>
