import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)
render(
  <Provider store={store}>
      <Router >
         <App />
      </Router>
  </Provider>,
  document.getElementById('root')
)
