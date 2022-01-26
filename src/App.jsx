/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { queryClient } from "./reactQuery";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

// Auth Pages
import { SignInPage } from "./screens/auth/sign-in";
import { SignUpPage } from "./screens/auth/sign-up";

// Home Pages
import CongratulationScreen from "./screens/congratulation/CongratulationScreen";
import Messenger from "./screens/messenger/Messenger";
import Library from "./screens/library/Library";
import DashboardComponent from "./screens/dashboard/MainDashboard";
import Achievements from "./screens/dashboard/Achievements";
import MyLibrary from "./screens/dashboard/MyLibrary";
import MySurvey from "./screens/dashboard/MySurvey";
import MyCourse from "./screens/dashboard/MyCourses";
import MyCoursePage from "./screens/dashboard/coursePage/CoursePage";
import Collection from "./screens/library/collection/Collection";
import UserCollection from "./screens/library/userCollection/UserCollection";
import SavedCollection from "./screens/library/savedCollection/SavedCollection";
import AllCommunitiesCard from "./screens/communitySwitching/CommunitySwitching";
import CommunityPagenews from "./screens/communityNews/CommunityNews";
import CommunityNewsViewPage from "./screens/communityNewsView/CommunityNewsView";
import NewsAdd from "./screens/communityNews/newsAdd/NewsAdd";
import CommunityMembers from "./screens/communityMembers/CommunityMembers";
import UserInfo from "./screens/cabinetUserInfo/CabinetUserInfo";
import CommunityGroup from "./screens/communityGroup/CommunityGroup";
import Enterprises from "./screens/enterprises/Enterprises";
import EnterprisesViewPage from "./screens/enterprises/enterprisesViewPage/EnterprisesViewPage";
import CommunityGroupViewPage from "./screens/communityGroup/groupViewPage/GroupViewPage";
import MyGroupViewPage from "./screens/communityGroup/myGroupPage/MyGroup";
import MobileMessage from "./components/mobileMessage/MobileMessage";
import Courses from "./screens/courses/Courses";
import LessonPage from "./screens/dashboard/lessonPage/LessonPage";
import LessonTestPage from "./screens/lessonTestPage/LessonTestPage";
import CourseCollection from "./screens/courses/courseCollection/CourseCollection";
import EditCollection from "./screens/courses/editCollection/EditCollection";
import AdminCoursePage from "./screens/courseManager/adminCoursePage/AdminCoursePage";
import AddLesson from "./screens/courseManager/lesson/AddLesson";
import CourseUsers from "./screens/courses/courseUsers/CourseUsers";
import ScrollToTop from "./utils/scrollToTop";
import CalendarScreen from "./screens/calendarScreen/CalendarScreen";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword";
import UserVerification from "./screens/verification/UserVerification";
import AddTest from "./screens/addTest/AddTest";
import LogoutUser from "./screens/logoutUser/LogoutUser";
import Category from "./screens/category/Category";
import PageNotFound from "./screens/pageNotFound/PageNotFound";
import Profile from "./screens/profile/Profile";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route component={SignInPage} path="/login" exact />
              <Route component={SignUpPage} path="/register" exact />
              <Route component={ForgotPassword} path="/forgot-password" />

              <PrivateRoute
                component={UserVerification}
                path="/verification"
                exact
              />
              <PrivateRoute
                component={() => <Redirect to="/login" />}
                path="/"
                exact
              />
              <PrivateRoute component={LogoutUser} path="/logout" exact />
              <PrivateRoute
                component={CongratulationScreen}
                path="/edit-information"
                exact
              />
              <PrivateRoute
                component={CalendarScreen}
                exact
                path="/calendar/my-events"
              />
              <PrivateRoute component={Library} exact path="/library" />
              <PrivateRoute
                component={Collection}
                exact
                path="/library/collection"
              />
              <PrivateRoute
                component={UserCollection}
                path="/library/collection/users"
                exact
              />
              <PrivateRoute
                component={SavedCollection}
                path="/library/collection/saved"
                exact
              />
              <PrivateRoute component={Messenger} exact path="/messenger" />
              <PrivateRoute
                component={MobileMessage}
                path="/messenger/:id"
                exact
              />
              <PrivateRoute component={CommunityPagenews} exact path="/news" />
              <PrivateRoute component={NewsAdd} path="/news/add" exact />
              <PrivateRoute component={NewsAdd} path="/news/edit/:id" exact />
              <PrivateRoute
                component={CommunityNewsViewPage}
                path="/news/:id"
                exact
              />
              <PrivateRoute
                component={AllCommunitiesCard}
                path="/community-switching"
                exact
              />
              <PrivateRoute
                component={CommunityMembers}
                path="/members"
                exact
              />
              {/* <PrivateRoute component={CommunityMembersProfile} path='/members/profile/:id' exact /> */}
              <PrivateRoute component={CommunityGroup} path="/groups" exact />
              <PrivateRoute
                component={CommunityGroup}
                path="/your-groups/:id"
                exact
              />
              <PrivateRoute
                component={CommunityGroupViewPage}
                path="/groups/:id"
                exact
              />
              <PrivateRoute component={Courses} exact path="/courses" />
              <PrivateRoute
                component={CourseCollection}
                exact
                path="/courses/my-courses"
              />
              <PrivateRoute
                component={CourseCollection}
                exact
                path="/courses/saved-collection"
              />
              <PrivateRoute
                component={EditCollection}
                path="/courses/my-courses/:id"
                exact
              />
              <PrivateRoute component={Courses} path="/admin/courses" exact />
              <PrivateRoute
                component={AdminCoursePage}
                path="/admin/course/:courseId"
                exact
              />
              <PrivateRoute
                component={AddLesson}
                path="/admin/lesson/add"
                exact
              />
              <PrivateRoute
                component={AddLesson}
                path="/admin/lesson/edit/:lessonId"
                exact
              />
              <PrivateRoute
                component={CourseUsers}
                path="/courses/users"
                exact
              />
              <PrivateRoute component={Enterprises} path="/enterprises" exact />
              <PrivateRoute
                component={Enterprises}
                path="/your-enterprises/:id"
                exact
              />
              <PrivateRoute
                component={EnterprisesViewPage}
                path="/enterprises-view"
                exact
              />
              <PrivateRoute
                component={MyGroupViewPage}
                path="/my-group-view-page/:id"
                exact
              />
              <PrivateRoute
                component={DashboardComponent}
                path="/dashboard"
                exact
              />
              <PrivateRoute
                component={Achievements}
                path="/achievements"
                exact
              />
              <PrivateRoute component={MyLibrary} path="/mylibrary" exact />
              <PrivateRoute component={MySurvey} path="/mysurvey" exact />
              <PrivateRoute component={MyCourse} path="/mycourse" exact />
              {/* <PrivateRoute component={MyCoursePage} exact path="/mycoursepage" /> */}
              <PrivateRoute component={LessonPage} path="/lesson/:id" exact />
              {/* <PrivateRoute component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}
              <PrivateRoute
                component={() => <MyCoursePage unpaid="unpaid" />}
                path="/course/:courseId"
                exact
              />
              <PrivateRoute
                component={LessonTestPage}
                path="/test-:title/:id/:testId"
                exact
              />
              <PrivateRoute
                component={() => (
                  <DndProvider backend={HTML5Backend}>
                    <AddTest />
                  </DndProvider>
                )}
                path="/admin/add-test/:lessonId"
                exact
              />
              <PrivateRoute
                component={() => (
                  <DndProvider backend={HTML5Backend}>
                    <AddTest />
                  </DndProvider>
                )}
                path="/admin/edit-test/:lessonId"
              />
              <PrivateRoute component={Category} path="/admin/categories" />
              <PrivateRoute component={Profile} exact path="/profile/:id" />
              <PrivateRoute component={UserInfo} exact path="/userInfo" />
              <PrivateRoute
                component={() => <MyCoursePage unpaid="unpaid" />}
                path="/coursepage"
              />
              <PrivateRoute component={PageNotFound} />
            </Switch>
          </ScrollToTop>
        </Router>
      </main>
    </QueryClientProvider>
  );
}

export default App;
