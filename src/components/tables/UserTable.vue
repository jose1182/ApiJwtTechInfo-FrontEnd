<template>
                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <hr>
                    <!-- Page Heading -->
                    <p class="m-0 text-left py-3">The best experts of automation sector</p>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="text-left p-3">
                                <span><strong>{{ usersCount }} USERS</strong></span>
                            </div>
                            <div class="table-responsive">
                                <table class="table" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-left">User</th>
                                            <th>Skills</th>
                                            <th>Posts</th>
                                        </tr>
                                    </thead>                                    
                                    <tbody>
                                        <tr v-for="(value, index) in posts.userCount" v-bind:key="index">
                                            <td class="block no-space text-left"><i class="far fa-user-circle"></i><span class="pl-3">{{ value. name }}</span></td>
                                            <td class="block no-space"><span class="item item-sold"><p>{{value.skills}}</p></span></td>
                                            <td class="block no-space"> {{value.postCount}}<span></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->
    
</template>
<script>

export default {
    name: 'UserTables',
    data(){
        return{
            postCount : '',
            usersCount: '',
            users: []
        }
    },

    props:{
        posts:{
            type: Object
        }
    },

    mounted(){
        this.postCount = Object.keys(this.posts).length; 
        this.toUniqueArray();
    },

    methods:{

    statusCounter(inputs) {
            let counter = 0;
            for (const input of inputs) {
                if (input.user_id !== null) counter += 1;
            }
            return counter;
    },


    //find and removes duplicates
    toUniqueArray(){
        this.users = this.posts.posts.filter((post, index, self) =>
        index === self.findIndex((t) => (
            t.user_id === post.user_id
        ))
        )
        this.usersCount = this.users.length;
    },

    

    },


}
</script>
<style scoped>
.box-user{
    width: 50px;
}

.item-sold{
    background:#FF4E4E;
    color: #fff;
}
.item{
    width: 100%;
    display: flex;
    height: 20px;
    padding: 2px 10px 0 10px;
    line-height: normal;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 1px;
}

.no-space{
    width: 1%;
    white-space: nowrap;
}

.table .item{
    border-radius: 36px;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}

</style>