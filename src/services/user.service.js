import Vue from 'vue'
import router from '../router';
import { authHeader } from '../helps';


var fetch = new Vue({
    http:{
      root: 'http://localhost:8001/api/',
    }
  }) 

function login(email, password){
    return fetch.$http.post('login', { email : email, password: password}).then(response => {
            const user = response.body;
            if(user.token){
              localStorage.setItem('user', JSON.stringify(user));
              console.log('token saved');
            }
            return user;
            }, response => {

              return Promise.reject(response);
            
            });
                
}


function register(formUser){
  return fetch.$http.post('register', formUser, {headers: authHeader()}).then(response => {
    console.log(response);
          return response;
          }, response => {
          // error callback
          return Promise.reject(response);
          
          });
              
}



function logout(){
  localStorage.removeItem('user');
  //redirect to home
  router.go('/');
  console.log('the token was delete')
}

async function getUserProfile(userId){
  try {
    const response = await fetch.$http.get('profiles/' + userId, {headers: authHeader()});
    const profile = await response.body;
    return profile;

  } catch (error) {
    return error;
  }
}



async function newPost(formData){
  try {
    const response = await fetch.$http.post('posts', formData,{headers: authHeader()},{emulateJSON:true});
    const post = await response.body;
    return post;

  } catch (error) {
    return error;
  }
}

async function followUser(userId){
  try {
    const response = await fetch.$http.post('follow/' + userId, userId, {headers: authHeader()},{emulateJSON:true});
    const follow = await response.body;
    return follow;

  } catch (error) {
    return error;
  }
}

async function _delete(id){

  try {

    const response = await fetch.$http.delete('posts/'+id, {headers: authHeader()});
    const data = await response.body;
    return data;

  } catch (error) {
    
    console.log("error: " , error);
  }


}

async function getCategories(id){
  try {
    const response = await fetch.$http.get('category', id, {headers: authHeader()});
    const profile = await response.body;
    return profile;

  } catch (error) {
    return error;
  }
}

export const userServiceApi = {
    login,
    register,
    getUserProfile,
    newPost,
    delete: _delete,
    logout,
    followUser,
    getCategories
};