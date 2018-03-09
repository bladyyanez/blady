import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MyFirstComponent from './components/myFirstComponent'
import store from './store'

render(
  <Provider store={store()}>
    <MyFirstComponent/>
  </Provider>,
  document.getElementById('app')
);
