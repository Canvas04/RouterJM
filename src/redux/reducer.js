import { combineReducers } from 'redux'
import loadArticles from './req-articles/req-articles'
import sign_up from './sign-up/sign-up'
export default combineReducers({ loadArticles,sign_up })
