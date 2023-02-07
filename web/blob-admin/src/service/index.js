import axios  from "axios"

const request = axios.create({
    baseURL:'http://localhost:8000',
    timeout:5000
})

request.interceptors.request.use((config)=>{

    return config
})


request.interceptors.response.use((config)=>{
    return  config.data
})

export default request