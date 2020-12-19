import { articles } from '../../constants/constants'

const {
  FETCH_FAILURE_ARTICLES,
  FETCH_REQUEST_ARTICLES,
  FETCH_RECEIVE_ARTICLES,
} = articles

const initialState = {
  isFetching: false,
  isError: false,
  articles: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST_ARTICLES:
      return { ...state, isFetching: true }
    case FETCH_RECEIVE_ARTICLES:
      return { ...state, isFetching: false, articles: action.payload }
    case FETCH_FAILURE_ARTICLES:
      return { ...state, isError: true }
    default:
      return state
  }
}
