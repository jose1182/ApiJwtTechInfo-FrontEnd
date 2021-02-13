import router from '../router';
import { userServiceApi } from '../services'

const state = {
    all:{}
};

const mutations = {
    getProfileRequest(state){
        state.all = {loading: true};
    },
    getProfileSuccess(state, profile){
        state.all = {item:profile}
    },
    getProfileFaiilure(state, error){
        state.all = {error}
    },
    newPostRequest(state, newPost){
        state.all = {newPostReq: true, newPost}

    },
    newPostSucces(state, newPost){
        state.all = newPost;
    },
    nwePostFailure(state, error){
        state.all = error;
    }
}

const actions = {
    getProfile({ commit }) {
       commit('getProfileRequest');
        userServiceApi.getUserProfile()
            .then(
                profile => commit('getProfileSuccess', profile),
                error => commit('getProfileFaiilure', error)

            );
    },

    newpost({dispatch, commit}, newPost){
        commit('newPostRequest', newPost);
        userServiceApi.newPost(newPost)
            .then(newPost=>{commit('newPostSucces', newPost);
            router.push('/posts');
            setTimeout(()=>{
                dispatch('alert/success', 'New post created successfull', {root:true});
            })
        },
        error => {
            commit('nwePostFailure', error);
            dispatch('alert/error', error, {root:true});
            }
        ); 
    }

};

export const users = {
    namespaced: true,
    state,
    mutations,
    actions
};