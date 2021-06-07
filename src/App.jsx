import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
// Screens
import LoginScreen from './Screens/Login/LoginScreen'
import SignupScreen from './Screens/SignUp/SignupScreen'
import CongratulationScreen from './Screens/Congratulation/CongratulationScreen'
import Messenger from './Screens/Messenger/Messenger'
import Library from './Screens/Library/Library'
import './App.css'
import DashboardComponent from './Screens/Dashboard/MainDashboard'
import Achievements from './Screens/Dashboard/Achievements'
import MyLibrary from './Screens/Dashboard/MyLibrary'
import MyProfile from './Screens/Dashboard/MyProfile'
import MySurvey from './Screens/Dashboard/MySurvey'
import MyCourse from './Screens/Dashboard/MyCourses'
import MyCoursePage from './Screens/Dashboard/CoursePage/CoursePage'
import Collection from './Screens/Library/collection/Collection'
import UserCollection from './Screens/Library/userCollection/UserCollection'
import SavedCollection from './Screens/Library/savedCollection/SavedCollection'
import AllCommunitiesCard from './Screens/CommunitySwitching/CommunitySwitching'
import CommunityPagenews from './Screens/CommunityNews/CommunityNews'
import CommunityNewsViewPage from './Screens/CommunityNewsView/CommunityNewsView'
import NewsAdd from './Screens/CommunityNews/NewsAdd/NewsAdd'
import CommunityMembers from './Screens/CommunityMembers/CommunityMembers'
import CommunityMembersProfile from './Screens/CommunityMemberProfile/CommunityMemberProfile'
import UserInfo from './Screens/CabinetUserInfo/CabinetUserInfo'
import CommunityGroup from './Screens/CommunityGroup/CommunityGroup'
import Enterprises from './Screens/Enterprises/Enterprises'
import EnterprisesViewPage from './Screens/Enterprises/EnterprisesViewPage/EnterprisesViewPage'
import CommunityGroupViewPage from './Screens/CommunityGroup/GroupViewPage/GroupViewPage'
import MyGroupViewPage from './Screens/CommunityGroup/MyGroupPage/MyGroup'
import MobileMessage from './Components/MobileMessage/MobileMessage'
import Courses from './Screens/courses/Courses'
import LessonPage from './Screens/Dashboard/LessonPage/LessonPage'
import LessonTest from './Screens/LessonTest/LessonTest'
import CourseCollection from './Screens/courses/courseCollection/CourseCollection'
import EditCollection from './Screens/courses/editCollection/EditCollection'
import AdminCoursePage from './Screens/CourseManager/AdminCoursePage/AdminCoursePage'
import AddLesson from './Screens/CourseManager/AddLesson/AddLesson'
import CourseUsers from './Screens/courses/courseUsers/CourseUsers'
import Amplify, { Auth } from 'aws-amplify'
import CalendarScreen from './Screens/calendarScreen/CalendarScreen'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <SignupScreen />
        </Route>
        <Route path='/register-complete'>
          <CongratulationScreen />
        </Route>
        <Route path='/:path(|login)' exact>
          <LoginScreen {...X0100LoginEmptyData} />
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
        <Route exact path='/community-page-news'>
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
    </Router>
  )
}

export default App

const X0100LoginEmptyData = {
  vector: '/img/vector.svg',
  vector2: '/img/vector@2x.svg',
  vector3: '/img/vector-994@2x.png',
  vector4: 'img/vector-4.svg',
  vector5: 'img/vector-5.svg',
  vector6: '/img/vector-1246@2x.png',
  welcomeBack: 'Sign In',
  vector7: 'img/vector-7.png',
  vector8: 'img/vector-8.png',
  vector9: 'img/vector-9.png',
  username: 'Username',
  password: 'Password',
  vector10: '',
  subtract: '',
  rememberMe: 'Remember Me',
  signIn: 'Sign in',
  forgotPassword: 'Forgot Password?',
  text1: 'Sign In with services',
  vector11: '/img/vector.svg',
  vector12: '',
  vector13: '',
  vector14: '',
  google: 'Google',
  subtract2: '',
  facebook: 'Facebook',
  spanText: "Don't have an account yet?",
  spanText2: '  ',
  spanText3: 'Become a member!',
  vector15: '',
  vector16: '',
  vector17: '',
  vector18: ''
}
