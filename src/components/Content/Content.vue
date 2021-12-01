<template>
    <div class="container-fluid p-0" v-if="posts ">
        <div class="py-5" v-if="categories">
            <ul class="list-inline">
                <li class="list-inline-item" v-for="(value, index) in categories.mainCategory" v-bind:key="index">
                    <a class="btn btn-secondary">{{ value.mainCategory  }}</a>
                </li>
            </ul>
        </div>

        <div class="nav-sections style1 px-5 m-0">
            <ul>
                <li class="active"><a href="">Robotics</a></li>
                <li><a href="">Plc</a> </li>
            </ul>
        </div>  

        <div class="row padding-y">
            <div class="col-12 col-sm-6 col-lg-3 card-col" v-for="(value, index) in posts.posts" v-bind:key="index">
                <div class="row p-0">
                    <div class="col-12 p-0">
                        <PostCardSimple 
                            v-bind:post="value"
                            @click.native="routerProfile(value.user_id, value.name)"
                        ></PostCardSimple>
                    </div>     
                </div>
            </div>
        </div> 
        <div class="row padding-y">
            <UserTable
                v-bind:posts="posts"
            ></UserTable>
        </div>
    </div>
</template>
<script>


import PostCardSimple from '@/components/card/PostCardSimple'
import UserTable from '@/components/tables/UserTable'


import { mapState, mapActions } from 'vuex'

export default {
    name: 'Content',

    components:{
        PostCardSimple,
        UserTable
    },

    data(){
        return{
        }
    },

    props: ['userId'],

    computed: {
        ...mapState({
            posts: state => state.posts.all.items,
            account: state => state.account,
            categories: state => state.category.all.items,   
        }),
            
    },

    mounted(){
        console.log('mounted in profile ' + this.userId);

      this.getAllInHome()
    },

    created(){
        this.getAllInHome()
       
    },

    methods: {

        //mamps from store
        ...mapActions('posts', {
            getAllInHome: 'getAllInHome'
        }),
  
        routerProfile(id, name){
            console.log("in routerlink");
            if(this.account.status.loggedIn) {
                console.log('router is', id);
                this.$router.push({ name: 'Profile', params: { userId:  id, userName: name}})
            } else {
                 this.$router.push('login');
            }
        },
    },
}
</script>
<style scoped>

*{
    margin: 0%;
    padding: 0%;
}

.row{
    background: #f4f7f6;
    margin: 0%;
    
}


.box-botton .row{
    background: #FFFFFF!important;
    z-index: 2;
}

.top{
    margin-top: 90px;
}

.box-botton {
    margin-bottom: 90px;
}

.avatar {
    vertical-align: middle;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    z-index: 1;
}

.avatar img{
    max-width: 100%;
    height: auto;
}

.containar-fluid {
    margin: 0%;
    height: 100vh;
    width: 100vw;
}

.line-down{
    background: #A8EDFF!important;
    border-bottom: solid 2px rgb(233, 232, 232);
}

.nav-sections{
    position: relative;
    display: block;
    font-size: 17px;
    font-weight: normal;
    overflow: hidden;
}

.nav-sections.style1 {
    padding: 50px 0;
    text-align: center;
}

.nav-sections li {
    display: inline-block;
    transition: all 0.3s ease-in-out;
}

a:hover {
    color: #202121;
    text-decoration: none;
}

a {
    color: #49c5b6;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

li {
    list-style: none;
}

li a {
    display: inline-block;
    padding-bottom: 8px;
    border-bottom: 4px solid transparent;
    text-decoration: none;
    color:black;
}

.nav-sections li::after {
    content: '.';
    padding: 0 12px;
    font-weight: normal;
}

.nav-sections li.active{
    font-weight: bold;
}

.nav-sections li:hover span, .nav-sections li:hover a {
    color: #646a69;
}

li.active a{
    border-color: #202121;
}

.about{
    display: flex
}

.btn-secondary {
  color: #fff;
  background-color: #2e59d9;
  border-radius: 35px;
  border: 1px solid #2653d4;
  padding: 8px 15px 8px 15px;
}

.btn-secondary:hover {
  color: #2e59d9;
  background-color: #fff;
  border-radius: 35px;
  border: 1px solid #2653d4;
  padding: 8px 15px 8px 15px;
}



.card-col{
    position: relative;
    padding: 0px 20px 35px 20px;
}

.padding-y {
    padding: 0%;
}

@media screen and (min-width: 570px){

    .padding-y {
         padding: 0px 66px 0px 66px;
    }

}


</style>