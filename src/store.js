import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { newsListReducer, newsCreateReducer, newsDeleteReducer, newsUpdateReducer } from './reducers/newsReducers'
import { resourceListReducer } from './reducers/resourceReducers'
import {
  enterpriseCreateReducer, enterpriseDeleteReducer,
  enterpriseFollowReducer,
  enterpriseListReducer, enterpriseUpdateReducer, userEnterpriseListReducer
} from './reducers/enterpriseReducers'
import {
  groupCreateReducer, groupDeleteReducer, groupFollowReducer, groupListReducer,
  groupUpdateReducer, groupViewReducer, userGroupListReducer
} from './reducers/communityGroupReducers'
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateReducer,
  userRegisterReducer,
  userConfirmCodeReducer,
  userResendCodeReducer
} from './reducers/userReducers'
import { eventListReducer } from './reducers/calendarEventReducer'
import {
  communityListReducer, communityCreateReducer, communityJoinReducer, userCommunityListReducer,
  communityVisitReducer, communityDeleteReducer, communityUpdateReducer
} from './reducers/communityReducers'
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
  listUserCommunities: userCommunityListReducer,
  communityDelete: communityDeleteReducer,
  communityUpdate: communityUpdateReducer,
  activeCommunity: communityVisitReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userConfirmCode: userConfirmCodeReducer,
  userResendCode: userResendCodeReducer,
  addNewNews: newsCreateReducer,
  newsDelete: newsDeleteReducer,
  newsUpdate: newsUpdateReducer,
  listMember: memberListReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer
})

const userInfoFromStorage = window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : null

const currentCommunityFromStorage = window.localStorage.getItem('currentCommunity')
  ? JSON.parse(window.localStorage.getItem('currentCommunity'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  activeCommunity: { currentCommunity: currentCommunityFromStorage }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
