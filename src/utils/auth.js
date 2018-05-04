import {
    AsyncStorage
}from 'react-native';

const AccessToken = 'AccessToken'


export function getToken(){
   return AsyncStorage.getItem(AccessToken)
}

export function setToken(token){
    AsyncStorage.setItem(AccessToken,token,function(e){
        if(e != null){
           
        }
    })
}

export function removeToken(){
    AsyncStorage.removeItem(AccessToken,function(e){
        if(e == null){
        }
    })
}