import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { newsListReducer, newsCreateReducer } from './reducers/newsReducers'
import { resourceListReducer } from './reducers/resourceReducers'
import { enterpriseCreateReducer, enterpriseDeleteReducer, 
  enterpriseFollowReducer, 
  enterpriseListReducer, enterpriseUpdateReducer, userEnterpriseListReducer } from './reducers/enterpriseReducers'
import { groupCreateReducer, groupDeleteReducer, groupFollowReducer, groupListReducer, 
  groupUpdateReducer, groupViewReducer, userGroupListReducer } from './reducers/communityGroupReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { eventListReducer } from './reducers/calendarEventReducer'
import { communityListReducer, communityCreateReducer, communityJoinReducer, userCommunityListReducer, 
  communityVisitReducer, communityDeleteReducer, communityUpdateReducer } from './reducers/communityReducers'
import { memberListReducer } from './reducers/memberReducers'

const reducer = combineReducers({
  listEvents: eventListReducer,
  groupView: groupViewReducer,
  listGroups: groupListReducer,
  listUserGroups: userGroupListReducer,
  groupUpdate: groupUpdateReducer,
  groupDelete: groupDeleteReducer,
  groupCreate: groupCreateReducer,
  groupFollow: groupFollowReducer,
  listEnterprises: enterpriseListReducer,
  listUserEnterprises: userEnterpriseListReducer,
  enterpriseUpdate: enterpriseUpdateReducer,
  enterpriseDelete: enterpriseDeleteReducer,
  enterpriseCreate: enterpriseCreateReducer,
  enterpriseFollow: enterpriseFollowReducer,
  listResources: resourceListReducer,
  listNews: newsListReducer,
  addCommunity: communityCreateReducer,
  joinCommunity: communityJoinReducer,
  listCommunities: communityListReducer,
  communityDelete: communityDeleteReducer,
  communityUpdate: communityUpdateReducer,
  listUserCommunities: userCommunityListReducer,
  activeCommunity: communityVisitReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  addNewNews: newsCreateReducer,
  listMember: memberListReducer
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
