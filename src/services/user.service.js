import Vue from 'vue'

const user = JSON.parse(localStorage.getItem('user'));

var fetch = new Vue({
    http:{
      root: 'http://localhost:8001/api/',
      headers:{
        Authorization: 'Bearer ' + user.token
      }
  
    }, data:''
  }) 




function login(email, password){

    console.log('I am in service ' + email + ' ' + password);

    return fetch.$http.post('login', { email : email, password: password}).then(response => {
            const user = response.body;
            if(user.token){
              localStorage.setItem('user', JSON.stringify(user));
              console.log('token saved');
            }
            console.log(user);

            return user;

            }, response => {
              //const error = "";
              console.log(response)
            // error callback
            return Promise.reject(response);
            
            });
                
}

function getUserProfile(){
  return fetch.$http.get('profiles').then(response => {
    console.log('i am un newPts')
    // get body data
    this.someData = response.body;
    console.log(this.someData);
    return this.someData;

  }, response => {
    // error callback
    console.log(response);
    return response;
  });
}

function newPost(newPost){
  console.log('i am un newPts')
  return fetch.$http.post('posts', { title : newPost.title, content: newPost.content, image: newPost.image}).then(response => {
    const post = response.body;

    console.log(post);

    return post;

    }, response => {
      //const error = "";
      console.log(response)
    // error callback
    return Promise.reject(response);
    
    });
}



export const userServiceApi = {
    login,
    getUserProfile,
    newPost
};