<template>
    <div>
            <b-button block class="btn btn-primary" id="resetModal" @click="resetModal"><strong>Share your job</strong></b-button>
            <b-modal ref="my-modal" hide-footer title="Create a new post">
            <div class="d-block text-left">
                <form ref="form" @submit.prevent="onSubmit">
                    <b-form-group
                    label="Title"
                    label-for="title-input"
                    invalid-feedback="title is required"
                    :state="titleState"
                    >
                        <b-form-input
                            id="title-input"
                            v-model="form.title"
                            :state="titleState"
                            required
                        ></b-form-input>
                    </b-form-group>
                    
                    <b-form-group
                    label=""
                    label-for="textarea"
                    invalid-feedback="Text is required"
                    :state="textState"
                    >
                        <b-form-textarea
                        id="textarea"
                        v-model="form.text"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                        :state="textState"
                        required
                        ></b-form-textarea>
                    </b-form-group>
                    
                    <b-form-group
                    label="File:"
                    label-for="file-ginput"
                    invalid-feedback="file is required"
                    :state="fileState"
                    >
                        <b-form-file
                        v-model="form.file"
                        :state="fileState"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        required
                        ></b-form-file>
                        <div class="mt-3">Selected file: {{ form.file ? form.file.name : null }}</div>
                    </b-form-group>
                </form>
            </div>
            <b-button block variant="outline-primary" class="mt-3 "  @click="onSubmit">Add</b-button>
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
    computed:{
        ...mapState('account',['status'])
    },
    methods: {
        ...mapActions('profile',['newpost', 'getProfile']),
        
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

            if(!this.status.loggedIn){
                 this.$router.push('login');
            }

            this.form.title = '',
            this.form.text = '',
            this.form.file = null,
            this.titleState = null,
            this.textState = null,
            this.fileState = null,
            this.showModal();

        },

        showModal() {
        this.$refs['my-modal'].show()
        },
        hideModal() {
        this.$refs['my-modal'].hide()
        }
    },

}
</script>
<style scoped>

.btn-primary {
    height: 50px;
    width: 10vw;
    color: #fff;
    background-color: #007bff;
    border-radius: 35px;
    border: none;
}


.btn-primary:hover{
    background: rgb(49, 219, 15);
    color: #fff;
}
</style>