import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { resourceListReducer } from './reducers/resourceReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';


const reducer = combineReducers({ 
  listResources: resourceListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
})
const middleware = [thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
