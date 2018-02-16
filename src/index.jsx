import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MyFirstComponent from './components/MyFirstComponent.jsx'
import store from './store.js'

render(
  <Provider store={store()}>
    <MyFirstComponent/>
  </Provider>,
  document.getElementById('app')
);
