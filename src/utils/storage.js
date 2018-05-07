import {
    AsyncStorage
}from 'react-native';

export function getItem(key){
   return AsyncStorage.getItem(key)
}

export function setItem(key,value){
    tmp = value;
    if(value == undefined || value == null){
        tmp = ""
    }
    console.log(tmp);
    console.log(key)
    AsyncStorage.setItem(key,value || '',function(e){
        if(e != null){
           
        }
    })
}

export function removeItem(key){
    AsyncStorage.removeItem(key,function(e){
        if(e == null){
        }
    })
}

export function multiGet(keys){
    return AsyncStorage.multiGet(keys)
}