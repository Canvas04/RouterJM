import {tags} from '../../constants/constants'

const {TYPE,ADD_TAG,REMOVE_TAG} = tags
export const typeInput = (payload) => ({ type: TYPE, payload })
export const addTag = (payload, prevState) => {
  return (dispatch) => {
    dispatch({ type: ADD_TAG, payload, prevState })
  }
}
export const removeTag = (payload) => ({ type:REMOVE_TAG, payload })
