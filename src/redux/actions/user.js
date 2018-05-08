import * as types from '../mutation-types';
import {post,get} from '../../utils/doFetch';
import {getItem} from '../../utils/storage';
// Action Creator

export function login(data){
    return {
        type: types.USER_LOGIN,
        data
    }
}

export function register(data) {
    return {
        type:types.USER_REGISTER,
        data
    }
}

export function loginOut() {
    return {
        type: types.USER_LOGIN_OUT
    }
}
