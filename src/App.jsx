import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './reactQuery'
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
import LessonTestPage from './screens/lessonTestPage/LessonTestPage'
import CourseCollection from './screens/courses/courseCollection/CourseCollection'
import EditCollection from './screens/courses/editCollection/EditCollection'
import AdminCoursePage from './screens/courseManager/adminCoursePage/AdminCoursePage'
import AddLesson from './screens/courseManager/addLesson/AddLesson'
import CourseUsers from './screens/courses/courseUsers/CourseUsers'
import LoginSignUp from './screens/loginSignUp/LoginSignUp'
import ScrollToTop from './utils/scrollToTop'
import CalendarScreen from './screens/calendarScreen/CalendarScreen'
import ForgotPassword from './screens/forgotPassword/ForgotPassword'
import EditLesson from './screens/courseManager/editLesson/EditLesson'
import UserVerification from './screens/userVerification/UserVerification'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/:path(|login)" exact>
              <LoginScreen />
            </Route>
            <Route path="/register">
              <SignupScreen />
            </Route>
            <Route path="/register-complete">
              <CongratulationScreen />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path='/verification'>
              <UserVerification />
            </Route>
            <Route exact path="/calendar/my-events">
              <CalendarScreen />
            </Route>
            <Route exact path="/library">
              <Library />
            </Route>
            <Route exact path="/library/collection">
              <Collection />
            </Route>
            <Route path="/library/collection/users">
              <UserCollection />
            </Route>
            <Route path="/library/collection/saved">
              <SavedCollection />
            </Route>
            <Route exact path="/messenger">
              <Messenger />
            </Route>
            <Route path="/messenger/:id">
              <MobileMessage />
            </Route>
            <Route exact path='/community-page-news/:id'>
              <CommunityPagenews />
            </Route>
            <Route path="/community-page-news/:title/:category">
              <NewsAdd />
            </Route>
            <Route path="/community-page-news-view">
              <CommunityNewsViewPage />
            </Route>
            <Route path="/community-switching">
              <AllCommunitiesCard />
            </Route>
            <Route path='/community-members/:id'>
              <CommunityMembers />
            </Route>
            <Route path="/community-members-profile/:id">
              <CommunityMembersProfile />
            </Route>
            <Route path="/community-group/:id">
              <CommunityGroup />
            </Route>
            <Route path='/your-community-group/:id'>
              <CommunityGroup />
            </Route>
            <Route path="/community-group-view-page/:id">
              <CommunityGroupViewPage />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <Route exact path="/courses/my-courses">
              <CourseCollection />
            </Route>
            <Route path="/courses/my-courses/:id">
              <EditCollection />
            </Route>
            <Route path="/admin/courses">
              <Courses />
            </Route>
            <Route path="/admin/course/:courseId">
              <AdminCoursePage />
            </Route>
            <Route path="/admin/add-lesson/:courseId">
              <AddLesson />
            </Route>
            <Route path="/admin/edit-lesson/:id">
              <EditLesson />
            </Route>
            <Route path="/courses/users">
              <CourseUsers />
            </Route>
            <Route path='/enterprises/:id'>
              <Enterprises />
            </Route>
            <Route path='/your-enterprises/:id'>
              <Enterprises />
            </Route>
            <Route path="/enterprises-view">
              <EnterprisesViewPage />
            </Route>
            <Route path="/my-group-view-page/:id">
              <MyGroupViewPage />
            </Route>
            <Route path="/dashboard">
              <DashboardComponent />
            </Route>
            <Route path="/achievements">
              <Achievements />
            </Route>
            <Route path="/mylibrary">
              <MyLibrary />
            </Route>
            <Route path="/mysurvey">
              <MySurvey />
            </Route>
            <Route path="/mycourse">
              <MyCourse />
            </Route>
            {/* <Route exact path="/mycoursepage">
              <MyCoursePage />
            </Route> */}
            <Route path="/lesson/:id">
              <LessonPage />
            </Route>
            {/* <Route exact path='/lesson/:id/testpage'>
              <LessonTestPage />
            </Route> */}
            <Route
              path="/course/:courseId"
              component={() => <MyCoursePage unpaid="unpaid" />}
            />
            <Route path='/lesson-test-page/:testId'>
              <LessonTestPage />
            </Route>
            <Route path="/myProfile">
              <MyProfile />
            </Route>
            <Route path="/userInfo">
              <UserInfo />
            </Route>
            <Route path='/coursepage'>
              <MyCoursePage unpaid='unpaid' />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </QueryClientProvider>
  )
}

export default App
