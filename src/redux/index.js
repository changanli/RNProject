import {
    combineReducers,
    applyMiddleware,
    createStore
} from 'redux'
import thunk from 'redux-thunk'

import user from './reducers/user'

const reducer = combineReducers({
    user,
})
const store = createStore(reducer,applyMiddleware(thunk));
export default store;