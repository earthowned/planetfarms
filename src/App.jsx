import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
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
import MyProfile from './screens/dashboard/MyProfile'
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
import CommunityMembersProfile from './screens/communityMemberProfile/CommunityMemberProfile'
import UserInfo from './screens/cabinetUserInfo/CabinetUserInfo'
import CommunityGroup from './screens/communityGroup/CommunityGroup'
import Enterprises from './screens/enterprises/Enterprises'
import EnterprisesViewPage from './screens/enterprises/enterprisesViewPage/EnterprisesViewPage'
import CommunityGroupViewPage from './screens/communityGroup/groupViewPage/GroupViewPage'
import MyGroupViewPage from './screens/communityGroup/myGroupPage/MyGroup'
import MobileMessage from './components/mobileMessage/MobileMessage'
import Courses from './screens/courses/Courses'
import LessonPage from './screens/dashboard/lessonPage/LessonPage'
import LessonTest from './screens/lessonTest/LessonTest'
import CourseCollection from './screens/courses/courseCollection/CourseCollection'
import EditCollection from './screens/courses/editCollection/EditCollection'
import AdminCoursePage from './screens/courseManager/adminCoursePage/AdminCoursePage'
import AddLesson from './screens/courseManager/addLesson/AddLesson'
import CourseUsers from './screens/courses/courseUsers/CourseUsers'
import LoginSignUp from './screens/loginSignUp/LoginSignUp'
import ScrollToTop from './utils/scrollToTop'
import CalendarScreen from './screens/calendarScreen/CalendarScreen'
import ForgotPassword from './screens/forgotPassword/ForgotPassword'

function App () {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path='/:path(|login)' exact>
            <LoginScreen />
          </Route>
          <Route path='/register'>
            <SignupScreen />
          </Route>
          <Route path='/register-complete'>
            <CongratulationScreen />
          </Route>
          <Route path='/forgot-password'>
            <ForgotPassword />
          </Route>
          <Route exact path='/calendar/my-events'>
            <CalendarScreen />
          </Route>
          <Route exact path='/library'>
            <Library />
          </Route>
          <Route exact path='/library/collection'>
            <Collection />
          </Route>
          <Route path='/library/collection/users'>
            <UserCollection />
          </Route>
          <Route path='/library/collection/saved'>
            <SavedCollection />
          </Route>
          <Route exact path='/messenger'>
            <Messenger />
          </Route>
          <Route path='/messenger/:id'>
            <MobileMessage />
          </Route>
          <Route exact path='/community-page-news/:id'>
            <CommunityPagenews />
          </Route>
          <Route path='/community-page-news/:title/:category'>
            <NewsAdd />
          </Route>
          <Route path='/community-page-news-view'>
            <CommunityNewsViewPage />
          </Route>
          <Route path='/community-switching'>
            <AllCommunitiesCard />
          </Route>
          <Route path='/community-members'>
            <CommunityMembers />
          </Route>
          <Route path='/community-members-profile/:id'>
            <CommunityMembersProfile />
          </Route>
          <Route path='/community-group'>
            <CommunityGroup />
          </Route>
          <Route path='/community-group-view-page/:id'>
            <CommunityGroupViewPage />
          </Route>
          <Route exact path='/courses'>
            <Courses />
          </Route>
          <Route exact path='/courses/my-courses'>
            <CourseCollection />
          </Route>
          <Route path='/courses/my-courses/:id'>
            <EditCollection />
          </Route>
          <Route path='/admin/courses'>
            <Courses />
          </Route>
          <Route path='/admin/coursepage'>
            <AdminCoursePage />
          </Route>
          <Route path='/admin/lesson-page'>
            <AddLesson />
          </Route>
          <Route path='/courses/users'>
            <CourseUsers />
          </Route>
          <Route path='/enterprises'>
            <Enterprises />
          </Route>
          <Route path='/enterprises-view'>
            <EnterprisesViewPage />
          </Route>
          <Route path='/my-group-view-page/:id'>
            <MyGroupViewPage />
          </Route>
          <Route path='/dashboard'>
            <DashboardComponent />
          </Route>
          <Route path='/achievements'>
            <Achievements />
          </Route>
          <Route path='/mylibrary'>
            <MyLibrary />
          </Route>
          <Route path='/mysurvey'>
            <MySurvey />
          </Route>
          <Route path='/mycourse'>
            <MyCourse />
          </Route>
          <Route exact path='/mycoursepage'>
            <MyCoursePage />
          </Route>
          <Route path='/mycoursepage/:id'>
            <LessonPage />
          </Route>
          <Route path='/coursepage'>
            <MyCoursePage unpaid='unpaid' />
          </Route>
          <Route path='/test-lesson-1'>
            <LessonTest />
          </Route>
          <Route path='/myProfile'>
            <MyProfile />
          </Route>
          <Route path='/userInfo'>
            <UserInfo />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App
