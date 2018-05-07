import * as types from '../mutation-types';
import {getItem,setItem,remvoeItem, removeItem,multiGet} from '../../utils/storage';
/*
    刷新浏览器页面后,store会被重置。
    store是内存机制，不是缓存机制，页面刷新和关闭都会导致store初始化
    store一般保存的数据:
    1.组件的初始状态
    2.后端数据的初始状态
    如果你需要存储的数据是实时存储并且读取出来显示，
    那么存在本地或者服务器，这样每次刷新页面都要读取本地缓存或者服务端API,然后保存到store,在从store去读取到组件
*/
const initState = () => ({
    userId:'',
    phone:'',
    accessToken:'',
})

export default function user(state = initState(), action) {
    switch (action.type) {
        case types.USER_LOGIN:
        {
            const {
                phone,
                accessToken,
                userId
            } = action.data
            setItem(types.USER_PHONE,phone)
            setItem(types.USER_ID,userId )
            setItem(types.ACESSTOKEN,accessToken)
            // return initState();
            return {phone,accessToken,userId}
        }
        case types.USER_REGISTER:
        {
            const {phone,accessToken,userId} = action.data;
            setItem(types.USER_PHONE,phone)
            setItem(types.USER_ID,userId)
            setItem(types.ACESSTOKEN,accessToken)
            return initState()
        }
        case types.USER_RESET_PASSWORD:
        {
            const {phone,accessToken,userId} = action.data;
            setItem(types.USER_PHONE,phone)
            setItem(types.USER_ID,userId)
            setItem(types.ACESSTOKEN,accessToken)
            return initState()
        }
        case types.USER_LOGIN_OUT:
            removeItem(types.ACESSTOKEN)
            removeItem(types.USER_ID)
            return initState();
        default:
        console.log(action.type);
            return state;
    }
}
