import { createStore } from 'redux'
import basicReducer from './basicReducer'

export default () => createStore(
  basicReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
