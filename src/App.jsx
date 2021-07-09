import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './reactQuery'
import PrivateRoute from './components/privateRoute/PrivateRoute'
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
import ScrollToTop from './utils/scrollToTop'
import CalendarScreen from './screens/calendarScreen/CalendarScreen'
import ForgotPassword from './screens/forgotPassword/ForgotPassword'
import EditLesson from './screens/courseManager/editLesson/EditLesson'
import UserVerification from './screens/verification/UserVerification'
import EmailVerification from './screens/verification/EmailVerification'
import PhoneVerification from './screens/verification/PhoneVerification'
import AddTest from './screens/addTest/AddTest'

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route component={LoginScreen} path='/:path(|login)' exact />
            <Route component={SignupScreen} path='/register' />
            <Route component={ForgotPassword} path='/forgot-password' />
            <Route component={UserVerification} path='/verification' />
            <PrivateRoute component={CongratulationScreen} path='/register-complete' />
            <PrivateRoute component={CalendarScreen} exact path='/calendar/my-events' />
            <PrivateRoute component={Library} exact path='/library' />
            <PrivateRoute component={Collection} exact path='/library/collection' />
            <PrivateRoute component={UserCollection} path='/library/collection/users' />
            <PrivateRoute component={SavedCollection} path='/library/collection/saved' />
            <PrivateRoute component={Messenger} exact path='/messenger' />
            <PrivateRoute component={MobileMessage} path='/messenger/:id' />
            <PrivateRoute component={CommunityPagenews} exact path='/community-page-news/:id' />
            <PrivateRoute component={NewsAdd} path='/community-page-news/:title/:category' />
            <PrivateRoute component={CommunityNewsViewPage} path='/community-page-news-view' />
            <PrivateRoute component={AllCommunitiesCard} path='/community-switching' />
            <PrivateRoute component={CommunityMembers} path='/community-members/:id' />
            <PrivateRoute component={CommunityMembersProfile} path='/community-members-profile/:id' />
            <PrivateRoute component={CommunityGroup} path='/community-group/:id' />
            <PrivateRoute component={CommunityGroup} path='/your-community-group/:id' />
            <PrivateRoute component={CommunityGroupViewPage} path='/community-group-view-page/:id' />
            <PrivateRoute component={Courses} exact path='/courses' />
            <PrivateRoute component={CourseCollection} exact path='/courses/my-courses' />
            <PrivateRoute component={EditCollection} path='/courses/my-courses/:id' />
            <PrivateRoute component={Courses} path='/admin/courses' />
            <PrivateRoute component={AdminCoursePage} path='/admin/course/:courseId' />
            <PrivateRoute component={AddLesson} path='/admin/add-lesson/:courseId' />
            <PrivateRoute component={EditLesson} path='/admin/edit-lesson/:id' />
            <PrivateRoute component={CourseUsers} path='/courses/users' />
            <PrivateRoute component={Enterprises} path='/enterprises/:id' />
            <PrivateRoute component={Enterprises} path='/your-enterprises/:id' />
            <PrivateRoute component={EnterprisesViewPage} path='/enterprises-view' />
            <PrivateRoute component={MyGroupViewPage} path='/my-group-view-page/:id' />
            <PrivateRoute component={DashboardComponent} path='/dashboard' />
            <PrivateRoute component={Achievements} path='/achievements' />
            <PrivateRoute component={MyLibrary} path='/mylibrary' />
            <PrivateRoute component={MySurvey} path='/mysurvey' />
            <PrivateRoute component={MyCourse} path='/mycourse' />
            {/* <PrivateRoute component={MyCoursePage} exact path="/mycoursepage" /> */}
            <PrivateRoute component={LessonPage} path='/lesson/:id' />
            {/* <PrivateRoute component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}
            <PrivateRoute component={() => <MyCoursePage unpaid='unpaid' />} path='/course/:courseId' />
            <PrivateRoute component={LessonTestPage} path='/lesson-test-page/:testId' />
            <PrivateRoute component={AddTest} path='/admin/add-test/:lessonId' />
            <PrivateRoute component={AddTest} path='/admin/edit-test/:lessonId' />
            <PrivateRoute component={MyProfile} path='/myProfile' />
            <PrivateRoute component={UserInfo} path='/userInfo' />
            <PrivateRoute component={() => <MyCoursePage unpaid='unpaid' />} path='/coursepage' />
          </Switch>
        </ScrollToTop>
      </Router>
    </QueryClientProvider>
  )
}

export default App
