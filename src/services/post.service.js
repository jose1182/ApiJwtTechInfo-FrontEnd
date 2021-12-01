import Vue from 'vue'
import { authHeader } from '../helps';


var fetch = new Vue({
    http:{
      root: 'http://localhost:8001/api/',
    }
  }) 

  async function getAll(){
    try {
      const response = await fetch.$http.get('posts', {headers: authHeader()});
      const posts = await response.body;
      console.log(posts);
      return posts;
  
    } catch (error) {
      return error;
    }
  }

  async function getAllInHome(id){
    try {
      const response = await fetch.$http.get('posts/posts', id , {headers: authHeader()});
      const posts = await response.body;
      console.log(posts);
      return posts;
  
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

export const postServiceApi = {
    getAll,
    getAllInHome,
    delete: _delete
}