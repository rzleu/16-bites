import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'


document.addEventListener('DomContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore()

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, 
    root)
})