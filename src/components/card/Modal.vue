<template>
    <div>
            <b-button block class="btn-post text-center" id="resetModal" @click="resetModal"><span>Share your job!</span></b-button>
            <b-modal ref="my-modal" hide-footer title="Yours Jobs!">
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
                    label="Category"
                    label-for="category-input"
                    invalid-feedback="Category is required"
                    :state="categoryState"
                    >
                        <b-form-select v-model="selected" :state="categoryState" :options="options" size="sm" class="mt-3" required></b-form-select>
                        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
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
            <b-button block variant="outline-primary" class="mt-3 "  @click="onSubmit">New Post</b-button>
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
            categoryState: null,
            form:{
                title: null,
                text: null,
                file: null
            },
            summitted: false,
            selected: null,
            options: [
            { value: null, text: 'Please select an option' },
            ]
            }

    },
    
    computed:{
        ...mapState('account',['status']),
        ...mapState({
            categories: state => state.category.all.items,    
        }),

    },

    methods: {
        ...mapActions('profile',['newpost', 'getProfile']),
        ...mapActions('category',['getCategory']),
        
        onFileChanged(event){
            this.selectedFile = event.target.files[0]
        },


        allCat: function () {
            this.categories.mainCategory.forEach(element => 
                this.options.push({
                    value: element.id,
                    text: element.mainCategory
                    })
                );
        },

        onSubmit(){
            this.summitted = true
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
            return
            }

            const formData = new FormData()
            formData.append('image', this.form.file, this.form.file.name)
            formData.append('mainCategory', this.selected)
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
            
            //reset of all options
            this.resetOpt()

            //get all categories
            this.getCategory();
            
            //fill categories in form selected
            this.allCat();

            //reset all form values 
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
        //reset of all options
        this.resetOpt()
        this.$refs['my-modal'].hide()
        },

        resetOpt(){
            this.selected = null,
            this.options = []; 
            this.options.push({ value: null, text: 'Please select an option' });
        }
    },    
}
</script>
<style scoped>
    .btn-post{
        font-size: 0.9rem;
        width: 250px;
        height: 75px;
        background: #5654E6;
        border-radius: 0%;
        border: none;
        text-transform: uppercase;
    }
    .btn-post:hover{
        background: rgb(228, 228, 228);
        color: grey;
    }
</style>