export function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded,application/json;charset=utf-8'
    };

    if(user && user.token){
        headers['Authorization'] = 'Bearer ' + user.token;
        return headers;
    } else {
        return{};
    }
}
