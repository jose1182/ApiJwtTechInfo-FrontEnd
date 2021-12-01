
import { postServiceApi, userServiceApi } from '../services'

const state ={
    all : {}
};

const mutations = {
    getAllRequest(state){
        state.all = {loading : true};
    },
    getAllSuccess(state, category){
        state.all = {items : category}
    },
    getAllFailure(state, error){
        state.all = {error}
    },
    
    deleteRequest(state, id){
        state.all.items = state.all.items.map(post => 
            post.id === id 
            ? {...post, deleting: true}
            : post)
    },
    deleteSuccess(state, id){
        state.all.items = state.all.items.filter(post => post.id !== id)
    }, 
    deleteFailure(state, {id, error}){
        state.all.items = state.all.items.map(post => {
            if(post.id === id){
                const { deleting, ...postCopy } = post;
                console.log(deleting);
                return { ...postCopy, deleteError: error}
            }

        })
    }
};

const actions ={
    
    getCategory({ commit }){
        setTimeout(() => {
            commit('getAllRequest');
            userServiceApi.getCategories()
                .then(
                    category => commit('getAllSuccess', category),
                    error => commit('getAllFailure', error)
            );            
        }, 1000);
    },


    delete( { commit }, id){
        commit('deleteRequest', id);
        console.log("I am in posts module");
        postServiceApi.delete(id)
            .then(
                id => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString()})
            )
    }

}

export const category = {
    namespaced : true,
    state,
    mutations,
    actions 
}
