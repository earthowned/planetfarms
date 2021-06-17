import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { newsListReducer, newsCreateReducer } from './reducers/newsReducers'
import { resourceListReducer } from './reducers/resourceReducers'
import { enterpriseListReducer } from './reducers/enterpriseReducers'
import { groupListReducer, groupViewReducer } from './reducers/communityGroupReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { eventListReducer } from './reducers/calendarEventReducer'
import { communityListReducer, communityCreateReducer, communityJoinReducer, userCommunityListReducer, communityVisitReducer } from './reducers/CommunityReducers'

const reducer = combineReducers({
  listEvents: eventListReducer,
  groupView: groupViewReducer,
  listGroups: groupListReducer,
  listEnterprises: enterpriseListReducer,
  listResources: resourceListReducer,
  listNews: newsListReducer,
  addCommunity: communityCreateReducer,
  joinCommunity: communityJoinReducer,
  listCommunities: communityListReducer,
  listUserCommunities: userCommunityListReducer,
  activeCommunity: communityVisitReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  addNewNews: newsCreateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const currentCommunityFromStorage = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  activeCommunity: {currentCommunity: currentCommunityFromStorage}
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
