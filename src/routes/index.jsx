/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Switch, Route, Redirect } from "react-router-dom";

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
      <Route component={NewsListPage} exact path="/news" />
      <Route component={CreateArticlePage} exact path="/news/create" />
      <Route component={ArticlePage} exact path="/news/:id" />
      <Route component={EditArticlePage} exact path="/news/edit/:id" />
      {/* <Route component={CommunityPagenews} exact path="/news1" /> */}

      <Route component={NewsAdd} path="/news/add" exact />
      {/* <Route component={NewsAdd} path="/news/edit/:id" exact /> */}
      {/* <Route component={CommunityNewsViewPage} path="/news/:id" exact /> */}

      <Route component={CommunityMembers} path="/members" exact />
      {/* <Route component={CommunityMembersProfile} path='/members/profile/:id' exact /> */}

      <Route component={CommunityGroup} path="/groups" exact />
      <Route component={CommunityGroup} path="/your-groups/:id" exact />
      <Route component={CommunityGroupViewPage} path="/groups/:id" exact />

      <Route component={Enterprises} path="/enterprises" exact />
      <Route component={Enterprises} path="/your-enterprises/:id" exact />
      <Route component={EnterprisesViewPage} path="/enterprises-view" exact />

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
      <Route component={CourseCollection} exact path="/courses/my-courses" />
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
      <Route component={EditCollection} path="/courses/my-courses/:id" exact />

      <Route component={Messenger} exact path="/messenger" />
      <Route component={MobileMessage} path="/messenger/:id" exact />

      <Route component={Courses} path="/admin/courses" exact />
      <Route component={AdminCoursePage} path="/admin/course/:courseId" exact />
      <Route component={AddLesson} path="/admin/lesson/add" exact />
      <Route component={AddLesson} path="/admin/lesson/edit/:lessonId" exact />
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
      <Route component={CongratulationScreen} path="/edit-information" exact />
      <Route component={CalendarScreen} exact path="/calendar/my-events" />

      <Route component={AllCommunitiesCard} path="/community-switching" exact />

      <Route component={MyGroupViewPage} path="/my-group-view-page/:id" exact />
      <Route component={DashboardComponent} path="/dashboard" exact />
      <Route component={Achievements} path="/achievements" exact />

      <Route component={MySurvey} path="/mysurvey" exact />
      <Route component={MyCourse} path="/mycourse" exact />
      {/* <Route component={MyCoursePage} exact path="/mycoursepage" /> */}
      <Route component={LessonPage} path="/lesson/:id" exact />
      {/* <Route component={LessonTestPage} exact path='/lesson/:id/testpage' /> */}

      <Route component={LessonTestPage} path="/test-:title/:id/:testId" exact />

      <Route component={Profile} exact path="/profile/:id?" />
      <Route component={UserInfo} exact path="/userInfo" />

      <Route component={NotFoundPage} />
    </Switch>
  );
};
