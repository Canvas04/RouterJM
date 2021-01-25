import { combineReducers } from 'redux'
import loadArticles from './req-articles/req-articles'
import userState from './userState/userState'
import creationTags from './creation-tags/creation-tags'
import stateModal from './modal-delete/modal-reducer'
export default combineReducers({
  loadArticles,
  userState,
  creationTags,
  stateModal,
})
