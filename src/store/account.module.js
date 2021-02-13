import router from '../router';
import { userServiceApi } from '../services'


const user = JSON.parse(localStorage.getItem('user'));

//check is user is logged
const state = user
  ? {status :{ loggedIn: true}, user}
  : {status: {}, user: null};

const mutations = {
    loginRequest(state, user){
      state.status = {loggedIn: true};
      state.user = user;
    },
    loginSuccess(state, user){
      state.status = {loggedIn: true};
      state.user = user;
    },
    loginfail(state){
      state.status = {},
      state.user = null;

    }
};

const actions = { 

  login({ dispatch, commit }, { email, password}){

    commit('loginRequest', {email});

    userServiceApi.login(email, password).
      then(
        user => {
          console.log(user);
          commit('loginSuccess', user);
          router.push('/posts');
      }, 
        error =>{
          console.log('error desde acount');
          commit('loginfail', error);
          dispatch('alert/error', error, {root:true});
        }
    );
  },

  };

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}