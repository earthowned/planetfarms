import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { resourceListReducer } from './reducers/resourceReducers'


const reducer = combineReducers({ listResources: resourceListReducer })
const middleware = [thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
