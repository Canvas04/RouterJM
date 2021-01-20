import { combineReducers } from 'redux'
import loadArticles from './req-articles/req-articles'
import sign_up from './sign-up/sign-up'
import sign_in from './sign-in/sign-in'
import userState from './userState/userState'
import creationTags from './creation-tags/creation-tags'
import stateModal from './modal-delete/modal-reducer'
export default combineReducers({ loadArticles,sign_up ,sign_in,userState,creationTags,stateModal})
