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

import { Navigation } from "common/navigation";
import { PageHeader } from "common/page-header";

import { queryClient } from "./reactQuery";
// import Route from "./components/Route/Route";

// Auth Pages
import { SignInPage } from "./screens/auth/sign-in";
import { SignUpPage } from "./screens/auth/sign-up";
import { ForgotPasswordPage } from "./screens/auth/forgot-password";

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
import UserVerification from "./screens/verification/UserVerification";
import AddTest from "./screens/addTest/AddTest";
import LogoutUser from "./screens/logoutUser/LogoutUser";
import Category from "./screens/category/Category";
import PageNotFound from "./screens/pageNotFound/PageNotFound";
import Profile from "./screens/profile/Profile";

import "./App.css";

const MainApp = () => {
  return (
    <div className="app-container">
      <aside className="aside">
        <Navigation />
      </aside>
      <main className="main-app">
        <PageHeader />

        <Switch>
          <Route component={CommunityPagenews} exact path="/news" />
          <Route component={NewsAdd} path="/news/add" exact />
          <Route component={NewsAdd} path="/news/edit/:id" exact />
          <Route component={CommunityNewsViewPage} path="/news/:id" exact />

          <Route component={CommunityMembers} path="/members" exact />
          {/* <Route component={CommunityMembersProfile} path='/members/profile/:id' exact /> */}

          <Route component={CommunityGroup} path="/groups" exact />
          <Route component={CommunityGroup} path="/your-groups/:id" exact />
          <Route component={CommunityGroupViewPage} path="/groups/:id" exact />

          <Route component={Enterprises} path="/enterprises" exact />
          <Route component={Enterprises} path="/your-enterprises/:id" exact />
          <Route
            component={EnterprisesViewPage}
            path="/enterprises-view"
            exact
          />

          <Route component={Library} exact path="/library" />
          <Route component={Collection} exact path="/library/collection" />
          <Route
            component={UserCollection}
            path="/library/collection/users"
            exact
          />
          <Route
            component={SavedCollection}
            path="/library/collection/saved"
            exact
          />
          <Route component={MyLibrary} path="/mylibrary" exact />

          <Route component={Courses} exact path="/courses" />
          <Route
            component={CourseCollection}
            exact
            path="/courses/my-courses"
          />
          <Route
            component={CourseCollection}
            exact
            path="/courses/saved-collection"
          />
          <Route component={CourseUsers} path="/courses/users" exact />
          <Route
            component={() => <MyCoursePage unpaid="unpaid" />}
            path="/course/:courseId"
            exact
          />
          <Route
            component={() => <MyCoursePage unpaid="unpaid" />}
            path="/coursepage"
          />

          <Route component={Messenger} exact path="/messenger" />
          <Route component={MobileMessage} path="/messenger/:id" exact />

          <Route component={Courses} path="/admin/courses" exact />
          <Route
            component={AdminCoursePage}
            path="/admin/course/:courseId"
            exact
          />
          <Route component={AddLesson} path="/admin/lesson/add" exact />
          <Route
            component={AddLesson}
            path="/admin/lesson/edit/:lessonId"
            exact
          />
          <Route
            component={() => (
              <DndProvider backend={HTML5Backend}>
                <AddTest />
              </DndProvider>
            )}
            path="/admin/add-test/:lessonId"
            exact
          />
          <Route
            component={() => (
              <DndProvider backend={HTML5Backend}>
                <AddTest />
              </DndProvider>
            )}
            path="/admin/edit-test/:lessonId"
          />
          <Route component={Category} path="/admin/categories" />

          <Route component={UserVerification} path="/verification" exact />
          <Route component={() => <Redirect to="/login" />} path="/" exact />
          <Route component={LogoutUser} path="/logout" exact />
          <Route
            component={CongratulationScreen}
            path="/edit-information"
            exact
          />
          <Route component={CalendarScreen} exact path="/calendar/my-events" />

          <Route
            component={AllCommunitiesCard}
            path="/community-switching"
            exact
          />

          <Route
            component={EditCollection}
            path="/courses/my-courses/:id"
            exact
          />

          <Route
            component={MyGroupViewPage}
            path="/my-group-view-page/:id"
            exact
          />
          <Route component={DashboardComponent} path="/dashboard" exact />
          <Route component={Achievements} path="/achievements" exact />

          <Route component={MySurvey} path="/mysurvey" exact />
          <Route component={MyCourse} path="/mycourse" exact />
          {/* <Route component={MyCoursePage} exact path="/mycoursepage" /> */}
          <Route component={LessonPage} path="/lesson/:id" exact />
          {/* <Route component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}

          <Route
            component={LessonTestPage}
            path="/test-:title/:id/:testId"
            exact
          />

          <Route component={Profile} exact path="/profile/:id" />
          <Route component={UserInfo} exact path="/userInfo" />
        </Switch>
      </main>
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route component={SignInPage} path="/login" />
              <Route component={SignUpPage} path="/register" />
              <Route component={ForgotPasswordPage} path="/forgot-password" />
              <Route>
                <div className="app-container">
                  <aside className="aside">
                    <Navigation />
                  </aside>
                  <main className="main-app">
                    <PageHeader />

                    <Switch>
                      <Route component={CommunityPagenews} exact path="/news" />
                      <Route component={NewsAdd} path="/news/add" exact />
                      <Route component={NewsAdd} path="/news/edit/:id" exact />
                      <Route
                        component={CommunityNewsViewPage}
                        path="/news/:id"
                        exact
                      />

                      <Route
                        component={CommunityMembers}
                        path="/members"
                        exact
                      />
                      {/* <Route component={CommunityMembersProfile} path='/members/profile/:id' exact /> */}

                      <Route component={CommunityGroup} path="/groups" exact />
                      <Route
                        component={CommunityGroup}
                        path="/your-groups/:id"
                        exact
                      />
                      <Route
                        component={CommunityGroupViewPage}
                        path="/groups/:id"
                        exact
                      />

                      <Route
                        component={Enterprises}
                        path="/enterprises"
                        exact
                      />
                      <Route
                        component={Enterprises}
                        path="/your-enterprises/:id"
                        exact
                      />
                      <Route
                        component={EnterprisesViewPage}
                        path="/enterprises-view"
                        exact
                      />

                      <Route component={Library} exact path="/library" />
                      <Route
                        component={Collection}
                        exact
                        path="/library/collection"
                      />
                      <Route
                        component={UserCollection}
                        path="/library/collection/users"
                        exact
                      />
                      <Route
                        component={SavedCollection}
                        path="/library/collection/saved"
                        exact
                      />
                      <Route component={MyLibrary} path="/mylibrary" exact />

                      <Route component={Courses} exact path="/courses" />
                      <Route
                        component={CourseCollection}
                        exact
                        path="/courses/my-courses"
                      />
                      <Route
                        component={CourseCollection}
                        exact
                        path="/courses/saved-collection"
                      />
                      <Route
                        component={CourseUsers}
                        path="/courses/users"
                        exact
                      />
                      <Route
                        component={() => <MyCoursePage unpaid="unpaid" />}
                        path="/course/:courseId"
                        exact
                      />
                      <Route
                        component={() => <MyCoursePage unpaid="unpaid" />}
                        path="/coursepage"
                      />

                      <Route component={Messenger} exact path="/messenger" />
                      <Route
                        component={MobileMessage}
                        path="/messenger/:id"
                        exact
                      />

                      <Route component={Courses} path="/admin/courses" exact />
                      <Route
                        component={AdminCoursePage}
                        path="/admin/course/:courseId"
                        exact
                      />
                      <Route
                        component={AddLesson}
                        path="/admin/lesson/add"
                        exact
                      />
                      <Route
                        component={AddLesson}
                        path="/admin/lesson/edit/:lessonId"
                        exact
                      />
                      <Route
                        component={() => (
                          <DndProvider backend={HTML5Backend}>
                            <AddTest />
                          </DndProvider>
                        )}
                        path="/admin/add-test/:lessonId"
                        exact
                      />
                      <Route
                        component={() => (
                          <DndProvider backend={HTML5Backend}>
                            <AddTest />
                          </DndProvider>
                        )}
                        path="/admin/edit-test/:lessonId"
                      />
                      <Route component={Category} path="/admin/categories" />

                      <Route
                        component={UserVerification}
                        path="/verification"
                        exact
                      />
                      <Route
                        component={() => <Redirect to="/login" />}
                        path="/"
                        exact
                      />
                      <Route component={LogoutUser} path="/logout" exact />
                      <Route
                        component={CongratulationScreen}
                        path="/edit-information"
                        exact
                      />
                      <Route
                        component={CalendarScreen}
                        exact
                        path="/calendar/my-events"
                      />

                      <Route
                        component={AllCommunitiesCard}
                        path="/community-switching"
                        exact
                      />

                      <Route
                        component={EditCollection}
                        path="/courses/my-courses/:id"
                        exact
                      />

                      <Route
                        component={MyGroupViewPage}
                        path="/my-group-view-page/:id"
                        exact
                      />
                      <Route
                        component={DashboardComponent}
                        path="/dashboard"
                        exact
                      />
                      <Route
                        component={Achievements}
                        path="/achievements"
                        exact
                      />

                      <Route component={MySurvey} path="/mysurvey" exact />
                      <Route component={MyCourse} path="/mycourse" exact />
                      {/* <Route component={MyCoursePage} exact path="/mycoursepage" /> */}
                      <Route component={LessonPage} path="/lesson/:id" exact />
                      {/* <Route component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}

                      <Route
                        component={LessonTestPage}
                        path="/test-:title/:id/:testId"
                        exact
                      />

                      <Route component={Profile} exact path="/profile/:id" />
                      <Route component={UserInfo} exact path="/userInfo" />

                      <Route component={PageNotFound} />
                    </Switch>
                  </main>
                </div>
              </Route>
            </Switch>
          </ScrollToTop>
        </Router>
      </main>
    </QueryClientProvider>
  );
}

export default App;
