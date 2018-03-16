import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './App'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
// 初始化状态
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer store={ store } routes={ routes } />,
    MOUNT_NODE
  )
}

// ========================================================
// Developer Tools Setup
// ========================================================

const renderError = (error) => {
  const RedBox = require('redbox-react').default

  ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
}

// Wrap render in try/catch
try {
  render()
} catch (error) {
  console.error(error)
  renderError(error)
}
