import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './containers/App'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
   </Provider> 
  ,
  document.getElementById('root')
)