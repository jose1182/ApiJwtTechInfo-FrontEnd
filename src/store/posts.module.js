
import { postServiceApi } from '../services'

const state ={
    all : {}
};

const mutations = {
    getAllRequest(state, id){
        state.all = {loading : true, category: id};
    },
    getAllSuccess(state, posts){
        state.all = {items : posts}
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
    
    getAll({ commit }){
        setTimeout(() => {
            commit('getAllRequest');
            postServiceApi.getAll()
                .then(
                    posts => commit('getAllSuccess', posts),
                    error => commit('getAllFailure', error)
            );            
        }, 1000);
    },

    //Borrar no se usa
    getAllProfile({ commit }){
        setTimeout(() => {
            commit('getAllRequest');
            postServiceApi.getAll()
                .then(
                    posts => commit('getAllSuccess', posts),
                    error => commit('getAllFailure', error)
            );            
        }, 1000);
    },

    getAllInHome({ commit }, id){
        setTimeout(() => {
            commit('getAllRequest', id);
            postServiceApi.getAllInHome(id)
                .then(
                    posts => commit('getAllSuccess', posts),
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

export const posts = {
    namespaced : true,
    state,
    mutations,
    actions 
}
