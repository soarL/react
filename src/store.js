import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducer from '@/reducers'


const store = createStore(
  combineReducers({...reducer}),
  applyMiddleware(thunk)
)

export default store