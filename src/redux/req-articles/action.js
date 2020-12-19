import { articles, baseUrl } from '../../constants/constants'

const {
  FETCH_FAILURE_ARTICLES,
  FETCH_REQUEST_ARTICLES,
  FETCH_RECEIVE_ARTICLES,
} = articles
const { url } = baseUrl

const requestArticles = () => {
  return {
    type: FETCH_REQUEST_ARTICLES,
  }
}
const receiveArticles = (payload) => {
  return {
    type: FETCH_RECEIVE_ARTICLES,
    status: 'success',
    payload,
  }
}
const errorLoadArticles = (error) => {
  return {
    type: FETCH_FAILURE_ARTICLES,
    status: 'error',
    error,
  }
}

export const loadArticles = () => {
  return async (dispatch) => {
    dispatch(requestArticles())
    try {
      const loadedArticles = await fetch(`${url}articles?limit=5`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
      const articles = await loadedArticles.json()
      dispatch(receiveArticles(articles))
    } catch (error) {
      dispatch(errorLoadArticles(error.message))
    }
  }
}
