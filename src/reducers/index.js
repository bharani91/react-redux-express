import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counter from './counterReducer'

export default combineReducers({
  counter,
  routing: routerReducer
})
