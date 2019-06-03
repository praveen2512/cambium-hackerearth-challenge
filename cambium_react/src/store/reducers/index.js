import {combineReducers} from 'redux';
import authStore from './authStore'
import userStore from './userStore'
const reducers = combineReducers({
    authStore,
    userStore
})

export default reducers