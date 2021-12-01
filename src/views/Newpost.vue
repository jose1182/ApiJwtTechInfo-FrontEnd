<template>
   <div class="container text-left col-sm-4 mt-5">
        
       <b-card class="shadow col-lg-12 p-3 mb-5 bg-white rounded">
           <h2>New POst</h2>
            <b-form @submit.prevent="submit">
                                   
                <div>
                    <label class="title-sr-only m-0" for="inline-form-input-title" >Title</label>
                    <b-input-group class="p-0 m-0">
                    <b-form-input 
                        id="inline-form-input-title" 
                        v-model="title" 
                        placeholder="Here the title of you new post" 
                    ></b-form-input>
                    </b-input-group>
    
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Content</label>
                    <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        v-model="content"
                        placeholder="Here the content of you new post" 
                    ></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">File</label>
                    <input type="file" @change="onFileChanged" class="form-control-file" id="exampleFormControlFile1">
                </div>
                <b-button block class="mt-4" type="submit" variant="primary">Post</b-button>
            </b-form>                   
       </b-card>
    </div>

     

</template>
<script>

import { mapState, mapActions} from 'vuex'  

export default {
    name: 'Newpost',
    data(){
        return{
            title: '',
            content: '',
            selectedFile : null
        }
    },

    computed:{
        ...mapState('users',['status'])
    },

    methods:{
        ...mapActions('users',['newpost']),
        
        onFileChanged(event){
            this.selectedFile = event.target.files[0]
        },

        submit(){
            const formData = new FormData()
            formData.append('image', this.selectedFile, this.selectedFile.name)
            formData.append('title', this.title)
            formData.append('content', this.content)
            console.log(this.selectedFile.name);

            this.newpost(formData);
        }
    }
}
</script>