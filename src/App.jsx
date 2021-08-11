import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './reactQuery'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// Screens
import LoginScreen from './screens/login/LoginScreen'
import SignupScreen from './screens/signUp/SignupScreen'
import CongratulationScreen from './screens/congratulation/CongratulationScreen'
import Messenger from './screens/messenger/Messenger'
import Library from './screens/library/Library'
import './App.css'
import DashboardComponent from './screens/dashboard/MainDashboard'
import Achievements from './screens/dashboard/Achievements'
import MyLibrary from './screens/dashboard/MyLibrary'
import MySurvey from './screens/dashboard/MySurvey'
import MyCourse from './screens/dashboard/MyCourses'
import MyCoursePage from './screens/dashboard/coursePage/CoursePage'
import Collection from './screens/library/collection/Collection'
import UserCollection from './screens/library/userCollection/UserCollection'
import SavedCollection from './screens/library/savedCollection/SavedCollection'
import AllCommunitiesCard from './screens/communitySwitching/CommunitySwitching'
import CommunityPagenews from './screens/communityNews/CommunityNews'
import CommunityNewsViewPage from './screens/communityNewsView/CommunityNewsView'
import NewsAdd from './screens/communityNews/newsAdd/NewsAdd'
import CommunityMembers from './screens/communityMembers/CommunityMembers'
import UserInfo from './screens/cabinetUserInfo/CabinetUserInfo'
import CommunityGroup from './screens/communityGroup/CommunityGroup'
import Enterprises from './screens/enterprises/Enterprises'
import EnterprisesViewPage from './screens/enterprises/enterprisesViewPage/EnterprisesViewPage'
import CommunityGroupViewPage from './screens/communityGroup/groupViewPage/GroupViewPage'
import MyGroupViewPage from './screens/communityGroup/myGroupPage/MyGroup'
import MobileMessage from './components/mobileMessage/MobileMessage'
import Courses from './screens/courses/Courses'
import LessonPage from './screens/dashboard/lessonPage/LessonPage'
import LessonTestPage from './screens/lessonTestPage/LessonTestPage'
import CourseCollection from './screens/courses/courseCollection/CourseCollection'
import EditCollection from './screens/courses/editCollection/EditCollection'
import AdminCoursePage from './screens/courseManager/adminCoursePage/AdminCoursePage'
import AddLesson from './screens/courseManager/addLesson/AddLesson'
import CourseUsers from './screens/courses/courseUsers/CourseUsers'
import ScrollToTop from './utils/scrollToTop'
import CalendarScreen from './screens/calendarScreen/CalendarScreen'
import ForgotPassword from './screens/forgotPassword/ForgotPassword'
import EditLesson from './screens/courseManager/editLesson/EditLesson'
import UserVerification from './screens/verification/UserVerification'
import AddTest from './screens/addTest/AddTest'
import LogoutUser from './screens/logoutUser/LogoutUser'
import Category from './screens/category/Category'
import PageNotFound from './screens/pageNotFound/PageNotFound'
import Profile from './screens/profile/Profile'

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route component={LoginScreen} path='/login' exact />
            <Route component={SignupScreen} path='/register' exact />
            <Route component={ForgotPassword} path='/forgot-password' />
            <PrivateRoute component={UserVerification} path='/verification' exact />
            <PrivateRoute component={() => <Redirect to='/login' />} path='/' exact />
            <PrivateRoute component={LogoutUser} path='/logout' exact />
            <PrivateRoute component={CongratulationScreen} path='/edit-information' exact />
            <PrivateRoute component={CalendarScreen} exact path='/calendar/my-events' />
            <PrivateRoute component={Library} exact path='/library' />
            <PrivateRoute component={Collection} exact path='/library/collection' />
            <PrivateRoute component={UserCollection} path='/library/collection/users' exact />
            <PrivateRoute component={SavedCollection} path='/library/collection/saved' exact />
            <PrivateRoute component={Messenger} exact path='/messenger' />
            <PrivateRoute component={MobileMessage} path='/messenger/:id' exact />
            <PrivateRoute component={CommunityPagenews} exact path='/community-page-news/:id' />
            <PrivateRoute component={NewsAdd} path='/community-page-news/:title/:category' exact />
            <PrivateRoute component={CommunityNewsViewPage} path='/community-page-news-view' exact />
            <PrivateRoute component={AllCommunitiesCard} path='/community-switching' exact />
            <PrivateRoute component={CommunityMembers} path='/community-members/:id' exact />
            {/* <PrivateRoute component={Profile} path='/profile/:id' exact /> */}
            <PrivateRoute component={CommunityGroup} path='/community-group/:id' exact />
            <PrivateRoute component={CommunityGroup} path='/your-community-group/:id' exact />
            <PrivateRoute component={CommunityGroupViewPage} path='/community-group-view-page/:id' exact />
            <PrivateRoute component={Courses} exact path='/courses' />
            <PrivateRoute component={CourseCollection} exact path='/courses/my-courses' />
            <PrivateRoute component={CourseCollection} exact path='/courses/saved-collection' />
            <PrivateRoute component={EditCollection} path='/courses/my-courses/:id' exact />
            <PrivateRoute component={Courses} path='/admin/courses' exact />
            <PrivateRoute component={AdminCoursePage} path='/admin/course/:courseId' exact />
            <PrivateRoute component={AddLesson} path='/admin/add-lesson/:courseId' exact />
            <PrivateRoute component={EditLesson} path='/admin/edit-lesson/:id' exact />
            <PrivateRoute component={CourseUsers} path='/courses/users' exact />
            <PrivateRoute component={Enterprises} path='/enterprises/:id' exact />
            <PrivateRoute component={Enterprises} path='/your-enterprises/:id' exact />
            <PrivateRoute component={EnterprisesViewPage} path='/enterprises-view' exact />
            <PrivateRoute component={MyGroupViewPage} path='/my-group-view-page/:id' exact />
            <PrivateRoute component={DashboardComponent} path='/dashboard' exact />
            <PrivateRoute component={Achievements} path='/achievements' exact />
            <PrivateRoute component={MyLibrary} path='/mylibrary' exact />
            <PrivateRoute component={MySurvey} path='/mysurvey' exact />
            <PrivateRoute component={MyCourse} path='/mycourse' exact />
            {/* <PrivateRoute component={MyCoursePage} exact path="/mycoursepage" /> */}
            <PrivateRoute component={LessonPage} path='/lesson/:id' exact />
            {/* <PrivateRoute component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}
            <PrivateRoute component={() => <MyCoursePage unpaid='unpaid' />} path='/course/:courseId' exact />
            <PrivateRoute component={LessonTestPage} path='/lesson-test-page/:testId' exact />
            <PrivateRoute
              component={() => (
                <DndProvider backend={HTML5Backend}>
                  <AddTest />
                </DndProvider>
              )}
              path='/admin/add-test/:lessonId' exact
            />
            <PrivateRoute
              component={() => (
                <DndProvider backend={HTML5Backend}>
                  <AddTest />
                </DndProvider>
              )}
              path='/admin/edit-test/:lessonId'
            />
            <PrivateRoute component={Category} path='/admin/categories' />            
            <PrivateRoute component={Profile} exact path='/profile/:id' />
            <PrivateRoute component={UserInfo} exact path='/userInfo' />
            <PrivateRoute component={() => <MyCoursePage unpaid='unpaid' />} path='/coursepage' />
            <PrivateRoute component={PageNotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </QueryClientProvider>
  )
}

export default App
