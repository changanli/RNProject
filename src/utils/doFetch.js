import axios from 'axios';

const service = axios.create({
    baseURL:'http://127.0.0.1:9090',
    timeout:30000
})

service.interceptors.request.use(function(config){
    // config.headers['accessToken'] = 
    return config;
},function(error){
     // Do something with request error
    return Promise.reject(error);
})

service.interceptors.response.use(function(response){
    // Do something with response data
    return response;
},function(error){
    if(error.response.status == 401){
        // 没有权限
    }
    return Promise.reject(error.response);
})

export default service;
