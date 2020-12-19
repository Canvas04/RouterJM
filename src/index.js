import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from './redux/reducer'
import './fonts/font.scss'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware( reduxThunk))
)

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
