<template>
    <div class="row centered-form center-block content">
        <div class="container col-md-10 col-md-offset-1">
            <div class="row">
                <NavbarProfile
                 v-bind:username="users.user.name"
                
                ></NavbarProfile>
            </div>
            <div class="container-fluid">
                <div class="about justify-content-center">
                    <div class="flex-column">
                        <UserCard 
                           v-bind:fullName="dataCard"
                        ></UserCard>
                        <LinksCard/>
                    </div>
                    <div class="card-margin col-md-9 justify-content-center">

                        <AboutCard
                            v-bind:user="dataAbout"
                        ></AboutCard>

                        <DescriptionCard
                            v-bind:description="dataProfile"                        
                        ></DescriptionCard>


                        <PostCard></PostCard>

                    <PostCard></PostCard>

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>

import UserCard from '../components/card/UserCard'
import NavbarProfile from '../components/navbar/NavbarProfile'
import AboutCard from '../components/card/AboutCard'
import LinksCard from '../components/card/LinksCard'
import DescriptionCard from '../components/card/DescriptionCard'
import PostCard from '../components/card/PostCard'

import { mapState, mapActions } from 'vuex'

export default {
    name: 'Profile',

    components:{
        UserCard,
        NavbarProfile,
        AboutCard,
        LinksCard,
        DescriptionCard,
        PostCard
    },

    data(){
        return{

        }
    },
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all.item
        }),

        //getting full name
        dataCard(){
            return this.getFullName()
        },
        dataAbout(){
            return this.getUser()
        },
        dataProfile(){
            return this.getUserProfile()
        }
    },
    created(){
        this.getProfile();
    },
    methods: {

        //mamps from store
        ...mapActions('users', {
            getProfile: 'getProfile'
        }),

        //get fullname
        getFullName(){
            return this.users.user.name + ' ' + this.users.user.surname
        },
        //get email
        getEmail(){
            return this.users.user.email
        },
        //getphone
        getPhone(){
            return this.users.user.phonenumber
        },
        //gtmobile
        getMobile(){
            return '661287901 -> not included in data table'
        },
        //getTitle
        getTitle(){
            return this.users.user.profile.title
        },
        getDescription(){
            return this.users.user.profile.description
        },
        //*---------------------*
        getUser(){
            return {
                    fullname: this.getFullName(),
                    email: this.getEmail(),
                    phone: this.getPhone(),
                    mobile: this.getMobile()
            }
        },

        getUserProfile(){
            return {
                    title: this.getTitle(),
                    description: this.getDescription(),
            }
        }

     }

    
}
</script>
<style scoped>


.content{
    margin-top: 80px;
    background: #d8dbe9;
    padding-top: 40px;

}
.about{
    display: flex;

}

@media (max-width: 428px){

.about{
    display: block;
    align-items: center;
   
}
.card-margin{
    margin: 0%;
    padding: 0%;
}

}


</style>