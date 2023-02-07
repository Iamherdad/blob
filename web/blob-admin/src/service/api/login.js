import request from "../index.js";

 export const login = async (userinfo)=>{
    const {username,password} = userinfo
    const result = request.post('/login',{username,password})
    return result
}




