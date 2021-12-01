<template>
    <div class="text-left">
        <a  class="btn" id="resetModal" @click="resetModal"><label class="termporary" for=""><i class="fas fa-align-justify"></i></label></a>
        <b-modal ref="my-modal" hide-footer title="">
            <div class="d-block text-left">
                <ul class="list-group list-group-flush">
                    <li v-on:click="deletePost(postId)" class="list-group-item"><i class="far fa-trash-alt mr-1"></i> Delete</li>
                    <li class="list-group-item"> <i class="far fa-edit mr-1"></i>Edit</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>
        </b-modal>
    </div>
</template>
<script>

import { mapState, mapActions} from 'vuex'  

export default {
    name: 'Modal',
    data(){
        return{
            titleState: null,
            textState: null,
            fileState: null,
            form:{
                title: null,
                text: null,
                file: null
            },
            summitted: false
        }

    },

    props: ['postId'],

    computed:{
        ...mapState('users',['status'])
    },

    methods: {
        //mamps from store
        ...mapActions('profile', {
            delete: 'delete',
        }),

                
        onFileChanged(event){
            this.selectedFile = event.target.files[0]
        },

        onSubmit(){
            this.summitted = true
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
            return
            }

            const formData = new FormData()
            formData.append('image', this.form.file, this.form.file.name)
            formData.append('title', this.form.title)
            formData.append('content', this.form.text)

            //it is necesarry to check the content
            this.newpost(formData);
            this.hideModal();

            this.$emit("update-posts");

        },

        deletePost(id){

            console.log('delete ID: ' + id)
            this.delete(id);
            this.$emit("update");
            this.hideModal();

        },

        checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.titleState = valid
        this.textState = valid
        this.fileState = valid
        return valid
        },

        resetModal(){
            this.form.title = '',
            this.form.text = '',
            this.form.file = '',
            this.titleState = null,
            this.textState = null,
            this.fileState = null
            this.showModal()
        },

        showModal() {
        this.$refs['my-modal'].show()
        },
        hideModal() {
        this.$refs['my-modal'].hide()
        }
    }
}
</script>
<style scoped>
    .card-border-all{
    border-radius: 10px 10px 10px 10px!important;
    }
    
    a{
        display: block;
        height: 50px;
        width: 50px;
        background-color: transparent;
        text-align: center;
        color: #FFF;
        margin: 0;
        padding: 0%;
        border-radius: 50%;
        opacity: 1;
        transition: all 0.5s ease-out;
    }

    .fas{
        font-size: 30px;
        line-height: 50px;
        transition: transform 0.3s ease-out;        
    }
    
    .span-padd {
        font-size: 1.3rem;
    }
    .termporary{

        height: auto;
    }
    .list-group li {
        color: red;
        cursor: pointer;
    }

    @media (max-width: 428px){


    }

</style>