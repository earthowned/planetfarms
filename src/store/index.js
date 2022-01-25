import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  newsListReducer,
  newsCreateReducer,
  newsDeleteReducer,
  newsUpdateReducer,
} from "./reducers/newsReducers";
import { resourceListReducer } from "./reducers/resourceReducers";
import {
  courseCreateReducer,
  updateCourseReducer,
  deleteCourseReducer,
} from "./reducers/courseReducers";
import {
  lessonCreateReducer,
  lessonUpdateReducer,
  lessonDeleteReducer,
} from "./reducers/lessonReducers";
import {
  videoCreateReducer,
  videoDeleteReducer,
  videoUpdateReducer,
} from "./reducers/videoReducers";
import {
  photoCreateReducer,
  photoDeleteReducer,
  photoUpdateReducer,
} from "./reducers/photoReducer";
import {
  textCreateReducer,
  textDeleteReducer,
  textUpdateReducer,
} from "./reducers/textReducer";
import {
  materialCreateReducer,
  materialDeleteReducer,
} from "./reducers/materiallReducer";
import {
  lessonProgressCreateReducer,
  lessonProgressUpdateReducer,
} from "./reducers/lessonProgressReducer";
import {
  testCreateReducer,
  testQuestionEditReducer,
  testQuestionListReducer,
} from "./reducers/testReducers";

import {
  enterpriseCreateReducer,
  enterpriseDeleteReducer,
  enterpriseFollowReducer,
  enterpriseListReducer,
  enterpriseUpdateReducer,
  userEnterpriseListReducer,
} from "./reducers/enterpriseReducers";
import {
  groupCreateReducer,
  groupDeleteReducer,
  groupFollowReducer,
  groupListReducer,
  groupUpdateReducer,
  groupViewReducer,
  userGroupListReducer,
} from "./reducers/communityGroupReducers";
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
  userForgotPwdResendCodeReducer,
  userForgotPwdCodeMessageReducer,
} from "./reducers/userReducers";
import { eventListReducer } from "./reducers/calendarEventReducer";
import {
  communityListReducer,
  communityCreateReducer,
  communityJoinReducer,
  userCommunityListReducer,
  communityVisitReducer,
  communityDeleteReducer,
  communityUpdateReducer,
} from "./reducers/communityReducers";
import { memberListReducer } from "./reducers/memberReducers";
import { addEnrollReducer, leaveCourseReducer } from "./reducers/enrollReducer";
import {
  questionDeleteReducer,
  questionListReducer,
  questionUpdateReducer,
} from "./reducers/questionReducers";
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryListReducer,
  categoryUpdateReducer,
  categoryViewReducer,
} from "./reducers/categoryReducer";

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
  updateCourse: updateCourseReducer,
  deleteCourse: deleteCourseReducer,
  addLesson: lessonCreateReducer,
  updateLesson: lessonUpdateReducer,
  deleteLesson: lessonDeleteReducer,
  addVideo: videoCreateReducer,
  updateVideo: videoUpdateReducer,
  deleteVideo: videoDeleteReducer,
  addPhoto: photoCreateReducer,
  updatePhoto: photoUpdateReducer,
  deletePhoto: photoDeleteReducer,
  addText: textCreateReducer,
  updateText: textUpdateReducer,
  deleteText: textDeleteReducer,
  addMaterial: materialCreateReducer,
  deleteMaterial: materialDeleteReducer,
  addTest: testCreateReducer,
  addLessonProgress: lessonProgressCreateReducer,
  updateLessonProgress: lessonProgressUpdateReducer,
  listTestQuestions: testQuestionListReducer,
  editTestQuestions: testQuestionEditReducer,
  addNewNews: newsCreateReducer,
  newsDelete: newsDeleteReducer,
  newsUpdate: newsUpdateReducer,
  listMember: memberListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userConfirmCode: userConfirmCodeReducer,
  userResendCode: userResendCodeReducer,
  userAttrConfirmCode: userAttrConfirmCodeReducer,
  userAttrResendCode: userAttrResendCodeReducer,
  changePassword: changePasswordReducer,
  userForgotPwdConfirmCode: userForgotPwdConfirmCodeReducer,
  userForgotPwdResendCode: userForgotPwdResendCodeReducer,
  userForgotPwdCodeMessage: userForgotPwdCodeMessageReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  accessToken: accessTokenReducer,
  addEnroll: addEnrollReducer,
  leaveCourse: leaveCourseReducer,
  listQuestions: questionListReducer,
  questionDelete: questionDeleteReducer,
  questionUpdate: questionUpdateReducer,
  listCategories: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryView: categoryViewReducer,
  addCategory: categoryCreateReducer,
});

const userInfoFromStorage = window.localStorage.getItem("userInfo")
  ? JSON.parse(window.localStorage.getItem("userInfo"))
  : null;

const currentCommunityFromStorage = window.localStorage.getItem(
  "currentCommunity"
)
  ? JSON.parse(window.localStorage.getItem("currentCommunity"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  activeCommunity: { currentCommunity: currentCommunityFromStorage },
};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
