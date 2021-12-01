//import router from '../router'
import { userServiceApi } from '../services'

const state = {
    allProfile: {},
};

const mutations = {
    getProfileRequest(state, userId) {
        state.allProfile = { loading: true, userId };
    },
    getProfileSuccess(state, profile) {
        state.allProfile = { item: profile }
    },
    getProfileFailure(state, error) {
        state.allProfile = { error }
    },
    newPostRequest(state, formData) {
        state.allProfile = { newPostReq: true, formData }

    },
    newPostSuccess(state, formData) {
        state.allProfile = { item: formData };
    },
    newPostFailure(state, error) {
        state.allProfile = error;
    },
    deleteRequest(state, id){
        state.allProfile.item.user.posts = state.allProfile.item.user.posts.map(post => 
            post.id === id 
            ? {...post, deleting: true}
            : post)          
    },
    deleteSuccess(state, id){
        console.log("now is working");
        state.allProfile.item.user.posts = state.allProfile.item.user.posts.filter(post => post.id !== id)
        console.log("now is working");
    }, 
    deleteFailure(state, {id, error}){
        state.allProfile.item.user.posts = state.allProfile.item.user.posts.map(post => {
            if(post.id === id){
                const { deleting, ...postCopy } = post;
                console.log(deleting);
                return { ...postCopy, deleteError: error}
            }

        })
    }

}

const actions = {
    getProfile({ commit }, userId) {
        setTimeout(function () {
            commit('getProfileRequest', userId);
            userServiceApi.getUserProfile(userId)
                .then(
                    profile => commit('getProfileSuccess', profile),
                    error => commit('getProfileFailure', error)
    
                );         
        },100);

    },

    newpost({ dispatch, commit }, formData) {
        setTimeout(function() {
            commit('newPostRequest', formData);
            userServiceApi.newPost(formData)
                .then(formData => {
                    commit('newPostSuccess', formData);
                   // router.push('/posts');
                    setTimeout(() => {
                        dispatch('alert/success', 'New post created successfull', { root: true });
                    })
                },
                    error => {
                        commit('newPostFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );            
        }, 0);

    },

    delete( { commit }, id){
        commit('deleteRequest', id);
        console.log("I am in posts module");
        userServiceApi.delete(id)
            .then(
                id => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString()})
            )
    },

    getAllPost({ commit }) {
        console.log("Be fore timer")
        setTimeout(function () {
            commit('getPostsRequest'); 
            userServiceApi.getAllPost()
                .then(
                    posts => commit('getPostsSuccess', posts),
                    error => commit('getPostsFailure', error)

                );
        }, 1000);
        console.log("I'm the timer")

    },


};


export const profile = {
    namespaced: true,
    state,
    actions,
    mutations
};