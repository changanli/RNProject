import axios from 'axios';
import {getItem} from './storage';
import * as types from '../redux/mutation-types';

global.accessToken = null

async function _fetch(url,method,headers,params,data){
    try {
        // await 是在等待一个async函数完成, 它会阻塞后面的代码
        //等着 Promise 对象 resolve，然后得到 resolve 的值,可以继续执行
        //这就是 await 必须用在 async 函数中的原因。async 函数调用不会造成阻塞，
        //它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。
        //所以_fetch不会阻塞
        if(global.accessToken == null || global.accessToken == undefined || global.accessToken == ''){
            global.accessToken =  await getItem(types.ACCESSTOKEN)
        }
        return axios({
            url,
            method,
            baseURL:'http://127.0.0.1:9090',
            headers:{"accessToken":global.accessToken,...headers},
            params,
            data
        })
    } catch (error) {
        console.log(error)
    }
   
}

function post(url,data,headers=null){
    return _fetch(url,'post',headers,null,data)
}

function get(url,params,headers=null){
    return _fetch(url,'get',headers,params,null);
}

function put(url,data,headers=null){
    return _fetch(url,'put',headers,null,data);
}

function deleteAxios(url,headers=null){
    return _fetch(url,'delete',headers,null,null);
}


global.post = post;
global.get = get;
global.put = put;
global.delete = deleteAxios;

