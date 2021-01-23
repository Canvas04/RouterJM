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
    case 'ESTIMATE':
      const { article: newArticle } = action.payload

      const { slug } = newArticle
      const prevArticles = state.articles.articles
      const newArticles = prevArticles.map((el) => {
        if (el.slug === slug) {
          const { favoritesCount, favorited } = el
          return {
            ...el,
            favorited: newArticle.favorited,
            favoritesCount: newArticle.favorited
              ? el.favoritesCount + 1
              : el.favoritesCount - 1,
          }
        }
        return { ...el }
      })
      const newObj = { ...state.articles, articles: newArticles }
      return { ...state, articles: newObj }
    case FETCH_FAILURE_ARTICLES:
      return { ...state, isError: true }
    default:
      return state
  }
}
