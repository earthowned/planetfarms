/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Switch, Redirect } from "react-router-dom";

import { PrivateRoute } from "components/privateRoute";
import { Routes as PathRoutes } from "constants/routes";

// News
import {
  ArticlePage,
  NewsListPage,
  EditArticlePage,
  CreateArticlePage,
} from "screens/news";
import NewsAdd from "../screens/communityNews/newsAdd/NewsAdd";
// import CommunityPagenews from "../screens/communityNews/CommunityNews";
// import CommunityNewsViewPage from "../screens/communityNewsView/CommunityNewsView";

// Members
import CommunityMembers from "../screens/communityMembers/CommunityMembers";

// Groups
import CommunityGroup from "../screens/communityGroup/CommunityGroup";
import MyGroupViewPage from "../screens/communityGroup/myGroupPage/MyGroup";
import CommunityGroupViewPage from "../screens/communityGroup/groupViewPage/GroupViewPage";

// Enterprices
import Enterprises from "../screens/enterprises/Enterprises";
import EnterprisesViewPage from "../screens/enterprises/enterprisesViewPage/EnterprisesViewPage";

// Library
import Library from "../screens/library/Library";
import MyLibrary from "../screens/dashboard/MyLibrary";
import Collection from "../screens/library/collection/Collection";
import UserCollection from "../screens/library/userCollection/UserCollection";
import SavedCollection from "../screens/library/savedCollection/SavedCollection";

// Courses
import Courses from "../screens/courses/Courses";
import MyCourse from "../screens/dashboard/MyCourses";
import CourseUsers from "../screens/courses/courseUsers/CourseUsers";
import MyCoursePage from "../screens/dashboard/coursePage/CoursePage";
import EditCollection from "../screens/courses/editCollection/EditCollection";
import CourseCollection from "../screens/courses/courseCollection/CourseCollection";
import {
  CoursePage,
  MembersPage,
  CoursesListPage,
  CreateCoursePage,
} from "../screens/courses";

// Messanger
import Messenger from "../screens/messenger/Messenger";
import MobileMessage from "../components/mobileMessage/MobileMessage";

// Admin
import AddTest from "../screens/addTest/AddTest";
import Category from "../screens/category/Category";
import AddLesson from "../screens/courseManager/lesson/AddLesson";
import AdminCoursePage from "../screens/courseManager/adminCoursePage/AdminCoursePage";

// User
import Profile from "../screens/profile/Profile";
import MySurvey from "../screens/dashboard/MySurvey";
import LogoutUser from "../screens/logoutUser/LogoutUser";
import Achievements from "../screens/dashboard/Achievements";
import UserInfo from "../screens/cabinetUserInfo/CabinetUserInfo";
import DashboardComponent from "../screens/dashboard/MainDashboard";
import UserVerification from "../screens/verification/UserVerification";
import CongratulationScreen from "../screens/congratulation/CongratulationScreen";

// Lesson
import LessonPage from "../screens/dashboard/lessonPage/LessonPage";
import LessonTestPage from "../screens/lessonTestPage/LessonTestPage";

// Community
import AllCommunitiesCard from "../screens/communitySwitching/CommunitySwitching";

// Calendar
import CalendarScreen from "../screens/calendarScreen/CalendarScreen";

// NotFound
import { NotFoundPage } from "../screens/not-found";

export const Routes = () => {
  return (
    <Switch>
      {/* News */}
      <PrivateRoute
        exact
        component={NewsListPage}
        path={PathRoutes.News.Home}
      />
      <PrivateRoute
        exact
        component={CreateArticlePage}
        path={PathRoutes.News.Create}
      />
      <PrivateRoute
        exact
        component={ArticlePage}
        path={PathRoutes.News.Article}
      />
      <PrivateRoute
        exact
        component={ArticlePage}
        path={PathRoutes.News.Preview}
      />
      <PrivateRoute
        exact
        component={EditArticlePage}
        path={PathRoutes.News.Edit}
      />

      {/* Courses */}
      <PrivateRoute
        exact
        component={CoursesListPage}
        path={PathRoutes.Courses.Home}
      />
      <PrivateRoute
        exact
        component={CreateCoursePage}
        path={PathRoutes.Courses.Create}
      />
      <PrivateRoute
        exact
        component={CoursePage}
        path={PathRoutes.Courses.Course}
      />
      <PrivateRoute
        exact
        component={MembersPage}
        path={PathRoutes.Courses.Members}
      />
      <PrivateRoute
        exact
        component={CreateCoursePage}
        path={PathRoutes.Courses.Create}
      />

      {/* <PrivateRoute component={CommunityPagenews} exact path="/news1" /> */}

      <PrivateRoute component={NewsAdd} path="/news/add" exact />
      {/* <PrivateRoute component={NewsAdd} path="/news/edit/:id" exact /> */}
      {/* <PrivateRoute component={CommunityNewsViewPage} path="/news/:id" exact /> */}

      <PrivateRoute component={CommunityMembers} path="/members" exact />
      {/* <PrivateRoute component={CommunityMembersProfile} path='/members/profile/:id' exact /> */}

      <PrivateRoute component={CommunityGroup} path="/groups" exact />
      <PrivateRoute component={CommunityGroup} path="/your-groups/:id" exact />
      <PrivateRoute
        component={CommunityGroupViewPage}
        path="/groups/:id"
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

      <PrivateRoute component={Library} exact path="/library" />
      <PrivateRoute component={Collection} exact path="/library/collection" />
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
      <PrivateRoute component={MyLibrary} path="/mylibrary" exact />

      {/* <Route component={Courses} exact path="/courses" /> */}
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
      <PrivateRoute component={CourseUsers} path="/courses/users" exact />
      <PrivateRoute
        component={() => <MyCoursePage unpaid="unpaid" />}
        path="/course/:courseId"
        exact
      />
      <PrivateRoute
        component={() => <MyCoursePage unpaid="unpaid" />}
        path="/coursepage"
      />
      <PrivateRoute
        component={EditCollection}
        path="/courses/my-courses/:id"
        exact
      />

      <PrivateRoute component={Messenger} exact path="/messenger" />
      <PrivateRoute component={MobileMessage} path="/messenger/:id" exact />

      <PrivateRoute component={Courses} path="/admin/courses" exact />
      <PrivateRoute
        component={AdminCoursePage}
        path="/admin/course/:courseId"
        exact
      />
      <PrivateRoute component={AddLesson} path="/admin/lesson/add" exact />
      <PrivateRoute
        component={AddLesson}
        path="/admin/lesson/edit/:lessonId"
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

      <PrivateRoute component={UserVerification} path="/verification" exact />
      <PrivateRoute component={() => <Redirect to="/login" />} path="/" exact />
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

      <PrivateRoute
        component={AllCommunitiesCard}
        path="/community-switching"
        exact
      />

      <PrivateRoute
        component={MyGroupViewPage}
        path="/my-group-view-page/:id"
        exact
      />
      <PrivateRoute component={DashboardComponent} path="/dashboard" exact />
      <PrivateRoute component={Achievements} path="/achievements" exact />

      <PrivateRoute component={MySurvey} path="/mysurvey" exact />
      <PrivateRoute component={MyCourse} path="/mycourse" exact />
      {/* <PrivateRoute component={MyCoursePage} exact path="/mycoursepage" /> */}
      <PrivateRoute component={LessonPage} path="/lesson/:id" exact />
      {/* <PrivateRoute component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}

      <PrivateRoute
        component={LessonTestPage}
        path="/test-:title/:id/:testId"
        exact
      />

      <PrivateRoute component={Profile} exact path="/profile/:id?" />
      <PrivateRoute component={UserInfo} exact path="/userInfo" />

      <PrivateRoute component={NotFoundPage} />
    </Switch>
  );
};
