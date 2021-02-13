<template>
    <div>
        <div class="card d-flex col-md-9 p-0 my-3 card-border-all" >
            <div class="card-header p-0 border-0">
                <div class="text-a text-left border-bottom border-gray p-2">
                    <span>Lukas García </span>
                    <span class="text-b">recomienda esto</span>
                </div>
                <div class="d-flex">
                    <div class="flex-column p-2">
                        <img src="../../assets/img/persona2.jpeg" class="image" alt="">
                    </div>
                    <div class="display-block text-left p-0">
                        <span class="text-c">Jose Carlos García</span>
                        <span>ROBOT PROGRAMMER</span>
                    </div>
                </div>
            </div>
            <div class="card-border bg-light m-2 p-0">
                <img class="card-img-top m-0" src="@/assets/img/Robots.jpeg" alt="Card image cap">
                <h5 class="card-title text-left m-0  mt-2 pl-2 text-primary"> One day programming</h5>
                <div class="card-body mt-2 p-0">
                    <h5 class="text-post text-left m-0">Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.</h5>
                </div>
            </div>

        </div>       
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .text-a{
        padding: 5px;
        font-size: .8rem;
        color: black;
        font-weight: bold;

    }
    .text-b{
        padding: 5px;
        font-size: 0.8rem;
        color: black;
        font-weight: normal!important;;

    }
    .text-c{
    padding: 5px;
    font-size: 1rem;
    color: black;
    font-weight: bold;

    }
    .image{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .display-block{
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
    }
    .card-img-top{
        border-radius: 6px 6px 0px 0px!important;
    }
    .card-border{
    border-radius: 0px 0px 6px 6px!important;
    }
    .card-border-all{
    border-radius: 10px 10px 10px 10px!important;
    }
    .card-title{
        font-size: 1.2rem!important;
        padding: 15px;
        padding-bottom: 0%;
    }   
    .text-post{
        font-size: 1rem!important;
        padding: 15px;
    }
</style>