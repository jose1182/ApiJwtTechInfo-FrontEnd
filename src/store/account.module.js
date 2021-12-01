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
    loginFail(state){
      state.status = {},
      state.user = null;
    },
    registerRequest(state, user){
      state.status = {registering: true}
      state.user = user;
    },
    registerSuccess(state, user){
      state.status = {}
      state.user = user;
    },
    registerFail(state){
      state.status = {}
    },    

    logout(state){
      state.status = {loggedIn: true},
      state.user = null;
      console.log("lpgout session")
    },

};

const actions = { 

  login({ dispatch, commit }, { email, password}){

    commit('loginRequest', {email});

    userServiceApi.login(email, password).
      then(
        user => {
          console.log(user);
          commit('loginSuccess', user);
          router.push('/');
      }, 
        error =>{
          console.log(error.body.message);
          const errors = error.body.message;
          commit('loginFail', errors);
          dispatch('alert/error', errors, {root:true});
        }
    );
  },

  register({ dispatch, commit },user){

    commit('registerRequest', user);

    userServiceApi.register(user).
      then(
        user => {
          console.log(user);
          commit('registerSuccess', user);
          router.push('/login');
      }, 
        error =>{
          const errors = error.body;
          commit('registerFail', errors);
          dispatch('alert/error', errors, {root:true});
        }
    );
  },

  logout( {commit} ) {

    userServiceApi.logout();
    commit('logout', false);
  }

  };

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}