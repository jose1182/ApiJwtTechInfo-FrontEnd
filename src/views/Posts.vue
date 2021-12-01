<template>
    <div>
        <div>
            <Navbar v-bind:p="1"></Navbar> 
        </div>
        <div class="container-fluid  line-down top">
            <div class="row line-donw pt-5">
               <div class="col-3">
               </div>
               <div class="col-6">
                    <div class="row justify-content-center py-3"> 
                        <img class="avatar" alt="100x100" src="@/assets/img/persona.webp" data-holder-rendered="true">
                    </div>
                    <div v-if="profile" class="row justify-content-center pt-3">
                        <h5> <strong>{{ userData.fullname }}</strong></h5>
                    </div>
                    <div class="row justify-content-center pt-2">
                        <span>Barcelona</span>
                    </div>
                    <div v-if="profile">
                        <div v-if="profile" class="row justify-content-center pt-4">
                            <div class="px-5"><strong>{{ userData.postCount }}</strong> posts</div>
                            <div class="px-5"><strong>{{ userData.followersCount }}</strong> followers</div>
                            <div class="px-5"><strong>{{ userData.followingCount }}</strong> following</div>
                        </div>
                        <div v-if="account.user.user.id != userId" class="row justify-content-center pt-4">
                            <FollowButton                            
                                v-bind:userId="this.profile? this.profile.user.id: null"
                                v-bind:follows="userData.follows"
                                @update-profile="reloadData"> 
                            </FollowButton>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center py-5">
                        <ModalProfile 
                        @update="reloadData"> </ModalProfile>
                    </div>
                </div>
               <div class="col-3">

               </div>
            </div>
        </div>
        <div class="container-fluid " v-if="profile ">
            <div class="row justify-content-center pt-5">
                <h4><strong> Posts</strong></h4>
            </div>            
            <div class="row padding-y">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-5" v-for="(value, index) in profile.user.posts" v-bind:key="index">
                    <div class="row pl-4">
                        <div class="col-12 pr-4">
                            <PostCard 
                                v-bind:post="value"
                                @update="reloadData"
                            ></PostCard>
                        </div>     
                    </div>
                </div>
            </div>                             
        </div>
        <div class="container-fluid box-botton top" >
            <div class="row padding-y">
                <div class="col-8 pl-4">
                    <div class="row pt-0 pb-4">
                        <h2>The best specialists and projects available to you</h2>
                    </div>
                    <div class="row">
                        <ul class="d-flex">
                            <li class=" d-flex justify-content-between align-items-center">
                               <strong><a href=""> Robotics</a></strong> 
                                <span class="badge badge-primary badge-pill ml-5">14</span>
                            </li>
                            <li class=" d-flex justify-content-between align-items-center mx-2">
                                <strong><a href="">Plc</a></strong> 
                                <span class="badge badge-primary badge-pill ml-5">7</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4">
        
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>


import PostCard from '../components/card/PostCard'
import Navbar from '../components/Navbar'
import FollowButton from '../components/FollowButton'
import ModalProfile from '../components/card/ModalProfile.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Profile',

    components:{
        PostCard,
        Navbar,
        FollowButton,
        ModalProfile

    },

    data(){
        return{
        }
    },

    props: ['userId', 'userName'],

    computed: {

        ...mapState({
            account: state => state.account,
            profile: state => state.profile.allProfile.item,    
        }),

        
        userData(){
            return {
                    fullname: this.profile? this.profile.user.name + ' ' + this.profile.user.surname: '',
                    postCount:this.profile? this.profile.postCount: 0,
                    follows : this.profile? this.profile.follows: false,
                    followersCount:this.profile? this.profile.followersCount: 0,
                    followingCount:this.profile? this.profile.followingCount: 0 
            }
        },
        userAbout(){
            return {
                    fullname: this.profile? this.profile.user.name + this.profile.user.surname: '',
                    email: this.profile? this.profile.user.email: '',
                    phone: this.profile? this.profile.user.phonenumber: '',
                    mobile: 'need to be programmer'
            }
        },
        userDescription(){
            return{
                title: this.profile? this.profile.user.profile.title: '',
                description: this.profile? this.profile.user.profile.description: '',
            }
        },
    },

    mounted(){
        this.getProfile(this.userId);
    },

    created(){
        this.getProfile(this.userId);
    },

    methods: {

        //mamps from store
        ...mapActions('profile', {
            getProfile: 'getProfile',
        }),
        
         reloadData(){
            this.getProfile(this.userId);
        }
       

     },
        //when a component is reused. */
    beforeRouteUpdate(to, from, next){
        this.getProfile(to.params.userId);
        next();
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
    margin-top: 75px;
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

h2 {
    text-transform: uppercase;
}

.about{
    display: flex
}

@media screen and (min-width: 570px){

    .padding-y {
        padding: 0px 60px 0px 60px;
    }

}


</style>