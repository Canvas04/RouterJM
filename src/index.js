import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { createHashHistory } from 'history'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './redux/reducer'
import './fonts/font.scss'
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
)
const customHistory = createHashHistory()
render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
