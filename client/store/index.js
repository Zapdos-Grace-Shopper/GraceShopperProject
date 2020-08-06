import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import user from './user'
import orders from './orders'
import shoe from './singleShoe'
// import shoesReducer from './shoes'

const reducer = combineReducers({
  user,
  auth,
  shoe,
  orders
  // shoesReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './user'
