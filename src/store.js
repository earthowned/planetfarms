import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { newsListReducer, newsCreateReducer } from './reducers/newsReducers'
import { resourceListReducer } from './reducers/resourceReducers'
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateReducer,
  userRegisterReducer
} from './reducers/userReducers'

const reducer = combineReducers({
  listResources: resourceListReducer,
  listNews: newsListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  addNewNews: newsCreateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
