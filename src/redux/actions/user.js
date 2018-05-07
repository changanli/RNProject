import * as types from '../mutation-types';

// Action Creator

export function login(data){
    return {
        types: types.USER_LOGIN,
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