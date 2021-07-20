import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  newsListReducer,
  newsCreateReducer,
  newsDeleteReducer,
  newsUpdateReducer
} from './reducers/newsReducers'
import { resourceListReducer } from './reducers/resourceReducers'
import { courseCreateReducer } from './reducers/courseReducers'
import {
  lessonCreateReducer,
  lessonUpdateReducer
} from './reducers/lessonReducers'
import { videoCreateReducer } from './reducers/videoReducers'
import { photoCreateReducer } from './reducers/photoReducer'
import { textCreateReducer } from './reducers/textReducer'
import { materialCreateReducer } from './reducers/materiallReducer'
import {
  testCreateReducer,
  testQuestionListReducer
} from './reducers/testReducers'
import {
  enterpriseCreateReducer,
  enterpriseDeleteReducer,
  enterpriseFollowReducer,
  enterpriseListReducer,
  enterpriseUpdateReducer,
  userEnterpriseListReducer
} from './reducers/enterpriseReducers'
import {
  groupCreateReducer,
  groupDeleteReducer,
  groupFollowReducer,
  groupListReducer,
  groupUpdateReducer,
  groupViewReducer,
  userGroupListReducer
} from './reducers/communityGroupReducers'
import {
  accessTokenReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateReducer,
  userRegisterReducer,
  userConfirmCodeReducer,
  userResendCodeReducer,
  userAttrConfirmCodeReducer,
  userAttrResendCodeReducer,
  changePasswordReducer,
  userForgotPwdConfirmCodeReducer,
  userForgotPwdResendCodeReducer
} from './reducers/userReducers'
import { eventListReducer } from './reducers/calendarEventReducer'
import {
  communityListReducer,
  communityCreateReducer,
  communityJoinReducer,
  userCommunityListReducer,
  communityVisitReducer,
  communityDeleteReducer,
  communityUpdateReducer
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
  addCourse: courseCreateReducer,
  addLesson: lessonCreateReducer,
  updateLesson: lessonUpdateReducer,
  addVideo: videoCreateReducer,
  addPhoto: photoCreateReducer,
  addText: textCreateReducer,
  addMaterial: materialCreateReducer,
  addTest: testCreateReducer,
  listTestQuestions: testQuestionListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userConfirmCode: userConfirmCodeReducer,
  userResendCode: userResendCodeReducer,
  userAttrConfirmCode: userAttrConfirmCodeReducer,
  userAttrResendCode: userAttrResendCodeReducer,
  changePassword: changePasswordReducer,
  userForgotPwdConfirmCode: userForgotPwdConfirmCodeReducer,
  userForgotPwdResendCode: userForgotPwdResendCodeReducer,
  addNewNews: newsCreateReducer,
  newsDelete: newsDeleteReducer,
  newsUpdate: newsUpdateReducer,
  listMember: memberListReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  accessToken: accessTokenReducer
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
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
