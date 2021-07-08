import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { newsListReducer, newsCreateReducer } from './reducers/newsReducers'
import { resourceListReducer } from './reducers/resourceReducers'
import { enterpriseListReducer } from './reducers/enterpriseReducers'
import {
  groupListReducer,
  groupViewReducer
} from './reducers/communityGroupReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { eventListReducer } from './reducers/calendarEventReducer'
import { courseCreateReducer } from './reducers/courseReducers'
import {
  lessonCreateReducer,
  lessonUpdateReducer
} from './reducers/lessonReducers'
import { videoCreateReducer } from './reducers/videoReducers'
import { photoCreateReducer } from './reducers/photoReducer'
import { textCreateReducer } from './reducers/textReducer'
import { materialCreateReducer } from './reducers/materiallReducer'
import { testCreateReducer, testQuestionListReducer } from './reducers/testReducers'

const reducer = combineReducers({
  listEvents: eventListReducer,
  groupView: groupViewReducer,
  listGroups: groupListReducer,
  listEnterprises: enterpriseListReducer,
  listResources: resourceListReducer,
  listNews: newsListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  addNewNews: newsCreateReducer,
  addCourse: courseCreateReducer,
  addLesson: lessonCreateReducer,
  updateLesson: lessonUpdateReducer,
  addVideo: videoCreateReducer,
  addPhoto: photoCreateReducer,
  addText: textCreateReducer,
  addMaterial: materialCreateReducer,
  addTest: testCreateReducer,
  listTestQuestions: testQuestionListReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
