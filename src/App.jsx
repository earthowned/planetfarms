import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X11LoginEmpty from "./components/X11LoginEmpty";
import X12Loginfiled from "./components/X12Loginfiled";
import X13Errorfiled from "./components/X13Errorfiled";
import X21SignUpempty from "./components/X21SignUpempty";
import X21SignUpempty2 from "./components/X21SignUpempty2";
import SlimSidebar from "./components/SlimSidebar";
import X22SignUpfilled from "./components/X22SignUpfilled";
import X21SignUpfiled from "./components/X21SignUpfiled";
import X31NewsPage from "./components/X31NewsPage";
import X3CommunityPagenews from "./components/X3CommunityPagenews";
import X32AddNewsvideo from "./components/X32AddNewsvideo";
import X51AllGroups from "./components/X51AllGroups";
import X42CalendarWithEvents from "./components/X42CalendarWithEvents";
import X104MyPersonals from "./components/X104MyPersonals";
import X141MessagesPopup from "./components/X141MessagesPopup";
import X101MyDashboard from "./components/X101MyDashboard";
import X91AllEnterprises from "./components/X91AllEnterprises";
import X341AddNewBlockfilled from "./components/X341AddNewBlockfilled";
import X9CreateEnterpise_step1 from "./components/X9CreateEnterpise_step1";
import X92EnterpriseuserView from "./components/X92EnterpriseuserView";
import X81CommunityMembers from "./components/X81CommunityMembers";
import X81CommunityMembers2 from "./components/X81CommunityMembers2";
import X94EnterpriseuserViewTasks from "./components/X94EnterpriseuserViewTasks";
import X9CreateEnterpise_step2 from "./components/X9CreateEnterpise_step2";
import X34AddNewBlockphoto from "./components/X34AddNewBlockphoto";
import X9CreateEnterpise_step22 from "./components/X9CreateEnterpise_step22";
import X105MyCourses from "./components/X105MyCourses";
import X93EnterpriseuserView from "./components/X93EnterpriseuserView";
import X104MyPersonals2 from "./components/X104MyPersonals2";
import X106CoursePage from "./components/X106CoursePage";
import X103MyLibrary from "./components/X103MyLibrary";
import X105MySurveys from "./components/X105MySurveys";
import X102MyAchievements from "./components/X102MyAchievements";
import X44CalendarAddNewEvent from "./components/X44CalendarAddNewEvent";
import X32AddNewsvideo2 from "./components/X32AddNewsvideo2";
import X45CalendarAddNewEvent from "./components/X45CalendarAddNewEvent";
import X43CalendarShow3MoreEvents from "./components/X43CalendarShow3MoreEvents";
import X47AddNewMembers from "./components/X47AddNewMembers";
import X46AddNewMembers from "./components/X46AddNewMembers";
import X43CalendarShow3MoreEvents2 from "./components/X43CalendarShow3MoreEvents2";
import X541MyGroupownerView from "./components/X541MyGroupownerView";
import X541MyGroupownerView2 from "./components/X541MyGroupownerView2";
import X541MyGroupownerView3 from "./components/X541MyGroupownerView3";
import X541MyGroupownerView4 from "./components/X541MyGroupownerView4";
import X541MyGroupownerView5 from "./components/X541MyGroupownerView5";
import X521GroupPageInsideuserView from "./components/X521GroupPageInsideuserView";
import X33AddNewBlock from "./components/X33AddNewBlock";
import X521GroupPageInsideuserView2 from "./components/X521GroupPageInsideuserView2";
import X33AddNewBlock2 from "./components/X33AddNewBlock2";
import X3AddNews from "./components/X3AddNews";
import X33AddNewBlocktext from "./components/X33AddNewBlocktext";
import X51AllGroupsCreateGroup from "./components/X51AllGroupsCreateGroup";
import X33AddNewBlock3 from "./components/X33AddNewBlock3";
import X33AddNewBlocktext2 from "./components/X33AddNewBlocktext2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|1-1-login-empty)">
          <X11LoginEmpty {...X11LoginEmptyData} />
        </Route>
        <Route path="/1-2-login-filed">
          <X12Loginfiled {...X12LoginfiledData} />
        </Route>
        <Route path="/1-3-error-filed">
          <X13Errorfiled {...X13ErrorfiledData} />
        </Route>
        <Route path="/2-1-sign-up-empty-1">
          <X21SignUpempty {...X21SignUpemptyData} />
        </Route>
        <Route path="/21-sign-up-empty">
          <X21SignUpempty2 {...X21SignUpempty2Data} />
        </Route>
        <Route path="/slim-sidebar">
          <SlimSidebar {...SlimSidebarData} />
        </Route>
        <Route path="/2-2-sign-up-filled">
          <X22SignUpfilled {...X22SignUpfilledData} />
        </Route>
        <Route path="/2-1-sign-up-filed">
          <X21SignUpfiled {...X21SignUpfiledData} />
        </Route>
        <Route path="/3-1-news-page">
          <X31NewsPage {...X31NewsPageData} />
        </Route>
        <Route path="/3-community-page-news">
          <X3CommunityPagenews {...X3CommunityPagenewsData} />
        </Route>
        <Route path="/3-2-add-news-video-1">
          <X32AddNewsvideo {...X32AddNewsvideoData} />
        </Route>
        <Route path="/5-1-all-groups">
          <X51AllGroups {...X51AllGroupsData} />
        </Route>
        <Route path="/4-2-calendar-with-events">
          <X42CalendarWithEvents {...X42CalendarWithEventsData} />
        </Route>
        <Route path="/10-4-my-personals-1">
          <X104MyPersonals {...X104MyPersonalsData} />
        </Route>
        <Route path="/14-1-messages-popup">
          <X141MessagesPopup {...X141MessagesPopupData} />
        </Route>
        <Route path="/10-1-my-dashboard">
          <X101MyDashboard {...X101MyDashboardData} />
        </Route>
        <Route path="/9-1-all-enterprises">
          <X91AllEnterprises {...X91AllEnterprisesData} />
        </Route>
        <Route path="/3-4-1-add-new-block-filled">
          <X341AddNewBlockfilled {...X341AddNewBlockfilledData} />
        </Route>
        <Route path="/9-create-enterpise-step1">
          <X9CreateEnterpise_step1 {...X9CreateEnterpise_step1Data} />
        </Route>
        <Route path="/9-2-enterprise-user-view">
          <X92EnterpriseuserView {...X92EnterpriseuserViewData} />
        </Route>
        <Route path="/8-1-community-members-1">
          <X81CommunityMembers {...X81CommunityMembersData} />
        </Route>
        <Route path="/81community-members">
          <X81CommunityMembers2 {...X81CommunityMembers2Data} />
        </Route>
        <Route path="/9-4-enterprise-user-view-tasks">
          <X94EnterpriseuserViewTasks {...X94EnterpriseuserViewTasksData} />
        </Route>
        <Route path="/9-create-enterpise-step2-1">
          <X9CreateEnterpise_step2 {...X9CreateEnterpise_step2Data} />
        </Route>
        <Route path="/3-4-add-new-block-photo">
          <X34AddNewBlockphoto {...X34AddNewBlockphotoData} />
        </Route>
        <Route path="/9-create-enterpise_step2">
          <X9CreateEnterpise_step22 {...X9CreateEnterpise_step22Data} />
        </Route>
        <Route path="/10-5-my-courses">
          <X105MyCourses {...X105MyCoursesData} />
        </Route>
        <Route path="/9-3-enterprise-user-view">
          <X93EnterpriseuserView {...X93EnterpriseuserViewData} />
        </Route>
        <Route path="/104-my-personals">
          <X104MyPersonals2 {...X104MyPersonals2Data} />
        </Route>
        <Route path="/10-6-course-page">
          <X106CoursePage {...X106CoursePageData} />
        </Route>
        <Route path="/10-3-my-library">
          <X103MyLibrary {...X103MyLibraryData} />
        </Route>
        <Route path="/10-5-my-surveys">
          <X105MySurveys
            frame195417Props={X105MySurveysData.frame195417Props}
            backbtn12Props={X105MySurveysData.backbtn12Props}
            frame194320Props={X105MySurveysData.frame194320Props}
            frame1959Props={X105MySurveysData.frame1959Props}
            frame1961Props={X105MySurveysData.frame1961Props}
            frame19592Props={X105MySurveysData.frame19592Props}
            frame19612Props={X105MySurveysData.frame19612Props}
          />
        </Route>
        <Route path="/10-2-my-achievements">
          <X102MyAchievements {...X102MyAchievementsData} />
        </Route>
        <Route path="/4-4-calendar-add-new-event">
          <X44CalendarAddNewEvent {...X44CalendarAddNewEventData} />
        </Route>
        <Route path="/32-add-news-video">
          <X32AddNewsvideo2 {...X32AddNewsvideo2Data} />
        </Route>
        <Route path="/4-5-calendar-add-new-event">
          <X45CalendarAddNewEvent {...X45CalendarAddNewEventData} />
        </Route>
        <Route path="/4-3-calendar-show-3-more-events-1">
          <X43CalendarShow3MoreEvents {...X43CalendarShow3MoreEventsData} />
        </Route>
        <Route path="/4-7-add-new-members">
          <X47AddNewMembers {...X47AddNewMembersData} />
        </Route>
        <Route path="/4-6-add-new-members">
          <X46AddNewMembers {...X46AddNewMembersData} />
        </Route>
        <Route path="/43-calendar-show-3-more-events">
          <X43CalendarShow3MoreEvents2 {...X43CalendarShow3MoreEvents2Data} />
        </Route>
        <Route path="/5-4-1-my-group-owner-view-4">
          <X541MyGroupownerView {...X541MyGroupownerViewData} />
        </Route>
        <Route path="/541-my-group-owner-view">
          <X541MyGroupownerView2 {...X541MyGroupownerView2Data} />
        </Route>
        <Route path="/541-my-group-owner-view2">
          <X541MyGroupownerView3 {...X541MyGroupownerView3Data} />
        </Route>
        <Route path="/541-my-group-owner-view3">
          <X541MyGroupownerView4 {...X541MyGroupownerView4Data} />
        </Route>
        <Route path="/541-my-group-owner-view4">
          <X541MyGroupownerView5 {...X541MyGroupownerView5Data} />
        </Route>
        <Route path="/5-2-1-group-page-inside-user-view-1">
          <X521GroupPageInsideuserView {...X521GroupPageInsideuserViewData} />
        </Route>
        <Route path="/3-3-add-new-block-2">
          <X33AddNewBlock {...X33AddNewBlockData} />
        </Route>
        <Route path="/521-group-page-inside-user-view">
          <X521GroupPageInsideuserView2 {...X521GroupPageInsideuserView2Data} />
        </Route>
        <Route path="/33-add-new-block">
          <X33AddNewBlock2
            text=""
            frame2333="/img/frame-2333@1x.png"
            frame195424Props={X33AddNewBlock2Data.frame195424Props}
            backbtn2Props={X33AddNewBlock2Data.backbtn2Props}
            frame194331Props={X33AddNewBlock2Data.frame194331Props}
            frame3067Props={X33AddNewBlock2Data.frame3067Props}
            frame19395Props={X33AddNewBlock2Data.frame19395Props}
          />
        </Route>
        <Route path="/3-add-news">
          <X3AddNews {...X3AddNewsData} />
        </Route>
        <Route path="/3-3-add-new-block-text-1">
          <X33AddNewBlocktext {...X33AddNewBlocktextData} />
        </Route>
        <Route path="/5-1-all-groups-create-group">
          <X51AllGroupsCreateGroup {...X51AllGroupsCreateGroupData} />
        </Route>
        <Route path="/33-add-new-block2">
          <X33AddNewBlock3 {...X33AddNewBlock3Data} />
        </Route>
        <Route path="/33-add-new-block-text">
          <X33AddNewBlocktext2 {...X33AddNewBlocktext2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const personData = {
    vector: "/img/vector-49@2x.png",
    vector2: "/img/vector@2x.png",
    vector3: "/img/vector-50@2x.png",
};

const lockoutlineData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-52@2x.png",
    vector3: "/img/vector-53@2x.png",
};

const eyeoffoutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-55@2x.png",
    vector3: "/img/vector-56@2x.png",
    vector4: "/img/vector-57@2x.png",
};

const X11LoginEmptyData = {
    vector: "/img/vector-43@2x.png",
    vector2: "/img/vector-38@2x.png",
    vector3: "/img/vector-39@2x.png",
    vector4: "/img/vector-40@2x.png",
    vector5: "/img/vector-41@2x.png",
    vector6: "/img/vector-42@2x.png",
    welcomeBack: "Sign In",
    username: "Username",
    password: "Password",
    vector7: "/img/vector@2x.png",
    subtract: "/img/subtract@2x.png",
    rememberMe: "Remember Me",
    signIn: "Sign in",
    forgotPassword: "Forgot Password?",
    text1: "Sign In with services",
    vector8: "/img/vector-59@2x.png",
    vector9: "/img/vector-60@2x.png",
    vector10: "/img/vector-61@2x.png",
    vector11: "/img/vector-62@2x.png",
    google: "Google",
    subtract2: "/img/subtract-1@2x.png",
    facebook: "Facebook",
    spanText: "Don't have an account yet?",
    spanText2: "  ",
    spanText3: "Become a member!",
    vector12: "/img/vector-44@2x.png",
    vector13: "/img/vector-45@2x.png",
    vector14: "/img/vector-46@2x.png",
    vector15: "/img/vector-47@2x.png",
    personProps: personData,
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
};

const frame1646Data = {
    group: "/img/vector-43@2x.png",
    vector: "/img/vector-38@2x.png",
    vector2: "/img/vector-39@2x.png",
    vector3: "/img/vector-40@2x.png",
    vector4: "/img/vector-41@2x.png",
    vector5: "/img/vector-42@2x.png",
};

const frame1928Data = {
    vector: "/img/vector-44@2x.png",
    vector2: "/img/vector-45@2x.png",
    vector3: "/img/vector-46@2x.png",
    vector4: "/img/vector-47@2x.png",
};

const person2Data = {
    vector2: "/img/vector@2x.png",
    vector: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const layer2Data = {
    personProps: person2Data,
};

const frame1933Data = {
    username: "Username",
    mikhail: "Mikhail",
    layer2Props: layer2Data,
};

const frame65Data = {
    frame1933Props: frame1933Data,
};

const frame4Data = {
    frame65Props: frame65Data,
};

const lockoutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-52@2x.png",
    vector3: "/img/vector-53@2x.png",
};

const eyeoffoutline22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-55@2x.png",
    vector3: "/img/vector-56@2x.png",
    vector4: "/img/vector-57@2x.png",
};

const frame652Data = {
    password: "Password",
    text3: "• • • • • • • • • •",
    lockoutline2Props: lockoutline2Data,
    eyeoffoutline22Props: eyeoffoutline22Data,
};

const frame92Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract@2x.png",
    rememberMe: "Remember Me",
};

const frame2681Data = {
    text4: "Sign In with services",
    vector: "/img/vector-59@2x.png",
    vector2: "/img/vector-60@2x.png",
    vector3: "/img/vector-61@2x.png",
    vector4: "/img/vector-62@2x.png",
    google: "Google",
    subtract: "/img/subtract-1@2x.png",
    facebook: "Facebook",
};

const frame1929Data = {
    children: "Sign In",
};

const X12LoginfiledData = {
    forgotPassword: "Forgot Password?",
    signIn: "Sign in",
    spanText: "Don't have an account yet?",
    spanText2: "  ",
    spanText3: "Become a member!",
    frame1646Props: frame1646Data,
    frame1928Props: frame1928Data,
    frame4Props: frame4Data,
    frame652Props: frame652Data,
    frame92Props: frame92Data,
    frame2681Props: frame2681Data,
    frame1929Props: frame1929Data,
};

const frame16462Data = {
    group: "/img/vector-43@2x.png",
    vector: "/img/vector-38@2x.png",
    vector2: "/img/vector-105@2x.png",
    vector3: "/img/vector-106@2x.png",
    vector4: "/img/vector-107@2x.png",
    vector5: "/img/vector-42@2x.png",
};

const frame19282Data = {
    vector: "/img/vector-44@2x.png",
    vector2: "/img/vector-115@2x.png",
    vector3: "/img/vector-46@2x.png",
    vector4: "/img/vector-47@2x.png",
};

const person3Data = {
    vector2: "/img/vector@2x.png",
    vector: "/img/vector-125@2x.png",
    vector3: "/img/vector-126@2x.png",
};

const layer22Data = {
    personProps: person3Data,
};

const frame19332Data = {
    username: "Username",
    mikhail: "Mikhail",
    layer2Props: layer22Data,
};

const lockoutline22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-52@2x.png",
    vector3: "/img/vector-53@2x.png",
};

const eyeoffoutline222Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-55@2x.png",
    vector3: "/img/vector-56@2x.png",
    vector4: "/img/vector-57@2x.png",
};

const frame6522Data = {
    password: "Password",
    text3: "• • • • • • • • • •",
    lockoutline2Props: lockoutline22Data,
    eyeoffoutline22Props: eyeoffoutline222Data,
};

const frame922Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract@2x.png",
    rememberMe: "Remember Me",
};

const frame26812Data = {
    text4: "Sign In with services",
    vector: "/img/vector-59@2x.png",
    vector2: "/img/vector-60@2x.png",
    vector3: "/img/vector-61@2x.png",
    vector4: "/img/vector-62@2x.png",
    google: "Google",
    subtract: "/img/subtract-1@2x.png",
    facebook: "Facebook",
};

const frame19292Data = {
    children: "Sign In",
};

const X13ErrorfiledData = {
    usernameError: "Username error",
    forgotPassword: "Forgot Password?",
    signIn: "Sign in",
    spanText: "Don't have an account yet?",
    spanText2: "  ",
    spanText3: "Become a member!",
    frame1646Props: frame16462Data,
    frame1928Props: frame19282Data,
    frame1933Props: frame19332Data,
    frame652Props: frame6522Data,
    frame92Props: frame922Data,
    frame2681Props: frame26812Data,
    frame1929Props: frame19292Data,
};

const person4Data = {
    vector2: "/img/vector-100@2x.png",
    vector: "/img/vector-49@2x.png",
    vector3: "/img/vector-50@2x.png",
};

const layer23Data = {
    personProps: person4Data,
};

const lockoutline23Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-52@2x.png",
    vector3: "/img/vector-53@2x.png",
};

const eyeoffoutline223Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-55@2x.png",
    vector3: "/img/vector-56@2x.png",
    vector4: "/img/vector-57@2x.png",
};

const checkmarksquare2outline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-158@2x.png",
};

const frame11Data = {
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    checkmarksquare2outline2Props: checkmarksquare2outline2Data,
};

const frame26813Data = {
    text4: "Sign In with services",
    vector: "/img/vector-59@2x.png",
    vector2: "/img/vector-60@2x.png",
    vector3: "/img/vector-61@2x.png",
    vector4: "/img/vector-62@2x.png",
    google: "Google",
    subtract: "/img/subtract-1@2x.png",
    facebook: "Facebook",
};

const frame192922Data = {
    children: "Become a member",
};

const frame16463Data = {
    group: "/img/vector-43@2x.png",
    vector: "/img/vector-38@2x.png",
    vector2: "/img/vector-39@2x.png",
    vector3: "/img/vector-40@2x.png",
    vector4: "/img/vector-41@2x.png",
    vector5: "/img/vector-42@2x.png",
};

const frame19283Data = {
    vector: "/img/vector-44@2x.png",
    vector2: "/img/vector-45@2x.png",
    vector3: "/img/vector-46@2x.png",
    vector4: "/img/vector-47@2x.png",
};

const X21SignUpemptyData = {
    username: "Username",
    password: "Password",
    signUp: "Sign up",
    spanText: "Already have an account?",
    spanText2: " ",
    spanText3: "Sign in!",
    layer2Props: layer23Data,
    lockoutline2Props: lockoutline23Data,
    eyeoffoutline22Props: eyeoffoutline223Data,
    frame11Props: frame11Data,
    frame2681Props: frame26813Data,
    frame19292Props: frame192922Data,
    frame1646Props: frame16463Data,
    frame1928Props: frame19283Data,
};

const person5Data = {
    vector2: "/img/vector@2x.png",
    vector: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const layer24Data = {
    personProps: person5Data,
};

const frame19333Data = {
    username: "Username",
    mikhail: "Mikhail",
    layer2Props: layer24Data,
};

const frame653Data = {
    frame1933Props: frame19333Data,
};

const lockoutline24Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-177@2x.png",
    vector3: "/img/vector-178@2x.png",
};

const eyeData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-180@2x.png",
    vector3: "/img/vector-181@2x.png",
};

const eyeOpenData = {
    eyeProps: eyeData,
};

const checkmarksquare2outline22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const frame112Data = {
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    checkmarksquare2outline2Props: checkmarksquare2outline22Data,
};

const frame26814Data = {
    text4: "Sign In with services",
    vector: "/img/vector-59@2x.png",
    vector2: "/img/vector-60@2x.png",
    vector3: "/img/vector-61@2x.png",
    vector4: "/img/vector-62@2x.png",
    google: "Google",
    subtract: "/img/subtract-1@2x.png",
    facebook: "Facebook",
};

const frame192923Data = {
    children: "Become a member",
};

const frame16464Data = {
    group: "/img/vector-43@2x.png",
    vector: "/img/vector-38@2x.png",
    vector2: "/img/vector-105@2x.png",
    vector3: "/img/vector-106@2x.png",
    vector4: "/img/vector-107@2x.png",
    vector5: "/img/vector-42@2x.png",
};

const frame19284Data = {
    vector: "/img/vector-44@2x.png",
    vector2: "/img/vector-45@2x.png",
    vector3: "/img/vector-46@2x.png",
    vector4: "/img/vector-47@2x.png",
};

const X21SignUpempty2Data = {
    password: "Password",
    badpassword111: "Badpassword111",
    passwordError: "Password error",
    signUp: "Sign up",
    spanText: "Already have an account?",
    spanText2: " ",
    spanText3: "Sign in!",
    frame65Props: frame653Data,
    lockoutline2Props: lockoutline24Data,
    eyeOpenProps: eyeOpenData,
    frame11Props: frame112Data,
    frame2681Props: frame26814Data,
    frame19292Props: frame192923Data,
    frame1646Props: frame16464Data,
    frame1928Props: frame19284Data,
};

const calendaroutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-3@2x.png",
};

const gridData = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame2891Data = {
    gridProps: gridData,
};

const usermanagementData = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const bookData = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame2303Data = {
    vector: "/img/vector-18@2x.png",
    vector2: "/img/vector-18@2x.png",
};

const calendaroutline22Data = {
    vector: "/img/vector-20@2x.png",
    vector2: "/img/vector-21@2x.png",
    vector3: "/img/vector-22@2x.png",
    vector4: "/img/vector-23@2x.png",
};

const emailData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer222Data = {
    emailProps: emailData,
};

const emailoutlineData = {
    layer22Props: layer222Data,
};

const belloutlineData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame1954Data = {
    ragrariansI5693135: "Ragrarians News",
    frame1951: "/img/frame-1951@2x.png",
    text15: "My dashboard",
    emailoutlineProps: emailoutlineData,
    belloutlineProps: belloutlineData,
    personoutline1Props: personoutline1Data,
};

const frame3470Data = {
    children: "12 min read",
};

const frame1969Data = {
    frame1969: "/img/frame-1969@1x.png",
    date: "November 01, 2020",
    frame3470Props: frame3470Data,
};

const frame1979Data = {
    text17: "FARMING",
    text18: "Fueling the ethanol industry",
    text19: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
};

const frame1957Data = {
    frame1969Props: frame1969Data,
    frame1979Props: frame1979Data,
};

const frame34702Data = {
    children: "12 min read",
};

const frame19692Data = {
    frame1969: "/img/frame-1969@1x.png",
    date: "November 01, 2020",
    frame3470Props: frame34702Data,
};

const frame19792Data = {
    text17: "FARMING",
    text18: "Fueling the ethanol industry",
    text19: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
};

const frame2916Data = {
    frame1969Props: frame19692Data,
    frame1979Props: frame19792Data,
};

const frame34703Data = {
    children: "12 min read",
};

const frame19693Data = {
    frame1969: "/img/frame-1969@1x.png",
    date: "November 01, 2020",
    frame3470Props: frame34703Data,
};

const frame19793Data = {
    text17: "FARMING",
    text18: "Fueling the ethanol industry",
    text19: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
};

const frame2917Data = {
    frame1969Props: frame19693Data,
    frame1979Props: frame19793Data,
};

const searchoutline1Data = {
    vector: "/img/vector-31@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame2912Data = {
    search: "Search…",
    searchoutline1Props: searchoutline1Data,
};

const SlimSidebarData = {
    mb: "Mb",
    gr: "Gr",
    place: "Er",
    vector: "/img/vector-16@2x.png",
    vector2: "/img/vector-17@2x.png",
    text16: "Discover more of what matters to you",
    farming: "Farming",
    carsIndustry: "Cars industry",
    mediaNews: "Media news",
    people: "People",
    nature: "Nature",
    seeAllTopics: "See all topics",
    addNews: "Add news",
    calendaroutline2Props: calendaroutline2Data,
    frame2891Props: frame2891Data,
    usermanagementProps: usermanagementData,
    bookProps: bookData,
    frame2303Props: frame2303Data,
    calendaroutline22Props: calendaroutline22Data,
    frame1954Props: frame1954Data,
    frame1957Props: frame1957Data,
    frame2916Props: frame2916Data,
    frame2917Props: frame2917Data,
    frame2912Props: frame2912Data,
};

const person6Data = {
    vector2: "/img/vector@2x.png",
    vector: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const layer25Data = {
    personProps: person6Data,
};

const frame19334Data = {
    username: "Username",
    mikhail: "Mikhail",
    layer2Props: layer25Data,
};

const frame654Data = {
    frame1933Props: frame19334Data,
};

const frame42Data = {
    frame65Props: frame654Data,
};

const lockoutline25Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-52@2x.png",
    vector3: "/img/vector-53@2x.png",
};

const eyeoffoutline224Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-55@2x.png",
    vector3: "/img/vector-56@2x.png",
    vector4: "/img/vector-57@2x.png",
};

const checkmarksquare2outline23Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const frame113Data = {
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    checkmarksquare2outline2Props: checkmarksquare2outline23Data,
};

const frame26815Data = {
    text4: "Sign In with services",
    vector: "/img/vector-59@2x.png",
    vector2: "/img/vector-60@2x.png",
    vector3: "/img/vector-61@2x.png",
    vector4: "/img/vector-62@2x.png",
    google: "Google",
    subtract: "/img/subtract-1@2x.png",
    facebook: "Facebook",
};

const frame192924Data = {
    children: "Become a member",
};

const frame16465Data = {
    group: "/img/vector-43@2x.png",
    vector: "/img/vector-38@2x.png",
    vector2: "/img/vector-39@2x.png",
    vector3: "/img/vector-40@2x.png",
    vector4: "/img/vector-41@2x.png",
    vector5: "/img/vector-42@2x.png",
};

const frame19285Data = {
    vector: "/img/vector-44@2x.png",
    vector2: "/img/vector-45@2x.png",
    vector3: "/img/vector-46@2x.png",
    vector4: "/img/vector-47@2x.png",
};

const X22SignUpfilledData = {
    password: "Password",
    text26: "• • • • • • • • • •",
    signUp: "Sign up",
    spanText: "Already have an account?",
    spanText2: " ",
    spanText3: "Sign in!",
    frame4Props: frame42Data,
    lockoutline2Props: lockoutline25Data,
    eyeoffoutline22Props: eyeoffoutline224Data,
    frame11Props: frame113Data,
    frame2681Props: frame26815Data,
    frame19292Props: frame192924Data,
    frame1646Props: frame16465Data,
    frame1928Props: frame19285Data,
};

const frame192925Data = {
    children: "Congratulations!",
};

const frame9Data = {
    birthday: "Birthday",
    phone: "08/23/1995",
};

const frame193322Data = {
    frame9Props: frame9Data,
};

const frame93Data = {
    lastName: "Last Name",
    ugrymov: "Ugrymov",
};

const frame422Data = {
    children: "Skip for now",
};

const frame16466Data = {
    group: "/img/vector-43@2x.png",
    vector: "/img/vector-38@2x.png",
    vector2: "/img/vector-105@2x.png",
    vector3: "/img/vector-228@2x.png",
    vector4: "/img/vector-107@2x.png",
    vector5: "/img/vector-42@2x.png",
};

const X21SignUpfiledData = {
    welcomeBack: "Please fill these fields to communicate with other people easier:",
    firstName: "First Name",
    mikhail: "Mikhail",
    email: "Email",
    text30: "misha_ugryumov123@gmail.com",
    text31: "Phone Number (optional)",
    text32: "+1 (987) 123-55-12",
    xcontinue: "Continue",
    text33: "Drag & Drop files in this area or Click Here to attach",
    frame19292Props: frame192925Data,
    frame19332Props: frame193322Data,
    frame93Props: frame93Data,
    frame42Props: frame422Data,
    frame1646Props: frame16466Data,
};

const frame1889Data = {
    src: "/img/ellipse-15@2x.png",
};

const iconsArrowsLeftData = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtnData = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeftData,
};

const grid2Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28912Data = {
    gridProps: grid2Data,
};

const frameData = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame1945Data = {
    frame2891Props: frame28912Data,
    frameProps: frameData,
};

const usermanagement2Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame1953Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement2Data,
};

const frame1975Data = {
    children: "Members",
};

const frame1976Data = {
    children: "Enterprises",
};

const book2Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame1947Data = {
    text41: "Library",
    bookProps: book2Data,
};

const frame1948Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23032Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849Data = {
    children: "Mo",
};

const frame28492Data = {
    children: "1",
};

const frame28493Data = {
    children: "8",
};

const frame28494Data = {
    children: "15",
};

const frame28495Data = {
    children: "22",
};

const frame28496Data = {
    children: "Tu",
};

const frame2857Data = {
    children: "2",
};

const frame28497Data = {
    children: "9",
};

const frame28498Data = {
    children: "16",
};

const frame28499Data = {
    children: "23",
};

const frame2885Data = {
    children: "30",
};

const frame284910Data = {
    children: "We",
};

const frame28572Data = {
    children: "3",
};

const frame284911Data = {
    children: "10",
};

const frame284912Data = {
    children: "17",
};

const frame284913Data = {
    children: "24",
};

const frame28852Data = {
    children: "1",
};

const frame284914Data = {
    children: "Th",
};

const frame284915Data = {
    children: "4",
};

const frame284916Data = {
    children: "11",
};

const frame284917Data = {
    children: "25",
};

const frame28853Data = {
    children: "2",
};

const frame284918Data = {
    children: "Fr",
};

const frame28573Data = {
    children: "5",
};

const frame284919Data = {
    children: "12",
};

const frame284920Data = {
    children: "19",
};

const frame284921Data = {
    children: "26",
};

const frame28854Data = {
    children: "3",
};

const frame284922Data = {
    children: "Sa",
};

const frame28574Data = {
    children: "6",
};

const frame284923Data = {
    children: "13",
};

const frame284924Data = {
    children: "20",
};

const frame284925Data = {
    children: "27",
};

const frame28855Data = {
    children: "4",
};

const frame2855Data = {
    children: "Su",
};

const frame28552Data = {
    children: "14",
};

const frame28553Data = {
    children: "21",
};

const frame28554Data = {
    children: "28",
};

const group1942Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849Data,
    frame28492Props: frame28492Data,
    frame28493Props: frame28493Data,
    frame28494Props: frame28494Data,
    frame28495Props: frame28495Data,
    frame28496Props: frame28496Data,
    frame2857Props: frame2857Data,
    frame28497Props: frame28497Data,
    frame28498Props: frame28498Data,
    frame28499Props: frame28499Data,
    frame2885Props: frame2885Data,
    frame284910Props: frame284910Data,
    frame28572Props: frame28572Data,
    frame284911Props: frame284911Data,
    frame284912Props: frame284912Data,
    frame284913Props: frame284913Data,
    frame28852Props: frame28852Data,
    frame284914Props: frame284914Data,
    frame284915Props: frame284915Data,
    frame284916Props: frame284916Data,
    frame284917Props: frame284917Data,
    frame28853Props: frame28853Data,
    frame284918Props: frame284918Data,
    frame28573Props: frame28573Data,
    frame284919Props: frame284919Data,
    frame284920Props: frame284920Data,
    frame284921Props: frame284921Data,
    frame28854Props: frame28854Data,
    frame284922Props: frame284922Data,
    frame28574Props: frame28574Data,
    frame284923Props: frame284923Data,
    frame284924Props: frame284924Data,
    frame284925Props: frame284925Data,
    frame28855Props: frame28855Data,
    frame2855Props: frame2855Data,
    frame28552Props: frame28552Data,
    frame28553Props: frame28553Data,
    frame28554Props: frame28554Data,
};

const chevronsLeftData = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft2Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289122Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeftData,
    chevronsLeft2Props: chevronsLeft2Data,
};

const frame1943Data = {
    text38: "Groups",
    text56: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame1945Data,
    frame1953Props: frame1953Data,
    frame1975Props: frame1975Data,
    frame1976Props: frame1976Data,
    frame1947Props: frame1947Data,
    frame1948Props: frame1948Data,
    frame2303Props: frame23032Data,
    group1942Props: group1942Data,
    frame28912Props: frame289122Data,
};

const email2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer223Data = {
    emailProps: email2Data,
};

const belloutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame19542Data = {
    ragrariansI519741: "Ragrarians News",
    frame1951: "/img/frame-1951@2x.png",
    text58: "My dashboard",
    layer22Props: layer223Data,
    belloutlineProps: belloutline2Data,
    personoutline1Props: personoutline12Data,
};

const X31NewsPageData = {
    dueToTheAdvantage: "November 01, 2020",
    dueToTheAdvantage2: "4 min read",
    text34: "Fueling the ethanol industry",
    frame1969: "/img/frame-1969-1@1x.png",
    text35: <>Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. It is due to such a situation that the use of Ethanol fuel has increased in many countries. However, those wanting to switch to a different type of fuel have many questions about Ethanol. Many of these are concerned with what this fuel really is and how big a dent it makes in our lives and pockets.<br /><br />Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic beverages obtained as a result of fermentation of a mash of grains (gin, vodka, and whiskey) or sugarcane (rums). It’s also a source of fuel commonly blended with gasoline to oxygenate the fuel at the gas pump. Ethanol fuel can also be used on its own to power vehicles.</>,
    text36: <>Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. It is due to such a situation that the use of Ethanol fuel has increased in many countries. However, those wanting to switch to a different type of fuel have many questions about Ethanol. Many of these are concerned with what this fuel really is and how big a dent it makes in our lives and pockets.<br /><br />Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic beverages obtained as a result of fermentation of a mash of grains (gin, vodka, and whiskey) or sugarcane (rums). It’s also a source of fuel commonly blended with gasoline to oxygenate the fuel at the gas pump. Ethanol fuel can also be used on its own to power vehicles.</>,
    f_1_: "/img/f-1-@2x.png",
    yourBusinessGoals: "Repost",
    shape: "/img/shape@2x.png",
    yourBusinessGoals2: "Tweet",
    frame1889Props: frame1889Data,
    backbtnProps: backbtnData,
    frame1943Props: frame1943Data,
    frame19542Props: frame19542Data,
};

const searchoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame29122Data = {
    search: "Search…",
    searchoutline1Props: searchoutline12Data,
};

const grid3Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame2Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-241@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const usermanagement3Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame19532Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement3Data,
};

const frame2847Data = {
    frame1953Props: frame19532Data,
};

const frame19752Data = {
    children: "Members",
};

const frame19762Data = {
    children: "Enterprises",
};

const book3Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame19472Data = {
    text41: "Library",
    bookProps: book3Data,
};

const frame19482Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23033Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame284926Data = {
    children: "Mo",
};

const frame284927Data = {
    children: "1",
};

const frame284928Data = {
    children: "8",
};

const frame284929Data = {
    children: "15",
};

const frame284930Data = {
    children: "22",
};

const frame284931Data = {
    children: "Tu",
};

const frame28575Data = {
    children: "2",
};

const frame284932Data = {
    children: "9",
};

const frame284933Data = {
    children: "16",
};

const frame284934Data = {
    children: "23",
};

const frame28856Data = {
    children: "30",
};

const frame284935Data = {
    children: "We",
};

const frame28576Data = {
    children: "3",
};

const frame284936Data = {
    children: "10",
};

const frame284937Data = {
    children: "17",
};

const frame284938Data = {
    children: "24",
};

const frame28857Data = {
    children: "1",
};

const frame284939Data = {
    children: "Th",
};

const frame284940Data = {
    children: "4",
};

const frame284941Data = {
    children: "11",
};

const frame284942Data = {
    children: "25",
};

const frame28858Data = {
    children: "2",
};

const frame284943Data = {
    children: "Fr",
};

const frame28577Data = {
    children: "5",
};

const frame284944Data = {
    children: "12",
};

const frame284945Data = {
    children: "19",
};

const frame284946Data = {
    children: "26",
};

const frame28859Data = {
    children: "3",
};

const frame284947Data = {
    children: "Sa",
};

const frame28578Data = {
    children: "6",
};

const frame284948Data = {
    children: "13",
};

const frame284949Data = {
    children: "20",
};

const frame284950Data = {
    children: "27",
};

const frame288510Data = {
    children: "4",
};

const frame28555Data = {
    children: "Su",
};

const frame28556Data = {
    children: "14",
};

const frame28557Data = {
    children: "21",
};

const frame28558Data = {
    children: "28",
};

const group19422Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame284926Data,
    frame28492Props: frame284927Data,
    frame28493Props: frame284928Data,
    frame28494Props: frame284929Data,
    frame28495Props: frame284930Data,
    frame28496Props: frame284931Data,
    frame2857Props: frame28575Data,
    frame28497Props: frame284932Data,
    frame28498Props: frame284933Data,
    frame28499Props: frame284934Data,
    frame2885Props: frame28856Data,
    frame284910Props: frame284935Data,
    frame28572Props: frame28576Data,
    frame284911Props: frame284936Data,
    frame284912Props: frame284937Data,
    frame284913Props: frame284938Data,
    frame28852Props: frame28857Data,
    frame284914Props: frame284939Data,
    frame284915Props: frame284940Data,
    frame284916Props: frame284941Data,
    frame284917Props: frame284942Data,
    frame28853Props: frame28858Data,
    frame284918Props: frame284943Data,
    frame28573Props: frame28577Data,
    frame284919Props: frame284944Data,
    frame284920Props: frame284945Data,
    frame284921Props: frame284946Data,
    frame28854Props: frame28859Data,
    frame284922Props: frame284947Data,
    frame28574Props: frame28578Data,
    frame284923Props: frame284948Data,
    frame284924Props: frame284949Data,
    frame284925Props: frame284950Data,
    frame28855Props: frame288510Data,
    frame2855Props: frame28555Data,
    frame28552Props: frame28556Data,
    frame28553Props: frame28557Data,
    frame28554Props: frame28558Data,
};

const chevronsLeft3Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft4Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289123Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft3Data,
    chevronsLeft2Props: chevronsLeft4Data,
};

const frame19432Data = {
    text60: "Groups",
    text78: "View calendar",
    union: "/img/union@2x.png",
    gridProps: grid3Data,
    frameProps: frame2Data,
    frame2847Props: frame2847Data,
    frame1975Props: frame19752Data,
    frame1976Props: frame19762Data,
    frame1947Props: frame19472Data,
    frame1948Props: frame19482Data,
    frame2303Props: frame23033Data,
    group1942Props: group19422Data,
    frame28912Props: frame289123Data,
};

const email3Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer224Data = {
    emailProps: email3Data,
};

const belloutline3Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame19543Data = {
    ragrariansI1161397: "Ragrarians News",
    frame1951: "/img/frame-1951@2x.png",
    text80: "My dashboard",
    layer22Props: layer224Data,
    belloutlineProps: belloutline3Data,
    personoutline1Props: personoutline13Data,
};

const frame196922Data = {
    frame1969: "/img/frame-1969-2@1x.png",
    address: "6 min read",
};

const frame3501Data = {
    farming: "FARMING",
    text81: "Fueling the ethanol industry",
};

const frame2789Data = {
    children: "November 01, 2020",
};

const frame197922Data = {
    text82: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
    frame3501Props: frame3501Data,
    frame2789Props: frame2789Data,
};

const frame34704Data = {
    children: "12 min read",
};

const frame196932Data = {
    frame1969: "/img/frame-1969-3@1x.png",
    frame3470Props: frame34704Data,
};

const frame35012Data = {
    farming: "PEOPLE",
    text81: "Fueling the ethanol industry",
};

const frame27892Data = {
    children: "November 01, 2020",
};

const frame3469Data = {
    text84: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste.",
    frame3501Props: frame35012Data,
    frame2789Props: frame27892Data,
};

const frame34705Data = {
    children: "12 min read",
};

const frame35013Data = {
    farming: "NATURE",
    text81: "Fueling the ethanol industry",
};

const frame18892Data = {
    src: "/img/ellipse-15-1@2x.png",
};

const frame197932Data = {
    text86: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
    date: "November 01, 2020",
    address: "6 min read",
    frame3501Props: frame35013Data,
    frame1889Props: frame18892Data,
};

const frame2915Data = {
    text87: "Discover more of what matters to you",
    farming: "Farming",
    carsIndustry: "Cars industry",
    mediaNews: "Media news",
    people: "People",
    nature: "Nature",
    seeAllTopics: "See all topics",
};

const X3CommunityPagenewsData = {
    addNews: "Add news",
    frame1969: "/img/frame-1969-4@1x.png",
    frame2912Props: frame29122Data,
    frame19432Props: frame19432Data,
    frame19543Props: frame19543Data,
    frame19692Props: frame196922Data,
    frame19792Props: frame197922Data,
    frame19693Props: frame196932Data,
    frame3469Props: frame3469Data,
    frame3470Props: frame34705Data,
    frame19793Props: frame197932Data,
    frame2915Props: frame2915Data,
};

const email4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer225Data = {
    emailProps: email4Data,
};

const emailoutline2Data = {
    layer22Props: layer225Data,
};

const belloutline4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame2848Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline14Data,
};

const frame19544Data = {
    ragrariansI520753: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline2Data,
    belloutlineProps: belloutline4Data,
    frame2848Props: frame2848Data,
};

const iconsArrowsLeft2Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame2923Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft2Data,
};

const backbtn2Data = {
    frame2923Props: frame2923Data,
};

const grid4Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28913Data = {
    gridProps: grid4Data,
};

const frame3Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame19452Data = {
    frame2891Props: frame28913Data,
    frameProps: frame3Data,
};

const usermanagement4Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame19533Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement4Data,
};

const frame28472Data = {
    frame1953Props: frame19533Data,
};

const frame19763Data = {
    children: "Groups",
};

const frame19753Data = {
    children: "Members",
};

const frame19764Data = {
    children: "Enterprises",
};

const frame1944Data = {
    frame2847Props: frame28472Data,
    frame1976Props: frame19763Data,
    frame1975Props: frame19753Data,
    frame19762Props: frame19764Data,
};

const book4Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame19473Data = {
    text41: "Library",
    bookProps: book4Data,
};

const frame19483Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23034Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame284951Data = {
    children: "Mo",
};

const frame284952Data = {
    children: "1",
};

const frame284953Data = {
    children: "8",
};

const frame284954Data = {
    children: "15",
};

const frame284955Data = {
    children: "22",
};

const frame284956Data = {
    children: "Tu",
};

const frame28579Data = {
    children: "2",
};

const frame284957Data = {
    children: "9",
};

const frame284958Data = {
    children: "16",
};

const frame284959Data = {
    children: "23",
};

const frame288511Data = {
    children: "30",
};

const frame284960Data = {
    children: "We",
};

const frame285710Data = {
    children: "3",
};

const frame284961Data = {
    children: "10",
};

const frame284962Data = {
    children: "17",
};

const frame284963Data = {
    children: "24",
};

const frame288512Data = {
    children: "1",
};

const frame284964Data = {
    children: "Th",
};

const frame284965Data = {
    children: "4",
};

const frame284966Data = {
    children: "11",
};

const frame284967Data = {
    children: "25",
};

const frame288513Data = {
    children: "2",
};

const frame284968Data = {
    children: "Fr",
};

const frame285711Data = {
    children: "5",
};

const frame284969Data = {
    children: "12",
};

const frame284970Data = {
    children: "19",
};

const frame284971Data = {
    children: "26",
};

const frame288514Data = {
    children: "3",
};

const frame284972Data = {
    children: "Sa",
};

const frame285712Data = {
    children: "6",
};

const frame284973Data = {
    children: "13",
};

const frame284974Data = {
    children: "20",
};

const frame284975Data = {
    children: "27",
};

const frame288515Data = {
    children: "4",
};

const frame28559Data = {
    children: "Su",
};

const frame285510Data = {
    children: "14",
};

const frame285511Data = {
    children: "21",
};

const frame285512Data = {
    children: "28",
};

const group19423Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame284951Data,
    frame28492Props: frame284952Data,
    frame28493Props: frame284953Data,
    frame28494Props: frame284954Data,
    frame28495Props: frame284955Data,
    frame28496Props: frame284956Data,
    frame2857Props: frame28579Data,
    frame28497Props: frame284957Data,
    frame28498Props: frame284958Data,
    frame28499Props: frame284959Data,
    frame2885Props: frame288511Data,
    frame284910Props: frame284960Data,
    frame28572Props: frame285710Data,
    frame284911Props: frame284961Data,
    frame284912Props: frame284962Data,
    frame284913Props: frame284963Data,
    frame28852Props: frame288512Data,
    frame284914Props: frame284964Data,
    frame284915Props: frame284965Data,
    frame284916Props: frame284966Data,
    frame284917Props: frame284967Data,
    frame28853Props: frame288513Data,
    frame284918Props: frame284968Data,
    frame28573Props: frame285711Data,
    frame284919Props: frame284969Data,
    frame284920Props: frame284970Data,
    frame284921Props: frame284971Data,
    frame28854Props: frame288514Data,
    frame284922Props: frame284972Data,
    frame28574Props: frame285712Data,
    frame284923Props: frame284973Data,
    frame284924Props: frame284974Data,
    frame284925Props: frame284975Data,
    frame28855Props: frame288515Data,
    frame2855Props: frame28559Data,
    frame28552Props: frame285510Data,
    frame28553Props: frame285511Data,
    frame28554Props: frame285512Data,
};

const frame2791Data = {
    text108: "View calendar",
    group1942Props: group19423Data,
};

const chevronsLeft5Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft6Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289124Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft5Data,
    chevronsLeft2Props: chevronsLeft6Data,
};

const group1943Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame2791Data,
    frame28912Props: frame289124Data,
};

const frame19433Data = {
    frame1945Props: frame19452Data,
    frame1944Props: frame1944Data,
    frame1947Props: frame19473Data,
    frame1948Props: frame19483Data,
    frame2303Props: frame23034Data,
    group1943Props: group1943Data,
};

const frame3067Data = {
    children: "How to be rich in 2020 and make business",
};

const videooutlineData = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame3318Data = {
    text116: "Add video",
    videooutlineProps: videooutlineData,
};

const frame3317Data = {
    frame3318Props: frame3318Data,
};

const cameraoutlineData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame33183Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutlineData,
};

const frame33182Data = {
    frame33183Props: frame33183Data,
};

const filetextoutlineData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame33184Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutlineData,
};

const frame3319Data = {
    frame33184Props: frame33184Data,
};

const frame1939Data = {
    frame3317Props: frame3317Data,
    frame33182Props: frame33182Data,
    frame3319Props: frame3319Data,
};

const frame43Data = {
    videoTitle: "Video title",
    name: "Jordan Ross Belfort speach 2020",
};

const frame1965Data = {
    children: "The wolf of wall street movie is about Jordan Belfort",
};

const frame5Data = {
    children: "Choose video",
};

const closeData = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer232Data = {
    closeProps: closeData,
};

const X32AddNewsvideoData = {
    text: "",
    frame317: "/img/frame-317@1x.png",
    addBlock: "Add block",
    videoLink: "Video link",
    text120: "https://www.youtube.com/watch?v=5AwdkGKmZ0I",
    or: "OR",
    addVideo: "Add video",
    frame19544Props: frame19544Data,
    backbtn2Props: backbtn2Data,
    frame19433Props: frame19433Data,
    frame3067Props: frame3067Data,
    frame1939Props: frame1939Data,
    frame43Props: frame43Data,
    frame1965Props: frame1965Data,
    frame5Props: frame5Data,
    layer23Props: layer232Data,
};

const searchoutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const funneloutline1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const frame2817Data = {
    filterByCategory: "Filter by category",
    funneloutline1Props: funneloutline1Data,
};

const layer242Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-287@2x.png",
};

const chevronrightoutline1Data = {
    layer24Props: layer242Data,
};

const frame2793Data = {
    x2564Followers: "2,564 followers",
    date: "Last publication: 2 days ago",
};

const frame52Data = {
    children: "Unfollow",
};

const frame27932Data = {
    x2564Followers: "2,564 followers",
    date: "Last publication: 2 days ago",
};

const frame27933Data = {
    x2564Followers: "2,564 followers",
    date: "Last publication: 2 days ago",
};

const frame53Data = {
    children: "Don’t recommend",
};

const frame2792Data = {
    children: "Follow",
};

const frame27934Data = {
    x2564Followers: "2,564 followers",
    date: "Last publication: 2 days ago",
};

const frame27922Data = {
    children: "Follow",
};

const email5Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer226Data = {
    emailProps: email5Data,
};

const emailoutline3Data = {
    layer22Props: layer226Data,
};

const belloutline5Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame19545Data = {
    ragrariansI1169649: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    text123: "My dashboard",
    emailoutlineProps: emailoutline3Data,
    belloutlineProps: belloutline5Data,
    personoutline1Props: personoutline15Data,
};

const grid5Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28914Data = {
    gridProps: grid5Data,
};

const frame6Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-327@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame19453Data = {
    frame2891Props: frame28914Data,
    frameProps: frame6Data,
};

const usermanagement5Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame19534Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement5Data,
};

const frame19765Data = {
    children: "Groups",
};

const frame19754Data = {
    children: "Members",
};

const frame19766Data = {
    children: "Enterprises",
};

const book5Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame19474Data = {
    text41: "Library",
    bookProps: book5Data,
};

const frame19484Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23035Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame284976Data = {
    children: "Mo",
};

const frame284977Data = {
    children: "1",
};

const frame284978Data = {
    children: "8",
};

const frame284979Data = {
    children: "15",
};

const frame284980Data = {
    children: "22",
};

const frame284981Data = {
    children: "Tu",
};

const frame285713Data = {
    children: "2",
};

const frame284982Data = {
    children: "9",
};

const frame284983Data = {
    children: "16",
};

const frame284984Data = {
    children: "23",
};

const frame288516Data = {
    children: "30",
};

const frame284985Data = {
    children: "We",
};

const frame285714Data = {
    children: "3",
};

const frame284986Data = {
    children: "10",
};

const frame284987Data = {
    children: "17",
};

const frame284988Data = {
    children: "24",
};

const frame288517Data = {
    children: "1",
};

const frame284989Data = {
    children: "Th",
};

const frame284990Data = {
    children: "4",
};

const frame284991Data = {
    children: "11",
};

const frame284992Data = {
    children: "25",
};

const frame288518Data = {
    children: "2",
};

const frame284993Data = {
    children: "Fr",
};

const frame285715Data = {
    children: "5",
};

const frame284994Data = {
    children: "12",
};

const frame284995Data = {
    children: "19",
};

const frame284996Data = {
    children: "26",
};

const frame288519Data = {
    children: "3",
};

const frame284997Data = {
    children: "Sa",
};

const frame285716Data = {
    children: "6",
};

const frame284998Data = {
    children: "13",
};

const frame284999Data = {
    children: "20",
};

const frame2849100Data = {
    children: "27",
};

const frame288520Data = {
    children: "4",
};

const frame285513Data = {
    children: "Su",
};

const frame285514Data = {
    children: "14",
};

const frame285515Data = {
    children: "21",
};

const frame285516Data = {
    children: "28",
};

const group19424Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame284976Data,
    frame28492Props: frame284977Data,
    frame28493Props: frame284978Data,
    frame28494Props: frame284979Data,
    frame28495Props: frame284980Data,
    frame28496Props: frame284981Data,
    frame2857Props: frame285713Data,
    frame28497Props: frame284982Data,
    frame28498Props: frame284983Data,
    frame28499Props: frame284984Data,
    frame2885Props: frame288516Data,
    frame284910Props: frame284985Data,
    frame28572Props: frame285714Data,
    frame284911Props: frame284986Data,
    frame284912Props: frame284987Data,
    frame284913Props: frame284988Data,
    frame28852Props: frame288517Data,
    frame284914Props: frame284989Data,
    frame284915Props: frame284990Data,
    frame284916Props: frame284991Data,
    frame284917Props: frame284992Data,
    frame28853Props: frame288518Data,
    frame284918Props: frame284993Data,
    frame28573Props: frame285715Data,
    frame284919Props: frame284994Data,
    frame284920Props: frame284995Data,
    frame284921Props: frame284996Data,
    frame28854Props: frame288519Data,
    frame284922Props: frame284997Data,
    frame28574Props: frame285716Data,
    frame284923Props: frame284998Data,
    frame284924Props: frame284999Data,
    frame284925Props: frame2849100Data,
    frame28855Props: frame288520Data,
    frame2855Props: frame285513Data,
    frame28552Props: frame285514Data,
    frame28553Props: frame285515Data,
    frame28554Props: frame285516Data,
};

const frame27912Data = {
    text108: "View calendar",
    group1942Props: group19424Data,
};

const chevronsLeft7Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft8Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289125Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft7Data,
    chevronsLeft2Props: chevronsLeft8Data,
};

const group19432Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27912Data,
    frame28912Props: frame289125Data,
};

const frame19434Data = {
    frame1945Props: frame19453Data,
    frame1953Props: frame19534Data,
    frame1976Props: frame19765Data,
    frame1975Props: frame19754Data,
    frame19762Props: frame19766Data,
    frame1947Props: frame19474Data,
    frame1948Props: frame19484Data,
    frame2303Props: frame23035Data,
    group1943Props: group19432Data,
};

const X51AllGroupsData = {
    searchGroups: "Search groups",
    allGroups: "All Groups",
    yourGroups: "Your Groups",
    createGroup: "Create group",
    frame1969: "/img/frame-1969-7@1x.png",
    farmers: "FARMERS",
    thinkLikeAFarmer: "Think like a farmer",
    frame19692: "/img/frame-1969-8@1x.png",
    farmers2: "FARMERS",
    thinkLikeAFarmer2: "Think like a farmer",
    unfollow: "Unfollow",
    frame19693: "/img/frame-1969-9@1x.png",
    ecology: "ECOLOGY",
    text121: "Let’s save our nature together! Community for nature lovers!",
    frame19694: "/img/frame-1969-10@1x.png",
    ecology2: "ECOLOGY",
    text122: "Let’s save our nature together! Community for nature lovers!",
    dontRecommend: "Don’t recommend",
    searchoutline1Props: searchoutline13Data,
    frame2817Props: frame2817Data,
    chevronrightoutline1Props: chevronrightoutline1Data,
    frame2793Props: frame2793Data,
    frame52Props: frame52Data,
    frame27932Props: frame27932Data,
    frame27933Props: frame27933Data,
    frame53Props: frame53Data,
    frame2792Props: frame2792Data,
    frame27934Props: frame27934Data,
    frame27922Props: frame27922Data,
    frame19545Props: frame19545Data,
    frame19434Props: frame19434Data,
};

const frame2894Data = {
    children: "MON",
};

const frame28942Data = {
    children: "WED",
};

const frame2900Data = {
    place: "SUN",
    tue: "TUE",
    thu: "THU",
    fri: "FRI",
    sat: "SAT",
    frame2894Props: frame2894Data,
    frame28942Props: frame28942Data,
};

const frame1988Data = {
    children: "Nov 6",
};

const frame2028Data = {
    frame1988Props: frame1988Data,
};

const frame19882Data = {
    children: "Nov 13",
};

const frame2035Data = {
    frame19882Props: frame19882Data,
};

const frame198822Data = {
    children: "Nov 20",
};

const frame2042Data = {
    frame19882Props: frame198822Data,
};

const frame2022Data = {
    children: "Oct 31",
};

const frame19883Data = {
    children: "Nov 7",
};

const frame20282Data = {
    frame1988Props: frame19883Data,
};

const frame198823Data = {
    children: "Nov 14",
};

const frame20352Data = {
    frame19882Props: frame198823Data,
};

const frame198824Data = {
    children: "Nov 21",
};

const frame20422Data = {
    frame19882Props: frame198824Data,
};

const frame198825Data = {
    children: "Nov 28",
};

const frame20423Data = {
    frame19882Props: frame198825Data,
};

const frame19884Data = {
    children: "Nov 1",
};

const frame3471Data = {
    children: "02:30 pm Call wi…",
};

const frame2062Data = {
    x0300PmFindAn: "03:00 pm find an…",
    x3Events: "3+ events",
    frame3471Props: frame3471Data,
};

const frame2023Data = {
    frame1988Props: frame19884Data,
    frame2062Props: frame2062Data,
};

const frame19885Data = {
    children: "Nov 8",
};

const frame34712Data = {
    children: "02:30 pm Call wi…",
};

const frame20622Data = {
    x0300PmFindAn: "03:00 pm find an…",
    x3Events: "3+ events",
    frame3471Props: frame34712Data,
};

const frame2030Data = {
    frame1988Props: frame19885Data,
    frame2062Props: frame20622Data,
};

const frame198826Data = {
    children: "Nov 15",
};

const frame2037Data = {
    frame19882Props: frame198826Data,
};

const frame198827Data = {
    children: "Nov 22",
};

const frame20424Data = {
    frame19882Props: frame198827Data,
};

const frame198828Data = {
    children: "Nov 29",
};

const frame2051Data = {
    frame19882Props: frame198828Data,
};

const frame19886Data = {
    children: "Nov 2",
};

const frame20283Data = {
    frame1988Props: frame19886Data,
};

const frame19887Data = {
    children: "Nov 9",
};

const frame2031Data = {
    frame1988Props: frame19887Data,
};

const frame2038Data = {
    children: "Nov 16",
};

const frame198829Data = {
    children: "Nov 23",
};

const frame20425Data = {
    frame19882Props: frame198829Data,
};

const frame1988210Data = {
    children: "Nov 30",
};

const frame2052Data = {
    frame19882Props: frame1988210Data,
};

const frame19888Data = {
    children: "Nov 3",
};

const frame34713Data = {
    children: "02:30 pm Call wi…",
};

const frame2025Data = {
    frame1988Props: frame19888Data,
    frame3471Props: frame34713Data,
};

const frame1988211Data = {
    children: "Nov 10",
};

const frame20372Data = {
    frame19882Props: frame1988211Data,
};

const frame1988212Data = {
    children: "Nov 17",
};

const frame2039Data = {
    x0230PmCallWi: "02:30pm Call wi…",
    x0300PmFindAn: "03:00pm find an…",
    x5Events: "5+ events",
    frame19882Props: frame1988212Data,
};

const frame1988213Data = {
    children: "Nov 24",
};

const frame20353Data = {
    frame19882Props: frame1988213Data,
};

const frame2053Data = {
    children: "Dec 1",
};

const frame19889Data = {
    children: "Nov 4",
};

const frame20284Data = {
    frame1988Props: frame19889Data,
};

const frame1988214Data = {
    children: "Nov 11",
};

const frame20373Data = {
    frame19882Props: frame1988214Data,
};

const frame1988215Data = {
    children: "Nov 18",
};

const frame20354Data = {
    frame19882Props: frame1988215Data,
};

const frame1988216Data = {
    children: "Nov 25",
};

const frame20355Data = {
    frame19882Props: frame1988216Data,
};

const frame20532Data = {
    children: "Dec 2",
};

const frame1988217Data = {
    children: "Nov 12",
};

const frame2034Data = {
    frame19882Props: frame1988217Data,
};

const frame2041Data = {
    children: "Nov 19",
};

const frame2048Data = {
    children: "Nov 26",
};

const email6Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer227Data = {
    emailProps: email6Data,
};

const belloutline6Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame19546Data = {
    ragrariansI1166390: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    text133: "My dashboard",
    layer22Props: layer227Data,
    belloutlineProps: belloutline6Data,
    personoutline1Props: personoutline16Data,
};

const grid6Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28915Data = {
    gridProps: grid6Data,
};

const frame7Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame19454Data = {
    frame2891Props: frame28915Data,
    frameProps: frame7Data,
};

const usermanagement6Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame19535Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement6Data,
};

const book6Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame19475Data = {
    text41: "Library",
    bookProps: book6Data,
};

const frame19485Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23036Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849101Data = {
    children: "Mo",
};

const frame2849102Data = {
    children: "1",
};

const frame2849103Data = {
    children: "8",
};

const frame2849104Data = {
    children: "15",
};

const frame2849105Data = {
    children: "22",
};

const frame2849106Data = {
    children: "Tu",
};

const frame285717Data = {
    children: "2",
};

const frame2849107Data = {
    children: "9",
};

const frame2849108Data = {
    children: "16",
};

const frame2849109Data = {
    children: "23",
};

const frame288521Data = {
    children: "30",
};

const frame2849110Data = {
    children: "We",
};

const frame285718Data = {
    children: "3",
};

const frame2849111Data = {
    children: "10",
};

const frame2849112Data = {
    children: "17",
};

const frame2849113Data = {
    children: "24",
};

const frame288522Data = {
    children: "1",
};

const frame2849114Data = {
    children: "Th",
};

const frame2849115Data = {
    children: "4",
};

const frame2849116Data = {
    children: "11",
};

const frame2849117Data = {
    children: "25",
};

const frame288523Data = {
    children: "2",
};

const frame2849118Data = {
    children: "Fr",
};

const frame285719Data = {
    children: "5",
};

const frame2849119Data = {
    children: "12",
};

const frame2849120Data = {
    children: "19",
};

const frame2849121Data = {
    children: "26",
};

const frame288524Data = {
    children: "3",
};

const frame2849122Data = {
    children: "Sa",
};

const frame285720Data = {
    children: "6",
};

const frame2849123Data = {
    children: "13",
};

const frame2849124Data = {
    children: "20",
};

const frame2849125Data = {
    children: "27",
};

const frame288525Data = {
    children: "4",
};

const frame285517Data = {
    children: "Su",
};

const frame285518Data = {
    children: "14",
};

const frame285519Data = {
    children: "21",
};

const frame285520Data = {
    children: "28",
};

const group19425Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849101Data,
    frame28492Props: frame2849102Data,
    frame28493Props: frame2849103Data,
    frame28494Props: frame2849104Data,
    frame28495Props: frame2849105Data,
    frame28496Props: frame2849106Data,
    frame2857Props: frame285717Data,
    frame28497Props: frame2849107Data,
    frame28498Props: frame2849108Data,
    frame28499Props: frame2849109Data,
    frame2885Props: frame288521Data,
    frame284910Props: frame2849110Data,
    frame28572Props: frame285718Data,
    frame284911Props: frame2849111Data,
    frame284912Props: frame2849112Data,
    frame284913Props: frame2849113Data,
    frame28852Props: frame288522Data,
    frame284914Props: frame2849114Data,
    frame284915Props: frame2849115Data,
    frame284916Props: frame2849116Data,
    frame284917Props: frame2849117Data,
    frame28853Props: frame288523Data,
    frame284918Props: frame2849118Data,
    frame28573Props: frame285719Data,
    frame284919Props: frame2849119Data,
    frame284920Props: frame2849120Data,
    frame284921Props: frame2849121Data,
    frame28854Props: frame288524Data,
    frame284922Props: frame2849122Data,
    frame28574Props: frame285720Data,
    frame284923Props: frame2849123Data,
    frame284924Props: frame2849124Data,
    frame284925Props: frame2849125Data,
    frame28855Props: frame288525Data,
    frame2855Props: frame285517Data,
    frame28552Props: frame285518Data,
    frame28553Props: frame285519Data,
    frame28554Props: frame285520Data,
};

const frame27913Data = {
    text108: "View calendar",
    group1942Props: group19425Data,
};

const chevronsLeft9Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft10Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289126Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft9Data,
    chevronsLeft2Props: chevronsLeft10Data,
};

const group19433Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27913Data,
    frame28912Props: frame289126Data,
};

const frame19435Data = {
    text135: "Groups",
    text136: "Members",
    text137: "Enterprises",
    frame1945Props: frame19454Data,
    frame1953Props: frame19535Data,
    frame1947Props: frame19475Data,
    frame1948Props: frame19485Data,
    frame2303Props: frame23036Data,
    group1943Props: group19433Data,
};

const frame1981Data = {
    children: "My events",
};

const frame3464Data = {
    enterprisesEvents: "Enterprises events",
    groupsEvents: "Groups events",
    frame1981Props: frame1981Data,
};

const chevronrightoutline2Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame20232Data = {
    chevronrightoutline2Props: chevronrightoutline2Data,
    chevronrightoutline22Props: chevronrightoutline22Data,
};

const frame54Data = {
    children: "Today",
};

const frame2902Data = {
    text155: "November 2020",
    text156: "Add new event",
    frame20232Props: frame20232Data,
    frame54Props: frame54Data,
};

const X42CalendarWithEventsData = {
    frame1987: "/img/frame-1987@2x.png",
    frame2049: "/img/frame-2049@2x.png",
    frame2027: "/img/frame-2027@2x.png",
    frame2055: "/img/frame-2055@2x.png",
    frame2900Props: frame2900Data,
    frame2028Props: frame2028Data,
    frame2035Props: frame2035Data,
    frame2042Props: frame2042Data,
    frame2022Props: frame2022Data,
    frame20282Props: frame20282Data,
    frame20352Props: frame20352Data,
    frame20422Props: frame20422Data,
    frame20423Props: frame20423Data,
    frame2023Props: frame2023Data,
    frame2030Props: frame2030Data,
    frame2037Props: frame2037Data,
    frame20424Props: frame20424Data,
    frame2051Props: frame2051Data,
    frame20283Props: frame20283Data,
    frame2031Props: frame2031Data,
    frame2038Props: frame2038Data,
    frame20425Props: frame20425Data,
    frame2052Props: frame2052Data,
    frame2025Props: frame2025Data,
    frame20372Props: frame20372Data,
    frame2039Props: frame2039Data,
    frame20353Props: frame20353Data,
    frame2053Props: frame2053Data,
    frame20284Props: frame20284Data,
    frame20373Props: frame20373Data,
    frame20354Props: frame20354Data,
    frame20355Props: frame20355Data,
    frame20532Props: frame20532Data,
    frame2034Props: frame2034Data,
    frame2041Props: frame2041Data,
    frame2048Props: frame2048Data,
    frame19546Props: frame19546Data,
    frame19435Props: frame19435Data,
    frame3464Props: frame3464Data,
    frame2902Props: frame2902Data,
};

const frame44Data = {
    children: "Edit information",
};

const frame94Data = {
    firstName: "First name",
    mikhail: "Mikhail",
};

const frame2819Data = {
    lastName: "Last Name",
    ugryumov: "Ugryumov",
};

const frame2820Data = {
    dateOfBirhday: "Date of birhday",
    phone: "08/23/1995",
};

const frame2823Data = {
    email: "Email",
    mikhailGmailPro: "mikhail@gmail.pro",
};

const frame2824Data = {
    phone: "Phone",
    text158: "+1 (233) 369-50-15",
};

const frame28232Data = {
    lastLogin: "Last login",
    phone: "09/22/2020",
};

const frame28242Data = {
    numbersOfVisits: "Numbers of visits",
    number: "153",
};

const email7Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer228Data = {
    emailProps: email7Data,
};

const emailoutline4Data = {
    layer22Props: layer228Data,
};

const belloutline7Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame19547Data = {
    ragrariansI2073184: "My profile",
    frame1951: "/img/frame-1951@2x.png",
    text160: "My dashboard",
    emailoutlineProps: emailoutline4Data,
    belloutlineProps: belloutline7Data,
    personoutline1Props: personoutline17Data,
};

const iconsArrowsLeft3Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn3Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft3Data,
};

const grid7Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28916Data = {
    gridProps: grid7Data,
};

const frame8Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame19455Data = {
    frame2891Props: frame28916Data,
    frameProps: frame8Data,
};

const usermanagement7Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame19536Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement7Data,
};

const book7Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame19476Data = {
    text41: "Library",
    bookProps: book7Data,
};

const frame19486Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23037Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849126Data = {
    children: "Mo",
};

const frame2849127Data = {
    children: "1",
};

const frame2849128Data = {
    children: "8",
};

const frame2849129Data = {
    children: "15",
};

const frame2849130Data = {
    children: "22",
};

const frame2849131Data = {
    children: "Tu",
};

const frame285721Data = {
    children: "2",
};

const frame2849132Data = {
    children: "9",
};

const frame2849133Data = {
    children: "16",
};

const frame2849134Data = {
    children: "23",
};

const frame288526Data = {
    children: "30",
};

const frame2849135Data = {
    children: "We",
};

const frame285722Data = {
    children: "3",
};

const frame2849136Data = {
    children: "10",
};

const frame2849137Data = {
    children: "17",
};

const frame2849138Data = {
    children: "24",
};

const frame288527Data = {
    children: "1",
};

const frame2849139Data = {
    children: "Th",
};

const frame2849140Data = {
    children: "4",
};

const frame2849141Data = {
    children: "11",
};

const frame2849142Data = {
    children: "25",
};

const frame288528Data = {
    children: "2",
};

const frame2849143Data = {
    children: "Fr",
};

const frame285723Data = {
    children: "5",
};

const frame2849144Data = {
    children: "12",
};

const frame2849145Data = {
    children: "19",
};

const frame2849146Data = {
    children: "26",
};

const frame288529Data = {
    children: "3",
};

const frame2849147Data = {
    children: "Sa",
};

const frame285724Data = {
    children: "6",
};

const frame2849148Data = {
    children: "13",
};

const frame2849149Data = {
    children: "20",
};

const frame2849150Data = {
    children: "27",
};

const frame288530Data = {
    children: "4",
};

const frame285521Data = {
    children: "Su",
};

const frame285522Data = {
    children: "14",
};

const frame285523Data = {
    children: "21",
};

const frame285524Data = {
    children: "28",
};

const group19426Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849126Data,
    frame28492Props: frame2849127Data,
    frame28493Props: frame2849128Data,
    frame28494Props: frame2849129Data,
    frame28495Props: frame2849130Data,
    frame28496Props: frame2849131Data,
    frame2857Props: frame285721Data,
    frame28497Props: frame2849132Data,
    frame28498Props: frame2849133Data,
    frame28499Props: frame2849134Data,
    frame2885Props: frame288526Data,
    frame284910Props: frame2849135Data,
    frame28572Props: frame285722Data,
    frame284911Props: frame2849136Data,
    frame284912Props: frame2849137Data,
    frame284913Props: frame2849138Data,
    frame28852Props: frame288527Data,
    frame284914Props: frame2849139Data,
    frame284915Props: frame2849140Data,
    frame284916Props: frame2849141Data,
    frame284917Props: frame2849142Data,
    frame28853Props: frame288528Data,
    frame284918Props: frame2849143Data,
    frame28573Props: frame285723Data,
    frame284919Props: frame2849144Data,
    frame284920Props: frame2849145Data,
    frame284921Props: frame2849146Data,
    frame28854Props: frame288529Data,
    frame284922Props: frame2849147Data,
    frame28574Props: frame285724Data,
    frame284923Props: frame2849148Data,
    frame284924Props: frame2849149Data,
    frame284925Props: frame2849150Data,
    frame28855Props: frame288530Data,
    frame2855Props: frame285521Data,
    frame28552Props: frame285522Data,
    frame28553Props: frame285523Data,
    frame28554Props: frame285524Data,
};

const chevronsLeft11Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft12Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289127Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft11Data,
    chevronsLeft2Props: chevronsLeft12Data,
};

const frame19436Data = {
    text162: "Groups",
    text163: "Members",
    text164: "Enterprises",
    text180: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame19455Data,
    frame1953Props: frame19536Data,
    frame1947Props: frame19476Data,
    frame1948Props: frame19486Data,
    frame2303Props: frame23037Data,
    group1942Props: group19426Data,
    frame28912Props: frame289127Data,
};

const X104MyPersonalsData = {
    frame2818: "/img/frame-2818@2x.png",
    text157: "Personal infromation",
    contactInformation: "Contact information",
    text159: "Additional information",
    frame44Props: frame44Data,
    frame94Props: frame94Data,
    frame2819Props: frame2819Data,
    frame2820Props: frame2820Data,
    frame2823Props: frame2823Data,
    frame2824Props: frame2824Data,
    frame28232Props: frame28232Data,
    frame28242Props: frame28242Data,
    frame19547Props: frame19547Data,
    backbtn3Props: backbtn3Data,
    frame19436Props: frame19436Data,
};

const email8Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer229Data = {
    emailProps: email8Data,
};

const emailoutline5Data = {
    layer22Props: layer229Data,
};

const belloutline8Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-379@2x.png",
};

const personoutline18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const grid8Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28917Data = {
    gridProps: grid8Data,
};

const frame10Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-241@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame19456Data = {
    frame2891Props: frame28917Data,
    frameProps: frame10Data,
};

const usermanagement8Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame19537Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement8Data,
};

const frame28473Data = {
    frame1953Props: frame19537Data,
};

const frame1974Data = {
    children: "Groups",
};

const frame197522Data = {
    children: "Members",
};

const frame19742Data = {
    children: "Enterprises",
};

const frame19442Data = {
    frame2847Props: frame28473Data,
    frame1974Props: frame1974Data,
    frame19752Props: frame197522Data,
    frame19742Props: frame19742Data,
};

const book8Data = {
    vector: "/img/vector-399@2x.png",
    vector2: "/img/vector-400@2x.png",
};

const frame19477Data = {
    text41: "Library",
    bookProps: book8Data,
};

const frame19487Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23038Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849151Data = {
    children: "Mo",
};

const frame2849152Data = {
    children: "1",
};

const frame2849153Data = {
    children: "8",
};

const frame2849154Data = {
    children: "15",
};

const frame2849155Data = {
    children: "22",
};

const frame2849156Data = {
    children: "Tu",
};

const frame285725Data = {
    children: "2",
};

const frame2849157Data = {
    children: "9",
};

const frame2849158Data = {
    children: "16",
};

const frame2849159Data = {
    children: "23",
};

const frame288531Data = {
    children: "30",
};

const frame2849160Data = {
    children: "We",
};

const frame285726Data = {
    children: "3",
};

const frame2849161Data = {
    children: "10",
};

const frame2849162Data = {
    children: "17",
};

const frame2849163Data = {
    children: "24",
};

const frame288532Data = {
    children: "1",
};

const frame2849164Data = {
    children: "Th",
};

const frame2849165Data = {
    children: "4",
};

const frame2849166Data = {
    children: "11",
};

const frame2849167Data = {
    children: "25",
};

const frame288533Data = {
    children: "2",
};

const frame2849168Data = {
    children: "Fr",
};

const frame285727Data = {
    children: "5",
};

const frame2849169Data = {
    children: "12",
};

const frame2849170Data = {
    children: "19",
};

const frame2849171Data = {
    children: "26",
};

const frame288534Data = {
    children: "3",
};

const frame2849172Data = {
    children: "Sa",
};

const frame285728Data = {
    children: "6",
};

const frame2849173Data = {
    children: "13",
};

const frame2849174Data = {
    children: "20",
};

const frame2849175Data = {
    children: "27",
};

const frame288535Data = {
    children: "4",
};

const frame285525Data = {
    children: "Su",
};

const frame285526Data = {
    children: "14",
};

const frame285527Data = {
    children: "21",
};

const frame285528Data = {
    children: "28",
};

const group19427Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849151Data,
    frame28492Props: frame2849152Data,
    frame28493Props: frame2849153Data,
    frame28494Props: frame2849154Data,
    frame28495Props: frame2849155Data,
    frame28496Props: frame2849156Data,
    frame2857Props: frame285725Data,
    frame28497Props: frame2849157Data,
    frame28498Props: frame2849158Data,
    frame28499Props: frame2849159Data,
    frame2885Props: frame288531Data,
    frame284910Props: frame2849160Data,
    frame28572Props: frame285726Data,
    frame284911Props: frame2849161Data,
    frame284912Props: frame2849162Data,
    frame284913Props: frame2849163Data,
    frame28852Props: frame288532Data,
    frame284914Props: frame2849164Data,
    frame284915Props: frame2849165Data,
    frame284916Props: frame2849166Data,
    frame284917Props: frame2849167Data,
    frame28853Props: frame288533Data,
    frame284918Props: frame2849168Data,
    frame28573Props: frame285727Data,
    frame284919Props: frame2849169Data,
    frame284920Props: frame2849170Data,
    frame284921Props: frame2849171Data,
    frame28854Props: frame288534Data,
    frame284922Props: frame2849172Data,
    frame28574Props: frame285728Data,
    frame284923Props: frame2849173Data,
    frame284924Props: frame2849174Data,
    frame284925Props: frame2849175Data,
    frame28855Props: frame288535Data,
    frame2855Props: frame285525Data,
    frame28552Props: frame285526Data,
    frame28553Props: frame285527Data,
    frame28554Props: frame285528Data,
};

const frame27914Data = {
    text108: "View calendar",
    group1942Props: group19427Data,
};

const chevronsLeft13Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft14Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289128Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft13Data,
    chevronsLeft2Props: chevronsLeft14Data,
};

const group19434Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27914Data,
    frame28912Props: frame289128Data,
};

const frame19437Data = {
    frame1945Props: frame19456Data,
    frame19442Props: frame19442Data,
    frame1947Props: frame19477Data,
    frame1948Props: frame19487Data,
    frame2303Props: frame23038Data,
    group1943Props: group19434Data,
};

const searchoutline14Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-1354@2x.png",
};

const funneloutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const layer243Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-287@2x.png",
};

const chevronrightoutline12Data = {
    layer24Props: layer243Data,
};

const layer244Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline13Data = {
    layer24Props: layer244Data,
};

const book9Data = {
    vector: "/img/vector-399@2x.png",
    vector2: "/img/vector-400@2x.png",
};

const frame3292Data = {
    children: "Collections",
};

const frame375Data = {
    text192: "How to make business in 2020",
    text193: "Business",
    rectangle1194: "/img/rectangle-1194@2x.png",
    text194: "My library",
    text196: "Add to",
    bookProps: book9Data,
    frame3292Props: frame3292Data,
};

const book10Data = {
    vector: "/img/vector-399@2x.png",
    vector2: "/img/vector-400@2x.png",
};

const frame32922Data = {
    children: "Collections",
};

const frame3752Data = {
    text192: "How to be productive in this year and find yourself",
    text193: "Business",
    rectangle1194: "/img/rectangle-1194-1@2x.png",
    text194: "My library",
    text196: "Add to",
    bookProps: book10Data,
    frame3292Props: frame32922Data,
};

const book11Data = {
    vector: "/img/vector-399@2x.png",
    vector2: "/img/vector-400@2x.png",
};

const frame32923Data = {
    children: "Collections",
};

const frame3753Data = {
    text192: "How to make business in 2020",
    text193: "Business",
    rectangle1194: "/img/rectangle-1194-2@2x.png",
    text194: "My library",
    text196: "Add to",
    bookProps: book11Data,
    frame3292Props: frame32923Data,
};

const book12Data = {
    vector: "/img/vector-399@2x.png",
    vector2: "/img/vector-400@2x.png",
};

const frame32924Data = {
    children: "Collections",
};

const frame3754Data = {
    text192: "How to make business in 2020",
    text193: "Business",
    rectangle1194: "/img/rectangle-1194@2x.png",
    text194: "My library",
    text196: "Add to",
    bookProps: book12Data,
    frame3292Props: frame32924Data,
};

const book13Data = {
    vector: "/img/vector-399@2x.png",
    vector2: "/img/vector-400@2x.png",
};

const frame32925Data = {
    children: "Collections",
};

const frame3755Data = {
    text192: "How to make business in 2020",
    text193: "Business",
    rectangle1194: "/img/rectangle-1194-4@2x.png",
    text194: "My library",
    text196: "Add to",
    bookProps: book13Data,
    frame3292Props: frame32925Data,
};

const grid9Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28918Data = {
    gridProps: grid9Data,
};

const frame12Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-241@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame19457Data = {
    frame2891Props: frame28918Data,
    frameProps: frame12Data,
};

const usermanagement9Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame19538Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement9Data,
};

const frame28474Data = {
    frame1953Props: frame19538Data,
};

const frame19743Data = {
    children: "Groups",
};

const frame197523Data = {
    children: "Members",
};

const frame19744Data = {
    children: "Enterprises",
};

const frame194422Data = {
    frame2847Props: frame28474Data,
    frame1974Props: frame19743Data,
    frame19752Props: frame197523Data,
    frame19742Props: frame19744Data,
};

const book14Data = {
    vector: "/img/vector-437@2x.png",
    vector2: "/img/vector-438@2x.png",
};

const frame19478Data = {
    text41: "Library",
    bookProps: book14Data,
};

const frame19488Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame23039Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849176Data = {
    children: "Mo",
};

const frame2849177Data = {
    children: "1",
};

const frame2849178Data = {
    children: "8",
};

const frame2849179Data = {
    children: "15",
};

const frame2849180Data = {
    children: "22",
};

const frame2849181Data = {
    children: "Tu",
};

const frame285729Data = {
    children: "2",
};

const frame2849182Data = {
    children: "9",
};

const frame2849183Data = {
    children: "16",
};

const frame2849184Data = {
    children: "23",
};

const frame288536Data = {
    children: "30",
};

const frame2849185Data = {
    children: "We",
};

const frame285730Data = {
    children: "3",
};

const frame2849186Data = {
    children: "10",
};

const frame2849187Data = {
    children: "17",
};

const frame2849188Data = {
    children: "24",
};

const frame288537Data = {
    children: "1",
};

const frame2849189Data = {
    children: "Th",
};

const frame2849190Data = {
    children: "4",
};

const frame2849191Data = {
    children: "11",
};

const frame2849192Data = {
    children: "25",
};

const frame288538Data = {
    children: "2",
};

const frame2849193Data = {
    children: "Fr",
};

const frame285731Data = {
    children: "5",
};

const frame2849194Data = {
    children: "12",
};

const frame2849195Data = {
    children: "19",
};

const frame2849196Data = {
    children: "26",
};

const frame288539Data = {
    children: "3",
};

const frame2849197Data = {
    children: "Sa",
};

const frame285732Data = {
    children: "6",
};

const frame2849198Data = {
    children: "13",
};

const frame2849199Data = {
    children: "20",
};

const frame2849200Data = {
    children: "27",
};

const frame288540Data = {
    children: "4",
};

const frame285529Data = {
    children: "Su",
};

const frame285530Data = {
    children: "14",
};

const frame285531Data = {
    children: "21",
};

const frame285532Data = {
    children: "28",
};

const group19428Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849176Data,
    frame28492Props: frame2849177Data,
    frame28493Props: frame2849178Data,
    frame28494Props: frame2849179Data,
    frame28495Props: frame2849180Data,
    frame28496Props: frame2849181Data,
    frame2857Props: frame285729Data,
    frame28497Props: frame2849182Data,
    frame28498Props: frame2849183Data,
    frame28499Props: frame2849184Data,
    frame2885Props: frame288536Data,
    frame284910Props: frame2849185Data,
    frame28572Props: frame285730Data,
    frame284911Props: frame2849186Data,
    frame284912Props: frame2849187Data,
    frame284913Props: frame2849188Data,
    frame28852Props: frame288537Data,
    frame284914Props: frame2849189Data,
    frame284915Props: frame2849190Data,
    frame284916Props: frame2849191Data,
    frame284917Props: frame2849192Data,
    frame28853Props: frame288538Data,
    frame284918Props: frame2849193Data,
    frame28573Props: frame285731Data,
    frame284919Props: frame2849194Data,
    frame284920Props: frame2849195Data,
    frame284921Props: frame2849196Data,
    frame28854Props: frame288539Data,
    frame284922Props: frame2849197Data,
    frame28574Props: frame285732Data,
    frame284923Props: frame2849198Data,
    frame284924Props: frame2849199Data,
    frame284925Props: frame2849200Data,
    frame28855Props: frame288540Data,
    frame2855Props: frame285529Data,
    frame28552Props: frame285530Data,
    frame28553Props: frame285531Data,
    frame28554Props: frame285532Data,
};

const frame27915Data = {
    text108: "View calendar",
    group1942Props: group19428Data,
};

const chevronsLeft15Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft16Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame289129Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft15Data,
    chevronsLeft2Props: chevronsLeft16Data,
};

const group19435Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27915Data,
    frame28912Props: frame289129Data,
};

const frame194372Data = {
    frame1945Props: frame19457Data,
    frame19442Props: frame194422Data,
    frame1947Props: frame19478Data,
    frame1948Props: frame19488Data,
    frame2303Props: frame23039Data,
    group1943Props: group19435Data,
};

const frame32926Data = {
    children: "Collections",
};

const frame3374Data = {
    frame2904: "/img/frame-2904@2x.png",
    text238: "Hi there! Can you help me with my cours…",
    name: "Bessie Cooper",
    phone: "08/12/2020",
};

const frame33742Data = {
    frame2904: "/img/frame-2904-1@2x.png",
    text238: "Hi there! Can you help me with my cours…",
    name: "Bessie Cooper",
    phone: "08/12/2020",
};

const frame33743Data = {
    frame2904: "/img/frame-2904-2@2x.png",
    text238: "Hi there! Can you help me with my cours…",
    name: "Bessie Cooper",
    phone: "08/12/2020",
};

const close2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer233Data = {
    closeProps: close2Data,
};

const closeoutline1Data = {
    layer23Props: layer233Data,
};

const frame286Data = {
    children: "Show all messages",
};

const X141MessagesPopupData = {
    library: "Library",
    frame1951: "/img/frame-1951@2x.png",
    myDashboard: "My dashboard",
    allFiles: "All files",
    text191: "My library & collections",
    usersCollections: "Users collections",
    savedCollection: "Saved collection",
    searchCourses: "Search courses",
    addFiles: "Add files",
    filterBy: "Filter by",
    articles: "Articles",
    videos: "Videos",
    number: "1",
    leftCenterTip: "/img/left-center-tip@2x.png",
    text237: "How to be productive in this year and find yourself",
    business: "Business",
    rectangle1194: "/img/rectangle-1194-5@1x.png",
    vector: "/img/vector-441@2x.png",
    vector2: "/img/vector-442@2x.png",
    added: "Added",
    addTo: "Add to",
    yourMessages: "Your messages",
    emailoutlineProps: emailoutline5Data,
    belloutlineProps: belloutline8Data,
    personoutline1Props: personoutline18Data,
    frame19437Props: frame19437Data,
    searchoutline1Props: searchoutline14Data,
    funneloutline1Props: funneloutline12Data,
    chevronrightoutline1Props: chevronrightoutline12Data,
    chevronrightoutline12Props: chevronrightoutline13Data,
    frame375Props: frame375Data,
    frame3752Props: frame3752Data,
    frame3753Props: frame3753Data,
    frame3754Props: frame3754Data,
    frame3755Props: frame3755Data,
    frame194372Props: frame194372Data,
    frame3292Props: frame32926Data,
    frame3374Props: frame3374Data,
    frame33742Props: frame33742Data,
    frame33743Props: frame33743Data,
    closeoutline1Props: closeoutline1Data,
    frame286Props: frame286Data,
};

const email9Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2210Data = {
    emailProps: email9Data,
};

const emailoutline6Data = {
    layer22Props: layer2210Data,
};

const belloutline9Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28482Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline19Data,
};

const frame19548Data = {
    ragrariansI1454626: "My dashboard",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline6Data,
    belloutlineProps: belloutline9Data,
    frame2848Props: frame28482Data,
};

const frame45Data = {
    children: "See all items",
};

const frame3007Data = {
    src: "/img/frame-2926-1@2x.png",
};

const frame1971Data = {
    src: "/img/vector-335@2x.png",
};

const frame3060Data = {
    frame3060: "/img/frame-3060@2x.png",
    text244: "Be happy, find your self! Motivation 2020",
    frame1971Props: frame1971Data,
};

const frame3061Data = {
    frame3061: "/img/frame-3061@2x.png",
    text245: "Be happy, find your self! Motivation 2020",
};

const frame30612Data = {
    frame3061: "/img/frame-3064@2x.png",
    text245: "Be happy, find your self! Motivation 2020",
};

const frame3063Data = {
    frame3063: "/img/frame-3063@2x.png",
    group: "/img/vector-346@2x.png",
    text247: "Be happy, find your self! Motivation 2020",
};

const frame2970Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-348@2x.png",
};

const frame46Data = {
    children: "See all items",
};

const frame30072Data = {
    src: "/img/frame-2926-2@2x.png",
};

const frame30632Data = {
    frame3063: "/img/frame-3063@2x.png",
    group: "/img/vector-346@2x.png",
    text247: "Be happy, find your self! Motivation 2020",
};

const frame29702Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-348@2x.png",
};

const frame47Data = {
    children: "See all items",
};

const frame19712Data = {
    src: "/img/vector-335@2x.png",
};

const frame30602Data = {
    frame3060: "/img/frame-3060-2@2x.png",
    text244: "Be happy, find your self! Motivation 2020",
    frame1971Props: frame19712Data,
};

const frame30613Data = {
    frame3061: "/img/frame-3061-1@2x.png",
    text245: "Be happy, find your self! Motivation 2020",
};

const frame30614Data = {
    frame3061: "/img/frame-3064@2x.png",
    text245: "Be happy, find your self! Motivation 2020",
};

const frame30633Data = {
    frame3063: "/img/frame-3063@2x.png",
    group: "/img/vector-346@2x.png",
    text247: "Be happy, find your self! Motivation 2020",
};

const frame29703Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-348@2x.png",
};

const frame29704Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const frame29705Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const grid10Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame28919Data = {
    gridProps: grid10Data,
};

const frame13Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-241@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame19458Data = {
    frame2891Props: frame28919Data,
    frameProps: frame13Data,
};

const usermanagement10Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame19539Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement10Data,
};

const book15Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame19479Data = {
    text41: "Library",
    bookProps: book15Data,
};

const frame19489Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230310Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849201Data = {
    children: "Mo",
};

const frame2849202Data = {
    children: "1",
};

const frame2849203Data = {
    children: "8",
};

const frame2849204Data = {
    children: "15",
};

const frame2849205Data = {
    children: "22",
};

const frame2849206Data = {
    children: "Tu",
};

const frame285733Data = {
    children: "2",
};

const frame2849207Data = {
    children: "9",
};

const frame2849208Data = {
    children: "16",
};

const frame2849209Data = {
    children: "23",
};

const frame288541Data = {
    children: "30",
};

const frame2849210Data = {
    children: "We",
};

const frame285734Data = {
    children: "3",
};

const frame2849211Data = {
    children: "10",
};

const frame2849212Data = {
    children: "17",
};

const frame2849213Data = {
    children: "24",
};

const frame288542Data = {
    children: "1",
};

const frame2849214Data = {
    children: "Th",
};

const frame2849215Data = {
    children: "4",
};

const frame2849216Data = {
    children: "11",
};

const frame2849217Data = {
    children: "25",
};

const frame288543Data = {
    children: "2",
};

const frame2849218Data = {
    children: "Fr",
};

const frame285735Data = {
    children: "5",
};

const frame2849219Data = {
    children: "12",
};

const frame2849220Data = {
    children: "19",
};

const frame2849221Data = {
    children: "26",
};

const frame288544Data = {
    children: "3",
};

const frame2849222Data = {
    children: "Sa",
};

const frame285736Data = {
    children: "6",
};

const frame2849223Data = {
    children: "13",
};

const frame2849224Data = {
    children: "20",
};

const frame2849225Data = {
    children: "27",
};

const frame288545Data = {
    children: "4",
};

const frame285533Data = {
    children: "Su",
};

const frame285534Data = {
    children: "14",
};

const frame285535Data = {
    children: "21",
};

const frame285536Data = {
    children: "28",
};

const group19429Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849201Data,
    frame28492Props: frame2849202Data,
    frame28493Props: frame2849203Data,
    frame28494Props: frame2849204Data,
    frame28495Props: frame2849205Data,
    frame28496Props: frame2849206Data,
    frame2857Props: frame285733Data,
    frame28497Props: frame2849207Data,
    frame28498Props: frame2849208Data,
    frame28499Props: frame2849209Data,
    frame2885Props: frame288541Data,
    frame284910Props: frame2849210Data,
    frame28572Props: frame285734Data,
    frame284911Props: frame2849211Data,
    frame284912Props: frame2849212Data,
    frame284913Props: frame2849213Data,
    frame28852Props: frame288542Data,
    frame284914Props: frame2849214Data,
    frame284915Props: frame2849215Data,
    frame284916Props: frame2849216Data,
    frame284917Props: frame2849217Data,
    frame28853Props: frame288543Data,
    frame284918Props: frame2849218Data,
    frame28573Props: frame285735Data,
    frame284919Props: frame2849219Data,
    frame284920Props: frame2849220Data,
    frame284921Props: frame2849221Data,
    frame28854Props: frame288544Data,
    frame284922Props: frame2849222Data,
    frame28574Props: frame285736Data,
    frame284923Props: frame2849223Data,
    frame284924Props: frame2849224Data,
    frame284925Props: frame2849225Data,
    frame28855Props: frame288545Data,
    frame2855Props: frame285533Data,
    frame28552Props: frame285534Data,
    frame28553Props: frame285535Data,
    frame28554Props: frame285536Data,
};

const chevronsLeft17Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft18Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891210Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft17Data,
    chevronsLeft2Props: chevronsLeft18Data,
};

const frame19438Data = {
    text255: "Groups",
    text256: "Members",
    text257: "Enterprises",
    text261: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame19458Data,
    frame1953Props: frame19539Data,
    frame1947Props: frame19479Data,
    frame1948Props: frame19489Data,
    frame2303Props: frame230310Data,
    group1942Props: group19429Data,
    frame28912Props: frame2891210Data,
};

const X101MyDashboardData = {
    frame2818: "/img/frame-2818-1@2x.png",
    mikhailUgryumov: "Mikhail Ugryumov",
    text242: "Last visit: 5 hours ago",
    text243: "Follow 8 communities",
    myCommunities: "My communities",
    vector: "/img/vector-306@2x.png",
    vector2: "/img/vector-307@2x.png",
    myProfile: "My Profile",
    vector3: "/img/vector-314@2x.png",
    vector4: "/img/vector-315@2x.png",
    achievements: "Achievements",
    vector5: "/img/vector-318@2x.png",
    vector6: "/img/vector-319@2x.png",
    surveys: "Surveys",
    vector7: "/img/vector-328@2x.png",
    vector8: "/img/vector-329@2x.png",
    myLibrary: "My library",
    vector9: "/img/vector-355@2x.png",
    vector10: "/img/vector-356@2x.png",
    myCourses: "My courses",
    frame3060: "/img/frame-3060-1@2x.png",
    text248: "Be happy, find your self! Motivation 2020",
    vector11: "/img/vector-362@2x.png",
    vector12: "/img/vector-363@2x.png",
    addCourse: "Add course",
    vector13: "/img/vector-364@2x.png",
    vector14: "/img/vector-365@2x.png",
    vector15: "/img/vector-366@2x.png",
    vector16: "/img/vector-367@2x.png",
    myGroups: "My groups",
    frame2926: "/img/frame-2926@2x.png",
    frame19548Props: frame19548Data,
    frame45Props: frame45Data,
    frame3007Props: frame3007Data,
    frame3060Props: frame3060Data,
    frame3061Props: frame3061Data,
    frame30612Props: frame30612Data,
    frame3063Props: frame3063Data,
    frame2970Props: frame2970Data,
    frame46Props: frame46Data,
    frame30072Props: frame30072Data,
    frame30632Props: frame30632Data,
    frame29702Props: frame29702Data,
    frame47Props: frame47Data,
    frame30602Props: frame30602Data,
    frame30613Props: frame30613Data,
    frame30614Props: frame30614Data,
    frame30633Props: frame30633Data,
    frame29703Props: frame29703Data,
    frame29704Props: frame29704Data,
    frame29705Props: frame29705Data,
    frame19438Props: frame19438Data,
};

const searchoutline15Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame1980Data = {
    searchEnterprises: "Search enterprises",
    searchoutline1Props: searchoutline15Data,
};

const funneloutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const frame28172Data = {
    filterByCategory: "Filter by category",
    funneloutline1Props: funneloutline13Data,
};

const layer245Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline14Data = {
    layer24Props: layer245Data,
};

const frame1989Data = {
    frame2817Props: frame28172Data,
    chevronrightoutline1Props: chevronrightoutline14Data,
};

const email10Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2211Data = {
    emailProps: email10Data,
};

const emailoutline7Data = {
    layer22Props: layer2211Data,
};

const belloutline10Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline110Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28483Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline110Data,
};

const frame195442Data = {
    ragrariansI520753: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline7Data,
    belloutlineProps: belloutline10Data,
    frame2848Props: frame28483Data,
};

const frame3239Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27923Data = {
    children: "Follow",
};

const frame2796Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27923Data,
};

const frame19694Data = {
    frame1969: "/img/frame-1969-11@1x.png",
    frame3239Props: frame3239Data,
    frame2796Props: frame2796Data,
};

const frame32392Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27924Data = {
    children: "Follow",
};

const frame27962Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27924Data,
};

const frame2983Data = {
    frame2983: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32392Data,
    frame2796Props: frame27962Data,
};

const frame32393Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279622Data = {
    children: "Unfollow",
};

const frame2982Data = {
    frame2982: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32393Data,
    frame27962Props: frame279622Data,
};

const frame32394Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279623Data = {
    children: "Unfollow",
};

const frame2984Data = {
    frame2984: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32394Data,
    frame27962Props: frame279623Data,
};

const grid11Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289110Data = {
    gridProps: grid11Data,
};

const frame14Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-327@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame19459Data = {
    frame2891Props: frame289110Data,
    frameProps: frame14Data,
};

const usermanagement11Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195310Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement11Data,
};

const frame19745Data = {
    children: "Enterprises",
};

const book16Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194710Data = {
    text41: "Library",
    bookProps: book16Data,
};

const frame194810Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230311Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849226Data = {
    children: "Mo",
};

const frame2849227Data = {
    children: "1",
};

const frame2849228Data = {
    children: "8",
};

const frame2849229Data = {
    children: "15",
};

const frame2849230Data = {
    children: "22",
};

const frame2849231Data = {
    children: "Tu",
};

const frame285737Data = {
    children: "2",
};

const frame2849232Data = {
    children: "9",
};

const frame2849233Data = {
    children: "16",
};

const frame2849234Data = {
    children: "23",
};

const frame288546Data = {
    children: "30",
};

const frame2849235Data = {
    children: "We",
};

const frame285738Data = {
    children: "3",
};

const frame2849236Data = {
    children: "10",
};

const frame2849237Data = {
    children: "17",
};

const frame2849238Data = {
    children: "24",
};

const frame288547Data = {
    children: "1",
};

const frame2849239Data = {
    children: "Th",
};

const frame2849240Data = {
    children: "4",
};

const frame2849241Data = {
    children: "11",
};

const frame2849242Data = {
    children: "25",
};

const frame288548Data = {
    children: "2",
};

const frame2849243Data = {
    children: "Fr",
};

const frame285739Data = {
    children: "5",
};

const frame2849244Data = {
    children: "12",
};

const frame2849245Data = {
    children: "19",
};

const frame2849246Data = {
    children: "26",
};

const frame288549Data = {
    children: "3",
};

const frame2849247Data = {
    children: "Sa",
};

const frame285740Data = {
    children: "6",
};

const frame2849248Data = {
    children: "13",
};

const frame2849249Data = {
    children: "20",
};

const frame2849250Data = {
    children: "27",
};

const frame288550Data = {
    children: "4",
};

const frame285537Data = {
    children: "Su",
};

const frame285538Data = {
    children: "14",
};

const frame285539Data = {
    children: "21",
};

const frame285540Data = {
    children: "28",
};

const group194210Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849226Data,
    frame28492Props: frame2849227Data,
    frame28493Props: frame2849228Data,
    frame28494Props: frame2849229Data,
    frame28495Props: frame2849230Data,
    frame28496Props: frame2849231Data,
    frame2857Props: frame285737Data,
    frame28497Props: frame2849232Data,
    frame28498Props: frame2849233Data,
    frame28499Props: frame2849234Data,
    frame2885Props: frame288546Data,
    frame284910Props: frame2849235Data,
    frame28572Props: frame285738Data,
    frame284911Props: frame2849236Data,
    frame284912Props: frame2849237Data,
    frame284913Props: frame2849238Data,
    frame28852Props: frame288547Data,
    frame284914Props: frame2849239Data,
    frame284915Props: frame2849240Data,
    frame284916Props: frame2849241Data,
    frame284917Props: frame2849242Data,
    frame28853Props: frame288548Data,
    frame284918Props: frame2849243Data,
    frame28573Props: frame285739Data,
    frame284919Props: frame2849244Data,
    frame284920Props: frame2849245Data,
    frame284921Props: frame2849246Data,
    frame28854Props: frame288549Data,
    frame284922Props: frame2849247Data,
    frame28574Props: frame285740Data,
    frame284923Props: frame2849248Data,
    frame284924Props: frame2849249Data,
    frame284925Props: frame2849250Data,
    frame28855Props: frame288550Data,
    frame2855Props: frame285537Data,
    frame28552Props: frame285538Data,
    frame28553Props: frame285539Data,
    frame28554Props: frame285540Data,
};

const frame27916Data = {
    text108: "View calendar",
    group1942Props: group194210Data,
};

const chevronsLeft19Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft20Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891211Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft19Data,
    chevronsLeft2Props: chevronsLeft20Data,
};

const group19436Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27916Data,
    frame28912Props: frame2891211Data,
};

const frame19439Data = {
    text274: "Groups",
    text275: "Members",
    frame1945Props: frame19459Data,
    frame1953Props: frame195310Data,
    frame1974Props: frame19745Data,
    frame1947Props: frame194710Data,
    frame1948Props: frame194810Data,
    frame2303Props: frame230311Data,
    group1943Props: group19436Data,
};

const X91AllEnterprisesData = {
    allEnterprises: "All Enterprises",
    yourEnterprises: "Your Enterprises",
    createEnterprise: "Create Enterprise",
    frame1980Props: frame1980Data,
    frame1989Props: frame1989Data,
    frame19544Props: frame195442Data,
    frame19694Props: frame19694Data,
    frame2983Props: frame2983Data,
    frame2982Props: frame2982Data,
    frame2984Props: frame2984Data,
    frame19439Props: frame19439Data,
};

const email11Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2212Data = {
    emailProps: email11Data,
};

const emailoutline8Data = {
    layer22Props: layer2212Data,
};

const belloutline11Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline111Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28484Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline111Data,
};

const frame195443Data = {
    ragrariansI520753: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline8Data,
    belloutlineProps: belloutline11Data,
    frame2848Props: frame28484Data,
};

const grid12Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289111Data = {
    gridProps: grid12Data,
};

const frame15Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194510Data = {
    frame2891Props: frame289111Data,
    frameProps: frame15Data,
};

const usermanagement12Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195311Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement12Data,
};

const frame28475Data = {
    frame1953Props: frame195311Data,
};

const frame19746Data = {
    children: "Groups",
};

const frame197524Data = {
    children: "Members",
};

const frame19747Data = {
    children: "Enterprises",
};

const frame194423Data = {
    frame2847Props: frame28475Data,
    frame1974Props: frame19746Data,
    frame19752Props: frame197524Data,
    frame19742Props: frame19747Data,
};

const book17Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194711Data = {
    text41: "Library",
    bookProps: book17Data,
};

const frame194811Data = {
    graduationCap: "/img/graduation-cap-4@2x.png",
    text42: "Courses",
};

const frame230312Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849251Data = {
    children: "Mo",
};

const frame2849252Data = {
    children: "1",
};

const frame2849253Data = {
    children: "8",
};

const frame2849254Data = {
    children: "15",
};

const frame2849255Data = {
    children: "22",
};

const frame2849256Data = {
    children: "Tu",
};

const frame285741Data = {
    children: "2",
};

const frame2849257Data = {
    children: "9",
};

const frame2849258Data = {
    children: "16",
};

const frame2849259Data = {
    children: "23",
};

const frame288551Data = {
    children: "30",
};

const frame2849260Data = {
    children: "We",
};

const frame285742Data = {
    children: "3",
};

const frame2849261Data = {
    children: "10",
};

const frame2849262Data = {
    children: "17",
};

const frame2849263Data = {
    children: "24",
};

const frame288552Data = {
    children: "1",
};

const frame2849264Data = {
    children: "Th",
};

const frame2849265Data = {
    children: "4",
};

const frame2849266Data = {
    children: "11",
};

const frame2849267Data = {
    children: "25",
};

const frame288553Data = {
    children: "2",
};

const frame2849268Data = {
    children: "Fr",
};

const frame285743Data = {
    children: "5",
};

const frame2849269Data = {
    children: "12",
};

const frame2849270Data = {
    children: "19",
};

const frame2849271Data = {
    children: "26",
};

const frame288554Data = {
    children: "3",
};

const frame2849272Data = {
    children: "Sa",
};

const frame285744Data = {
    children: "6",
};

const frame2849273Data = {
    children: "13",
};

const frame2849274Data = {
    children: "20",
};

const frame2849275Data = {
    children: "27",
};

const frame288555Data = {
    children: "4",
};

const frame285541Data = {
    children: "Su",
};

const frame285542Data = {
    children: "14",
};

const frame285543Data = {
    children: "21",
};

const frame285544Data = {
    children: "28",
};

const group194211Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849251Data,
    frame28492Props: frame2849252Data,
    frame28493Props: frame2849253Data,
    frame28494Props: frame2849254Data,
    frame28495Props: frame2849255Data,
    frame28496Props: frame2849256Data,
    frame2857Props: frame285741Data,
    frame28497Props: frame2849257Data,
    frame28498Props: frame2849258Data,
    frame28499Props: frame2849259Data,
    frame2885Props: frame288551Data,
    frame284910Props: frame2849260Data,
    frame28572Props: frame285742Data,
    frame284911Props: frame2849261Data,
    frame284912Props: frame2849262Data,
    frame284913Props: frame2849263Data,
    frame28852Props: frame288552Data,
    frame284914Props: frame2849264Data,
    frame284915Props: frame2849265Data,
    frame284916Props: frame2849266Data,
    frame284917Props: frame2849267Data,
    frame28853Props: frame288553Data,
    frame284918Props: frame2849268Data,
    frame28573Props: frame285743Data,
    frame284919Props: frame2849269Data,
    frame284920Props: frame2849270Data,
    frame284921Props: frame2849271Data,
    frame28854Props: frame288554Data,
    frame284922Props: frame2849272Data,
    frame28574Props: frame285744Data,
    frame284923Props: frame2849273Data,
    frame284924Props: frame2849274Data,
    frame284925Props: frame2849275Data,
    frame28855Props: frame288555Data,
    frame2855Props: frame285541Data,
    frame28552Props: frame285542Data,
    frame28553Props: frame285543Data,
    frame28554Props: frame285544Data,
};

const frame27917Data = {
    text108: "View calendar",
    group1942Props: group194211Data,
};

const chevronsLeft21Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft22Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891212Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft21Data,
    chevronsLeft2Props: chevronsLeft22Data,
};

const group19437Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27917Data,
    frame28912Props: frame2891212Data,
};

const frame194310Data = {
    frame1945Props: frame194510Data,
    frame19442Props: frame194423Data,
    frame1947Props: frame194711Data,
    frame1948Props: frame194811Data,
    frame2303Props: frame230312Data,
    group1943Props: group19437Data,
};

const iconsArrowsLeft4Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29232Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft4Data,
};

const backbtn22Data = {
    frame2923Props: frame29232Data,
};

const frame30672Data = {
    children: "02. How to be rich in 2020 and make business",
};

const videooutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const cameraoutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-403@2x.png",
    vector3: "/img/vector-404@2x.png",
};

const filetextoutline2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame19392Data = {
    addVideo: "Add video",
    addImage: "Add image",
    addText: "Add text",
    videooutlineProps: videooutline2Data,
    cameraoutlineProps: cameraoutline2Data,
    filetextoutlineProps: filetextoutline2Data,
};

const close3Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer234Data = {
    closeProps: close3Data,
};

const iconsCameraData = {
    src: "/img/union-7@2x.png",
};

const close4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer235Data = {
    closeProps: close4Data,
};

const closeoutline12Data = {
    layer23Props: layer235Data,
};

const frame2278Data = {
    src: "/img/ellipse-232@2x.png",
};

const frame3444Data = {
    text317: "Add photo description",
    frame2278Props: frame2278Data,
};

const frame432Data = {
    videoTitle: "Photo description",
    name: "Jordan Ross Belfort speach 2020",
};

const X341AddNewBlockfilledData = {
    text: "",
    addPhoto: "Add photo",
    frame317: "/img/frame-317@1x.png",
    addBlock: "Add block",
    frame19544Props: frame195443Data,
    frame194310Props: frame194310Data,
    backbtn2Props: backbtn22Data,
    frame30672Props: frame30672Data,
    frame19392Props: frame19392Data,
    layer23Props: layer234Data,
    iconsCameraProps: iconsCameraData,
    closeoutline1Props: closeoutline12Data,
    frame3444Props: frame3444Data,
    frame43Props: frame432Data,
};

const searchoutline16Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame19802Data = {
    searchEnterprises: "Search enterprises",
    searchoutline1Props: searchoutline16Data,
};

const funneloutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const frame28173Data = {
    filterByCategory: "Filter by category",
    funneloutline1Props: funneloutline14Data,
};

const layer246Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-287@2x.png",
};

const chevronrightoutline15Data = {
    layer24Props: layer246Data,
};

const layer247Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline16Data = {
    layer24Props: layer247Data,
};

const frame19892Data = {
    frame2817Props: frame28173Data,
    chevronrightoutline1Props: chevronrightoutline15Data,
    chevronrightoutline12Props: chevronrightoutline16Data,
};

const frame2981Data = {
    allEnterprises: "All Enterprises",
    yourEnterprises: "Your Enterprises",
};

const frame1983Data = {
    children: "Create Enterprise",
};

const email12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2213Data = {
    emailProps: email12Data,
};

const emailoutline9Data = {
    layer22Props: layer2213Data,
};

const belloutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline112Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28485Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline112Data,
};

const frame195444Data = {
    ragrariansI520753: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline9Data,
    belloutlineProps: belloutline12Data,
    frame2848Props: frame28485Data,
};

const frame32395Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27925Data = {
    children: "Follow",
};

const frame27963Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27925Data,
};

const frame19695Data = {
    frame1969: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32395Data,
    frame2796Props: frame27963Data,
};

const frame32396Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27926Data = {
    children: "Follow",
};

const frame27964Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27926Data,
};

const frame196952Data = {
    frame1969: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32396Data,
    frame2796Props: frame27964Data,
};

const frame32397Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279624Data = {
    children: "Unfollow",
};

const frame29822Data = {
    frame2982: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32397Data,
    frame27962Props: frame279624Data,
};

const frame32398Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279625Data = {
    children: "Unfollow",
};

const frame298222Data = {
    frame2982: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32398Data,
    frame27962Props: frame279625Data,
};

const grid13Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289112Data = {
    gridProps: grid13Data,
};

const frame16Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-241@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194511Data = {
    frame2891Props: frame289112Data,
    frameProps: frame16Data,
};

const usermanagement13Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195312Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement13Data,
};

const frame28476Data = {
    frame1953Props: frame195312Data,
};

const frame19748Data = {
    children: "Groups",
};

const frame197525Data = {
    children: "Members",
};

const frame19749Data = {
    children: "Enterprises",
};

const frame194424Data = {
    frame2847Props: frame28476Data,
    frame1974Props: frame19748Data,
    frame19752Props: frame197525Data,
    frame19742Props: frame19749Data,
};

const book18Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194712Data = {
    text41: "Library",
    bookProps: book18Data,
};

const frame194812Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230313Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849276Data = {
    children: "Mo",
};

const frame2849277Data = {
    children: "1",
};

const frame2849278Data = {
    children: "8",
};

const frame2849279Data = {
    children: "15",
};

const frame2849280Data = {
    children: "22",
};

const frame2849281Data = {
    children: "Tu",
};

const frame285745Data = {
    children: "2",
};

const frame2849282Data = {
    children: "9",
};

const frame2849283Data = {
    children: "16",
};

const frame2849284Data = {
    children: "23",
};

const frame288556Data = {
    children: "30",
};

const frame2849285Data = {
    children: "We",
};

const frame285746Data = {
    children: "3",
};

const frame2849286Data = {
    children: "10",
};

const frame2849287Data = {
    children: "17",
};

const frame2849288Data = {
    children: "24",
};

const frame288557Data = {
    children: "1",
};

const frame2849289Data = {
    children: "Th",
};

const frame2849290Data = {
    children: "4",
};

const frame2849291Data = {
    children: "11",
};

const frame2849292Data = {
    children: "25",
};

const frame288558Data = {
    children: "2",
};

const frame2849293Data = {
    children: "Fr",
};

const frame285747Data = {
    children: "5",
};

const frame2849294Data = {
    children: "12",
};

const frame2849295Data = {
    children: "19",
};

const frame2849296Data = {
    children: "26",
};

const frame288559Data = {
    children: "3",
};

const frame2849297Data = {
    children: "Sa",
};

const frame285748Data = {
    children: "6",
};

const frame2849298Data = {
    children: "13",
};

const frame2849299Data = {
    children: "20",
};

const frame2849300Data = {
    children: "27",
};

const frame288560Data = {
    children: "4",
};

const frame285545Data = {
    children: "Su",
};

const frame285546Data = {
    children: "14",
};

const frame285547Data = {
    children: "21",
};

const frame285548Data = {
    children: "28",
};

const group194212Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849276Data,
    frame28492Props: frame2849277Data,
    frame28493Props: frame2849278Data,
    frame28494Props: frame2849279Data,
    frame28495Props: frame2849280Data,
    frame28496Props: frame2849281Data,
    frame2857Props: frame285745Data,
    frame28497Props: frame2849282Data,
    frame28498Props: frame2849283Data,
    frame28499Props: frame2849284Data,
    frame2885Props: frame288556Data,
    frame284910Props: frame2849285Data,
    frame28572Props: frame285746Data,
    frame284911Props: frame2849286Data,
    frame284912Props: frame2849287Data,
    frame284913Props: frame2849288Data,
    frame28852Props: frame288557Data,
    frame284914Props: frame2849289Data,
    frame284915Props: frame2849290Data,
    frame284916Props: frame2849291Data,
    frame284917Props: frame2849292Data,
    frame28853Props: frame288558Data,
    frame284918Props: frame2849293Data,
    frame28573Props: frame285747Data,
    frame284919Props: frame2849294Data,
    frame284920Props: frame2849295Data,
    frame284921Props: frame2849296Data,
    frame28854Props: frame288559Data,
    frame284922Props: frame2849297Data,
    frame28574Props: frame285748Data,
    frame284923Props: frame2849298Data,
    frame284924Props: frame2849299Data,
    frame284925Props: frame2849300Data,
    frame28855Props: frame288560Data,
    frame2855Props: frame285545Data,
    frame28552Props: frame285546Data,
    frame28553Props: frame285547Data,
    frame28554Props: frame285548Data,
};

const frame27918Data = {
    text108: "View calendar",
    group1942Props: group194212Data,
};

const chevronsLeft23Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft24Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891213Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft23Data,
    chevronsLeft2Props: chevronsLeft24Data,
};

const group19438Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27918Data,
    frame28912Props: frame2891213Data,
};

const frame194311Data = {
    frame1945Props: frame194511Data,
    frame19442Props: frame194424Data,
    frame1947Props: frame194712Data,
    frame1948Props: frame194812Data,
    frame2303Props: frame230313Data,
    group1943Props: group19438Data,
};

const close5Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer236Data = {
    closeProps: close5Data,
};

const frame48Data = {
    spanText: "Enterprise title",
    spanText2: "*",
};

const layer248Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline17Data = {
    layer24Props: layer248Data,
};

const frame1964Data = {
    spanText: "Select category",
    spanText2: "*",
    chevronrightoutline1Props: chevronrightoutline17Data,
};

const frame19652Data = {
    children: "Enterprise description",
};

const frame317Data = {
    children: "Drag & Drop files in this area or Click Here to attach",
};

const X9CreateEnterpise_step1Data = {
    createEnterprise: "Create enterprise",
    xcontinue: "Continue",
    step1Of2: "Step 1 of 2",
    frame1980Props: frame19802Data,
    frame19892Props: frame19892Data,
    frame2981Props: frame2981Data,
    frame1983Props: frame1983Data,
    frame19544Props: frame195444Data,
    frame19695Props: frame19695Data,
    frame196952Props: frame196952Data,
    frame29822Props: frame29822Data,
    frame298222Props: frame298222Data,
    frame194311Props: frame194311Data,
    layer23Props: layer236Data,
    frame48Props: frame48Data,
    frame1964Props: frame1964Data,
    frame1965Props: frame19652Data,
    frame317Props: frame317Data,
};

const email13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2214Data = {
    emailProps: email13Data,
};

const emailoutline10Data = {
    layer22Props: layer2214Data,
};

const belloutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline113Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame19549Data = {
    ragrariansI1432723: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    text354: "My dashboard",
    emailoutlineProps: emailoutline10Data,
    belloutlineProps: belloutline13Data,
    personoutline1Props: personoutline113Data,
};

const iconsArrowsLeft5Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn4Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft5Data,
};

const frame2797Data = {
    surname: "Farmer Enterprise",
    text355: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const layer249Data = {
    vector: "/img/vector-622@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline18Data = {
    layer24Props: layer249Data,
};

const frame2963Data = {
    youreFollower: "You’re follower",
    chevronrightoutline1Props: chevronrightoutline18Data,
};

const frame3423Data = {
    joinMessenger: "Join messenger",
    text356: "Would you like to communicate with other this enterpise users?",
    text357: "Join our free messenger!",
    frame2904: "/img/frame-2904-3@2x.png",
    frame3392: "/img/frame-3392@2x.png",
    frame3393: "/img/frame-3393@2x.png",
    text358: "Bessy, Misha and 175 more users already follow us!",
};

const frame3424Data = {
    text359: "Upcoming events in “Farmer Enterprise”",
    openInCalendar: "Open in calendar",
    text360: "New event for everyone",
    phone: "11/24/2020",
    text361: "Free lesson for our users (online)",
    phone2: "11/28/2020",
    text362: "Open lesson in farmer school for everyo…",
    phone3: "12/04/2020",
};

const frame2799Data = {
    frame1969: "/img/frame-1969-18@1x.png",
    frame2797Props: frame2797Data,
    frame2963Props: frame2963Data,
    frame3423Props: frame3423Data,
    frame3424Props: frame3424Data,
};

const layer2410Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline19Data = {
    layer24Props: layer2410Data,
};

const layer2411Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const frame29706Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2412Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline110Data = {
    layer24Props: layer2412Data,
};

const frame3244Data = {
    enterprisePhotos: "Enterprise photos",
    chevronrightoutline1Props: chevronrightoutline110Data,
};

const frame2956Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame29706Data,
    frame3244Props: frame3244Data,
};

const frame2985Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-633@2x.png",
    vector3: "/img/vector-634@2x.png",
    tasks: "Tasks",
};

const frame29842Data = {
    vector: "/img/vector-635@2x.png",
    vector2: "/img/vector-636@2x.png",
    finances: "Finances",
};

const filetextoutline3Data = {
    vector: "/img/vector-20@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame29832Data = {
    materials: "Materials",
    filetextoutlineProps: filetextoutline3Data,
};

const layer2413Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline111Data = {
    layer24Props: layer2413Data,
};

const frame3709Data = {
    spanText: "Land Location:",
    spanText2: " California",
};

const frame37092Data = {
    spanText: "Counry:",
    spanText2: " United States",
};

const frame37093Data = {
    spanText: "Land Location:",
    spanText2: " California",
};

const frame37094Data = {
    spanText: "Number of Acres:",
    spanText2: " 576",
};

const frame37095Data = {
    spanText: "Year:",
    spanText2: " 1999",
};

const frame37096Data = {
    spanText: "Number of Acres:",
    spanText2: " 576",
};

const frame37097Data = {
    spanText: "Crop with number of acres:",
    spanText2: " 576",
};

const frame37098Data = {
    spanText: "States delivery:",
    spanText2: " 5",
};

const frame37099Data = {
    spanText: "Crop with number of acres:",
    spanText2: " 576",
};

const frame2803Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame2804Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline1Data,
};

const eye2Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline1Data = {
    eyeProps: eye2Data,
};

const frame2805Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline1Data,
};

const frame29562Data = {
    text374: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame2803Props: frame2803Data,
    frame2804Props: frame2804Data,
    frame2805Props: frame2805Data,
};

const frame2957Data = {
    children: "No comments yet",
};

const paperplaneoutline1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-657@2x.png",
};

const frame2961Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline1Data,
};

const frame2955Data = {
    frame29562Props: frame29562Data,
    frame2957Props: frame2957Data,
    frame2961Props: frame2961Data,
};

const frame2807Data = {
    children: "Search filters",
};

const layer2414Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline112Data = {
    layer24Props: layer2414Data,
};

const frame2808Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline112Data,
};

const layer2415Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline113Data = {
    layer24Props: layer2415Data,
};

const frame28082Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline113Data,
};

const frame2810Data = {
    children: "Search",
};

const frame28032Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28042Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline12Data,
};

const eye3Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline12Data = {
    eyeProps: eye3Data,
};

const frame28052Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline12Data,
};

const layer2416Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline114Data = {
    layer24Props: layer2416Data,
};

const frame29572Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline114Data,
};

const paperplaneoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-673@2x.png",
};

const frame29612Data = {
    frame2815: "/img/frame-2815@2x.png",
    text382: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline12Data,
};

const frame3479Data = {
    text377: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text378: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text379: "November 1 at 05:55 PM",
    frame28012: "/img/frame-2815@2x.png",
    name2: "George Faith",
    spanText: "@John Billboy,",
    spanText2: " ",
    spanText3: "can you write in direct to help me please?",
    text381: "November 1 at 06:23 PM",
    frame2955Props: frame2955Data,
    frame2807Props: frame2807Data,
    frame2808Props: frame2808Data,
    frame28082Props: frame28082Data,
    frame2810Props: frame2810Data,
    frame2803Props: frame28032Data,
    frame28042Props: frame28042Data,
    frame28052Props: frame28052Data,
    frame29572Props: frame29572Data,
    frame29612Props: frame29612Data,
};

const grid14Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289113Data = {
    gridProps: grid14Data,
};

const frame17Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194512Data = {
    frame2891Props: frame289113Data,
    frameProps: frame17Data,
};

const usermanagement14Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195313Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement14Data,
};

const frame28477Data = {
    frame1953Props: frame195313Data,
};

const frame197410Data = {
    children: "Groups",
};

const book19Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194713Data = {
    text41: "Library",
    bookProps: book19Data,
};

const frame194813Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230314Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849301Data = {
    children: "Mo",
};

const frame2849302Data = {
    children: "1",
};

const frame2849303Data = {
    children: "8",
};

const frame2849304Data = {
    children: "15",
};

const frame2849305Data = {
    children: "22",
};

const frame2849306Data = {
    children: "Tu",
};

const frame285749Data = {
    children: "2",
};

const frame2849307Data = {
    children: "9",
};

const frame2849308Data = {
    children: "16",
};

const frame2849309Data = {
    children: "23",
};

const frame288561Data = {
    children: "30",
};

const frame2849310Data = {
    children: "We",
};

const frame285750Data = {
    children: "3",
};

const frame2849311Data = {
    children: "10",
};

const frame2849312Data = {
    children: "17",
};

const frame2849313Data = {
    children: "24",
};

const frame288562Data = {
    children: "1",
};

const frame2849314Data = {
    children: "Th",
};

const frame2849315Data = {
    children: "4",
};

const frame2849316Data = {
    children: "11",
};

const frame2849317Data = {
    children: "25",
};

const frame288563Data = {
    children: "2",
};

const frame2849318Data = {
    children: "Fr",
};

const frame285751Data = {
    children: "5",
};

const frame2849319Data = {
    children: "12",
};

const frame2849320Data = {
    children: "19",
};

const frame2849321Data = {
    children: "26",
};

const frame288564Data = {
    children: "3",
};

const frame2849322Data = {
    children: "Sa",
};

const frame285752Data = {
    children: "6",
};

const frame2849323Data = {
    children: "13",
};

const frame2849324Data = {
    children: "20",
};

const frame2849325Data = {
    children: "27",
};

const frame288565Data = {
    children: "4",
};

const frame285549Data = {
    children: "Su",
};

const frame285550Data = {
    children: "14",
};

const frame285551Data = {
    children: "21",
};

const frame285552Data = {
    children: "28",
};

const group194213Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849301Data,
    frame28492Props: frame2849302Data,
    frame28493Props: frame2849303Data,
    frame28494Props: frame2849304Data,
    frame28495Props: frame2849305Data,
    frame28496Props: frame2849306Data,
    frame2857Props: frame285749Data,
    frame28497Props: frame2849307Data,
    frame28498Props: frame2849308Data,
    frame28499Props: frame2849309Data,
    frame2885Props: frame288561Data,
    frame284910Props: frame2849310Data,
    frame28572Props: frame285750Data,
    frame284911Props: frame2849311Data,
    frame284912Props: frame2849312Data,
    frame284913Props: frame2849313Data,
    frame28852Props: frame288562Data,
    frame284914Props: frame2849314Data,
    frame284915Props: frame2849315Data,
    frame284916Props: frame2849316Data,
    frame284917Props: frame2849317Data,
    frame28853Props: frame288563Data,
    frame284918Props: frame2849318Data,
    frame28573Props: frame285751Data,
    frame284919Props: frame2849319Data,
    frame284920Props: frame2849320Data,
    frame284921Props: frame2849321Data,
    frame28854Props: frame288564Data,
    frame284922Props: frame2849322Data,
    frame28574Props: frame285752Data,
    frame284923Props: frame2849323Data,
    frame284924Props: frame2849324Data,
    frame284925Props: frame2849325Data,
    frame28855Props: frame288565Data,
    frame2855Props: frame285549Data,
    frame28552Props: frame285550Data,
    frame28553Props: frame285551Data,
    frame28554Props: frame285552Data,
};

const frame27919Data = {
    text108: "View calendar",
    group1942Props: group194213Data,
};

const chevronsLeft25Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft26Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891214Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft25Data,
    chevronsLeft2Props: chevronsLeft26Data,
};

const group19439Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame27919Data,
    frame28912Props: frame2891214Data,
};

const frame194312Data = {
    text385: "Members",
    text386: "Enterprises",
    frame1945Props: frame194512Data,
    frame2847Props: frame28477Data,
    frame1974Props: frame197410Data,
    frame1947Props: frame194713Data,
    frame1948Props: frame194813Data,
    frame2303Props: frame230314Data,
    group1943Props: group19439Data,
};

const X92EnterpriseuserViewData = {
    text363: "Additional information",
    text364: "Additional information",
    vector: "/img/vector-637@2x.png",
    vector2: "/img/vector-638@2x.png",
    vector3: "/img/vector-639@2x.png",
    resources: "Resources",
    text365: "Enterprises products",
    vector4: "/img/vector-646@2x.png",
    vector5: "/img/vector-647@2x.png",
    editInformation: "Edit information",
    frame19549Props: frame19549Data,
    backbtn4Props: backbtn4Data,
    frame2799Props: frame2799Data,
    chevronrightoutline1Props: chevronrightoutline19Data,
    layer24Props: layer2411Data,
    frame2956Props: frame2956Data,
    frame2985Props: frame2985Data,
    frame29842Props: frame29842Data,
    frame29832Props: frame29832Data,
    chevronrightoutline12Props: chevronrightoutline111Data,
    frame3709Props: frame3709Data,
    frame37092Props: frame37092Data,
    frame37093Props: frame37093Data,
    frame37094Props: frame37094Data,
    frame37095Props: frame37095Data,
    frame37096Props: frame37096Data,
    frame37097Props: frame37097Data,
    frame37098Props: frame37098Data,
    frame37099Props: frame37099Data,
    frame3479Props: frame3479Data,
    frame194312Props: frame194312Data,
};

const email14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2215Data = {
    emailProps: email14Data,
};

const emailoutline11Data = {
    layer22Props: layer2215Data,
};

const belloutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline114Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195410Data = {
    ragrariansI209621: "Mikhail Ugryumov",
    frame1951: "/img/frame-1951@2x.png",
    text404: "My dashboard",
    emailoutlineProps: emailoutline11Data,
    belloutlineProps: belloutline14Data,
    personoutline1Props: personoutline114Data,
};

const frame942Data = {
    firstName: "First name",
    mikhail: "Mikhail",
};

const frame28192Data = {
    lastName: "Last Name",
    ugryumov: "Ugryumov",
};

const frame28202Data = {
    dateOfBirhday: "Date of birhday",
    phone: "08/23/1995",
};

const frame28233Data = {
    email: "Email",
    mikhailGmailPro: "mikhail@gmail.pro",
};

const frame28243Data = {
    phone: "Phone",
    text158: "+1 (233) 369-50-15",
};

const frame282322Data = {
    lastLogin: "Last login",
    phone: "09/22/2020",
};

const frame282422Data = {
    numbersOfVisits: "Numbers of visits",
    number: "153",
};

const frame49Data = {
    children: "Write message",
};

const iconsArrowsLeft6Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn5Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft6Data,
};

const grid15Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289114Data = {
    gridProps: grid15Data,
};

const frame18Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194513Data = {
    frame2891Props: frame289114Data,
    frameProps: frame18Data,
};

const usermanagement15Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195314Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement15Data,
};

const frame19767Data = {
    children: "Enterprises",
};

const book20Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194714Data = {
    text41: "Library",
    bookProps: book20Data,
};

const frame194814Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230315Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849326Data = {
    children: "Mo",
};

const frame2849327Data = {
    children: "1",
};

const frame2849328Data = {
    children: "8",
};

const frame2849329Data = {
    children: "15",
};

const frame2849330Data = {
    children: "22",
};

const frame2849331Data = {
    children: "Tu",
};

const frame285753Data = {
    children: "2",
};

const frame2849332Data = {
    children: "9",
};

const frame2849333Data = {
    children: "16",
};

const frame2849334Data = {
    children: "23",
};

const frame288566Data = {
    children: "30",
};

const frame2849335Data = {
    children: "We",
};

const frame285754Data = {
    children: "3",
};

const frame2849336Data = {
    children: "10",
};

const frame2849337Data = {
    children: "17",
};

const frame2849338Data = {
    children: "24",
};

const frame288567Data = {
    children: "1",
};

const frame2849339Data = {
    children: "Th",
};

const frame2849340Data = {
    children: "4",
};

const frame2849341Data = {
    children: "11",
};

const frame2849342Data = {
    children: "25",
};

const frame288568Data = {
    children: "2",
};

const frame2849343Data = {
    children: "Fr",
};

const frame285755Data = {
    children: "5",
};

const frame2849344Data = {
    children: "12",
};

const frame2849345Data = {
    children: "19",
};

const frame2849346Data = {
    children: "26",
};

const frame288569Data = {
    children: "3",
};

const frame2849347Data = {
    children: "Sa",
};

const frame285756Data = {
    children: "6",
};

const frame2849348Data = {
    children: "13",
};

const frame2849349Data = {
    children: "20",
};

const frame2849350Data = {
    children: "27",
};

const frame288570Data = {
    children: "4",
};

const frame285553Data = {
    children: "Su",
};

const frame285554Data = {
    children: "14",
};

const frame285555Data = {
    children: "21",
};

const frame285556Data = {
    children: "28",
};

const group194214Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849326Data,
    frame28492Props: frame2849327Data,
    frame28493Props: frame2849328Data,
    frame28494Props: frame2849329Data,
    frame28495Props: frame2849330Data,
    frame28496Props: frame2849331Data,
    frame2857Props: frame285753Data,
    frame28497Props: frame2849332Data,
    frame28498Props: frame2849333Data,
    frame28499Props: frame2849334Data,
    frame2885Props: frame288566Data,
    frame284910Props: frame2849335Data,
    frame28572Props: frame285754Data,
    frame284911Props: frame2849336Data,
    frame284912Props: frame2849337Data,
    frame284913Props: frame2849338Data,
    frame28852Props: frame288567Data,
    frame284914Props: frame2849339Data,
    frame284915Props: frame2849340Data,
    frame284916Props: frame2849341Data,
    frame284917Props: frame2849342Data,
    frame28853Props: frame288568Data,
    frame284918Props: frame2849343Data,
    frame28573Props: frame285755Data,
    frame284919Props: frame2849344Data,
    frame284920Props: frame2849345Data,
    frame284921Props: frame2849346Data,
    frame28854Props: frame288569Data,
    frame284922Props: frame2849347Data,
    frame28574Props: frame285756Data,
    frame284923Props: frame2849348Data,
    frame284924Props: frame2849349Data,
    frame284925Props: frame2849350Data,
    frame28855Props: frame288570Data,
    frame2855Props: frame285553Data,
    frame28552Props: frame285554Data,
    frame28553Props: frame285555Data,
    frame28554Props: frame285556Data,
};

const frame279110Data = {
    text108: "View calendar",
    group1942Props: group194214Data,
};

const chevronsLeft27Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft28Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891215Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft27Data,
    chevronsLeft2Props: chevronsLeft28Data,
};

const group194310Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279110Data,
    frame28912Props: frame2891215Data,
};

const frame194313Data = {
    text409: "Groups",
    text410: "Members",
    frame1945Props: frame194513Data,
    frame1953Props: frame195314Data,
    frame1976Props: frame19767Data,
    frame1947Props: frame194714Data,
    frame1948Props: frame194814Data,
    frame2303Props: frame230315Data,
    group1943Props: group194310Data,
};

const X81CommunityMembersData = {
    frame2818: "/img/frame-2818-2@2x.png",
    text405: "Personal infromation",
    contactInformation: "Contact information",
    text407: "Additional information",
    follow: "Follow",
    frame195410Props: frame195410Data,
    frame94Props: frame942Data,
    frame2819Props: frame28192Data,
    frame2820Props: frame28202Data,
    frame2823Props: frame28233Data,
    frame2824Props: frame28243Data,
    frame28232Props: frame282322Data,
    frame28242Props: frame282422Data,
    frame49Props: frame49Data,
    backbtn5Props: backbtn5Data,
    frame194313Props: frame194313Data,
};

const email15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2216Data = {
    emailProps: email15Data,
};

const emailoutline12Data = {
    layer22Props: layer2216Data,
};

const belloutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-277@2x.png",
};

const personoutline115Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195411Data = {
    ragrariansI128537: "Ragrarians members",
    frame1951: "/img/frame-1951@2x.png",
    text429: "My dashboard",
    emailoutlineProps: emailoutline12Data,
    belloutlineProps: belloutline15Data,
    personoutline1Props: personoutline115Data,
};

const frame2927Data = {
    name: "Dianne Russell",
    text430: "Follow 8 communities",
};

const personaddoutline2Data = {
    vector: "/img/vector-728@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame2928Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline2Data,
};

const frame29272Data = {
    name: "Jacob Jones",
    text430: "Follow 8 communities",
};

const personaddoutline22Data = {
    vector: "/img/vector-732@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29282Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline22Data,
};

const personaddoutline23Data = {
    vector: "/img/vector-736@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame2940Data = {
    frame2926: "/img/frame-2926-5@2x.png",
    name: "Joe Jordinson",
    address: "8 communities member",
    follow: "Follow",
    personaddoutline2Props: personaddoutline23Data,
};

const frame29273Data = {
    name: "Kristin Watson",
    text430: "Follow 8 communities",
};

const frame292822Data = {
    vector: "/img/vector-740@2x.png",
    vector2: "/img/vector-741@2x.png",
    vector3: "/img/vector-49@2x.png",
    vector4: "/img/vector-50@2x.png",
    followed: "Followed",
};

const frame29274Data = {
    name: "Esther Howard",
    text430: "Follow 8 communities",
};

const personaddoutline24Data = {
    vector: "/img/vector-744@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29283Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline24Data,
};

const personaddoutline25Data = {
    vector: "/img/vector-748@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29402Data = {
    frame2926: "/img/frame-2926-8@2x.png",
    name: "Joe Jordinson",
    address: "8 communities member",
    follow: "Follow",
    personaddoutline2Props: personaddoutline25Data,
};

const frame29275Data = {
    name: "Leslie Alexander",
    text430: "Follow 8 communities",
};

const frame292823Data = {
    vector: "/img/vector-752@2x.png",
    vector2: "/img/vector-741@2x.png",
    vector3: "/img/vector-49@2x.png",
    vector4: "/img/vector-50@2x.png",
    followed: "Followed",
};

const frame29276Data = {
    name: "Darrell Steward",
    text430: "Follow 8 communities",
};

const frame292824Data = {
    vector: "/img/vector-756@2x.png",
    vector2: "/img/vector-741@2x.png",
    vector3: "/img/vector-49@2x.png",
    vector4: "/img/vector-50@2x.png",
    followed: "Followed",
};

const personaddoutline26Data = {
    vector: "/img/vector-760@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29403Data = {
    frame2926: "/img/frame-2926-11@2x.png",
    name: "Joe Jordinson",
    address: "8 communities member",
    follow: "Follow",
    personaddoutline2Props: personaddoutline26Data,
};

const frame29277Data = {
    name: "Ralph Edwards",
    text430: "Follow 8 communities",
};

const personaddoutline27Data = {
    vector: "/img/vector-764@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29284Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline27Data,
};

const frame29278Data = {
    name: "Cody Fisher",
    text430: "Follow 8 communities",
};

const personaddoutline28Data = {
    vector: "/img/vector-768@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29285Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline28Data,
};

const personaddoutline29Data = {
    vector: "/img/vector-772@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29404Data = {
    frame2926: "/img/frame-2818-2@2x.png",
    name: "Joe Jordinson",
    address: "8 communities member",
    follow: "Follow",
    personaddoutline2Props: personaddoutline29Data,
};

const frame29279Data = {
    name: "Guy Hawkins",
    text430: "Follow 8 communities",
};

const personaddoutline210Data = {
    vector: "/img/vector-776@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29286Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline210Data,
};

const frame292710Data = {
    name: "Marvin McKinney",
    text430: "Follow 8 communities",
};

const personaddoutline211Data = {
    vector: "/img/vector-740@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29287Data = {
    follow: "Follow",
    personaddoutline2Props: personaddoutline211Data,
};

const personaddoutline212Data = {
    vector: "/img/vector-784@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const frame29405Data = {
    frame2926: "/img/frame-2926-17@2x.png",
    name: "Joe Jordinson",
    address: "8 communities member",
    follow: "Follow",
    personaddoutline2Props: personaddoutline212Data,
};

const grid16Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289115Data = {
    gridProps: grid16Data,
};

const frame19Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-327@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194514Data = {
    frame2891Props: frame289115Data,
    frameProps: frame19Data,
};

const usermanagement16Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195315Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement16Data,
};

const frame19755Data = {
    children: "Members",
};

const book21Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194715Data = {
    text41: "Library",
    bookProps: book21Data,
};

const frame194815Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230316Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849351Data = {
    children: "Mo",
};

const frame2849352Data = {
    children: "1",
};

const frame2849353Data = {
    children: "8",
};

const frame2849354Data = {
    children: "15",
};

const frame2849355Data = {
    children: "22",
};

const frame2849356Data = {
    children: "Tu",
};

const frame285757Data = {
    children: "2",
};

const frame2849357Data = {
    children: "9",
};

const frame2849358Data = {
    children: "16",
};

const frame2849359Data = {
    children: "23",
};

const frame288571Data = {
    children: "30",
};

const frame2849360Data = {
    children: "We",
};

const frame285758Data = {
    children: "3",
};

const frame2849361Data = {
    children: "10",
};

const frame2849362Data = {
    children: "17",
};

const frame2849363Data = {
    children: "24",
};

const frame288572Data = {
    children: "1",
};

const frame2849364Data = {
    children: "Th",
};

const frame2849365Data = {
    children: "4",
};

const frame2849366Data = {
    children: "11",
};

const frame2849367Data = {
    children: "25",
};

const frame288573Data = {
    children: "2",
};

const frame2849368Data = {
    children: "Fr",
};

const frame285759Data = {
    children: "5",
};

const frame2849369Data = {
    children: "12",
};

const frame2849370Data = {
    children: "19",
};

const frame2849371Data = {
    children: "26",
};

const frame288574Data = {
    children: "3",
};

const frame2849372Data = {
    children: "Sa",
};

const frame285760Data = {
    children: "6",
};

const frame2849373Data = {
    children: "13",
};

const frame2849374Data = {
    children: "20",
};

const frame2849375Data = {
    children: "27",
};

const frame288575Data = {
    children: "4",
};

const frame285557Data = {
    children: "Su",
};

const frame285558Data = {
    children: "14",
};

const frame285559Data = {
    children: "21",
};

const frame285560Data = {
    children: "28",
};

const group194215Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849351Data,
    frame28492Props: frame2849352Data,
    frame28493Props: frame2849353Data,
    frame28494Props: frame2849354Data,
    frame28495Props: frame2849355Data,
    frame28496Props: frame2849356Data,
    frame2857Props: frame285757Data,
    frame28497Props: frame2849357Data,
    frame28498Props: frame2849358Data,
    frame28499Props: frame2849359Data,
    frame2885Props: frame288571Data,
    frame284910Props: frame2849360Data,
    frame28572Props: frame285758Data,
    frame284911Props: frame2849361Data,
    frame284912Props: frame2849362Data,
    frame284913Props: frame2849363Data,
    frame28852Props: frame288572Data,
    frame284914Props: frame2849364Data,
    frame284915Props: frame2849365Data,
    frame284916Props: frame2849366Data,
    frame284917Props: frame2849367Data,
    frame28853Props: frame288573Data,
    frame284918Props: frame2849368Data,
    frame28573Props: frame285759Data,
    frame284919Props: frame2849369Data,
    frame284920Props: frame2849370Data,
    frame284921Props: frame2849371Data,
    frame28854Props: frame288574Data,
    frame284922Props: frame2849372Data,
    frame28574Props: frame285760Data,
    frame284923Props: frame2849373Data,
    frame284924Props: frame2849374Data,
    frame284925Props: frame2849375Data,
    frame28855Props: frame288575Data,
    frame2855Props: frame285557Data,
    frame28552Props: frame285558Data,
    frame28553Props: frame285559Data,
    frame28554Props: frame285560Data,
};

const chevronsLeft29Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft30Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891216Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft29Data,
    chevronsLeft2Props: chevronsLeft30Data,
};

const frame194314Data = {
    text441: "Groups",
    text443: "Enterprises",
    text447: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194514Data,
    frame1953Props: frame195315Data,
    frame1975Props: frame19755Data,
    frame1947Props: frame194715Data,
    frame1948Props: frame194815Data,
    frame2303Props: frame230316Data,
    group1942Props: group194215Data,
    frame28912Props: frame2891216Data,
};

const searchoutline17Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame29123Data = {
    search: "Search…",
    searchoutline1Props: searchoutline17Data,
};

const X81CommunityMembers2Data = {
    frame2926: "/img/frame-2926-3@2x.png",
    frame29262: "/img/frame-2926-4@2x.png",
    frame29263: "/img/frame-2926-6@2x.png",
    frame29264: "/img/frame-2926-7@2x.png",
    frame29265: "/img/frame-2926-9@2x.png",
    frame29266: "/img/frame-2926-10@2x.png",
    frame29267: "/img/frame-2926-12@2x.png",
    frame29268: "/img/frame-2926-13@2x.png",
    frame29269: "/img/frame-2926-15@2x.png",
    frame292610: "/img/frame-2926-6@2x.png",
    frame195411Props: frame195411Data,
    frame2927Props: frame2927Data,
    frame2928Props: frame2928Data,
    frame29272Props: frame29272Data,
    frame29282Props: frame292822Data,
    frame2940Props: frame2940Data,
    frame29273Props: frame29273Data,
    frame29274Props: frame29274Data,
    frame29283Props: frame29283Data,
    frame29402Props: frame29402Data,
    frame29275Props: frame29275Data,
    frame292822Props: frame292823Data,
    frame29276Props: frame29276Data,
    frame292823Props: frame292824Data,
    frame29403Props: frame29403Data,
    frame29277Props: frame29277Data,
    frame29284Props: frame29284Data,
    frame29278Props: frame29278Data,
    frame29285Props: frame29285Data,
    frame29404Props: frame29404Data,
    frame29279Props: frame29279Data,
    frame29286Props: frame29286Data,
    frame292710Props: frame292710Data,
    frame29287Props: frame29287Data,
    frame29405Props: frame29405Data,
    frame194314Props: frame194314Data,
    frame2912Props: frame29123Data,
};

const email16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2217Data = {
    emailProps: email16Data,
};

const emailoutline13Data = {
    layer22Props: layer2217Data,
};

const belloutline16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline116Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195412Data = {
    ragrariansI384293: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    text449: "My dashboard",
    emailoutlineProps: emailoutline13Data,
    belloutlineProps: belloutline16Data,
    personoutline1Props: personoutline116Data,
};

const iconsArrowsLeft7Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn6Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft7Data,
};

const layer2417Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-818@2x.png",
};

const chevronrightoutline115Data = {
    layer24Props: layer2417Data,
};

const frame29852Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-820@2x.png",
    vector3: "/img/vector-821@2x.png",
    tasks: "Tasks",
};

const frame298422Data = {
    vector: "/img/vector-635@2x.png",
    vector2: "/img/vector-636@2x.png",
    finances: "Finances",
};

const frame27972Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-825@2x.png",
    vector3: "/img/vector-826@2x.png",
    reports: "Reports",
};

const filetextoutline4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame298322Data = {
    materials: "Materials",
    filetextoutlineProps: filetextoutline4Data,
};

const frame3003Data = {
    frame29832Props: frame298322Data,
};

const frame27973Data = {
    surname: "Farmer Enterprise",
    text355: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const layer2418Data = {
    vector: "/img/vector-622@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline116Data = {
    layer24Props: layer2418Data,
};

const frame29632Data = {
    youreFollower: "You’re follower",
    chevronrightoutline1Props: chevronrightoutline116Data,
};

const frame34232Data = {
    joinMessenger: "Join messenger",
    text356: "Would you like to communicate with other this enterpise users?",
    text357: "Join our free messenger!",
    frame2904: "/img/frame-2904-3@2x.png",
    frame3392: "/img/frame-3392@2x.png",
    frame3393: "/img/frame-3393@2x.png",
    text358: "Bessy, Misha and 175 more users already follow us!",
};

const frame34242Data = {
    text359: "Upcoming events in “Farmer Enterprise”",
    openInCalendar: "Open in calendar",
    text360: "New event for everyone",
    phone: "11/24/2020",
    text361: "Free lesson for our users (online)",
    phone2: "11/28/2020",
    text362: "Open lesson in farmer school for everyo…",
    phone3: "12/04/2020",
};

const frame2080Data = {
    children: "Write a message",
};

const frame20802Data = {
    children: "Unfollow",
};

const frame2079Data = {
    text466: "Invite applicant",
    text468: "Report enterprise",
    frame2080Props: frame2080Data,
    frame20802Props: frame20802Data,
};

const frame27992Data = {
    frame1969: "/img/frame-1969-18@1x.png",
    frame2797Props: frame27973Data,
    frame2963Props: frame29632Data,
    frame3423Props: frame34232Data,
    frame3424Props: frame34242Data,
    frame2079Props: frame2079Data,
};

const frame29707Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2419Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline117Data = {
    layer24Props: layer2419Data,
};

const frame32442Data = {
    enterprisePhotos: "Enterprise photos",
    chevronrightoutline1Props: chevronrightoutline117Data,
};

const frame29563Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876-1@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame29707Data,
    frame3244Props: frame32442Data,
};

const frame28033Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28043Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline13Data,
};

const eye4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline13Data = {
    eyeProps: eye4Data,
};

const frame28053Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline13Data,
};

const frame295622Data = {
    text374: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame2803Props: frame28033Data,
    frame2804Props: frame28043Data,
    frame2805Props: frame28053Data,
};

const frame29573Data = {
    children: "No comments yet",
};

const paperplaneoutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-657@2x.png",
};

const frame29613Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline13Data,
};

const frame29552Data = {
    frame29562Props: frame295622Data,
    frame2957Props: frame29573Data,
    frame2961Props: frame29613Data,
};

const frame28072Data = {
    children: "Search filters",
};

const layer2420Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline118Data = {
    layer24Props: layer2420Data,
};

const frame28083Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline118Data,
};

const layer2421Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline119Data = {
    layer24Props: layer2421Data,
};

const frame28084Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline119Data,
};

const frame28102Data = {
    children: "Search",
};

const frame28034Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280422Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline14Data,
};

const eye5Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline14Data = {
    eyeProps: eye5Data,
};

const frame280522Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline14Data,
};

const layer2422Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline120Data = {
    layer24Props: layer2422Data,
};

const frame295722Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline120Data,
};

const paperplaneoutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-673@2x.png",
};

const frame296122Data = {
    frame2815: "/img/frame-2815@2x.png",
    text382: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline14Data,
};

const frame34792Data = {
    text377: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text378: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text379: "November 1 at 05:55 PM",
    frame28012: "/img/frame-2815@2x.png",
    name2: "George Faith",
    spanText: "@John Billboy,",
    spanText2: " ",
    spanText3: "can you write in direct to help me please?",
    text381: "November 1 at 06:23 PM",
    frame2955Props: frame29552Data,
    frame2807Props: frame28072Data,
    frame2808Props: frame28083Data,
    frame28082Props: frame28084Data,
    frame2810Props: frame28102Data,
    frame2803Props: frame28034Data,
    frame28042Props: frame280422Data,
    frame28052Props: frame280522Data,
    frame29572Props: frame295722Data,
    frame29612Props: frame296122Data,
};

const grid17Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289116Data = {
    gridProps: grid17Data,
};

const frame20Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-798@2x.png",
};

const frame194515Data = {
    frame2891Props: frame289116Data,
    frameProps: frame20Data,
};

const usermanagement17Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195316Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement17Data,
};

const frame197526Data = {
    children: "Members",
};

const book22Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194716Data = {
    text41: "Library",
    bookProps: book22Data,
};

const frame194816Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame2849376Data = {
    children: "Mo",
};

const frame2849377Data = {
    children: "1",
};

const frame2849378Data = {
    children: "8",
};

const frame2849379Data = {
    children: "15",
};

const frame2849380Data = {
    children: "22",
};

const frame2849381Data = {
    children: "Tu",
};

const frame285761Data = {
    children: "2",
};

const frame2849382Data = {
    children: "9",
};

const frame2849383Data = {
    children: "16",
};

const frame2849384Data = {
    children: "23",
};

const frame288576Data = {
    children: "30",
};

const frame2849385Data = {
    children: "We",
};

const frame285762Data = {
    children: "3",
};

const frame2849386Data = {
    children: "10",
};

const frame2849387Data = {
    children: "17",
};

const frame2849388Data = {
    children: "24",
};

const frame288577Data = {
    children: "1",
};

const frame2849389Data = {
    children: "Th",
};

const frame2849390Data = {
    children: "4",
};

const frame2849391Data = {
    children: "11",
};

const frame2849392Data = {
    children: "25",
};

const frame288578Data = {
    children: "2",
};

const frame2849393Data = {
    children: "Fr",
};

const frame285763Data = {
    children: "5",
};

const frame2849394Data = {
    children: "12",
};

const frame2849395Data = {
    children: "19",
};

const frame2849396Data = {
    children: "26",
};

const frame288579Data = {
    children: "3",
};

const frame2849397Data = {
    children: "Sa",
};

const frame285764Data = {
    children: "6",
};

const frame2849398Data = {
    children: "13",
};

const frame2849399Data = {
    children: "20",
};

const frame2849400Data = {
    children: "27",
};

const frame288580Data = {
    children: "4",
};

const frame285561Data = {
    children: "Su",
};

const frame285562Data = {
    children: "14",
};

const frame285563Data = {
    children: "21",
};

const frame285564Data = {
    children: "28",
};

const group194216Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849376Data,
    frame28492Props: frame2849377Data,
    frame28493Props: frame2849378Data,
    frame28494Props: frame2849379Data,
    frame28495Props: frame2849380Data,
    frame28496Props: frame2849381Data,
    frame2857Props: frame285761Data,
    frame28497Props: frame2849382Data,
    frame28498Props: frame2849383Data,
    frame28499Props: frame2849384Data,
    frame2885Props: frame288576Data,
    frame284910Props: frame2849385Data,
    frame28572Props: frame285762Data,
    frame284911Props: frame2849386Data,
    frame284912Props: frame2849387Data,
    frame284913Props: frame2849388Data,
    frame28852Props: frame288577Data,
    frame284914Props: frame2849389Data,
    frame284915Props: frame2849390Data,
    frame284916Props: frame2849391Data,
    frame284917Props: frame2849392Data,
    frame28853Props: frame288578Data,
    frame284918Props: frame2849393Data,
    frame28573Props: frame285763Data,
    frame284919Props: frame2849394Data,
    frame284920Props: frame2849395Data,
    frame284921Props: frame2849396Data,
    frame28854Props: frame288579Data,
    frame284922Props: frame2849397Data,
    frame28574Props: frame285764Data,
    frame284923Props: frame2849398Data,
    frame284924Props: frame2849399Data,
    frame284925Props: frame2849400Data,
    frame28855Props: frame288580Data,
    frame2855Props: frame285561Data,
    frame28552Props: frame285562Data,
    frame28553Props: frame285563Data,
    frame28554Props: frame285564Data,
};

const frame279111Data = {
    text108: "View calendar",
    group1942Props: group194216Data,
};

const frame230317Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849401Data = {
    children: "Mo",
};

const frame2849402Data = {
    children: "1",
};

const frame2849403Data = {
    children: "8",
};

const frame2849404Data = {
    children: "15",
};

const frame2849405Data = {
    children: "22",
};

const frame2849406Data = {
    children: "Tu",
};

const frame285765Data = {
    children: "2",
};

const frame2849407Data = {
    children: "9",
};

const frame2849408Data = {
    children: "16",
};

const frame2849409Data = {
    children: "23",
};

const frame288581Data = {
    children: "30",
};

const frame2849410Data = {
    children: "We",
};

const frame285766Data = {
    children: "3",
};

const frame2849411Data = {
    children: "10",
};

const frame2849412Data = {
    children: "17",
};

const frame2849413Data = {
    children: "24",
};

const frame288582Data = {
    children: "1",
};

const frame2849414Data = {
    children: "Th",
};

const frame2849415Data = {
    children: "4",
};

const frame2849416Data = {
    children: "11",
};

const frame2849417Data = {
    children: "25",
};

const frame288583Data = {
    children: "2",
};

const frame2849418Data = {
    children: "Fr",
};

const frame285767Data = {
    children: "5",
};

const frame2849419Data = {
    children: "12",
};

const frame2849420Data = {
    children: "19",
};

const frame2849421Data = {
    children: "26",
};

const frame288584Data = {
    children: "3",
};

const frame2849422Data = {
    children: "Sa",
};

const frame285768Data = {
    children: "6",
};

const frame2849423Data = {
    children: "13",
};

const frame2849424Data = {
    children: "20",
};

const frame2849425Data = {
    children: "27",
};

const frame288585Data = {
    children: "4",
};

const frame285565Data = {
    children: "Su",
};

const frame285566Data = {
    children: "14",
};

const frame285567Data = {
    children: "21",
};

const frame285568Data = {
    children: "28",
};

const group194217Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849401Data,
    frame28492Props: frame2849402Data,
    frame28493Props: frame2849403Data,
    frame28494Props: frame2849404Data,
    frame28495Props: frame2849405Data,
    frame28496Props: frame2849406Data,
    frame2857Props: frame285765Data,
    frame28497Props: frame2849407Data,
    frame28498Props: frame2849408Data,
    frame28499Props: frame2849409Data,
    frame2885Props: frame288581Data,
    frame284910Props: frame2849410Data,
    frame28572Props: frame285766Data,
    frame284911Props: frame2849411Data,
    frame284912Props: frame2849412Data,
    frame284913Props: frame2849413Data,
    frame28852Props: frame288582Data,
    frame284914Props: frame2849414Data,
    frame284915Props: frame2849415Data,
    frame284916Props: frame2849416Data,
    frame284917Props: frame2849417Data,
    frame28853Props: frame288583Data,
    frame284918Props: frame2849418Data,
    frame28573Props: frame285767Data,
    frame284919Props: frame2849419Data,
    frame284920Props: frame2849420Data,
    frame284921Props: frame2849421Data,
    frame28854Props: frame288584Data,
    frame284922Props: frame2849422Data,
    frame28574Props: frame285768Data,
    frame284923Props: frame2849423Data,
    frame284924Props: frame2849424Data,
    frame284925Props: frame2849425Data,
    frame28855Props: frame288585Data,
    frame2855Props: frame285565Data,
    frame28552Props: frame285566Data,
    frame28553Props: frame285567Data,
    frame28554Props: frame285568Data,
};

const chevronsLeft31Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft32Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891217Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft31Data,
    chevronsLeft2Props: chevronsLeft32Data,
};

const frame194315Data = {
    text489: "Groups",
    text491: "Enterprises",
    text507: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194515Data,
    frame1953Props: frame195316Data,
    frame19752Props: frame197526Data,
    frame1947Props: frame194716Data,
    frame1948Props: frame194816Data,
    frame2791Props: frame279111Data,
    frame2303Props: frame230317Data,
    group1942Props: group194217Data,
    frame28912Props: frame2891217Data,
};

const X94EnterpriseuserViewTasksData = {
    showAllTasks: "Show all tasks",
    text450: "Additional information",
    spanText: "Make a new AD system and try it in this month ",
    spanText2: "(deadline 12/01/2020)",
    text452: "Try to invite at least 50 new users",
    spanText3: "Make new events for beginners and try to involve user into ",
    spanText4: "(deadline was 11/25/2020) ",
    frame195412Props: frame195412Data,
    backbtn6Props: backbtn6Data,
    chevronrightoutline1Props: chevronrightoutline115Data,
    frame2985Props: frame29852Data,
    frame29842Props: frame298422Data,
    frame27972Props: frame27972Data,
    frame3003Props: frame3003Data,
    frame27992Props: frame27992Data,
    frame29563Props: frame29563Data,
    frame3479Props: frame34792Data,
    frame194315Props: frame194315Data,
};

const searchoutline18Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame19803Data = {
    searchEnterprises: "Search enterprises",
    searchoutline1Props: searchoutline18Data,
};

const funneloutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const frame28174Data = {
    filterByCategory: "Filter by category",
    funneloutline1Props: funneloutline15Data,
};

const layer2423Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-287@2x.png",
};

const chevronrightoutline121Data = {
    layer24Props: layer2423Data,
};

const layer2424Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline122Data = {
    layer24Props: layer2424Data,
};

const frame198922Data = {
    frame2817Props: frame28174Data,
    chevronrightoutline1Props: chevronrightoutline121Data,
    chevronrightoutline12Props: chevronrightoutline122Data,
};

const frame29812Data = {
    allEnterprises: "All Enterprises",
    yourEnterprises: "Your Enterprises",
};

const frame19832Data = {
    children: "Create Enterprise",
};

const email17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2218Data = {
    emailProps: email17Data,
};

const emailoutline14Data = {
    layer22Props: layer2218Data,
};

const belloutline17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline117Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28486Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline117Data,
};

const frame195445Data = {
    ragrariansI520753: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline14Data,
    belloutlineProps: belloutline17Data,
    frame2848Props: frame28486Data,
};

const frame32399Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27927Data = {
    children: "Follow",
};

const frame27965Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27927Data,
};

const frame196953Data = {
    frame1969: "/img/frame-1969-11@1x.png",
    frame3239Props: frame32399Data,
    frame2796Props: frame27965Data,
};

const frame323910Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279626Data = {
    children: "Unfollow",
};

const frame298223Data = {
    frame2982: "/img/frame-1969-11@1x.png",
    frame3239Props: frame323910Data,
    frame27962Props: frame279626Data,
};

const frame323911Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279627Data = {
    children: "Unfollow",
};

const frame298224Data = {
    frame2982: "/img/frame-1969-11@1x.png",
    frame3239Props: frame323911Data,
    frame27962Props: frame279627Data,
};

const grid18Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289117Data = {
    gridProps: grid18Data,
};

const frame21Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194516Data = {
    frame2891Props: frame289117Data,
    frameProps: frame21Data,
};

const usermanagement18Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195317Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement18Data,
};

const frame28478Data = {
    frame1953Props: frame195317Data,
};

const frame197411Data = {
    children: "Groups",
};

const frame197527Data = {
    children: "Members",
};

const frame197412Data = {
    children: "Enterprises",
};

const frame194425Data = {
    frame2847Props: frame28478Data,
    frame1974Props: frame197411Data,
    frame19752Props: frame197527Data,
    frame19742Props: frame197412Data,
};

const book23Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194717Data = {
    text41: "Library",
    bookProps: book23Data,
};

const frame194817Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230318Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849426Data = {
    children: "Mo",
};

const frame2849427Data = {
    children: "1",
};

const frame2849428Data = {
    children: "8",
};

const frame2849429Data = {
    children: "15",
};

const frame2849430Data = {
    children: "22",
};

const frame2849431Data = {
    children: "Tu",
};

const frame285769Data = {
    children: "2",
};

const frame2849432Data = {
    children: "9",
};

const frame2849433Data = {
    children: "16",
};

const frame2849434Data = {
    children: "23",
};

const frame288586Data = {
    children: "30",
};

const frame2849435Data = {
    children: "We",
};

const frame285770Data = {
    children: "3",
};

const frame2849436Data = {
    children: "10",
};

const frame2849437Data = {
    children: "17",
};

const frame2849438Data = {
    children: "24",
};

const frame288587Data = {
    children: "1",
};

const frame2849439Data = {
    children: "Th",
};

const frame2849440Data = {
    children: "4",
};

const frame2849441Data = {
    children: "11",
};

const frame2849442Data = {
    children: "25",
};

const frame288588Data = {
    children: "2",
};

const frame2849443Data = {
    children: "Fr",
};

const frame285771Data = {
    children: "5",
};

const frame2849444Data = {
    children: "12",
};

const frame2849445Data = {
    children: "19",
};

const frame2849446Data = {
    children: "26",
};

const frame288589Data = {
    children: "3",
};

const frame2849447Data = {
    children: "Sa",
};

const frame285772Data = {
    children: "6",
};

const frame2849448Data = {
    children: "13",
};

const frame2849449Data = {
    children: "20",
};

const frame2849450Data = {
    children: "27",
};

const frame288590Data = {
    children: "4",
};

const frame285569Data = {
    children: "Su",
};

const frame285570Data = {
    children: "14",
};

const frame285571Data = {
    children: "21",
};

const frame285572Data = {
    children: "28",
};

const group194218Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849426Data,
    frame28492Props: frame2849427Data,
    frame28493Props: frame2849428Data,
    frame28494Props: frame2849429Data,
    frame28495Props: frame2849430Data,
    frame28496Props: frame2849431Data,
    frame2857Props: frame285769Data,
    frame28497Props: frame2849432Data,
    frame28498Props: frame2849433Data,
    frame28499Props: frame2849434Data,
    frame2885Props: frame288586Data,
    frame284910Props: frame2849435Data,
    frame28572Props: frame285770Data,
    frame284911Props: frame2849436Data,
    frame284912Props: frame2849437Data,
    frame284913Props: frame2849438Data,
    frame28852Props: frame288587Data,
    frame284914Props: frame2849439Data,
    frame284915Props: frame2849440Data,
    frame284916Props: frame2849441Data,
    frame284917Props: frame2849442Data,
    frame28853Props: frame288588Data,
    frame284918Props: frame2849443Data,
    frame28573Props: frame285771Data,
    frame284919Props: frame2849444Data,
    frame284920Props: frame2849445Data,
    frame284921Props: frame2849446Data,
    frame28854Props: frame288589Data,
    frame284922Props: frame2849447Data,
    frame28574Props: frame285772Data,
    frame284923Props: frame2849448Data,
    frame284924Props: frame2849449Data,
    frame284925Props: frame2849450Data,
    frame28855Props: frame288590Data,
    frame2855Props: frame285569Data,
    frame28552Props: frame285570Data,
    frame28553Props: frame285571Data,
    frame28554Props: frame285572Data,
};

const frame279112Data = {
    text108: "View calendar",
    group1942Props: group194218Data,
};

const chevronsLeft33Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft34Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891218Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft33Data,
    chevronsLeft2Props: chevronsLeft34Data,
};

const group194311Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279112Data,
    frame28912Props: frame2891218Data,
};

const frame1943112Data = {
    frame1945Props: frame194516Data,
    frame19442Props: frame194425Data,
    frame1947Props: frame194717Data,
    frame1948Props: frame194817Data,
    frame2303Props: frame230318Data,
    group1943Props: group194311Data,
};

const close6Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer237Data = {
    closeProps: close6Data,
};

const checkmarksquare2outline24Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-158@2x.png",
};

const component2Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline24Data,
};

const frame3693Data = {
    leaders: "Leaders",
    component2Props: component2Data,
};

const checkmarksquare2outline25Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-158@2x.png",
};

const component22Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline25Data,
};

const frame3697Data = {
    surname: "Farmer",
    component2Props: component22Data,
};

const component222Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame3694Data = {
    place: "Supply",
    component22Props: component222Data,
};

const component223Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame3698Data = {
    marketers: "Marketers",
    component22Props: component223Data,
};

const checkmarksquare2outline26Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-158@2x.png",
};

const component23Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline26Data,
};

const frame3695Data = {
    processing: "Processing",
    component2Props: component23Data,
};

const component224Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame3699Data = {
    mentors: "Mentors",
    component22Props: component224Data,
};

const component225Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame3696Data = {
    marketerSales: "Marketer/ Sales",
    component22Props: component225Data,
};

const checkmarksquare2outline27Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-158@2x.png",
};

const component24Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline27Data,
};

const frame3700Data = {
    accounting: "Accounting",
    component2Props: component24Data,
};

const plusoutline1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-772@2x.png",
};

const X9CreateEnterpise_step2Data = {
    addRoles: "Add Roles",
    xcontinue: "Continue",
    step2Of2: "Step 2 of 2",
    text539: "Choose what roles will be in your enterprise:",
    addCustomRole: "Add custom role",
    frame1980Props: frame19803Data,
    frame19892Props: frame198922Data,
    frame2981Props: frame29812Data,
    frame1983Props: frame19832Data,
    frame19544Props: frame195445Data,
    frame19695Props: frame196953Data,
    frame29822Props: frame298223Data,
    frame298222Props: frame298224Data,
    frame194311Props: frame1943112Data,
    layer23Props: layer237Data,
    frame3693Props: frame3693Data,
    frame3697Props: frame3697Data,
    frame3694Props: frame3694Data,
    frame3698Props: frame3698Data,
    frame3695Props: frame3695Data,
    frame3699Props: frame3699Data,
    frame3696Props: frame3696Data,
    frame3700Props: frame3700Data,
    plusoutline1Props: plusoutline1Data,
};

const email18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2219Data = {
    emailProps: email18Data,
};

const emailoutline15Data = {
    layer22Props: layer2219Data,
};

const belloutline18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline118Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28487Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline118Data,
};

const frame195446Data = {
    ragrariansI520753: "Add new lesson",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline15Data,
    belloutlineProps: belloutline18Data,
    frame2848Props: frame28487Data,
};

const grid19Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289118Data = {
    gridProps: grid19Data,
};

const frame22Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194517Data = {
    frame2891Props: frame289118Data,
    frameProps: frame22Data,
};

const usermanagement19Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195318Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement19Data,
};

const frame28479Data = {
    frame1953Props: frame195318Data,
};

const frame197413Data = {
    children: "Groups",
};

const frame197528Data = {
    children: "Members",
};

const frame197414Data = {
    children: "Enterprises",
};

const frame194426Data = {
    frame2847Props: frame28479Data,
    frame1974Props: frame197413Data,
    frame19752Props: frame197528Data,
    frame19742Props: frame197414Data,
};

const book24Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194718Data = {
    text41: "Library",
    bookProps: book24Data,
};

const frame194818Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230319Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849451Data = {
    children: "Mo",
};

const frame2849452Data = {
    children: "1",
};

const frame2849453Data = {
    children: "8",
};

const frame2849454Data = {
    children: "15",
};

const frame2849455Data = {
    children: "22",
};

const frame2849456Data = {
    children: "Tu",
};

const frame285773Data = {
    children: "2",
};

const frame2849457Data = {
    children: "9",
};

const frame2849458Data = {
    children: "16",
};

const frame2849459Data = {
    children: "23",
};

const frame288591Data = {
    children: "30",
};

const frame2849460Data = {
    children: "We",
};

const frame285774Data = {
    children: "3",
};

const frame2849461Data = {
    children: "10",
};

const frame2849462Data = {
    children: "17",
};

const frame2849463Data = {
    children: "24",
};

const frame288592Data = {
    children: "1",
};

const frame2849464Data = {
    children: "Th",
};

const frame2849465Data = {
    children: "4",
};

const frame2849466Data = {
    children: "11",
};

const frame2849467Data = {
    children: "25",
};

const frame288593Data = {
    children: "2",
};

const frame2849468Data = {
    children: "Fr",
};

const frame285775Data = {
    children: "5",
};

const frame2849469Data = {
    children: "12",
};

const frame2849470Data = {
    children: "19",
};

const frame2849471Data = {
    children: "26",
};

const frame288594Data = {
    children: "3",
};

const frame2849472Data = {
    children: "Sa",
};

const frame285776Data = {
    children: "6",
};

const frame2849473Data = {
    children: "13",
};

const frame2849474Data = {
    children: "20",
};

const frame2849475Data = {
    children: "27",
};

const frame288595Data = {
    children: "4",
};

const frame285573Data = {
    children: "Su",
};

const frame285574Data = {
    children: "14",
};

const frame285575Data = {
    children: "21",
};

const frame285576Data = {
    children: "28",
};

const group194219Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849451Data,
    frame28492Props: frame2849452Data,
    frame28493Props: frame2849453Data,
    frame28494Props: frame2849454Data,
    frame28495Props: frame2849455Data,
    frame28496Props: frame2849456Data,
    frame2857Props: frame285773Data,
    frame28497Props: frame2849457Data,
    frame28498Props: frame2849458Data,
    frame28499Props: frame2849459Data,
    frame2885Props: frame288591Data,
    frame284910Props: frame2849460Data,
    frame28572Props: frame285774Data,
    frame284911Props: frame2849461Data,
    frame284912Props: frame2849462Data,
    frame284913Props: frame2849463Data,
    frame28852Props: frame288592Data,
    frame284914Props: frame2849464Data,
    frame284915Props: frame2849465Data,
    frame284916Props: frame2849466Data,
    frame284917Props: frame2849467Data,
    frame28853Props: frame288593Data,
    frame284918Props: frame2849468Data,
    frame28573Props: frame285775Data,
    frame284919Props: frame2849469Data,
    frame284920Props: frame2849470Data,
    frame284921Props: frame2849471Data,
    frame28854Props: frame288594Data,
    frame284922Props: frame2849472Data,
    frame28574Props: frame285776Data,
    frame284923Props: frame2849473Data,
    frame284924Props: frame2849474Data,
    frame284925Props: frame2849475Data,
    frame28855Props: frame288595Data,
    frame2855Props: frame285573Data,
    frame28552Props: frame285574Data,
    frame28553Props: frame285575Data,
    frame28554Props: frame285576Data,
};

const frame279113Data = {
    text108: "View calendar",
    group1942Props: group194219Data,
};

const chevronsLeft35Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft36Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891219Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft35Data,
    chevronsLeft2Props: chevronsLeft36Data,
};

const group194312Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279113Data,
    frame28912Props: frame2891219Data,
};

const frame1943102Data = {
    frame1945Props: frame194517Data,
    frame19442Props: frame194426Data,
    frame1947Props: frame194718Data,
    frame1948Props: frame194818Data,
    frame2303Props: frame230319Data,
    group1943Props: group194312Data,
};

const iconsArrowsLeft8Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29233Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft8Data,
};

const backbtn23Data = {
    frame2923Props: frame29233Data,
};

const iconsCamera2Data = {
    src: "/img/union-7@2x.png",
};

const videooutline3Data = {
    vector: "/img/ellipse-703-40@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const cameraoutline3Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-403@2x.png",
    vector3: "/img/vector-404@2x.png",
};

const filetextoutline5Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame193922Data = {
    addVideo: "Add video",
    addImage: "Add image",
    addText: "Add text",
    videooutlineProps: videooutline3Data,
    cameraoutlineProps: cameraoutline3Data,
    filetextoutlineProps: filetextoutline5Data,
};

const frame306722Data = {
    children: "Materials",
};

const close7Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer238Data = {
    closeProps: close7Data,
};

const frame22782Data = {
    src: "/img/ellipse-232@2x.png",
};

const frame34442Data = {
    text317: "Add photo description",
    frame2278Props: frame22782Data,
};

const X34AddNewBlockphotoData = {
    text562: "02. How to be rich in 2020 and make business",
    text563: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>,
    loremIpsum: "Lorem ipsum",
    frame2762: "/img/frame-2762@2x.png",
    frame317: "/img/frame-317-2@1x.png",
    line2: "/img/line-2@2x.png",
    vector: "/img/vector-649@2x.png",
    vector2: "/img/vector-650@2x.png",
    vector3: "/img/vector-651@2x.png",
    text564: "If you need to add more text, use “Add new block” below",
    text: "",
    text2: "",
    text565: <>You dont have any materials in lesson<br />Add it for your users.</>,
    addMaterials: "Add materials",
    addPhoto: "Add photo",
    text566: "Drag & Drop files in this area or Click Here to attach",
    spanText: "Photo description",
    spanText2: "*",
    addBlock: "Add block",
    frame19544Props: frame195446Data,
    frame194310Props: frame1943102Data,
    backbtn2Props: backbtn23Data,
    iconsCameraProps: iconsCamera2Data,
    frame19392Props: frame193922Data,
    frame30672Props: frame306722Data,
    layer23Props: layer238Data,
    frame3444Props: frame34442Data,
};

const searchoutline19Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame19804Data = {
    searchEnterprises: "Search enterprises",
    searchoutline1Props: searchoutline19Data,
};

const funneloutline16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const frame28175Data = {
    filterByCategory: "Filter by category",
    funneloutline1Props: funneloutline16Data,
};

const layer2425Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-287@2x.png",
};

const chevronrightoutline123Data = {
    layer24Props: layer2425Data,
};

const layer2426Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline124Data = {
    layer24Props: layer2426Data,
};

const frame198923Data = {
    frame2817Props: frame28175Data,
    chevronrightoutline1Props: chevronrightoutline123Data,
    chevronrightoutline12Props: chevronrightoutline124Data,
};

const frame29813Data = {
    allEnterprises: "All Enterprises",
    yourEnterprises: "Your Enterprises",
};

const frame19833Data = {
    children: "Create Enterprise",
};

const email19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2220Data = {
    emailProps: email19Data,
};

const emailoutline16Data = {
    layer22Props: layer2220Data,
};

const belloutline19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline119Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28488Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline119Data,
};

const frame195447Data = {
    ragrariansI520753: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline16Data,
    belloutlineProps: belloutline19Data,
    frame2848Props: frame28488Data,
};

const frame323912Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27928Data = {
    children: "Follow",
};

const frame27966Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27928Data,
};

const frame196954Data = {
    frame1969: "/img/frame-1969-11@1x.png",
    frame3239Props: frame323912Data,
    frame2796Props: frame27966Data,
};

const frame323913Data = {
    farmers: "FARMERS",
    text264: <>Australian<br />farmers community</>,
    address: "10 376 followers",
};

const frame27929Data = {
    children: "Follow",
};

const frame27967Data = {
    dontRecommend: "Don’t recommend",
    frame2792Props: frame27929Data,
};

const frame196955Data = {
    frame1969: "/img/frame-1969-11@1x.png",
    frame3239Props: frame323913Data,
    frame2796Props: frame27967Data,
};

const frame323914Data = {
    farmers: "FARMERS",
    text264: "Let’s save our nature together! Community for nature lovers!",
    address: "10 376 followers",
};

const frame279628Data = {
    children: "Unfollow",
};

const frame298225Data = {
    frame2982: "/img/frame-1969-11@1x.png",
    frame3239Props: frame323914Data,
    frame27962Props: frame279628Data,
};

const grid20Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289119Data = {
    gridProps: grid20Data,
};

const frame23Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194518Data = {
    frame2891Props: frame289119Data,
    frameProps: frame23Data,
};

const usermanagement20Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195319Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement20Data,
};

const frame284710Data = {
    frame1953Props: frame195319Data,
};

const frame197415Data = {
    children: "Groups",
};

const frame197529Data = {
    children: "Members",
};

const frame197416Data = {
    children: "Enterprises",
};

const frame194427Data = {
    frame2847Props: frame284710Data,
    frame1974Props: frame197415Data,
    frame19752Props: frame197529Data,
    frame19742Props: frame197416Data,
};

const book25Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194719Data = {
    text41: "Library",
    bookProps: book25Data,
};

const frame194819Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230320Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849476Data = {
    children: "Mo",
};

const frame2849477Data = {
    children: "1",
};

const frame2849478Data = {
    children: "8",
};

const frame2849479Data = {
    children: "15",
};

const frame2849480Data = {
    children: "22",
};

const frame2849481Data = {
    children: "Tu",
};

const frame285777Data = {
    children: "2",
};

const frame2849482Data = {
    children: "9",
};

const frame2849483Data = {
    children: "16",
};

const frame2849484Data = {
    children: "23",
};

const frame288596Data = {
    children: "30",
};

const frame2849485Data = {
    children: "We",
};

const frame285778Data = {
    children: "3",
};

const frame2849486Data = {
    children: "10",
};

const frame2849487Data = {
    children: "17",
};

const frame2849488Data = {
    children: "24",
};

const frame288597Data = {
    children: "1",
};

const frame2849489Data = {
    children: "Th",
};

const frame2849490Data = {
    children: "4",
};

const frame2849491Data = {
    children: "11",
};

const frame2849492Data = {
    children: "25",
};

const frame288598Data = {
    children: "2",
};

const frame2849493Data = {
    children: "Fr",
};

const frame285779Data = {
    children: "5",
};

const frame2849494Data = {
    children: "12",
};

const frame2849495Data = {
    children: "19",
};

const frame2849496Data = {
    children: "26",
};

const frame288599Data = {
    children: "3",
};

const frame2849497Data = {
    children: "Sa",
};

const frame285780Data = {
    children: "6",
};

const frame2849498Data = {
    children: "13",
};

const frame2849499Data = {
    children: "20",
};

const frame2849500Data = {
    children: "27",
};

const frame2885100Data = {
    children: "4",
};

const frame285577Data = {
    children: "Su",
};

const frame285578Data = {
    children: "14",
};

const frame285579Data = {
    children: "21",
};

const frame285580Data = {
    children: "28",
};

const group194220Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849476Data,
    frame28492Props: frame2849477Data,
    frame28493Props: frame2849478Data,
    frame28494Props: frame2849479Data,
    frame28495Props: frame2849480Data,
    frame28496Props: frame2849481Data,
    frame2857Props: frame285777Data,
    frame28497Props: frame2849482Data,
    frame28498Props: frame2849483Data,
    frame28499Props: frame2849484Data,
    frame2885Props: frame288596Data,
    frame284910Props: frame2849485Data,
    frame28572Props: frame285778Data,
    frame284911Props: frame2849486Data,
    frame284912Props: frame2849487Data,
    frame284913Props: frame2849488Data,
    frame28852Props: frame288597Data,
    frame284914Props: frame2849489Data,
    frame284915Props: frame2849490Data,
    frame284916Props: frame2849491Data,
    frame284917Props: frame2849492Data,
    frame28853Props: frame288598Data,
    frame284918Props: frame2849493Data,
    frame28573Props: frame285779Data,
    frame284919Props: frame2849494Data,
    frame284920Props: frame2849495Data,
    frame284921Props: frame2849496Data,
    frame28854Props: frame288599Data,
    frame284922Props: frame2849497Data,
    frame28574Props: frame285780Data,
    frame284923Props: frame2849498Data,
    frame284924Props: frame2849499Data,
    frame284925Props: frame2849500Data,
    frame28855Props: frame2885100Data,
    frame2855Props: frame285577Data,
    frame28552Props: frame285578Data,
    frame28553Props: frame285579Data,
    frame28554Props: frame285580Data,
};

const frame279114Data = {
    text108: "View calendar",
    group1942Props: group194220Data,
};

const chevronsLeft37Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft38Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891220Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft37Data,
    chevronsLeft2Props: chevronsLeft38Data,
};

const group194313Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279114Data,
    frame28912Props: frame2891220Data,
};

const frame1943113Data = {
    frame1945Props: frame194518Data,
    frame19442Props: frame194427Data,
    frame1947Props: frame194719Data,
    frame1948Props: frame194819Data,
    frame2303Props: frame230320Data,
    group1943Props: group194313Data,
};

const close8Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer239Data = {
    closeProps: close8Data,
};

const checkmarksquare2outline28Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const component25Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline28Data,
};

const frame36932Data = {
    leaders: "Leaders",
    component2Props: component25Data,
};

const checkmarksquare2outline29Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const component26Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline29Data,
};

const frame36972Data = {
    surname: "Farmer",
    component2Props: component26Data,
};

const component226Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame36942Data = {
    place: "Supply",
    component22Props: component226Data,
};

const component227Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame36982Data = {
    marketers: "Marketers",
    component22Props: component227Data,
};

const checkmarksquare2outline210Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const component27Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline210Data,
};

const frame36952Data = {
    processing: "Processing",
    component2Props: component27Data,
};

const component228Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame36992Data = {
    mentors: "Mentors",
    component22Props: component228Data,
};

const component229Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const frame36962Data = {
    marketerSales: "Marketer/ Sales",
    component22Props: component229Data,
};

const checkmarksquare2outline211Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const component28Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline211Data,
};

const frame37002Data = {
    accounting: "Accounting",
    component2Props: component28Data,
};

const checkmarksquare2outline212Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const component29Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline212Data,
};

const component2210Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const component2211Data = {
    vector: "/img/vector@2x.png",
    subtract: "/img/subtract-9@2x.png",
    vector2: "/img/vector-833@2x.png",
};

const checkmarksquare2outline213Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-183@2x.png",
};

const component210Data = {
    checkmarksquare2outline2Props: checkmarksquare2outline213Data,
};

const plusoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-772@2x.png",
};

const X9CreateEnterpise_step22Data = {
    addRoles: "Add Roles",
    xcontinue: "Continue",
    step2Of2: "Step 2 of 2",
    text600: "Choose what roles will be in your enterprise:",
    editInformation: "Edit information",
    text601: "Add permissions for custom role:",
    addPhotos: "Add photos",
    makeNewPosts: "Make new posts",
    text602: "Manage enterprise’s members",
    spanText: "Role title ",
    spanText2: "*",
    contentManager: "Content manager",
    addCustomRole: "Add custom role",
    frame1980Props: frame19804Data,
    frame19892Props: frame198923Data,
    frame2981Props: frame29813Data,
    frame1983Props: frame19833Data,
    frame19544Props: frame195447Data,
    frame19695Props: frame196954Data,
    frame196952Props: frame196955Data,
    frame29822Props: frame298225Data,
    frame194311Props: frame1943113Data,
    layer23Props: layer239Data,
    frame3693Props: frame36932Data,
    frame3697Props: frame36972Data,
    frame3694Props: frame36942Data,
    frame3698Props: frame36982Data,
    frame3695Props: frame36952Data,
    frame3699Props: frame36992Data,
    frame3696Props: frame36962Data,
    frame3700Props: frame37002Data,
    component2Props: component29Data,
    component22Props: component210Data,
    component222Props: component2211Data,
    plusoutline1Props: plusoutline12Data,
};

const email20Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2221Data = {
    emailProps: email20Data,
};

const emailoutline17Data = {
    layer22Props: layer2221Data,
};

const belloutline20Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline120Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195413Data = {
    ragrariansI169223: "My courses",
    frame1951: "/img/frame-1951@2x.png",
    text603: "My dashboard",
    emailoutlineProps: emailoutline17Data,
    belloutlineProps: belloutline20Data,
    personoutline1Props: personoutline120Data,
};

const iconsArrowsLeft9Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn7Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft9Data,
};

const frame30673Data = {
    children: "My courses",
};

const frame323922Data = {
    name: "Jimmy Beam personal business course",
    text604: "Last activity: 7 days ago",
};

const frame323923Data = {
    name: "Be the first person in your own life!",
    text604: "Last activity: 15 days ago",
};

const frame306732Data = {
    children: "Special for you",
};

const frame323924Data = {
    name: "Find your inner power. J.McBell course",
    text604: "Free course",
};

const frame323925Data = {
    name: "Be the first person in your own life!",
    text604: "Amount: $45.99",
};

const frame323926Data = {
    name: "Be the first person in your own life!",
    text604: "Amount: $252.00",
};

const grid21Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289120Data = {
    gridProps: grid21Data,
};

const frame24Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194519Data = {
    frame2891Props: frame289120Data,
    frameProps: frame24Data,
};

const usermanagement21Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195320Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement21Data,
};

const book26Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194720Data = {
    text41: "Library",
    bookProps: book26Data,
};

const frame194820Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230321Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849501Data = {
    children: "Mo",
};

const frame2849502Data = {
    children: "1",
};

const frame2849503Data = {
    children: "8",
};

const frame2849504Data = {
    children: "15",
};

const frame2849505Data = {
    children: "22",
};

const frame2849506Data = {
    children: "Tu",
};

const frame285781Data = {
    children: "2",
};

const frame2849507Data = {
    children: "9",
};

const frame2849508Data = {
    children: "16",
};

const frame2849509Data = {
    children: "23",
};

const frame2885101Data = {
    children: "30",
};

const frame2849510Data = {
    children: "We",
};

const frame285782Data = {
    children: "3",
};

const frame2849511Data = {
    children: "10",
};

const frame2849512Data = {
    children: "17",
};

const frame2849513Data = {
    children: "24",
};

const frame2885102Data = {
    children: "1",
};

const frame2849514Data = {
    children: "Th",
};

const frame2849515Data = {
    children: "4",
};

const frame2849516Data = {
    children: "11",
};

const frame2849517Data = {
    children: "25",
};

const frame2885103Data = {
    children: "2",
};

const frame2849518Data = {
    children: "Fr",
};

const frame285783Data = {
    children: "5",
};

const frame2849519Data = {
    children: "12",
};

const frame2849520Data = {
    children: "19",
};

const frame2849521Data = {
    children: "26",
};

const frame2885104Data = {
    children: "3",
};

const frame2849522Data = {
    children: "Sa",
};

const frame285784Data = {
    children: "6",
};

const frame2849523Data = {
    children: "13",
};

const frame2849524Data = {
    children: "20",
};

const frame2849525Data = {
    children: "27",
};

const frame2885105Data = {
    children: "4",
};

const frame285581Data = {
    children: "Su",
};

const frame285582Data = {
    children: "14",
};

const frame285583Data = {
    children: "21",
};

const frame285584Data = {
    children: "28",
};

const group194221Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849501Data,
    frame28492Props: frame2849502Data,
    frame28493Props: frame2849503Data,
    frame28494Props: frame2849504Data,
    frame28495Props: frame2849505Data,
    frame28496Props: frame2849506Data,
    frame2857Props: frame285781Data,
    frame28497Props: frame2849507Data,
    frame28498Props: frame2849508Data,
    frame28499Props: frame2849509Data,
    frame2885Props: frame2885101Data,
    frame284910Props: frame2849510Data,
    frame28572Props: frame285782Data,
    frame284911Props: frame2849511Data,
    frame284912Props: frame2849512Data,
    frame284913Props: frame2849513Data,
    frame28852Props: frame2885102Data,
    frame284914Props: frame2849514Data,
    frame284915Props: frame2849515Data,
    frame284916Props: frame2849516Data,
    frame284917Props: frame2849517Data,
    frame28853Props: frame2885103Data,
    frame284918Props: frame2849518Data,
    frame28573Props: frame285783Data,
    frame284919Props: frame2849519Data,
    frame284920Props: frame2849520Data,
    frame284921Props: frame2849521Data,
    frame28854Props: frame2885104Data,
    frame284922Props: frame2849522Data,
    frame28574Props: frame285784Data,
    frame284923Props: frame2849523Data,
    frame284924Props: frame2849524Data,
    frame284925Props: frame2849525Data,
    frame28855Props: frame2885105Data,
    frame2855Props: frame285581Data,
    frame28552Props: frame285582Data,
    frame28553Props: frame285583Data,
    frame28554Props: frame285584Data,
};

const chevronsLeft39Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft40Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891221Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft39Data,
    chevronsLeft2Props: chevronsLeft40Data,
};

const frame194316Data = {
    text611: "Groups",
    text612: "Members",
    text613: "Enterprises",
    text629: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194519Data,
    frame1953Props: frame195320Data,
    frame1947Props: frame194720Data,
    frame1948Props: frame194820Data,
    frame2303Props: frame230321Data,
    group1942Props: group194221Data,
    frame28912Props: frame2891221Data,
};

const X105MyCoursesData = {
    frame3040: "/img/frame-3040@2x.png",
    frame3053: "/img/frame-3053@2x.png",
    x18Lessons: "1/8 lessons",
    frame3041: "/img/frame-3041@2x.png",
    frame30532: "/img/frame-3053-1@2x.png",
    x1214Lessons: "12/14 lessons",
    frame30402: "/img/frame-3040-1@2x.png",
    frame30412: "/img/frame-3041-1@2x.png",
    frame3078: "/img/frame-3078@2x.png",
    frame195413Props: frame195413Data,
    backbtn7Props: backbtn7Data,
    frame30673Props: frame30673Data,
    frame32392Props: frame323922Data,
    frame323922Props: frame323923Data,
    frame306732Props: frame306732Data,
    frame323923Props: frame323924Data,
    frame323924Props: frame323925Data,
    frame323925Props: frame323926Data,
    frame194316Props: frame194316Data,
};

const email21Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2222Data = {
    emailProps: email21Data,
};

const emailoutline18Data = {
    layer22Props: layer2222Data,
};

const belloutline21Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline121Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195414Data = {
    ragrariansI2093612: "Ragrarians enterprises",
    frame1951: "/img/frame-1951@2x.png",
    text631: "My dashboard",
    emailoutlineProps: emailoutline18Data,
    belloutlineProps: belloutline21Data,
    personoutline1Props: personoutline121Data,
};

const iconsArrowsLeft10Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn8Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft10Data,
};

const component4Data = {
    vector: "/img/vector-1076@2x.png",
    vector2: "/img/vector-1077@2x.png",
    vector3: "/img/vector-1078@2x.png",
    vector4: "/img/vector-1079@2x.png",
    vector5: "/img/vector-1080@2x.png",
};

const frame2986Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const frame2995Data = {
    text632: "Finance document.pdf",
    component4Props: component4Data,
    frame2986Props: frame2986Data,
};

const component42Data = {
    vector: "/img/vector-1076@2x.png",
    vector2: "/img/vector-1077@2x.png",
    vector3: "/img/vector-1078@2x.png",
    vector4: "/img/vector-1079@2x.png",
    vector5: "/img/vector-1080@2x.png",
};

const frame2833Data = {
    children: "Business rules.pdf",
};

const frame29862Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const frame2996Data = {
    component4Props: component42Data,
    frame2833Props: frame2833Data,
    frame2986Props: frame29862Data,
};

const component43Data = {
    vector: "/img/vector-1076@2x.png",
    vector2: "/img/vector-1077@2x.png",
    vector3: "/img/vector-1078@2x.png",
    vector4: "/img/vector-1079@2x.png",
    vector5: "/img/vector-1080@2x.png",
};

const frame29863Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const frame2994Data = {
    text633: "Financial documentational.pdf",
    component4Props: component43Data,
    frame2986Props: frame29863Data,
};

const component44Data = {
    vector: "/img/vector-1076@2x.png",
    vector2: "/img/vector-1077@2x.png",
    vector3: "/img/vector-1078@2x.png",
    vector4: "/img/vector-1079@2x.png",
    vector5: "/img/vector-1080@2x.png",
};

const frame29864Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const frame29952Data = {
    text632: "Finance document.pdf",
    component4Props: component44Data,
    frame2986Props: frame29864Data,
};

const component45Data = {
    vector: "/img/vector-1076@2x.png",
    vector2: "/img/vector-1077@2x.png",
    vector3: "/img/vector-1078@2x.png",
    vector4: "/img/vector-1079@2x.png",
    vector5: "/img/vector-1080@2x.png",
};

const frame28332Data = {
    children: "Business rules.pdf",
};

const frame29865Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const frame29962Data = {
    component4Props: component45Data,
    frame2833Props: frame28332Data,
    frame2986Props: frame29865Data,
};

const component46Data = {
    vector: "/img/vector-1076@2x.png",
    vector2: "/img/vector-1077@2x.png",
    vector3: "/img/vector-1078@2x.png",
    vector4: "/img/vector-1079@2x.png",
    vector5: "/img/vector-1080@2x.png",
};

const frame29866Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const frame29942Data = {
    text633: "Financial documentational.pdf",
    component4Props: component46Data,
    frame2986Props: frame29866Data,
};

const pdf1Data = {
    group: "/img/vector-1142@2x.png",
    vector: "/img/vector-1143@2x.png",
    vector2: "/img/vector-1144@2x.png",
};

const frame29867Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const pdf12Data = {
    group: "/img/vector-1142@2x.png",
    vector: "/img/vector-1143@2x.png",
    vector2: "/img/vector-1144@2x.png",
};

const frame29868Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const pdf13Data = {
    group: "/img/vector-1142@2x.png",
    vector: "/img/vector-1143@2x.png",
    vector2: "/img/vector-1144@2x.png",
};

const frame29869Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector--stroke-@2x.png",
    vector3: "/img/vector-1083@2x.png",
    vector4: "/img/vector-1083@2x.png",
    vector5: "/img/vector-1085@2x.png",
    vector6: "/img/vector-1086@2x.png",
};

const layer2427Data = {
    vector: "/img/vector-1200@2x.png",
    vector2: "/img/vector-818@2x.png",
};

const frame29853Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-633@2x.png",
    vector3: "/img/vector-634@2x.png",
    tasks: "Tasks",
};

const frame298423Data = {
    vector: "/img/vector-1174@2x.png",
    vector2: "/img/vector-1175@2x.png",
    finances: "Finances",
};

const frame279722Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-825@2x.png",
    vector3: "/img/vector-826@2x.png",
    reports: "Reports",
};

const filetextoutline6Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame298323Data = {
    materials: "Materials",
    filetextoutlineProps: filetextoutline6Data,
};

const frame30032Data = {
    frame29832Props: frame298323Data,
};

const frame27974Data = {
    surname: "Farmer Enterprise",
    text355: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const layer2428Data = {
    vector: "/img/vector-622@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline125Data = {
    layer24Props: layer2428Data,
};

const frame29633Data = {
    youreFollower: "You’re follower",
    chevronrightoutline1Props: chevronrightoutline125Data,
};

const frame34233Data = {
    joinMessenger: "Join messenger",
    text356: "Would you like to communicate with other this enterpise users?",
    text357: "Join our free messenger!",
    frame2904: "/img/frame-2904-3@2x.png",
    frame3392: "/img/frame-3392@2x.png",
    frame3393: "/img/frame-3393@2x.png",
    text358: "Bessy, Misha and 175 more users already follow us!",
};

const frame34243Data = {
    text359: "Upcoming events in “Farmer Enterprise”",
    openInCalendar: "Open in calendar",
    text360: "New event for everyone",
    phone: "11/24/2020",
    text361: "Free lesson for our users (online)",
    phone2: "11/28/2020",
    text362: "Open lesson in farmer school for everyo…",
    phone3: "12/04/2020",
};

const frame20803Data = {
    children: "Write a message",
};

const frame208022Data = {
    children: "Unfollow",
};

const frame20792Data = {
    text466: "Invite applicant",
    text468: "Report enterprise",
    frame2080Props: frame20803Data,
    frame20802Props: frame208022Data,
};

const frame27993Data = {
    frame1969: "/img/frame-1969-18@1x.png",
    frame2797Props: frame27974Data,
    frame2963Props: frame29633Data,
    frame3423Props: frame34233Data,
    frame3424Props: frame34243Data,
    frame2079Props: frame20792Data,
};

const frame29708Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2429Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline126Data = {
    layer24Props: layer2429Data,
};

const frame32443Data = {
    enterprisePhotos: "Enterprise photos",
    chevronrightoutline1Props: chevronrightoutline126Data,
};

const frame29564Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame29708Data,
    frame3244Props: frame32443Data,
};

const frame28035Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28044Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline15Data,
};

const eye6Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline15Data = {
    eyeProps: eye6Data,
};

const frame28054Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline15Data,
};

const frame295623Data = {
    text374: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame2803Props: frame28035Data,
    frame2804Props: frame28044Data,
    frame2805Props: frame28054Data,
};

const frame29574Data = {
    children: "No comments yet",
};

const paperplaneoutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-657@2x.png",
};

const frame29614Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline15Data,
};

const frame29553Data = {
    frame29562Props: frame295623Data,
    frame2957Props: frame29574Data,
    frame2961Props: frame29614Data,
};

const frame28073Data = {
    children: "Search filters",
};

const layer2430Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline127Data = {
    layer24Props: layer2430Data,
};

const frame28085Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline127Data,
};

const layer2431Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline128Data = {
    layer24Props: layer2431Data,
};

const frame28086Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline128Data,
};

const frame28103Data = {
    children: "Search",
};

const frame28036Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280423Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline16Data,
};

const eye7Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline16Data = {
    eyeProps: eye7Data,
};

const frame280523Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline16Data,
};

const layer2432Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline129Data = {
    layer24Props: layer2432Data,
};

const frame295723Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline129Data,
};

const paperplaneoutline16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-673@2x.png",
};

const frame296123Data = {
    frame2815: "/img/frame-2815@2x.png",
    text382: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline16Data,
};

const frame34793Data = {
    text377: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text378: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text379: "November 1 at 05:55 PM",
    frame28012: "/img/frame-2815@2x.png",
    name2: "George Faith",
    spanText: "@John Billboy,",
    spanText2: " ",
    spanText3: "can you write in direct to help me please?",
    text381: "November 1 at 06:23 PM",
    frame2955Props: frame29553Data,
    frame2807Props: frame28073Data,
    frame2808Props: frame28085Data,
    frame28082Props: frame28086Data,
    frame2810Props: frame28103Data,
    frame2803Props: frame28036Data,
    frame28042Props: frame280423Data,
    frame28052Props: frame280523Data,
    frame29572Props: frame295723Data,
    frame29612Props: frame296123Data,
};

const grid22Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289121Data = {
    gridProps: grid22Data,
};

const frame25Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-327@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194520Data = {
    frame2891Props: frame289121Data,
    frameProps: frame25Data,
};

const usermanagement22Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195321Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement22Data,
};

const book27Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194721Data = {
    text41: "Library",
    bookProps: book27Data,
};

const frame194821Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230322Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849526Data = {
    children: "Mo",
};

const frame2849527Data = {
    children: "1",
};

const frame2849528Data = {
    children: "8",
};

const frame2849529Data = {
    children: "15",
};

const frame2849530Data = {
    children: "22",
};

const frame2849531Data = {
    children: "Tu",
};

const frame285785Data = {
    children: "2",
};

const frame2849532Data = {
    children: "9",
};

const frame2849533Data = {
    children: "16",
};

const frame2849534Data = {
    children: "23",
};

const frame2885106Data = {
    children: "30",
};

const frame2849535Data = {
    children: "We",
};

const frame285786Data = {
    children: "3",
};

const frame2849536Data = {
    children: "10",
};

const frame2849537Data = {
    children: "17",
};

const frame2849538Data = {
    children: "24",
};

const frame2885107Data = {
    children: "1",
};

const frame2849539Data = {
    children: "Th",
};

const frame2849540Data = {
    children: "4",
};

const frame2849541Data = {
    children: "11",
};

const frame2849542Data = {
    children: "25",
};

const frame2885108Data = {
    children: "2",
};

const frame2849543Data = {
    children: "Fr",
};

const frame285787Data = {
    children: "5",
};

const frame2849544Data = {
    children: "12",
};

const frame2849545Data = {
    children: "19",
};

const frame2849546Data = {
    children: "26",
};

const frame2885109Data = {
    children: "3",
};

const frame2849547Data = {
    children: "Sa",
};

const frame285788Data = {
    children: "6",
};

const frame2849548Data = {
    children: "13",
};

const frame2849549Data = {
    children: "20",
};

const frame2849550Data = {
    children: "27",
};

const frame2885110Data = {
    children: "4",
};

const frame285585Data = {
    children: "Su",
};

const frame285586Data = {
    children: "14",
};

const frame285587Data = {
    children: "21",
};

const frame285588Data = {
    children: "28",
};

const group194222Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849526Data,
    frame28492Props: frame2849527Data,
    frame28493Props: frame2849528Data,
    frame28494Props: frame2849529Data,
    frame28495Props: frame2849530Data,
    frame28496Props: frame2849531Data,
    frame2857Props: frame285785Data,
    frame28497Props: frame2849532Data,
    frame28498Props: frame2849533Data,
    frame28499Props: frame2849534Data,
    frame2885Props: frame2885106Data,
    frame284910Props: frame2849535Data,
    frame28572Props: frame285786Data,
    frame284911Props: frame2849536Data,
    frame284912Props: frame2849537Data,
    frame284913Props: frame2849538Data,
    frame28852Props: frame2885107Data,
    frame284914Props: frame2849539Data,
    frame284915Props: frame2849540Data,
    frame284916Props: frame2849541Data,
    frame284917Props: frame2849542Data,
    frame28853Props: frame2885108Data,
    frame284918Props: frame2849543Data,
    frame28573Props: frame285787Data,
    frame284919Props: frame2849544Data,
    frame284920Props: frame2849545Data,
    frame284921Props: frame2849546Data,
    frame28854Props: frame2885109Data,
    frame284922Props: frame2849547Data,
    frame28574Props: frame285788Data,
    frame284923Props: frame2849548Data,
    frame284924Props: frame2849549Data,
    frame284925Props: frame2849550Data,
    frame28855Props: frame2885110Data,
    frame2855Props: frame285585Data,
    frame28552Props: frame285586Data,
    frame28553Props: frame285587Data,
    frame28554Props: frame285588Data,
};

const chevronsLeft41Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft42Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891222Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft41Data,
    chevronsLeft2Props: chevronsLeft42Data,
};

const frame194317Data = {
    text674: "Groups",
    text675: "Members",
    text676: "Enterprises",
    text692: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194520Data,
    frame1953Props: frame195321Data,
    frame1947Props: frame194721Data,
    frame1948Props: frame194821Data,
    frame2303Props: frame230322Data,
    group1942Props: group194222Data,
    frame28912Props: frame2891222Data,
};

const X93EnterpriseuserViewData = {
    text636: "Finance document.pdf",
    businessRulesPdf: "Business rules.pdf",
    text637: "Financial documentational.pdf",
    showAllDocuments: "Show all documents",
    text638: "Additional information",
    frame195414Props: frame195414Data,
    backbtn8Props: backbtn8Data,
    frame2995Props: frame2995Data,
    frame2996Props: frame2996Data,
    frame2994Props: frame2994Data,
    frame29952Props: frame29952Data,
    frame29962Props: frame29962Data,
    frame29942Props: frame29942Data,
    pdf1Props: pdf1Data,
    frame2986Props: frame29867Data,
    pdf12Props: pdf12Data,
    frame29862Props: frame29868Data,
    pdf13Props: pdf13Data,
    frame29863Props: frame29869Data,
    layer24Props: layer2427Data,
    frame2985Props: frame29853Data,
    frame29842Props: frame298423Data,
    frame27972Props: frame279722Data,
    frame3003Props: frame30032Data,
    frame27993Props: frame27993Data,
    frame2956Props: frame29564Data,
    frame3479Props: frame34793Data,
    frame194317Props: frame194317Data,
};

const frame410Data = {
    children: "Edit information",
};

const frame932Data = {
    lastName: "First name",
    ugrymov: "Mikhail",
};

const frame2821Data = {
    children: "Personal infromation",
};

const frame28212Data = {
    children: "Contact information",
};

const frame95Data = {
    birthday: "Last login",
    phone: "09/22/2020",
};

const frame28213Data = {
    children: "Additional information",
};

const iconsArrowsLeft11Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29234Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft11Data,
};

const backbtn9Data = {
    frame2923Props: frame29234Data,
};

const X104MyPersonals2Data = {
    welcomeBack: "My profile",
    frame1969: "/img/frame-1969-11@2x.png",
    lastName: "Last Name",
    ugryumov: "Ugryumov",
    dateOfBirhday: "Date of birhday",
    phone: "08/23/1995",
    email: "Email",
    mikhailGmailPro: "mikhail@gmail.pro",
    phone2: "Phone",
    text695: "+1 (233) 369-50-15",
    numbersOfVisits: "Numbers of visits",
    number: "153",
    frame2795: "/img/frame-2795@2x.png",
    text697: "You can connect these payment services:",
    vector: "/img/vector-568@2x.png",
    vector2: "/img/vector-569@2x.png",
    vector3: "/img/vector-570@2x.png",
    vector4: "/img/vector-571@2x.png",
    vector5: "/img/vector-572@2x.png",
    vector6: "/img/vector-573@2x.png",
    vector7: "/img/vector-574@2x.png",
    vector8: "/img/vector-575@2x.png",
    vector9: "/img/vector-576@2x.png",
    vector10: "/img/vector-577@2x.png",
    vector11: "/img/vector-578@2x.png",
    vector12: "/img/vector-579@2x.png",
    vector13: "/img/vector-580@2x.png",
    or: "OR",
    vector14: "/img/vector-585@2x.png",
    vector15: "/img/vector-586@2x.png",
    addMyCard: "Add my card",
    mobileHeaderLogo: "/img/mobile-header-logo@2x.png",
    mobileHeaderLogo2: "/img/mobile-header-logo-1@2x.png",
    frame410Props: frame410Data,
    frame93Props: frame932Data,
    frame2821Props: frame2821Data,
    frame28212Props: frame28212Data,
    frame9Props: frame95Data,
    frame28213Props: frame28213Data,
    backbtn9Props: backbtn9Data,
};

const email22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2223Data = {
    emailProps: email22Data,
};

const emailoutline19Data = {
    layer22Props: layer2223Data,
};

const belloutline22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-506@2x.png",
};

const personoutline122Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195415Data = {
    ragrariansI2301512: "Course page",
    frame1951: "/img/frame-1951@2x.png",
    text698: "My dashboard",
    emailoutlineProps: emailoutline19Data,
    belloutlineProps: belloutline22Data,
    personoutline1Props: personoutline122Data,
};

const iconsArrowsLeft12Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn10Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft12Data,
};

const component3Data = {
    src: "/img/ellipse-703-15@2x.png",
};

const frame3020Data = {
    text700: "Lesson 2",
    component3Props: component3Data,
};

const component32Data = {
    src: "/img/ellipse-703-15@2x.png",
};

const frame30202Data = {
    text700: "Lesson 3",
    component3Props: component32Data,
};

const component33Data = {
    src: "/img/ellipse-703-15@2x.png",
};

const frame30203Data = {
    text700: "Lesson 4",
    component3Props: component33Data,
};

const component34Data = {
    src: "/img/ellipse-703-18@2x.png",
};

const component322Data = {
    component3: "/img/ellipse-703-15@2x.png",
    ellipse704: "/img/ellipse-704-3@2x.png",
};

const frame19393Data = {
    text703: "Final test",
    text704: "Lesson 1",
    frame3020Props: frame3020Data,
    frame30202Props: frame30202Data,
    frame30203Props: frame30203Data,
    component3Props: component34Data,
    component32Props: component322Data,
};

const frame3231Data = {
    rectangle117: "/img/rectangle-117@2x.png",
    x01Introducing: "01. Introducing",
    text705: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    seeLesson: "See lesson",
};

const frame32312Data = {
    rectangle117: "/img/rectangle-117-1@2x.png",
    x01Introducing: "02. How to make new clients",
    text705: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    seeLesson: "See lesson",
};

const frame3255Data = {
    vector: "/img/vector-1257@2x.png",
    vector2: "/img/vector-1258@2x.png",
    vector3: "/img/vector-1259@2x.png",
    text708: "Finish previous lesson",
    frame3231Props: frame32312Data,
};

const frame32313Data = {
    rectangle117: "/img/rectangle-117-2@2x.png",
    x01Introducing: "03. Practice session",
    text705: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    seeLesson: "See lesson",
};

const frame32552Data = {
    vector: "/img/vector-1260@2x.png",
    vector2: "/img/vector-1258@2x.png",
    vector3: "/img/vector-1259@2x.png",
    text708: "Finish previous lesson",
    frame3231Props: frame32313Data,
};

const frame28333Data = {
    children: "You are subscriber",
};

const layer2433Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const grid23Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289130Data = {
    gridProps: grid23Data,
};

const frame26Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194521Data = {
    frame2891Props: frame289130Data,
    frameProps: frame26Data,
};

const usermanagement23Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195322Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement23Data,
};

const book28Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194722Data = {
    text41: "Library",
    bookProps: book28Data,
};

const frame194822Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230323Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849551Data = {
    children: "Mo",
};

const frame2849552Data = {
    children: "1",
};

const frame2849553Data = {
    children: "8",
};

const frame2849554Data = {
    children: "15",
};

const frame2849555Data = {
    children: "22",
};

const frame2849556Data = {
    children: "Tu",
};

const frame285789Data = {
    children: "2",
};

const frame2849557Data = {
    children: "9",
};

const frame2849558Data = {
    children: "16",
};

const frame2849559Data = {
    children: "23",
};

const frame2885111Data = {
    children: "30",
};

const frame2849560Data = {
    children: "We",
};

const frame285790Data = {
    children: "3",
};

const frame2849561Data = {
    children: "10",
};

const frame2849562Data = {
    children: "17",
};

const frame2849563Data = {
    children: "24",
};

const frame2885112Data = {
    children: "1",
};

const frame2849564Data = {
    children: "Th",
};

const frame2849565Data = {
    children: "4",
};

const frame2849566Data = {
    children: "11",
};

const frame2849567Data = {
    children: "25",
};

const frame2885113Data = {
    children: "2",
};

const frame2849568Data = {
    children: "Fr",
};

const frame285791Data = {
    children: "5",
};

const frame2849569Data = {
    children: "12",
};

const frame2849570Data = {
    children: "19",
};

const frame2849571Data = {
    children: "26",
};

const frame2885114Data = {
    children: "3",
};

const frame2849572Data = {
    children: "Sa",
};

const frame285792Data = {
    children: "6",
};

const frame2849573Data = {
    children: "13",
};

const frame2849574Data = {
    children: "20",
};

const frame2849575Data = {
    children: "27",
};

const frame2885115Data = {
    children: "4",
};

const frame285589Data = {
    children: "Su",
};

const frame285590Data = {
    children: "14",
};

const frame285591Data = {
    children: "21",
};

const frame285592Data = {
    children: "28",
};

const group194223Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849551Data,
    frame28492Props: frame2849552Data,
    frame28493Props: frame2849553Data,
    frame28494Props: frame2849554Data,
    frame28495Props: frame2849555Data,
    frame28496Props: frame2849556Data,
    frame2857Props: frame285789Data,
    frame28497Props: frame2849557Data,
    frame28498Props: frame2849558Data,
    frame28499Props: frame2849559Data,
    frame2885Props: frame2885111Data,
    frame284910Props: frame2849560Data,
    frame28572Props: frame285790Data,
    frame284911Props: frame2849561Data,
    frame284912Props: frame2849562Data,
    frame284913Props: frame2849563Data,
    frame28852Props: frame2885112Data,
    frame284914Props: frame2849564Data,
    frame284915Props: frame2849565Data,
    frame284916Props: frame2849566Data,
    frame284917Props: frame2849567Data,
    frame28853Props: frame2885113Data,
    frame284918Props: frame2849568Data,
    frame28573Props: frame285791Data,
    frame284919Props: frame2849569Data,
    frame284920Props: frame2849570Data,
    frame284921Props: frame2849571Data,
    frame28854Props: frame2885114Data,
    frame284922Props: frame2849572Data,
    frame28574Props: frame285792Data,
    frame284923Props: frame2849573Data,
    frame284924Props: frame2849574Data,
    frame284925Props: frame2849575Data,
    frame28855Props: frame2885115Data,
    frame2855Props: frame285589Data,
    frame28552Props: frame285590Data,
    frame28553Props: frame285591Data,
    frame28554Props: frame285592Data,
};

const chevronsLeft43Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft44Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891223Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft43Data,
    chevronsLeft2Props: chevronsLeft44Data,
};

const frame194318Data = {
    text713: "Groups",
    text714: "Members",
    text715: "Enterprises",
    text731: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194521Data,
    frame1953Props: frame195322Data,
    frame1947Props: frame194722Data,
    frame1948Props: frame194822Data,
    frame2303Props: frame230323Data,
    group1942Props: group194223Data,
    frame28912Props: frame2891223Data,
};

const frame292722Data = {
    name: "Kristin Watson",
    writeMessage: "Write message",
};

const frame29709Data = {
    vector: "/img/vector-776@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const frame292723Data = {
    name: "Guy Hawkins",
    writeMessage: "Write message",
};

const X106CoursePageData = {
    name: "Jimmy Beam personal course",
    text699: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    frame3079: "/img/frame-3079@1x.png",
    lessons: "Lessons",
    text733: "Also study this course",
    seeAllUsers: "See all users",
    text: "",
    frame2926: "/img/frame-2926-3@2x.png",
    name2: "Dianne Russell",
    writeMessage: "Write message",
    frame29262: "/img/frame-2926-6@2x.png",
    frame29263: "/img/frame-2926-9@2x.png",
    name3: "Leslie Alexander",
    writeMessage2: "Write message",
    frame29264: "/img/frame-2926-12@2x.png",
    name4: "Ralph Edwards",
    writeMessage3: "Write message",
    frame29265: "/img/frame-2926-15@2x.png",
    frame195415Props: frame195415Data,
    backbtn10Props: backbtn10Data,
    frame19393Props: frame19393Data,
    frame3231Props: frame3231Data,
    frame3255Props: frame3255Data,
    frame32552Props: frame32552Data,
    frame2833Props: frame28333Data,
    layer24Props: layer2433Data,
    frame194318Props: frame194318Data,
    frame29272Props: frame292722Data,
    frame2970Props: frame29709Data,
    frame292722Props: frame292723Data,
};

const email23Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2224Data = {
    emailProps: email23Data,
};

const emailoutline20Data = {
    layer22Props: layer2224Data,
};

const belloutline23Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline123Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195416Data = {
    ragrariansI1511233: "My library",
    frame1951: "/img/frame-1951@2x.png",
    text734: "My dashboard",
    emailoutlineProps: emailoutline20Data,
    belloutlineProps: belloutline23Data,
    personoutline1Props: personoutline123Data,
};

const iconsArrowsLeft13Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn11Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft13Data,
};

const frame3040Data = {
    frame3040: "/img/frame-3040@2x.png",
    farming: "FARMING",
    text735: "How to farm in 2020 and don’t lose you business",
    address: "5 min read",
};

const frame30402Data = {
    frame3040: "/img/frame-3041@2x.png",
    farming: "NEWS",
    text735: "How to farm in 2020 and don’t lose you business",
    address: "5 min read",
};

const frame30403Data = {
    frame3040: "/img/frame-3042@2x.png",
    farming: "NEWS",
    text735: "How to farm in 2020 and don’t lose you business",
    address: "5 min read",
};

const frame19713Data = {
    src: "/img/vector-335@2x.png",
};

const frame304022Data = {
    frame3040: "/img/frame-3040-1@2x.png",
    text738: "Be happy, find your self! Motivation 2020",
    frame1971Props: frame19713Data,
};

const frame19714Data = {
    src: "/img/vector-335@2x.png",
};

const frame304023Data = {
    frame3040: "/img/frame-3041-1@2x.png",
    text738: "Be happy, find your self! Motivation 2020",
    frame1971Props: frame19714Data,
};

const frame19715Data = {
    src: "/img/vector-335@2x.png",
};

const frame304024Data = {
    frame3040: "/img/frame-3042-1@2x.png",
    text738: "Be happy, find your self! Motivation 2020",
    frame1971Props: frame19715Data,
};

const grid24Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289131Data = {
    gridProps: grid24Data,
};

const frame27Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194522Data = {
    frame2891Props: frame289131Data,
    frameProps: frame27Data,
};

const usermanagement24Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195323Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement24Data,
};

const book29Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194723Data = {
    text41: "Library",
    bookProps: book29Data,
};

const frame194823Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230324Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849576Data = {
    children: "Mo",
};

const frame2849577Data = {
    children: "1",
};

const frame2849578Data = {
    children: "8",
};

const frame2849579Data = {
    children: "15",
};

const frame2849580Data = {
    children: "22",
};

const frame2849581Data = {
    children: "Tu",
};

const frame285793Data = {
    children: "2",
};

const frame2849582Data = {
    children: "9",
};

const frame2849583Data = {
    children: "16",
};

const frame2849584Data = {
    children: "23",
};

const frame2885116Data = {
    children: "30",
};

const frame2849585Data = {
    children: "We",
};

const frame285794Data = {
    children: "3",
};

const frame2849586Data = {
    children: "10",
};

const frame2849587Data = {
    children: "17",
};

const frame2849588Data = {
    children: "24",
};

const frame2885117Data = {
    children: "1",
};

const frame2849589Data = {
    children: "Th",
};

const frame2849590Data = {
    children: "4",
};

const frame2849591Data = {
    children: "11",
};

const frame2849592Data = {
    children: "25",
};

const frame2885118Data = {
    children: "2",
};

const frame2849593Data = {
    children: "Fr",
};

const frame285795Data = {
    children: "5",
};

const frame2849594Data = {
    children: "12",
};

const frame2849595Data = {
    children: "19",
};

const frame2849596Data = {
    children: "26",
};

const frame2885119Data = {
    children: "3",
};

const frame2849597Data = {
    children: "Sa",
};

const frame285796Data = {
    children: "6",
};

const frame2849598Data = {
    children: "13",
};

const frame2849599Data = {
    children: "20",
};

const frame2849600Data = {
    children: "27",
};

const frame2885120Data = {
    children: "4",
};

const frame285593Data = {
    children: "Su",
};

const frame285594Data = {
    children: "14",
};

const frame285595Data = {
    children: "21",
};

const frame285596Data = {
    children: "28",
};

const group194224Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849576Data,
    frame28492Props: frame2849577Data,
    frame28493Props: frame2849578Data,
    frame28494Props: frame2849579Data,
    frame28495Props: frame2849580Data,
    frame28496Props: frame2849581Data,
    frame2857Props: frame285793Data,
    frame28497Props: frame2849582Data,
    frame28498Props: frame2849583Data,
    frame28499Props: frame2849584Data,
    frame2885Props: frame2885116Data,
    frame284910Props: frame2849585Data,
    frame28572Props: frame285794Data,
    frame284911Props: frame2849586Data,
    frame284912Props: frame2849587Data,
    frame284913Props: frame2849588Data,
    frame28852Props: frame2885117Data,
    frame284914Props: frame2849589Data,
    frame284915Props: frame2849590Data,
    frame284916Props: frame2849591Data,
    frame284917Props: frame2849592Data,
    frame28853Props: frame2885118Data,
    frame284918Props: frame2849593Data,
    frame28573Props: frame285795Data,
    frame284919Props: frame2849594Data,
    frame284920Props: frame2849595Data,
    frame284921Props: frame2849596Data,
    frame28854Props: frame2885119Data,
    frame284922Props: frame2849597Data,
    frame28574Props: frame285796Data,
    frame284923Props: frame2849598Data,
    frame284924Props: frame2849599Data,
    frame284925Props: frame2849600Data,
    frame28855Props: frame2885120Data,
    frame2855Props: frame285593Data,
    frame28552Props: frame285594Data,
    frame28553Props: frame285595Data,
    frame28554Props: frame285596Data,
};

const chevronsLeft45Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft46Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891224Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft45Data,
    chevronsLeft2Props: chevronsLeft46Data,
};

const frame194319Data = {
    text742: "Groups",
    text743: "Members",
    text744: "Enterprises",
    text760: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194522Data,
    frame1953Props: frame195323Data,
    frame1947Props: frame194723Data,
    frame1948Props: frame194823Data,
    frame2303Props: frame230324Data,
    group1942Props: group194224Data,
    frame28912Props: frame2891224Data,
};

const searchoutline110Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame19805Data = {
    searchEnterprises: "Search enterprises",
    searchoutline1Props: searchoutline110Data,
};

const funneloutline17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const frame28176Data = {
    filterByCategory: "Filter by category",
    funneloutline1Props: funneloutline17Data,
};

const layer2434Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline130Data = {
    layer24Props: layer2434Data,
};

const frame19893Data = {
    frame2817Props: frame28176Data,
    chevronrightoutline1Props: chevronrightoutline130Data,
};

const X103MyLibraryData = {
    articles: "Articles",
    videos: "Videos",
    frame195416Props: frame195416Data,
    backbtn11Props: backbtn11Data,
    frame3040Props: frame3040Data,
    frame30402Props: frame304022Data,
    frame30403Props: frame30403Data,
    frame304022Props: frame304023Data,
    frame304023Props: frame304024Data,
    frame194319Props: frame194319Data,
    frame1980Props: frame19805Data,
    frame1989Props: frame19893Data,
};

const email24Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2225Data = {
    emailProps: email24Data,
};

const emailoutline21Data = {
    layer22Props: layer2225Data,
};

const belloutline24Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline124Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195417Data = {
    ragrariansI1671287: "My surveys",
    frame1951: "/img/frame-1951@2x.png",
    text762: "My dashboard",
    emailoutlineProps: emailoutline21Data,
    belloutlineProps: belloutline24Data,
    personoutline1Props: personoutline124Data,
};

const iconsArrowsLeft14Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn12Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft14Data,
};

const grid25Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289132Data = {
    gridProps: grid25Data,
};

const frame28Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194523Data = {
    frame2891Props: frame289132Data,
    frameProps: frame28Data,
};

const usermanagement25Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195324Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement25Data,
};

const book30Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194724Data = {
    text41: "Library",
    bookProps: book30Data,
};

const frame194824Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230325Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849601Data = {
    children: "Mo",
};

const frame2849602Data = {
    children: "1",
};

const frame2849603Data = {
    children: "8",
};

const frame2849604Data = {
    children: "15",
};

const frame2849605Data = {
    children: "22",
};

const frame2849606Data = {
    children: "Tu",
};

const frame285797Data = {
    children: "2",
};

const frame2849607Data = {
    children: "9",
};

const frame2849608Data = {
    children: "16",
};

const frame2849609Data = {
    children: "23",
};

const frame2885121Data = {
    children: "30",
};

const frame2849610Data = {
    children: "We",
};

const frame285798Data = {
    children: "3",
};

const frame2849611Data = {
    children: "10",
};

const frame2849612Data = {
    children: "17",
};

const frame2849613Data = {
    children: "24",
};

const frame2885122Data = {
    children: "1",
};

const frame2849614Data = {
    children: "Th",
};

const frame2849615Data = {
    children: "4",
};

const frame2849616Data = {
    children: "11",
};

const frame2849617Data = {
    children: "25",
};

const frame2885123Data = {
    children: "2",
};

const frame2849618Data = {
    children: "Fr",
};

const frame285799Data = {
    children: "5",
};

const frame2849619Data = {
    children: "12",
};

const frame2849620Data = {
    children: "19",
};

const frame2849621Data = {
    children: "26",
};

const frame2885124Data = {
    children: "3",
};

const frame2849622Data = {
    children: "Sa",
};

const frame2857100Data = {
    children: "6",
};

const frame2849623Data = {
    children: "13",
};

const frame2849624Data = {
    children: "20",
};

const frame2849625Data = {
    children: "27",
};

const frame2885125Data = {
    children: "4",
};

const frame285597Data = {
    children: "Su",
};

const frame285598Data = {
    children: "14",
};

const frame285599Data = {
    children: "21",
};

const frame2855100Data = {
    children: "28",
};

const group194225Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849601Data,
    frame28492Props: frame2849602Data,
    frame28493Props: frame2849603Data,
    frame28494Props: frame2849604Data,
    frame28495Props: frame2849605Data,
    frame28496Props: frame2849606Data,
    frame2857Props: frame285797Data,
    frame28497Props: frame2849607Data,
    frame28498Props: frame2849608Data,
    frame28499Props: frame2849609Data,
    frame2885Props: frame2885121Data,
    frame284910Props: frame2849610Data,
    frame28572Props: frame285798Data,
    frame284911Props: frame2849611Data,
    frame284912Props: frame2849612Data,
    frame284913Props: frame2849613Data,
    frame28852Props: frame2885122Data,
    frame284914Props: frame2849614Data,
    frame284915Props: frame2849615Data,
    frame284916Props: frame2849616Data,
    frame284917Props: frame2849617Data,
    frame28853Props: frame2885123Data,
    frame284918Props: frame2849618Data,
    frame28573Props: frame285799Data,
    frame284919Props: frame2849619Data,
    frame284920Props: frame2849620Data,
    frame284921Props: frame2849621Data,
    frame28854Props: frame2885124Data,
    frame284922Props: frame2849622Data,
    frame28574Props: frame2857100Data,
    frame284923Props: frame2849623Data,
    frame284924Props: frame2849624Data,
    frame284925Props: frame2849625Data,
    frame28855Props: frame2885125Data,
    frame2855Props: frame285597Data,
    frame28552Props: frame285598Data,
    frame28553Props: frame285599Data,
    frame28554Props: frame2855100Data,
};

const chevronsLeft47Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft48Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891225Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft47Data,
    chevronsLeft2Props: chevronsLeft48Data,
};

const frame194320Data = {
    text764: "Groups",
    text765: "Members",
    text766: "Enterprises",
    text782: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194523Data,
    frame1953Props: frame195324Data,
    frame1947Props: frame194724Data,
    frame1948Props: frame194824Data,
    frame2303Props: frame230325Data,
    group1942Props: group194225Data,
    frame28912Props: frame2891225Data,
};

const frame2794Data = {
    children: "COVID 19 problems & business",
};

const frame279322Data = {
    text785: "From “Nature Lovers”",
    address: "55 people already answered",
};

const frame411Data = {
    children: "Dismiss",
};

const frame279222Data = {
    children: "Answer",
};

const frame1959Data = {
    frame1969: "/img/frame-1969-12@1x.png",
    frame2794Props: frame2794Data,
    frame27932Props: frame279322Data,
    frame411Props: frame411Data,
    frame27922Props: frame279222Data,
};

const frame27942Data = {
    children: "Do you have horses on your own farm? How do you like it?",
};

const frame279323Data = {
    text785: "From “Nature Lovers”",
    address: "55 people already answered",
};

const frame279223Data = {
    children: "Answer",
};

const frame1961Data = {
    frame1969: "/img/frame-1969-13@1x.png",
    dismiss: "Dismiss",
    frame2794Props: frame27942Data,
    frame27932Props: frame279323Data,
    frame27922Props: frame279223Data,
};

const frame27943Data = {
    children: "Do you have horses on your own farm? How do you like it?",
};

const frame279324Data = {
    text785: "From “Nature Lovers”",
    address: "55 people already answered",
};

const frame4112Data = {
    children: "Dismiss",
};

const frame279224Data = {
    children: "Answer",
};

const frame19592Data = {
    frame1969: "/img/frame-1969-14@1x.png",
    frame2794Props: frame27943Data,
    frame27932Props: frame279324Data,
    frame411Props: frame4112Data,
    frame27922Props: frame279224Data,
};

const frame27944Data = {
    children: "What Iphone can bring to you?",
};

const frame279325Data = {
    text785: "From “Nature Lovers”",
    address: "55 people already answered",
};

const frame279225Data = {
    children: "Answer",
};

const frame19612Data = {
    frame1969: "/img/frame-1969-15@1x.png",
    dismiss: "Dismiss",
    frame2794Props: frame27944Data,
    frame27932Props: frame279325Data,
    frame27922Props: frame279225Data,
};

const X105MySurveysData = {
    frame195417Props: frame195417Data,
    backbtn12Props: backbtn12Data,
    frame194320Props: frame194320Data,
    frame1959Props: frame1959Data,
    frame1961Props: frame1961Data,
    frame19592Props: frame19592Data,
    frame19612Props: frame19612Data,
};

const email25Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2226Data = {
    emailProps: email25Data,
};

const emailoutline22Data = {
    layer22Props: layer2226Data,
};

const belloutline25Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline125Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195418Data = {
    ragrariansI1473337: "My Achievements",
    frame1951: "/img/frame-1951@2x.png",
    text792: "My dashboard",
    emailoutlineProps: emailoutline22Data,
    belloutlineProps: belloutline25Data,
    personoutline1Props: personoutline125Data,
};

const iconsArrowsLeft15Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn13Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft15Data,
};

const frame3030Data = {
    children: "Achievements in progress",
};

const frame3026Data = {
    text795: "Finish 5 courses in this year",
    percent: "0%",
};

const frame30262Data = {
    text795: "Finish 5 courses in this year",
    percent: "0%",
};

const frame30302Data = {
    children: "Finished achievements",
};

const grid26Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289133Data = {
    gridProps: grid26Data,
};

const frame29Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194524Data = {
    frame2891Props: frame289133Data,
    frameProps: frame29Data,
};

const usermanagement26Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195325Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement26Data,
};

const book31Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194725Data = {
    text41: "Library",
    bookProps: book31Data,
};

const frame194825Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230326Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849626Data = {
    children: "Mo",
};

const frame2849627Data = {
    children: "1",
};

const frame2849628Data = {
    children: "8",
};

const frame2849629Data = {
    children: "15",
};

const frame2849630Data = {
    children: "22",
};

const frame2849631Data = {
    children: "Tu",
};

const frame2857101Data = {
    children: "2",
};

const frame2849632Data = {
    children: "9",
};

const frame2849633Data = {
    children: "16",
};

const frame2849634Data = {
    children: "23",
};

const frame2885126Data = {
    children: "30",
};

const frame2849635Data = {
    children: "We",
};

const frame2857102Data = {
    children: "3",
};

const frame2849636Data = {
    children: "10",
};

const frame2849637Data = {
    children: "17",
};

const frame2849638Data = {
    children: "24",
};

const frame2885127Data = {
    children: "1",
};

const frame2849639Data = {
    children: "Th",
};

const frame2849640Data = {
    children: "4",
};

const frame2849641Data = {
    children: "11",
};

const frame2849642Data = {
    children: "25",
};

const frame2885128Data = {
    children: "2",
};

const frame2849643Data = {
    children: "Fr",
};

const frame2857103Data = {
    children: "5",
};

const frame2849644Data = {
    children: "12",
};

const frame2849645Data = {
    children: "19",
};

const frame2849646Data = {
    children: "26",
};

const frame2885129Data = {
    children: "3",
};

const frame2849647Data = {
    children: "Sa",
};

const frame2857104Data = {
    children: "6",
};

const frame2849648Data = {
    children: "13",
};

const frame2849649Data = {
    children: "20",
};

const frame2849650Data = {
    children: "27",
};

const frame2885130Data = {
    children: "4",
};

const frame2855101Data = {
    children: "Su",
};

const frame2855102Data = {
    children: "14",
};

const frame2855103Data = {
    children: "21",
};

const frame2855104Data = {
    children: "28",
};

const group194226Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849626Data,
    frame28492Props: frame2849627Data,
    frame28493Props: frame2849628Data,
    frame28494Props: frame2849629Data,
    frame28495Props: frame2849630Data,
    frame28496Props: frame2849631Data,
    frame2857Props: frame2857101Data,
    frame28497Props: frame2849632Data,
    frame28498Props: frame2849633Data,
    frame28499Props: frame2849634Data,
    frame2885Props: frame2885126Data,
    frame284910Props: frame2849635Data,
    frame28572Props: frame2857102Data,
    frame284911Props: frame2849636Data,
    frame284912Props: frame2849637Data,
    frame284913Props: frame2849638Data,
    frame28852Props: frame2885127Data,
    frame284914Props: frame2849639Data,
    frame284915Props: frame2849640Data,
    frame284916Props: frame2849641Data,
    frame284917Props: frame2849642Data,
    frame28853Props: frame2885128Data,
    frame284918Props: frame2849643Data,
    frame28573Props: frame2857103Data,
    frame284919Props: frame2849644Data,
    frame284920Props: frame2849645Data,
    frame284921Props: frame2849646Data,
    frame28854Props: frame2885129Data,
    frame284922Props: frame2849647Data,
    frame28574Props: frame2857104Data,
    frame284923Props: frame2849648Data,
    frame284924Props: frame2849649Data,
    frame284925Props: frame2849650Data,
    frame28855Props: frame2885130Data,
    frame2855Props: frame2855101Data,
    frame28552Props: frame2855102Data,
    frame28553Props: frame2855103Data,
    frame28554Props: frame2855104Data,
};

const chevronsLeft49Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft50Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891226Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft49Data,
    chevronsLeft2Props: chevronsLeft50Data,
};

const frame194321Data = {
    text809: "Groups",
    text810: "Members",
    text811: "Enterprises",
    text827: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194524Data,
    frame1953Props: frame195325Data,
    frame1947Props: frame194725Data,
    frame1948Props: frame194825Data,
    frame2303Props: frame230326Data,
    group1942Props: group194226Data,
    frame28912Props: frame2891226Data,
};

const X102MyAchievementsData = {
    frame3028: "/img/frame-3028@2x.png",
    text794: "Be a member of 10 communities at least (5/10)",
    percent: "50%",
    frame3027: "/img/frame-3027@1x.png",
    text796: "Make 15 unique posts in your own groups (14/15)",
    spanText: "97",
    spanText2: "%",
    frame30282: "/img/frame-3028-1@1x.png",
    text798: "Be a member of 10 communities at least (7/10)",
    percent2: "73%",
    frame30272: "/img/frame-3027-1@1x.png",
    text799: "Make 15 unique posts in your own groups (12/15)",
    percent3: "87%",
    frame30283: "/img/frame-3028-2@1x.png",
    text801: "Be a member of 10 communities at least (10/10)",
    percent4: "100%",
    frame30273: "/img/frame-3028-2@1x.png",
    text802: "Make 15 unique posts in your own groups (15/15)",
    percent5: "100%",
    frame2818: "/img/frame-2818-2@2x.png",
    mikhailUgryumov: "Mikhail Ugryumov",
    vector: "/img/vector-567@2x.png",
    group: "/img/group@2x.png",
    number: "4",
    text803: "Your achievement level: 4",
    frame3053: "/img/frame-3053@2x.png",
    text804: "24/25",
    text805: "You need to finish one more achievement to have a new level",
    spanText3: "Total achievements: ",
    spanText4: "245",
    spanText5: "My achievement progress: ",
    spanText6: "56/245 (26%)",
    phone: "56/245 (26%)",
    frame30532: "/img/frame-3053-1@2x.png",
    frame195418Props: frame195418Data,
    backbtn13Props: backbtn13Data,
    frame3030Props: frame3030Data,
    frame3026Props: frame3026Data,
    frame30262Props: frame30262Data,
    frame30302Props: frame30302Data,
    frame194321Props: frame194321Data,
};

const email26Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2227Data = {
    emailProps: email26Data,
};

const emailoutline23Data = {
    layer22Props: layer2227Data,
};

const belloutline26Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline126Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame28489Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline126Data,
};

const frame195448Data = {
    ragrariansI520753: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline23Data,
    belloutlineProps: belloutline26Data,
    frame2848Props: frame28489Data,
};

const frame2893Data = {
    children: "SUN",
};

const frame28932Data = {
    children: "THU",
};

const frame29002Data = {
    mon: "MON",
    tue: "TUE",
    wed: "WED",
    fri: "FRI",
    sat: "SAT",
    frame2893Props: frame2893Data,
    frame28932Props: frame28932Data,
};

const frame198832Data = {
    children: "Nov 8",
};

const frame202822Data = {
    frame19883Props: frame198832Data,
};

const frame198842Data = {
    children: "Nov 15",
};

const frame203522Data = {
    frame19884Props: frame198842Data,
};

const frame198852Data = {
    children: "Nov 22",
};

const frame204222Data = {
    frame19885Props: frame198852Data,
};

const frame198833Data = {
    children: "Nov 2",
};

const frame202823Data = {
    frame19883Props: frame198833Data,
};

const frame198834Data = {
    children: "Nov 9",
};

const frame202824Data = {
    frame19883Props: frame198834Data,
};

const frame198843Data = {
    children: "Nov 16",
};

const frame203523Data = {
    frame19884Props: frame198843Data,
};

const frame198853Data = {
    children: "Nov 23",
};

const frame204223Data = {
    frame19885Props: frame198853Data,
};

const frame2050Data = {
    children: "Nov 30",
};

const frame198835Data = {
    children: "Nov 3",
};

const frame202825Data = {
    frame19883Props: frame198835Data,
};

const frame198844Data = {
    children: "Nov 10",
};

const frame20302Data = {
    callWithNewFar: "Call with new far…",
    x0300PmFindAn: "03:00 pm find an…",
    address: "2 more events",
    frame19884Props: frame198844Data,
};

const frame203722Data = {
    children: "Nov 17",
};

const frame198854Data = {
    children: "Nov 24",
};

const frame204224Data = {
    frame19885Props: frame198854Data,
};

const frame20512Data = {
    children: "Dec 1",
};

const frame2024Data = {
    children: "Nov 4",
};

const frame20312Data = {
    children: "Nov 11",
};

const frame198845Data = {
    children: "Nov 18",
};

const frame203524Data = {
    frame19884Props: frame198845Data,
};

const frame198855Data = {
    children: "Nov 25",
};

const frame204225Data = {
    frame19885Props: frame198855Data,
};

const frame198836Data = {
    children: "Dec 2",
};

const frame20522Data = {
    frame19883Props: frame198836Data,
};

const frame198837Data = {
    children: "Nov 5",
};

const frame20252Data = {
    findNewPlace: "Find new place…",
    frame19883Props: frame198837Data,
};

const frame203723Data = {
    children: "Nov 12",
};

const frame198846Data = {
    children: "Nov 19",
};

const frame20392Data = {
    frame19884Props: frame198846Data,
};

const frame198856Data = {
    children: "Nov 26",
};

const frame2046Data = {
    frame19885Props: frame198856Data,
};

const frame198838Data = {
    children: "Dec 3",
};

const frame202826Data = {
    frame19883Props: frame198838Data,
};

const frame198839Data = {
    children: "Nov 6",
};

const frame202827Data = {
    frame19883Props: frame198839Data,
};

const frame198847Data = {
    children: "Nov 13",
};

const frame203922Data = {
    frame19884Props: frame198847Data,
};

const frame198857Data = {
    children: "Nov 20",
};

const frame20462Data = {
    frame19885Props: frame198857Data,
};

const frame2047Data = {
    children: "Nov 27",
};

const frame1988310Data = {
    children: "Dec 4",
};

const frame202828Data = {
    frame19883Props: frame1988310Data,
};

const frame198848Data = {
    children: "Nov 14",
};

const frame20342Data = {
    frame19884Props: frame198848Data,
};

const frame20412Data = {
    children: "Nov 21",
};

const frame20482Data = {
    children: "Nov 28",
};

const frame2056Data = {
    children: "Farm meeting",
};

const frame2061Data = {
    children: "Engenier meeting",
};

const frame2064Data = {
    children: "Call with client",
};

const frame2074Data = {
    text830: "Call with new farmers for enterprises",
};

const frame20742Data = {
    text830: "03:00pm find any new farms for upgrade",
};

const frame20743Data = {
    text830: "Farm call",
};

const frame20744Data = {
    text830: "Business discussion",
};

const frame20745Data = {
    text830: "Business partners meeting",
};

const close9Data = {
    vector: "/img/vector-678@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2310Data = {
    closeProps: close9Data,
};

const closeoutline13Data = {
    layer23Props: layer2310Data,
};

const frame2065Data = {
    sunday: "SUNDAY",
    date: "November 1, 2020",
    myEvents: "My events:",
    frame2074Props: frame2074Data,
    frame20742Props: frame20742Data,
    frame20743Props: frame20743Data,
    frame20744Props: frame20744Data,
    frame20745Props: frame20745Data,
    closeoutline1Props: closeoutline13Data,
};

const personaddoutline213Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const trashoutline1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-623@2x.png",
};

const frame207922Data = {
    addMembers: "Add members",
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-621@2x.png",
    editEvent: "Edit event",
    deleteEvent: "Delete event",
    personaddoutline2Props: personaddoutline213Data,
    trashoutline1Props: trashoutline1Data,
};

const frame2901Data = {
    frame1987: "/img/frame-1987-1@2x.png",
    frame2049: "/img/frame-2049-1@2x.png",
    frame2027: "/img/frame-2027-1@2x.png",
    frame2055: "/img/frame-2055-1@2x.png",
    frame29002Props: frame29002Data,
    frame20282Props: frame202822Data,
    frame20352Props: frame203522Data,
    frame20422Props: frame204222Data,
    frame202822Props: frame202823Data,
    frame202823Props: frame202824Data,
    frame203522Props: frame203523Data,
    frame204222Props: frame204223Data,
    frame2050Props: frame2050Data,
    frame202824Props: frame202825Data,
    frame20302Props: frame20302Data,
    frame20372Props: frame203722Data,
    frame204223Props: frame204224Data,
    frame20512Props: frame20512Data,
    frame2024Props: frame2024Data,
    frame20312Props: frame20312Data,
    frame203523Props: frame203524Data,
    frame204224Props: frame204225Data,
    frame20522Props: frame20522Data,
    frame20252Props: frame20252Data,
    frame203722Props: frame203723Data,
    frame20392Props: frame20392Data,
    frame2046Props: frame2046Data,
    frame202825Props: frame202826Data,
    frame202826Props: frame202827Data,
    frame203922Props: frame203922Data,
    frame20462Props: frame20462Data,
    frame2047Props: frame2047Data,
    frame202827Props: frame202828Data,
    frame20342Props: frame20342Data,
    frame20412Props: frame20412Data,
    frame20482Props: frame20482Data,
    frame2056Props: frame2056Data,
    frame2061Props: frame2061Data,
    frame2064Props: frame2064Data,
    frame2065Props: frame2065Data,
    frame20792Props: frame207922Data,
};

const chevronrightoutline23Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline24Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame202322Data = {
    chevronrightoutline2Props: chevronrightoutline23Data,
    chevronrightoutline22Props: chevronrightoutline24Data,
};

const frame29022Data = {
    november2020: "November 2020",
    addNewEvent: "Add new event",
    frame20232Props: frame202322Data,
};

const grid27Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289134Data = {
    gridProps: grid27Data,
};

const frame30Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194525Data = {
    frame2891Props: frame289134Data,
    frameProps: frame30Data,
};

const usermanagement27Data = {
    vector: "/img/vector-645@2x.png",
    vector2: "/img/vector-646@2x.png",
    vector3: "/img/vector-647@2x.png",
    vector4: "/img/vector-648@2x.png",
    vector5: "/img/vector-649@2x.png",
    vector6: "/img/vector-650@2x.png",
};

const frame195326Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement27Data,
};

const frame284711Data = {
    frame1953Props: frame195326Data,
};

const frame197417Data = {
    children: "Groups",
};

const frame1975210Data = {
    children: "Members",
};

const frame197418Data = {
    children: "Enterprises",
};

const frame194428Data = {
    frame2847Props: frame284711Data,
    frame1974Props: frame197417Data,
    frame19752Props: frame1975210Data,
    frame19742Props: frame197418Data,
};

const book32Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194726Data = {
    text41: "Library",
    bookProps: book32Data,
};

const frame194826Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230327Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849651Data = {
    children: "Mo",
};

const frame2849652Data = {
    children: "1",
};

const frame2849653Data = {
    children: "8",
};

const frame2849654Data = {
    children: "15",
};

const frame2849655Data = {
    children: "22",
};

const frame2849656Data = {
    children: "Tu",
};

const frame2857105Data = {
    children: "2",
};

const frame2849657Data = {
    children: "9",
};

const frame2849658Data = {
    children: "16",
};

const frame2849659Data = {
    children: "23",
};

const frame2885131Data = {
    children: "30",
};

const frame2849660Data = {
    children: "We",
};

const frame2857106Data = {
    children: "3",
};

const frame2849661Data = {
    children: "10",
};

const frame2849662Data = {
    children: "17",
};

const frame2849663Data = {
    children: "24",
};

const frame2885132Data = {
    children: "1",
};

const frame2849664Data = {
    children: "Th",
};

const frame2849665Data = {
    children: "4",
};

const frame2849666Data = {
    children: "11",
};

const frame2849667Data = {
    children: "25",
};

const frame2885133Data = {
    children: "2",
};

const frame2849668Data = {
    children: "Fr",
};

const frame2857107Data = {
    children: "5",
};

const frame2849669Data = {
    children: "12",
};

const frame2849670Data = {
    children: "19",
};

const frame2849671Data = {
    children: "26",
};

const frame2885134Data = {
    children: "3",
};

const frame2849672Data = {
    children: "Sa",
};

const frame2857108Data = {
    children: "6",
};

const frame2849673Data = {
    children: "13",
};

const frame2849674Data = {
    children: "20",
};

const frame2849675Data = {
    children: "27",
};

const frame2885135Data = {
    children: "4",
};

const frame2855105Data = {
    children: "Su",
};

const frame2855106Data = {
    children: "14",
};

const frame2855107Data = {
    children: "21",
};

const frame2855108Data = {
    children: "28",
};

const group194227Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849651Data,
    frame28492Props: frame2849652Data,
    frame28493Props: frame2849653Data,
    frame28494Props: frame2849654Data,
    frame28495Props: frame2849655Data,
    frame28496Props: frame2849656Data,
    frame2857Props: frame2857105Data,
    frame28497Props: frame2849657Data,
    frame28498Props: frame2849658Data,
    frame28499Props: frame2849659Data,
    frame2885Props: frame2885131Data,
    frame284910Props: frame2849660Data,
    frame28572Props: frame2857106Data,
    frame284911Props: frame2849661Data,
    frame284912Props: frame2849662Data,
    frame284913Props: frame2849663Data,
    frame28852Props: frame2885132Data,
    frame284914Props: frame2849664Data,
    frame284915Props: frame2849665Data,
    frame284916Props: frame2849666Data,
    frame284917Props: frame2849667Data,
    frame28853Props: frame2885133Data,
    frame284918Props: frame2849668Data,
    frame28573Props: frame2857107Data,
    frame284919Props: frame2849669Data,
    frame284920Props: frame2849670Data,
    frame284921Props: frame2849671Data,
    frame28854Props: frame2885134Data,
    frame284922Props: frame2849672Data,
    frame28574Props: frame2857108Data,
    frame284923Props: frame2849673Data,
    frame284924Props: frame2849674Data,
    frame284925Props: frame2849675Data,
    frame28855Props: frame2885135Data,
    frame2855Props: frame2855105Data,
    frame28552Props: frame2855106Data,
    frame28553Props: frame2855107Data,
    frame28554Props: frame2855108Data,
};

const frame279115Data = {
    text108: "View calendar",
    group1942Props: group194227Data,
};

const chevronsLeft51Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft52Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891227Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft51Data,
    chevronsLeft2Props: chevronsLeft52Data,
};

const group194314Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279115Data,
    frame28912Props: frame2891227Data,
};

const frame194322Data = {
    frame1945Props: frame194525Data,
    frame19442Props: frame194428Data,
    frame1947Props: frame194726Data,
    frame1948Props: frame194826Data,
    frame2303Props: frame230327Data,
    group1943Props: group194314Data,
};

const close10Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2311Data = {
    closeProps: close10Data,
};

const plusoutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-772@2x.png",
};

const X44CalendarAddNewEventData = {
    addNewEvent: "Add new event",
    spanText: "Title",
    spanText2: "*",
    spanText3: "Choose date",
    spanText4: "*",
    startTime: "Start time",
    addEvent: "Add event",
    addMembers: "Add members",
    frame19544Props: frame195448Data,
    frame2901Props: frame2901Data,
    frame29022Props: frame29022Data,
    frame194322Props: frame194322Data,
    layer23Props: layer2311Data,
    plusoutline1Props: plusoutline13Data,
};

const email27Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2228Data = {
    emailProps: email27Data,
};

const emailoutline24Data = {
    layer22Props: layer2228Data,
};

const belloutline27Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline127Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284810Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline127Data,
};

const frame195449Data = {
    ragrariansI520753: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline24Data,
    belloutlineProps: belloutline27Data,
    frame2848Props: frame284810Data,
};

const iconsArrowsLeft16Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29235Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft16Data,
};

const backbtn24Data = {
    frame2923Props: frame29235Data,
};

const videooutline4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame33185Data = {
    text116: "Add video",
    videooutlineProps: videooutline4Data,
};

const frame33172Data = {
    frame3318Props: frame33185Data,
};

const cameraoutline4Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame331832Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutline4Data,
};

const frame331822Data = {
    frame33183Props: frame331832Data,
};

const filetextoutline7Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame331842Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutline7Data,
};

const frame33192Data = {
    frame33184Props: frame331842Data,
};

const frame19394Data = {
    frame3317Props: frame33172Data,
    frame33182Props: frame331822Data,
    frame3319Props: frame33192Data,
};

const grid28Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289135Data = {
    gridProps: grid28Data,
};

const frame31Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194526Data = {
    frame2891Props: frame289135Data,
    frameProps: frame31Data,
};

const usermanagement28Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195327Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement28Data,
};

const frame284712Data = {
    frame1953Props: frame195327Data,
};

const frame19768Data = {
    children: "Groups",
};

const frame19756Data = {
    children: "Members",
};

const frame19769Data = {
    children: "Enterprises",
};

const frame19443Data = {
    frame2847Props: frame284712Data,
    frame1976Props: frame19768Data,
    frame1975Props: frame19756Data,
    frame19762Props: frame19769Data,
};

const book33Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194727Data = {
    text41: "Library",
    bookProps: book33Data,
};

const frame194827Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230328Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849676Data = {
    children: "Mo",
};

const frame2849677Data = {
    children: "1",
};

const frame2849678Data = {
    children: "8",
};

const frame2849679Data = {
    children: "15",
};

const frame2849680Data = {
    children: "22",
};

const frame2849681Data = {
    children: "Tu",
};

const frame2857109Data = {
    children: "2",
};

const frame2849682Data = {
    children: "9",
};

const frame2849683Data = {
    children: "16",
};

const frame2849684Data = {
    children: "23",
};

const frame2885136Data = {
    children: "30",
};

const frame2849685Data = {
    children: "We",
};

const frame2857110Data = {
    children: "3",
};

const frame2849686Data = {
    children: "10",
};

const frame2849687Data = {
    children: "17",
};

const frame2849688Data = {
    children: "24",
};

const frame2885137Data = {
    children: "1",
};

const frame2849689Data = {
    children: "Th",
};

const frame2849690Data = {
    children: "4",
};

const frame2849691Data = {
    children: "11",
};

const frame2849692Data = {
    children: "25",
};

const frame2885138Data = {
    children: "2",
};

const frame2849693Data = {
    children: "Fr",
};

const frame2857111Data = {
    children: "5",
};

const frame2849694Data = {
    children: "12",
};

const frame2849695Data = {
    children: "19",
};

const frame2849696Data = {
    children: "26",
};

const frame2885139Data = {
    children: "3",
};

const frame2849697Data = {
    children: "Sa",
};

const frame2857112Data = {
    children: "6",
};

const frame2849698Data = {
    children: "13",
};

const frame2849699Data = {
    children: "20",
};

const frame2849700Data = {
    children: "27",
};

const frame2885140Data = {
    children: "4",
};

const frame2855109Data = {
    children: "Su",
};

const frame2855110Data = {
    children: "14",
};

const frame2855111Data = {
    children: "21",
};

const frame2855112Data = {
    children: "28",
};

const group194228Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849676Data,
    frame28492Props: frame2849677Data,
    frame28493Props: frame2849678Data,
    frame28494Props: frame2849679Data,
    frame28495Props: frame2849680Data,
    frame28496Props: frame2849681Data,
    frame2857Props: frame2857109Data,
    frame28497Props: frame2849682Data,
    frame28498Props: frame2849683Data,
    frame28499Props: frame2849684Data,
    frame2885Props: frame2885136Data,
    frame284910Props: frame2849685Data,
    frame28572Props: frame2857110Data,
    frame284911Props: frame2849686Data,
    frame284912Props: frame2849687Data,
    frame284913Props: frame2849688Data,
    frame28852Props: frame2885137Data,
    frame284914Props: frame2849689Data,
    frame284915Props: frame2849690Data,
    frame284916Props: frame2849691Data,
    frame284917Props: frame2849692Data,
    frame28853Props: frame2885138Data,
    frame284918Props: frame2849693Data,
    frame28573Props: frame2857111Data,
    frame284919Props: frame2849694Data,
    frame284920Props: frame2849695Data,
    frame284921Props: frame2849696Data,
    frame28854Props: frame2885139Data,
    frame284922Props: frame2849697Data,
    frame28574Props: frame2857112Data,
    frame284923Props: frame2849698Data,
    frame284924Props: frame2849699Data,
    frame284925Props: frame2849700Data,
    frame28855Props: frame2885140Data,
    frame2855Props: frame2855109Data,
    frame28552Props: frame2855110Data,
    frame28553Props: frame2855111Data,
    frame28554Props: frame2855112Data,
};

const frame279116Data = {
    text108: "View calendar",
    group1942Props: group194228Data,
};

const chevronsLeft53Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft54Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891228Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft53Data,
    chevronsLeft2Props: chevronsLeft54Data,
};

const group194315Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279116Data,
    frame28912Props: frame2891228Data,
};

const frame194332Data = {
    frame1945Props: frame194526Data,
    frame1944Props: frame19443Data,
    frame1947Props: frame194727Data,
    frame1948Props: frame194827Data,
    frame2303Props: frame230328Data,
    group1943Props: group194315Data,
};

const close11Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2312Data = {
    closeProps: close11Data,
};

const frame55Data = {
    children: "Choose video",
};

const X32AddNewsvideo2Data = {
    writeTitleHere: "Write title here",
    text: "",
    addVideo: "Add video",
    spanText: "Video title",
    spanText2: "*",
    videoDescription: "Video description",
    text884: "Drag & Drop files in this area or Click Here to attach video cover",
    addVideoBlock: "Add video block",
    videoLink: "Video link",
    or: "OR",
    frame19544Props: frame195449Data,
    backbtn2Props: backbtn24Data,
    frame1939Props: frame19394Data,
    frame19433Props: frame194332Data,
    layer23Props: layer2312Data,
    frame5Props: frame55Data,
};

const email28Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2229Data = {
    emailProps: email28Data,
};

const emailoutline25Data = {
    layer22Props: layer2229Data,
};

const belloutline28Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline128Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284811Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline128Data,
};

const frame1954410Data = {
    ragrariansI520753: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline25Data,
    belloutlineProps: belloutline28Data,
    frame2848Props: frame284811Data,
};

const frame28933Data = {
    children: "SUN",
};

const frame28934Data = {
    children: "THU",
};

const frame290022Data = {
    mon: "MON",
    tue: "TUE",
    wed: "WED",
    fri: "FRI",
    sat: "SAT",
    frame2893Props: frame28933Data,
    frame28932Props: frame28934Data,
};

const frame1988311Data = {
    children: "Nov 8",
};

const frame202829Data = {
    frame19883Props: frame1988311Data,
};

const frame198849Data = {
    children: "Nov 15",
};

const frame203525Data = {
    frame19884Props: frame198849Data,
};

const frame198858Data = {
    children: "Nov 22",
};

const frame204226Data = {
    frame19885Props: frame198858Data,
};

const frame1988312Data = {
    children: "Nov 2",
};

const frame2028210Data = {
    frame19883Props: frame1988312Data,
};

const frame1988313Data = {
    children: "Nov 9",
};

const frame2028211Data = {
    frame19883Props: frame1988313Data,
};

const frame1988410Data = {
    children: "Nov 16",
};

const frame203526Data = {
    frame19884Props: frame1988410Data,
};

const frame198859Data = {
    children: "Nov 23",
};

const frame204227Data = {
    frame19885Props: frame198859Data,
};

const frame20502Data = {
    children: "Nov 30",
};

const frame1988314Data = {
    children: "Nov 3",
};

const frame2028212Data = {
    frame19883Props: frame1988314Data,
};

const frame1988411Data = {
    children: "Nov 10",
};

const frame203022Data = {
    callWithNewFar: "Call with new far…",
    x0300PmFindAn: "03:00 pm find an…",
    address: "2 more events",
    frame19884Props: frame1988411Data,
};

const frame203724Data = {
    children: "Nov 17",
};

const frame1988510Data = {
    children: "Nov 24",
};

const frame204228Data = {
    frame19885Props: frame1988510Data,
};

const frame205122Data = {
    children: "Dec 1",
};

const frame20242Data = {
    children: "Nov 4",
};

const frame203122Data = {
    children: "Nov 11",
};

const frame1988412Data = {
    children: "Nov 18",
};

const frame203527Data = {
    frame19884Props: frame1988412Data,
};

const frame1988511Data = {
    children: "Nov 25",
};

const frame204229Data = {
    frame19885Props: frame1988511Data,
};

const frame1988315Data = {
    children: "Dec 2",
};

const frame205222Data = {
    frame19883Props: frame1988315Data,
};

const frame1988316Data = {
    children: "Nov 5",
};

const frame202522Data = {
    findNewPlace: "Find new place…",
    frame19883Props: frame1988316Data,
};

const frame203725Data = {
    children: "Nov 12",
};

const frame1988413Data = {
    children: "Nov 19",
};

const frame203923Data = {
    frame19884Props: frame1988413Data,
};

const frame1988512Data = {
    children: "Nov 26",
};

const frame20463Data = {
    frame19885Props: frame1988512Data,
};

const frame1988317Data = {
    children: "Dec 3",
};

const frame2028213Data = {
    frame19883Props: frame1988317Data,
};

const frame1988318Data = {
    children: "Nov 6",
};

const frame2028214Data = {
    frame19883Props: frame1988318Data,
};

const frame1988414Data = {
    children: "Nov 13",
};

const frame203924Data = {
    frame19884Props: frame1988414Data,
};

const frame1988513Data = {
    children: "Nov 20",
};

const frame20464Data = {
    frame19885Props: frame1988513Data,
};

const frame20472Data = {
    children: "Nov 27",
};

const frame1988319Data = {
    children: "Dec 4",
};

const frame2028215Data = {
    frame19883Props: frame1988319Data,
};

const frame1988415Data = {
    children: "Nov 14",
};

const frame203422Data = {
    frame19884Props: frame1988415Data,
};

const frame204122Data = {
    children: "Nov 21",
};

const frame204822Data = {
    children: "Nov 28",
};

const frame20562Data = {
    children: "Farm meeting",
};

const frame20612Data = {
    children: "Engenier meeting",
};

const frame20642Data = {
    children: "Call with client",
};

const frame20746Data = {
    text830: "Call with new farmers for enterprises",
};

const frame20747Data = {
    text830: "03:00pm find any new farms for upgrade",
};

const frame20748Data = {
    text830: "Farm call",
};

const frame20749Data = {
    text830: "Business discussion",
};

const frame207410Data = {
    text830: "Business partners meeting",
};

const close12Data = {
    vector: "/img/vector-678@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2313Data = {
    closeProps: close12Data,
};

const closeoutline14Data = {
    layer23Props: layer2313Data,
};

const frame20652Data = {
    sunday: "SUNDAY",
    date: "November 1, 2020",
    myEvents: "My events:",
    frame2074Props: frame20746Data,
    frame20742Props: frame20747Data,
    frame20743Props: frame20748Data,
    frame20744Props: frame20749Data,
    frame20745Props: frame207410Data,
    closeoutline1Props: closeoutline14Data,
};

const personaddoutline214Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const trashoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-623@2x.png",
};

const frame207923Data = {
    addMembers: "Add members",
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-621@2x.png",
    editEvent: "Edit event",
    deleteEvent: "Delete event",
    personaddoutline2Props: personaddoutline214Data,
    trashoutline1Props: trashoutline12Data,
};

const frame29012Data = {
    frame1987: "/img/frame-1987-1@2x.png",
    frame2049: "/img/frame-2049-1@2x.png",
    frame2027: "/img/frame-2027-1@2x.png",
    frame2055: "/img/frame-2055-1@2x.png",
    frame29002Props: frame290022Data,
    frame20282Props: frame202829Data,
    frame20352Props: frame203525Data,
    frame20422Props: frame204226Data,
    frame202822Props: frame2028210Data,
    frame202823Props: frame2028211Data,
    frame203522Props: frame203526Data,
    frame204222Props: frame204227Data,
    frame2050Props: frame20502Data,
    frame202824Props: frame2028212Data,
    frame20302Props: frame203022Data,
    frame20372Props: frame203724Data,
    frame204223Props: frame204228Data,
    frame20512Props: frame205122Data,
    frame2024Props: frame20242Data,
    frame20312Props: frame203122Data,
    frame203523Props: frame203527Data,
    frame204224Props: frame204229Data,
    frame20522Props: frame205222Data,
    frame20252Props: frame202522Data,
    frame203722Props: frame203725Data,
    frame20392Props: frame203923Data,
    frame2046Props: frame20463Data,
    frame202825Props: frame2028213Data,
    frame202826Props: frame2028214Data,
    frame203922Props: frame203924Data,
    frame20462Props: frame20464Data,
    frame2047Props: frame20472Data,
    frame202827Props: frame2028215Data,
    frame20342Props: frame203422Data,
    frame20412Props: frame204122Data,
    frame20482Props: frame204822Data,
    frame2056Props: frame20562Data,
    frame2061Props: frame20612Data,
    frame2064Props: frame20642Data,
    frame2065Props: frame20652Data,
    frame20792Props: frame207923Data,
};

const chevronrightoutline25Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline26Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame202323Data = {
    chevronrightoutline2Props: chevronrightoutline25Data,
    chevronrightoutline22Props: chevronrightoutline26Data,
};

const frame290222Data = {
    november2020: "November 2020",
    addNewEvent: "Add new event",
    frame20232Props: frame202323Data,
};

const grid29Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289136Data = {
    gridProps: grid29Data,
};

const frame32Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194527Data = {
    frame2891Props: frame289136Data,
    frameProps: frame32Data,
};

const usermanagement29Data = {
    vector: "/img/vector-645@2x.png",
    vector2: "/img/vector-646@2x.png",
    vector3: "/img/vector-647@2x.png",
    vector4: "/img/vector-648@2x.png",
    vector5: "/img/vector-649@2x.png",
    vector6: "/img/vector-650@2x.png",
};

const frame195328Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement29Data,
};

const frame284713Data = {
    frame1953Props: frame195328Data,
};

const frame197419Data = {
    children: "Groups",
};

const frame1975211Data = {
    children: "Members",
};

const frame197420Data = {
    children: "Enterprises",
};

const frame194429Data = {
    frame2847Props: frame284713Data,
    frame1974Props: frame197419Data,
    frame19752Props: frame1975211Data,
    frame19742Props: frame197420Data,
};

const book34Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194728Data = {
    text41: "Library",
    bookProps: book34Data,
};

const frame194828Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230329Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849701Data = {
    children: "Mo",
};

const frame2849702Data = {
    children: "1",
};

const frame2849703Data = {
    children: "8",
};

const frame2849704Data = {
    children: "15",
};

const frame2849705Data = {
    children: "22",
};

const frame2849706Data = {
    children: "Tu",
};

const frame2857113Data = {
    children: "2",
};

const frame2849707Data = {
    children: "9",
};

const frame2849708Data = {
    children: "16",
};

const frame2849709Data = {
    children: "23",
};

const frame2885141Data = {
    children: "30",
};

const frame2849710Data = {
    children: "We",
};

const frame2857114Data = {
    children: "3",
};

const frame2849711Data = {
    children: "10",
};

const frame2849712Data = {
    children: "17",
};

const frame2849713Data = {
    children: "24",
};

const frame2885142Data = {
    children: "1",
};

const frame2849714Data = {
    children: "Th",
};

const frame2849715Data = {
    children: "4",
};

const frame2849716Data = {
    children: "11",
};

const frame2849717Data = {
    children: "25",
};

const frame2885143Data = {
    children: "2",
};

const frame2849718Data = {
    children: "Fr",
};

const frame2857115Data = {
    children: "5",
};

const frame2849719Data = {
    children: "12",
};

const frame2849720Data = {
    children: "19",
};

const frame2849721Data = {
    children: "26",
};

const frame2885144Data = {
    children: "3",
};

const frame2849722Data = {
    children: "Sa",
};

const frame2857116Data = {
    children: "6",
};

const frame2849723Data = {
    children: "13",
};

const frame2849724Data = {
    children: "20",
};

const frame2849725Data = {
    children: "27",
};

const frame2885145Data = {
    children: "4",
};

const frame2855113Data = {
    children: "Su",
};

const frame2855114Data = {
    children: "14",
};

const frame2855115Data = {
    children: "21",
};

const frame2855116Data = {
    children: "28",
};

const group194229Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849701Data,
    frame28492Props: frame2849702Data,
    frame28493Props: frame2849703Data,
    frame28494Props: frame2849704Data,
    frame28495Props: frame2849705Data,
    frame28496Props: frame2849706Data,
    frame2857Props: frame2857113Data,
    frame28497Props: frame2849707Data,
    frame28498Props: frame2849708Data,
    frame28499Props: frame2849709Data,
    frame2885Props: frame2885141Data,
    frame284910Props: frame2849710Data,
    frame28572Props: frame2857114Data,
    frame284911Props: frame2849711Data,
    frame284912Props: frame2849712Data,
    frame284913Props: frame2849713Data,
    frame28852Props: frame2885142Data,
    frame284914Props: frame2849714Data,
    frame284915Props: frame2849715Data,
    frame284916Props: frame2849716Data,
    frame284917Props: frame2849717Data,
    frame28853Props: frame2885143Data,
    frame284918Props: frame2849718Data,
    frame28573Props: frame2857115Data,
    frame284919Props: frame2849719Data,
    frame284920Props: frame2849720Data,
    frame284921Props: frame2849721Data,
    frame28854Props: frame2885144Data,
    frame284922Props: frame2849722Data,
    frame28574Props: frame2857116Data,
    frame284923Props: frame2849723Data,
    frame284924Props: frame2849724Data,
    frame284925Props: frame2849725Data,
    frame28855Props: frame2885145Data,
    frame2855Props: frame2855113Data,
    frame28552Props: frame2855114Data,
    frame28553Props: frame2855115Data,
    frame28554Props: frame2855116Data,
};

const frame279117Data = {
    text108: "View calendar",
    group1942Props: group194229Data,
};

const chevronsLeft55Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft56Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891229Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft55Data,
    chevronsLeft2Props: chevronsLeft56Data,
};

const group194316Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279117Data,
    frame28912Props: frame2891229Data,
};

const frame1943222Data = {
    frame1945Props: frame194527Data,
    frame19442Props: frame194429Data,
    frame1947Props: frame194728Data,
    frame1948Props: frame194828Data,
    frame2303Props: frame230329Data,
    group1943Props: group194316Data,
};

const close13Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2314Data = {
    closeProps: close13Data,
};

const plusoutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-772@2x.png",
};

const frame3642Data = {
    am: "AM",
    pm: "PM",
};

const X45CalendarAddNewEventData = {
    addNewEvent: "Add new event",
    spanText: "Title",
    spanText2: "*",
    text910: "Call with new farmers for enterprises",
    addEvent: "Add event",
    addMembers: "Add members",
    spanText3: "Start date",
    spanText4: "*",
    phone: "11/01/2020",
    startTime: "Start time",
    x0300Am: "03:00 AM",
    frame19544Props: frame1954410Data,
    frame2901Props: frame29012Data,
    frame29022Props: frame290222Data,
    frame194322Props: frame1943222Data,
    layer23Props: layer2314Data,
    plusoutline1Props: plusoutline14Data,
    frame3642Props: frame3642Data,
};

const email29Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2230Data = {
    emailProps: email29Data,
};

const belloutline29Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline129Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195419Data = {
    ragrariansI1166412: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    text911: "My dashboard",
    layer22Props: layer2230Data,
    belloutlineProps: belloutline29Data,
    personoutline1Props: personoutline129Data,
};

const grid30Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289137Data = {
    gridProps: grid30Data,
};

const frame33Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-327@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-798@2x.png",
};

const frame194528Data = {
    frame2891Props: frame289137Data,
    frameProps: frame33Data,
};

const usermanagement30Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195329Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement30Data,
};

const book35Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194729Data = {
    text41: "Library",
    bookProps: book35Data,
};

const frame194829Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230330Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849726Data = {
    children: "Mo",
};

const frame2849727Data = {
    children: "1",
};

const frame2849728Data = {
    children: "8",
};

const frame2849729Data = {
    children: "15",
};

const frame2849730Data = {
    children: "22",
};

const frame2849731Data = {
    children: "Tu",
};

const frame2857117Data = {
    children: "2",
};

const frame2849732Data = {
    children: "9",
};

const frame2849733Data = {
    children: "16",
};

const frame2849734Data = {
    children: "23",
};

const frame2885146Data = {
    children: "30",
};

const frame2849735Data = {
    children: "We",
};

const frame2857118Data = {
    children: "3",
};

const frame2849736Data = {
    children: "10",
};

const frame2849737Data = {
    children: "17",
};

const frame2849738Data = {
    children: "24",
};

const frame2885147Data = {
    children: "1",
};

const frame2849739Data = {
    children: "Th",
};

const frame2849740Data = {
    children: "4",
};

const frame2849741Data = {
    children: "11",
};

const frame2849742Data = {
    children: "25",
};

const frame2885148Data = {
    children: "2",
};

const frame2849743Data = {
    children: "Fr",
};

const frame2857119Data = {
    children: "5",
};

const frame2849744Data = {
    children: "12",
};

const frame2849745Data = {
    children: "19",
};

const frame2849746Data = {
    children: "26",
};

const frame2885149Data = {
    children: "3",
};

const frame2849747Data = {
    children: "Sa",
};

const frame2857120Data = {
    children: "6",
};

const frame2849748Data = {
    children: "13",
};

const frame2849749Data = {
    children: "20",
};

const frame2849750Data = {
    children: "27",
};

const frame2885150Data = {
    children: "4",
};

const frame2855117Data = {
    children: "Su",
};

const frame2855118Data = {
    children: "14",
};

const frame2855119Data = {
    children: "21",
};

const frame2855120Data = {
    children: "28",
};

const group194230Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849726Data,
    frame28492Props: frame2849727Data,
    frame28493Props: frame2849728Data,
    frame28494Props: frame2849729Data,
    frame28495Props: frame2849730Data,
    frame28496Props: frame2849731Data,
    frame2857Props: frame2857117Data,
    frame28497Props: frame2849732Data,
    frame28498Props: frame2849733Data,
    frame28499Props: frame2849734Data,
    frame2885Props: frame2885146Data,
    frame284910Props: frame2849735Data,
    frame28572Props: frame2857118Data,
    frame284911Props: frame2849736Data,
    frame284912Props: frame2849737Data,
    frame284913Props: frame2849738Data,
    frame28852Props: frame2885147Data,
    frame284914Props: frame2849739Data,
    frame284915Props: frame2849740Data,
    frame284916Props: frame2849741Data,
    frame284917Props: frame2849742Data,
    frame28853Props: frame2885148Data,
    frame284918Props: frame2849743Data,
    frame28573Props: frame2857119Data,
    frame284919Props: frame2849744Data,
    frame284920Props: frame2849745Data,
    frame284921Props: frame2849746Data,
    frame28854Props: frame2885149Data,
    frame284922Props: frame2849747Data,
    frame28574Props: frame2857120Data,
    frame284923Props: frame2849748Data,
    frame284924Props: frame2849749Data,
    frame284925Props: frame2849750Data,
    frame28855Props: frame2885150Data,
    frame2855Props: frame2855117Data,
    frame28552Props: frame2855118Data,
    frame28553Props: frame2855119Data,
    frame28554Props: frame2855120Data,
};

const chevronsLeft57Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft58Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891230Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft57Data,
    chevronsLeft2Props: chevronsLeft58Data,
};

const frame194323Data = {
    text913: "Groups",
    text914: "Members",
    text915: "Enterprises",
    text931: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194528Data,
    frame1953Props: frame195329Data,
    frame1947Props: frame194729Data,
    frame1948Props: frame194829Data,
    frame2303Props: frame230330Data,
    group1942Props: group194230Data,
    frame28912Props: frame2891230Data,
};

const chevronrightoutline27Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline28Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame202324Data = {
    chevronrightoutline2Props: chevronrightoutline27Data,
    chevronrightoutline22Props: chevronrightoutline28Data,
};

const frame542Data = {
    children: "Today",
};

const frame29023Data = {
    text933: "November 2020",
    text934: "Add new event",
    frame20232Props: frame202324Data,
    frame54Props: frame542Data,
};

const frame19812Data = {
    children: "My events",
};

const frame34642Data = {
    enterprisesEvents: "Enterprises events",
    groupsEvents: "Groups events",
    frame1981Props: frame19812Data,
};

const frame28943Data = {
    children: "MON",
};

const frame28944Data = {
    children: "WED",
};

const frame29003Data = {
    place: "SUN",
    tue: "TUE",
    thu: "THU",
    fri: "FRI",
    sat: "SAT",
    frame2894Props: frame28943Data,
    frame28942Props: frame28944Data,
};

const frame198810Data = {
    children: "Nov 6",
};

const frame20285Data = {
    frame1988Props: frame198810Data,
};

const frame1988218Data = {
    children: "Nov 13",
};

const frame20356Data = {
    frame19882Props: frame1988218Data,
};

const frame1988219Data = {
    children: "Nov 20",
};

const frame20426Data = {
    frame19882Props: frame1988219Data,
};

const frame20222Data = {
    children: "Oct 31",
};

const frame198811Data = {
    children: "Nov 7",
};

const frame20286Data = {
    frame1988Props: frame198811Data,
};

const frame1988220Data = {
    children: "Nov 14",
};

const frame20357Data = {
    frame19882Props: frame1988220Data,
};

const frame1988221Data = {
    children: "Nov 21",
};

const frame20427Data = {
    frame19882Props: frame1988221Data,
};

const frame1988222Data = {
    children: "Nov 28",
};

const frame20428Data = {
    frame19882Props: frame1988222Data,
};

const frame198812Data = {
    children: "Nov 1",
};

const frame34714Data = {
    children: "02:30 pm Call wi…",
};

const frame20623Data = {
    x0300PmFindAn: "03:00 pm find an…",
    x3Events: "3+ events",
    frame3471Props: frame34714Data,
};

const frame20233Data = {
    frame1988Props: frame198812Data,
    frame2062Props: frame20623Data,
};

const frame198813Data = {
    children: "Nov 8",
};

const frame34715Data = {
    children: "02:30 pm Call wi…",
};

const frame20624Data = {
    x0300PmFindAn: "03:00 pm find an…",
    x3Events: "3+ events",
    frame3471Props: frame34715Data,
};

const frame20303Data = {
    frame1988Props: frame198813Data,
    frame2062Props: frame20624Data,
};

const frame1988223Data = {
    children: "Nov 15",
};

const frame20374Data = {
    frame19882Props: frame1988223Data,
};

const frame1988224Data = {
    children: "Nov 22",
};

const frame20429Data = {
    frame19882Props: frame1988224Data,
};

const frame1988225Data = {
    children: "Nov 29",
};

const frame20513Data = {
    frame19882Props: frame1988225Data,
};

const frame198814Data = {
    children: "Nov 2",
};

const frame20287Data = {
    frame1988Props: frame198814Data,
};

const frame198815Data = {
    children: "Nov 9",
};

const frame20313Data = {
    frame1988Props: frame198815Data,
};

const frame20382Data = {
    children: "Nov 16",
};

const frame1988226Data = {
    children: "Nov 23",
};

const frame204210Data = {
    frame19882Props: frame1988226Data,
};

const frame1988227Data = {
    children: "Nov 30",
};

const frame20523Data = {
    frame19882Props: frame1988227Data,
};

const frame198816Data = {
    children: "Nov 3",
};

const frame34716Data = {
    children: "02:30 pm Call wi…",
};

const frame20253Data = {
    frame1988Props: frame198816Data,
    frame3471Props: frame34716Data,
};

const frame1988228Data = {
    children: "Nov 10",
};

const frame20375Data = {
    frame19882Props: frame1988228Data,
};

const frame1988229Data = {
    children: "Nov 17",
};

const frame20393Data = {
    x0230PmCallWi: "02:30pm Call wi…",
    x0300PmFindAn: "03:00pm find an…",
    x5Events: "5+ events",
    frame19882Props: frame1988229Data,
};

const frame1988230Data = {
    children: "Nov 24",
};

const frame20358Data = {
    frame19882Props: frame1988230Data,
};

const frame20533Data = {
    children: "Dec 1",
};

const frame198817Data = {
    children: "Nov 4",
};

const frame20288Data = {
    frame1988Props: frame198817Data,
};

const frame1988231Data = {
    children: "Nov 11",
};

const frame20376Data = {
    frame19882Props: frame1988231Data,
};

const frame1988232Data = {
    children: "Nov 18",
};

const frame20359Data = {
    frame19882Props: frame1988232Data,
};

const frame1988233Data = {
    children: "Nov 25",
};

const frame203510Data = {
    frame19882Props: frame1988233Data,
};

const frame20534Data = {
    children: "Dec 2",
};

const frame1988234Data = {
    children: "Nov 12",
};

const frame20343Data = {
    frame19882Props: frame1988234Data,
};

const frame20413Data = {
    children: "Nov 19",
};

const frame20483Data = {
    children: "Nov 26",
};

const X43CalendarShow3MoreEventsData = {
    frame1987: "/img/frame-1987@2x.png",
    frame2049: "/img/frame-2049@2x.png",
    frame2027: "/img/frame-2027@2x.png",
    frame2055: "/img/frame-2055@2x.png",
    frame3474: "/img/frame-3474@1x.png",
    frame195419Props: frame195419Data,
    frame194323Props: frame194323Data,
    frame29023Props: frame29023Data,
    frame3464Props: frame34642Data,
    frame2900Props: frame29003Data,
    frame2028Props: frame20285Data,
    frame2035Props: frame20356Data,
    frame2042Props: frame20426Data,
    frame2022Props: frame20222Data,
    frame20282Props: frame20286Data,
    frame20352Props: frame20357Data,
    frame20422Props: frame20427Data,
    frame20423Props: frame20428Data,
    frame2023Props: frame20233Data,
    frame2030Props: frame20303Data,
    frame2037Props: frame20374Data,
    frame20424Props: frame20429Data,
    frame2051Props: frame20513Data,
    frame20283Props: frame20287Data,
    frame2031Props: frame20313Data,
    frame2038Props: frame20382Data,
    frame20425Props: frame204210Data,
    frame2052Props: frame20523Data,
    frame2025Props: frame20253Data,
    frame20372Props: frame20375Data,
    frame2039Props: frame20393Data,
    frame20353Props: frame20358Data,
    frame2053Props: frame20533Data,
    frame20284Props: frame20288Data,
    frame20373Props: frame20376Data,
    frame20354Props: frame20359Data,
    frame20355Props: frame203510Data,
    frame20532Props: frame20534Data,
    frame2034Props: frame20343Data,
    frame2041Props: frame20413Data,
    frame2048Props: frame20483Data,
};

const email30Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2231Data = {
    emailProps: email30Data,
};

const emailoutline26Data = {
    layer22Props: layer2231Data,
};

const belloutline30Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline130Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284812Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline130Data,
};

const frame1954411Data = {
    ragrariansI520753: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline26Data,
    belloutlineProps: belloutline30Data,
    frame2848Props: frame284812Data,
};

const frame28935Data = {
    children: "SUN",
};

const frame28936Data = {
    children: "THU",
};

const frame290023Data = {
    mon: "MON",
    tue: "TUE",
    wed: "WED",
    fri: "FRI",
    sat: "SAT",
    frame2893Props: frame28935Data,
    frame28932Props: frame28936Data,
};

const frame1988320Data = {
    children: "Nov 8",
};

const frame2028216Data = {
    frame19883Props: frame1988320Data,
};

const frame1988416Data = {
    children: "Nov 15",
};

const frame203528Data = {
    frame19884Props: frame1988416Data,
};

const frame1988514Data = {
    children: "Nov 22",
};

const frame2042210Data = {
    frame19885Props: frame1988514Data,
};

const frame1988321Data = {
    children: "Nov 2",
};

const frame2028217Data = {
    frame19883Props: frame1988321Data,
};

const frame1988322Data = {
    children: "Nov 9",
};

const frame2028218Data = {
    frame19883Props: frame1988322Data,
};

const frame1988417Data = {
    children: "Nov 16",
};

const frame203529Data = {
    frame19884Props: frame1988417Data,
};

const frame1988515Data = {
    children: "Nov 23",
};

const frame2042211Data = {
    frame19885Props: frame1988515Data,
};

const frame20503Data = {
    children: "Nov 30",
};

const frame1988323Data = {
    children: "Nov 3",
};

const frame2028219Data = {
    frame19883Props: frame1988323Data,
};

const frame1988418Data = {
    children: "Nov 10",
};

const frame203023Data = {
    callWithNewFar: "Call with new far…",
    x0300PmFindAn: "03:00 pm find an…",
    address: "2 more events",
    frame19884Props: frame1988418Data,
};

const frame203726Data = {
    children: "Nov 17",
};

const frame1988516Data = {
    children: "Nov 24",
};

const frame2042212Data = {
    frame19885Props: frame1988516Data,
};

const frame205123Data = {
    children: "Dec 1",
};

const frame20243Data = {
    children: "Nov 4",
};

const frame203123Data = {
    children: "Nov 11",
};

const frame1988419Data = {
    children: "Nov 18",
};

const frame2035210Data = {
    frame19884Props: frame1988419Data,
};

const frame1988517Data = {
    children: "Nov 25",
};

const frame2042213Data = {
    frame19885Props: frame1988517Data,
};

const frame1988324Data = {
    children: "Dec 2",
};

const frame205223Data = {
    frame19883Props: frame1988324Data,
};

const frame1988325Data = {
    children: "Nov 5",
};

const frame202523Data = {
    findNewPlace: "Find new place…",
    frame19883Props: frame1988325Data,
};

const frame203727Data = {
    children: "Nov 12",
};

const frame1988420Data = {
    children: "Nov 19",
};

const frame203925Data = {
    frame19884Props: frame1988420Data,
};

const frame1988518Data = {
    children: "Nov 26",
};

const frame20465Data = {
    frame19885Props: frame1988518Data,
};

const frame1988326Data = {
    children: "Dec 3",
};

const frame2028220Data = {
    frame19883Props: frame1988326Data,
};

const frame1988327Data = {
    children: "Nov 6",
};

const frame2028221Data = {
    frame19883Props: frame1988327Data,
};

const frame1988421Data = {
    children: "Nov 13",
};

const frame203926Data = {
    frame19884Props: frame1988421Data,
};

const frame1988519Data = {
    children: "Nov 20",
};

const frame20466Data = {
    frame19885Props: frame1988519Data,
};

const frame20473Data = {
    children: "Nov 27",
};

const frame1988328Data = {
    children: "Dec 4",
};

const frame2028222Data = {
    frame19883Props: frame1988328Data,
};

const frame1988422Data = {
    children: "Nov 14",
};

const frame203423Data = {
    frame19884Props: frame1988422Data,
};

const frame204123Data = {
    children: "Nov 21",
};

const frame204823Data = {
    children: "Nov 28",
};

const frame20563Data = {
    children: "Farm meeting",
};

const frame20613Data = {
    children: "Engenier meeting",
};

const frame20643Data = {
    children: "Call with client",
};

const frame207411Data = {
    text830: "Call with new farmers for enterprises",
};

const frame207412Data = {
    text830: "03:00pm find any new farms for upgrade",
};

const frame207413Data = {
    text830: "Farm call",
};

const frame207414Data = {
    text830: "Business discussion",
};

const frame207415Data = {
    text830: "Business partners meeting",
};

const close14Data = {
    vector: "/img/vector-678@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2315Data = {
    closeProps: close14Data,
};

const closeoutline15Data = {
    layer23Props: layer2315Data,
};

const frame20653Data = {
    sunday: "SUNDAY",
    date: "November 1, 2020",
    myEvents: "My events:",
    frame2074Props: frame207411Data,
    frame20742Props: frame207412Data,
    frame20743Props: frame207413Data,
    frame20744Props: frame207414Data,
    frame20745Props: frame207415Data,
    closeoutline1Props: closeoutline15Data,
};

const personaddoutline215Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const trashoutline13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-623@2x.png",
};

const frame207924Data = {
    addMembers: "Add members",
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-621@2x.png",
    editEvent: "Edit event",
    deleteEvent: "Delete event",
    personaddoutline2Props: personaddoutline215Data,
    trashoutline1Props: trashoutline13Data,
};

const frame29013Data = {
    frame1987: "/img/frame-1987-1@2x.png",
    frame2049: "/img/frame-2049-1@2x.png",
    frame2027: "/img/frame-2027-1@2x.png",
    frame2055: "/img/frame-2055-1@2x.png",
    frame29002Props: frame290023Data,
    frame20282Props: frame2028216Data,
    frame20352Props: frame203528Data,
    frame20422Props: frame2042210Data,
    frame202822Props: frame2028217Data,
    frame202823Props: frame2028218Data,
    frame203522Props: frame203529Data,
    frame204222Props: frame2042211Data,
    frame2050Props: frame20503Data,
    frame202824Props: frame2028219Data,
    frame20302Props: frame203023Data,
    frame20372Props: frame203726Data,
    frame204223Props: frame2042212Data,
    frame20512Props: frame205123Data,
    frame2024Props: frame20243Data,
    frame20312Props: frame203123Data,
    frame203523Props: frame2035210Data,
    frame204224Props: frame2042213Data,
    frame20522Props: frame205223Data,
    frame20252Props: frame202523Data,
    frame203722Props: frame203727Data,
    frame20392Props: frame203925Data,
    frame2046Props: frame20465Data,
    frame202825Props: frame2028220Data,
    frame202826Props: frame2028221Data,
    frame203922Props: frame203926Data,
    frame20462Props: frame20466Data,
    frame2047Props: frame20473Data,
    frame202827Props: frame2028222Data,
    frame20342Props: frame203423Data,
    frame20412Props: frame204123Data,
    frame20482Props: frame204823Data,
    frame2056Props: frame20563Data,
    frame2061Props: frame20613Data,
    frame2064Props: frame20643Data,
    frame2065Props: frame20653Data,
    frame20792Props: frame207924Data,
};

const chevronrightoutline29Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline210Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame202325Data = {
    chevronrightoutline2Props: chevronrightoutline29Data,
    chevronrightoutline22Props: chevronrightoutline210Data,
};

const frame290223Data = {
    november2020: "November 2020",
    addNewEvent: "Add new event",
    frame20232Props: frame202325Data,
};

const grid31Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289138Data = {
    gridProps: grid31Data,
};

const frame34Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194529Data = {
    frame2891Props: frame289138Data,
    frameProps: frame34Data,
};

const usermanagement31Data = {
    vector: "/img/vector-645@2x.png",
    vector2: "/img/vector-646@2x.png",
    vector3: "/img/vector-647@2x.png",
    vector4: "/img/vector-648@2x.png",
    vector5: "/img/vector-649@2x.png",
    vector6: "/img/vector-650@2x.png",
};

const frame195330Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement31Data,
};

const frame284714Data = {
    frame1953Props: frame195330Data,
};

const frame197421Data = {
    children: "Groups",
};

const frame1975212Data = {
    children: "Members",
};

const frame197422Data = {
    children: "Enterprises",
};

const frame1944210Data = {
    frame2847Props: frame284714Data,
    frame1974Props: frame197421Data,
    frame19752Props: frame1975212Data,
    frame19742Props: frame197422Data,
};

const book36Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194730Data = {
    text41: "Library",
    bookProps: book36Data,
};

const frame194830Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230331Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849751Data = {
    children: "Mo",
};

const frame2849752Data = {
    children: "1",
};

const frame2849753Data = {
    children: "8",
};

const frame2849754Data = {
    children: "15",
};

const frame2849755Data = {
    children: "22",
};

const frame2849756Data = {
    children: "Tu",
};

const frame2857121Data = {
    children: "2",
};

const frame2849757Data = {
    children: "9",
};

const frame2849758Data = {
    children: "16",
};

const frame2849759Data = {
    children: "23",
};

const frame2885151Data = {
    children: "30",
};

const frame2849760Data = {
    children: "We",
};

const frame2857122Data = {
    children: "3",
};

const frame2849761Data = {
    children: "10",
};

const frame2849762Data = {
    children: "17",
};

const frame2849763Data = {
    children: "24",
};

const frame2885152Data = {
    children: "1",
};

const frame2849764Data = {
    children: "Th",
};

const frame2849765Data = {
    children: "4",
};

const frame2849766Data = {
    children: "11",
};

const frame2849767Data = {
    children: "25",
};

const frame2885153Data = {
    children: "2",
};

const frame2849768Data = {
    children: "Fr",
};

const frame2857123Data = {
    children: "5",
};

const frame2849769Data = {
    children: "12",
};

const frame2849770Data = {
    children: "19",
};

const frame2849771Data = {
    children: "26",
};

const frame2885154Data = {
    children: "3",
};

const frame2849772Data = {
    children: "Sa",
};

const frame2857124Data = {
    children: "6",
};

const frame2849773Data = {
    children: "13",
};

const frame2849774Data = {
    children: "20",
};

const frame2849775Data = {
    children: "27",
};

const frame2885155Data = {
    children: "4",
};

const frame2855121Data = {
    children: "Su",
};

const frame2855122Data = {
    children: "14",
};

const frame2855123Data = {
    children: "21",
};

const frame2855124Data = {
    children: "28",
};

const group194231Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849751Data,
    frame28492Props: frame2849752Data,
    frame28493Props: frame2849753Data,
    frame28494Props: frame2849754Data,
    frame28495Props: frame2849755Data,
    frame28496Props: frame2849756Data,
    frame2857Props: frame2857121Data,
    frame28497Props: frame2849757Data,
    frame28498Props: frame2849758Data,
    frame28499Props: frame2849759Data,
    frame2885Props: frame2885151Data,
    frame284910Props: frame2849760Data,
    frame28572Props: frame2857122Data,
    frame284911Props: frame2849761Data,
    frame284912Props: frame2849762Data,
    frame284913Props: frame2849763Data,
    frame28852Props: frame2885152Data,
    frame284914Props: frame2849764Data,
    frame284915Props: frame2849765Data,
    frame284916Props: frame2849766Data,
    frame284917Props: frame2849767Data,
    frame28853Props: frame2885153Data,
    frame284918Props: frame2849768Data,
    frame28573Props: frame2857123Data,
    frame284919Props: frame2849769Data,
    frame284920Props: frame2849770Data,
    frame284921Props: frame2849771Data,
    frame28854Props: frame2885154Data,
    frame284922Props: frame2849772Data,
    frame28574Props: frame2857124Data,
    frame284923Props: frame2849773Data,
    frame284924Props: frame2849774Data,
    frame284925Props: frame2849775Data,
    frame28855Props: frame2885155Data,
    frame2855Props: frame2855121Data,
    frame28552Props: frame2855122Data,
    frame28553Props: frame2855123Data,
    frame28554Props: frame2855124Data,
};

const frame279118Data = {
    text108: "View calendar",
    group1942Props: group194231Data,
};

const chevronsLeft59Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft60Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891231Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft59Data,
    chevronsLeft2Props: chevronsLeft60Data,
};

const group194317Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279118Data,
    frame28912Props: frame2891231Data,
};

const frame1943223Data = {
    frame1945Props: frame194529Data,
    frame19442Props: frame1944210Data,
    frame1947Props: frame194730Data,
    frame1948Props: frame194830Data,
    frame2303Props: frame230331Data,
    group1943Props: group194317Data,
};

const close15Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2316Data = {
    closeProps: close15Data,
};

const searchoutline111Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const component1Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-832@2x.png",
    vector3: "/img/vector-833@2x.png",
};

const frame2906Data = {
    frame2904: "/img/frame-2904@2x.png",
    name: "Annette Black",
    component1Props: component1Data,
};

const component12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-832@2x.png",
    vector3: "/img/vector-833@2x.png",
};

const frame29062Data = {
    frame2904: "/img/frame-2904-1@2x.png",
    name: "Cameron Williamson",
    component1Props: component12Data,
};

const component122Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-840@2x.png",
};

const frame2908Data = {
    frame2904: "/img/frame-2904-2@2x.png",
    name: "Bessie Cooper",
    component12Props: component122Data,
};

const component123Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-840@2x.png",
};

const frame29082Data = {
    frame2904: "/img/frame-2904-3@2x.png",
    name: "Eleanor Pena",
    component12Props: component123Data,
};

const component13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-832@2x.png",
    vector3: "/img/vector-833@2x.png",
};

const frame29063Data = {
    frame2904: "/img/frame-2904-4@2x.png",
    name: "Jenny Wilson",
    component1Props: component13Data,
};

const component124Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-840@2x.png",
};

const frame29083Data = {
    frame2904: "/img/frame-2904-5@2x.png",
    name: "Marvin McKinney",
    component12Props: component124Data,
};

const X47AddNewMembersData = {
    addMembers: "Add members",
    search: "Search…",
    addMembers2: "Add members",
    frame19544Props: frame1954411Data,
    frame2901Props: frame29013Data,
    frame29022Props: frame290223Data,
    frame194322Props: frame1943223Data,
    layer23Props: layer2316Data,
    searchoutline1Props: searchoutline111Data,
    frame2906Props: frame2906Data,
    frame29062Props: frame29062Data,
    frame2908Props: frame2908Data,
    frame29082Props: frame29082Data,
    frame29063Props: frame29063Data,
    frame29083Props: frame29083Data,
};

const email31Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2232Data = {
    emailProps: email31Data,
};

const emailoutline27Data = {
    layer22Props: layer2232Data,
};

const belloutline31Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline131Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284813Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline131Data,
};

const frame1954412Data = {
    ragrariansI520753: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline27Data,
    belloutlineProps: belloutline31Data,
    frame2848Props: frame284813Data,
};

const frame28937Data = {
    children: "SUN",
};

const frame28938Data = {
    children: "THU",
};

const frame290024Data = {
    mon: "MON",
    tue: "TUE",
    wed: "WED",
    fri: "FRI",
    sat: "SAT",
    frame2893Props: frame28937Data,
    frame28932Props: frame28938Data,
};

const frame1988329Data = {
    children: "Nov 8",
};

const frame2028223Data = {
    frame19883Props: frame1988329Data,
};

const frame1988423Data = {
    children: "Nov 15",
};

const frame2035211Data = {
    frame19884Props: frame1988423Data,
};

const frame1988520Data = {
    children: "Nov 22",
};

const frame2042214Data = {
    frame19885Props: frame1988520Data,
};

const frame1988330Data = {
    children: "Nov 2",
};

const frame2028224Data = {
    frame19883Props: frame1988330Data,
};

const frame1988331Data = {
    children: "Nov 9",
};

const frame2028225Data = {
    frame19883Props: frame1988331Data,
};

const frame1988424Data = {
    children: "Nov 16",
};

const frame2035212Data = {
    frame19884Props: frame1988424Data,
};

const frame1988521Data = {
    children: "Nov 23",
};

const frame2042215Data = {
    frame19885Props: frame1988521Data,
};

const frame20504Data = {
    children: "Nov 30",
};

const frame1988332Data = {
    children: "Nov 3",
};

const frame2028226Data = {
    frame19883Props: frame1988332Data,
};

const frame1988425Data = {
    children: "Nov 10",
};

const frame203024Data = {
    callWithNewFar: "Call with new far…",
    x0300PmFindAn: "03:00 pm find an…",
    address: "2 more events",
    frame19884Props: frame1988425Data,
};

const frame203728Data = {
    children: "Nov 17",
};

const frame1988522Data = {
    children: "Nov 24",
};

const frame2042216Data = {
    frame19885Props: frame1988522Data,
};

const frame205124Data = {
    children: "Dec 1",
};

const frame20244Data = {
    children: "Nov 4",
};

const frame203124Data = {
    children: "Nov 11",
};

const frame1988523Data = {
    children: "Nov 25",
};

const frame2042217Data = {
    frame19885Props: frame1988523Data,
};

const frame1988333Data = {
    children: "Dec 2",
};

const frame205224Data = {
    frame19883Props: frame1988333Data,
};

const frame1988334Data = {
    children: "Nov 5",
};

const frame202524Data = {
    findNewPlace: "Find new place…",
    frame19883Props: frame1988334Data,
};

const frame203729Data = {
    children: "Nov 12",
};

const frame1988426Data = {
    children: "Nov 19",
};

const frame203927Data = {
    frame19884Props: frame1988426Data,
};

const frame1988524Data = {
    children: "Nov 26",
};

const frame20467Data = {
    frame19885Props: frame1988524Data,
};

const frame1988335Data = {
    children: "Dec 3",
};

const frame2028227Data = {
    frame19883Props: frame1988335Data,
};

const frame1988336Data = {
    children: "Nov 6",
};

const frame2028228Data = {
    frame19883Props: frame1988336Data,
};

const frame1988427Data = {
    children: "Nov 13",
};

const frame203928Data = {
    frame19884Props: frame1988427Data,
};

const frame1988525Data = {
    children: "Nov 20",
};

const frame20468Data = {
    frame19885Props: frame1988525Data,
};

const frame20474Data = {
    children: "Nov 27",
};

const frame1988337Data = {
    children: "Dec 4",
};

const frame2028229Data = {
    frame19883Props: frame1988337Data,
};

const frame1988428Data = {
    children: "Nov 14",
};

const frame203424Data = {
    frame19884Props: frame1988428Data,
};

const frame204124Data = {
    children: "Nov 21",
};

const frame204824Data = {
    children: "Nov 28",
};

const frame20564Data = {
    children: "Farm meeting",
};

const frame20614Data = {
    children: "Engenier meeting",
};

const frame20644Data = {
    children: "Call with client",
};

const frame207416Data = {
    text830: "Call with new farmers for enterprises",
};

const frame207417Data = {
    text830: "03:00pm find any new farms for upgrade",
};

const frame207418Data = {
    text830: "Farm call",
};

const frame207419Data = {
    text830: "Business discussion",
};

const frame207420Data = {
    text830: "Business partners meeting",
};

const close16Data = {
    vector: "/img/vector-678@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2317Data = {
    closeProps: close16Data,
};

const closeoutline16Data = {
    layer23Props: layer2317Data,
};

const frame20654Data = {
    sunday: "SUNDAY",
    date: "November 1, 2020",
    myEvents: "My events:",
    frame2074Props: frame207416Data,
    frame20742Props: frame207417Data,
    frame20743Props: frame207418Data,
    frame20744Props: frame207419Data,
    frame20745Props: frame207420Data,
    closeoutline1Props: closeoutline16Data,
};

const personaddoutline216Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-617@2x.png",
    vector3: "/img/vector-5@2x.png",
    vector4: "/img/vector-6@2x.png",
};

const trashoutline14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-623@2x.png",
};

const frame207925Data = {
    addMembers: "Add members",
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-621@2x.png",
    editEvent: "Edit event",
    deleteEvent: "Delete event",
    personaddoutline2Props: personaddoutline216Data,
    trashoutline1Props: trashoutline14Data,
};

const chevronrightoutline211Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline212Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame202326Data = {
    chevronrightoutline2Props: chevronrightoutline211Data,
    chevronrightoutline22Props: chevronrightoutline212Data,
};

const frame290224Data = {
    november2020: "November 2020",
    addNewEvent: "Add new event",
    frame20232Props: frame202326Data,
};

const grid32Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289139Data = {
    gridProps: grid32Data,
};

const frame35Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194530Data = {
    frame2891Props: frame289139Data,
    frameProps: frame35Data,
};

const usermanagement32Data = {
    vector: "/img/vector-645@2x.png",
    vector2: "/img/vector-646@2x.png",
    vector3: "/img/vector-647@2x.png",
    vector4: "/img/vector-648@2x.png",
    vector5: "/img/vector-649@2x.png",
    vector6: "/img/vector-650@2x.png",
};

const frame195331Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement32Data,
};

const frame284715Data = {
    frame1953Props: frame195331Data,
};

const frame197423Data = {
    children: "Groups",
};

const frame1975213Data = {
    children: "Members",
};

const frame197424Data = {
    children: "Enterprises",
};

const frame1944211Data = {
    frame2847Props: frame284715Data,
    frame1974Props: frame197423Data,
    frame19752Props: frame1975213Data,
    frame19742Props: frame197424Data,
};

const book37Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194731Data = {
    text41: "Library",
    bookProps: book37Data,
};

const frame194831Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230332Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849776Data = {
    children: "Mo",
};

const frame2849777Data = {
    children: "1",
};

const frame2849778Data = {
    children: "8",
};

const frame2849779Data = {
    children: "15",
};

const frame2849780Data = {
    children: "22",
};

const frame2849781Data = {
    children: "Tu",
};

const frame2857125Data = {
    children: "2",
};

const frame2849782Data = {
    children: "9",
};

const frame2849783Data = {
    children: "16",
};

const frame2849784Data = {
    children: "23",
};

const frame2885156Data = {
    children: "30",
};

const frame2849785Data = {
    children: "We",
};

const frame2857126Data = {
    children: "3",
};

const frame2849786Data = {
    children: "10",
};

const frame2849787Data = {
    children: "17",
};

const frame2849788Data = {
    children: "24",
};

const frame2885157Data = {
    children: "1",
};

const frame2849789Data = {
    children: "Th",
};

const frame2849790Data = {
    children: "4",
};

const frame2849791Data = {
    children: "11",
};

const frame2849792Data = {
    children: "25",
};

const frame2885158Data = {
    children: "2",
};

const frame2849793Data = {
    children: "Fr",
};

const frame2857127Data = {
    children: "5",
};

const frame2849794Data = {
    children: "12",
};

const frame2849795Data = {
    children: "19",
};

const frame2849796Data = {
    children: "26",
};

const frame2885159Data = {
    children: "3",
};

const frame2849797Data = {
    children: "Sa",
};

const frame2857128Data = {
    children: "6",
};

const frame2849798Data = {
    children: "13",
};

const frame2849799Data = {
    children: "20",
};

const frame2849800Data = {
    children: "27",
};

const frame2885160Data = {
    children: "4",
};

const frame2855125Data = {
    children: "Su",
};

const frame2855126Data = {
    children: "14",
};

const frame2855127Data = {
    children: "21",
};

const frame2855128Data = {
    children: "28",
};

const group194232Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849776Data,
    frame28492Props: frame2849777Data,
    frame28493Props: frame2849778Data,
    frame28494Props: frame2849779Data,
    frame28495Props: frame2849780Data,
    frame28496Props: frame2849781Data,
    frame2857Props: frame2857125Data,
    frame28497Props: frame2849782Data,
    frame28498Props: frame2849783Data,
    frame28499Props: frame2849784Data,
    frame2885Props: frame2885156Data,
    frame284910Props: frame2849785Data,
    frame28572Props: frame2857126Data,
    frame284911Props: frame2849786Data,
    frame284912Props: frame2849787Data,
    frame284913Props: frame2849788Data,
    frame28852Props: frame2885157Data,
    frame284914Props: frame2849789Data,
    frame284915Props: frame2849790Data,
    frame284916Props: frame2849791Data,
    frame284917Props: frame2849792Data,
    frame28853Props: frame2885158Data,
    frame284918Props: frame2849793Data,
    frame28573Props: frame2857127Data,
    frame284919Props: frame2849794Data,
    frame284920Props: frame2849795Data,
    frame284921Props: frame2849796Data,
    frame28854Props: frame2885159Data,
    frame284922Props: frame2849797Data,
    frame28574Props: frame2857128Data,
    frame284923Props: frame2849798Data,
    frame284924Props: frame2849799Data,
    frame284925Props: frame2849800Data,
    frame28855Props: frame2885160Data,
    frame2855Props: frame2855125Data,
    frame28552Props: frame2855126Data,
    frame28553Props: frame2855127Data,
    frame28554Props: frame2855128Data,
};

const frame279119Data = {
    text108: "View calendar",
    group1942Props: group194232Data,
};

const chevronsLeft61Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft62Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891232Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft61Data,
    chevronsLeft2Props: chevronsLeft62Data,
};

const group194318Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279119Data,
    frame28912Props: frame2891232Data,
};

const frame1943224Data = {
    frame1945Props: frame194530Data,
    frame19442Props: frame1944211Data,
    frame1947Props: frame194731Data,
    frame1948Props: frame194831Data,
    frame2303Props: frame230332Data,
    group1943Props: group194318Data,
};

const close17Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2318Data = {
    closeProps: close17Data,
};

const frame96Data = {
    birthday: "Start date",
    phone: "11/01/2020",
};

const frame193323Data = {
    frame9Props: frame96Data,
};

const frame36422Data = {
    am: "AM",
    pm: "PM",
};

const close18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-844@2x.png",
};

const close19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-844@2x.png",
};

const close20Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-844@2x.png",
};

const plusoutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-772@2x.png",
};

const X46AddNewMembersData = {
    frame1987: "/img/frame-1987-1@2x.png",
    frame2049: "/img/frame-2049-1@2x.png",
    frame2027: "/img/frame-2027-1@2x.png",
    frame2055: "/img/frame-2055-1@2x.png",
    editEvent: "Edit event",
    title: "Title",
    text985: "Call with new farmers for enterprises",
    startTime: "Start time",
    x0300Pm: "03:00 PM",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    name: "Annette Black",
    name2: "Jenny Wilson",
    name3: "Cameron Williamson",
    addMembers: "Add members",
    frame19544Props: frame1954412Data,
    frame29002Props: frame290024Data,
    frame20282Props: frame2028223Data,
    frame20352Props: frame2035211Data,
    frame20422Props: frame2042214Data,
    frame202822Props: frame2028224Data,
    frame202823Props: frame2028225Data,
    frame203522Props: frame2035212Data,
    frame204222Props: frame2042215Data,
    frame2050Props: frame20504Data,
    frame202824Props: frame2028226Data,
    frame20302Props: frame203024Data,
    frame20372Props: frame203728Data,
    frame204223Props: frame2042216Data,
    frame20512Props: frame205124Data,
    frame2024Props: frame20244Data,
    frame20312Props: frame203124Data,
    frame204224Props: frame2042217Data,
    frame20522Props: frame205224Data,
    frame20252Props: frame202524Data,
    frame203722Props: frame203729Data,
    frame20392Props: frame203927Data,
    frame2046Props: frame20467Data,
    frame202825Props: frame2028227Data,
    frame202826Props: frame2028228Data,
    frame203922Props: frame203928Data,
    frame20462Props: frame20468Data,
    frame2047Props: frame20474Data,
    frame202827Props: frame2028229Data,
    frame20342Props: frame203424Data,
    frame20412Props: frame204124Data,
    frame20482Props: frame204824Data,
    frame2056Props: frame20564Data,
    frame2061Props: frame20614Data,
    frame2064Props: frame20644Data,
    frame2065Props: frame20654Data,
    frame20792Props: frame207925Data,
    frame29022Props: frame290224Data,
    frame194322Props: frame1943224Data,
    layer23Props: layer2318Data,
    frame19332Props: frame193323Data,
    frame3642Props: frame36422Data,
    closeProps: close18Data,
    close2Props: close19Data,
    close3Props: close20Data,
    plusoutline1Props: plusoutline15Data,
};

const email32Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2233Data = {
    emailProps: email32Data,
};

const emailoutline28Data = {
    layer22Props: layer2233Data,
};

const belloutline32Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline132Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195420Data = {
    ragrariansI1168229: "Calendar",
    frame1951: "/img/frame-1951@2x.png",
    text986: "My dashboard",
    emailoutlineProps: emailoutline28Data,
    belloutlineProps: belloutline32Data,
    personoutline1Props: personoutline132Data,
};

const frame28939Data = {
    children: "SUN",
};

const frame289310Data = {
    children: "THU",
};

const frame290025Data = {
    mon: "MON",
    tue: "TUE",
    wed: "WED",
    fri: "FRI",
    sat: "SAT",
    frame2893Props: frame28939Data,
    frame28932Props: frame289310Data,
};

const frame1988338Data = {
    children: "Nov 8",
};

const frame2028230Data = {
    frame19883Props: frame1988338Data,
};

const frame1988429Data = {
    children: "Nov 15",
};

const frame2035213Data = {
    frame19884Props: frame1988429Data,
};

const frame1988526Data = {
    children: "Nov 22",
};

const frame2042218Data = {
    frame19885Props: frame1988526Data,
};

const frame1988339Data = {
    children: "Nov 2",
};

const frame2028231Data = {
    frame19883Props: frame1988339Data,
};

const frame1988340Data = {
    children: "Nov 9",
};

const frame2028232Data = {
    frame19883Props: frame1988340Data,
};

const frame1988430Data = {
    children: "Nov 16",
};

const frame2035214Data = {
    frame19884Props: frame1988430Data,
};

const frame1988527Data = {
    children: "Nov 23",
};

const frame2042219Data = {
    frame19885Props: frame1988527Data,
};

const frame20505Data = {
    children: "Nov 30",
};

const frame1988341Data = {
    children: "Nov 3",
};

const frame2028233Data = {
    frame19883Props: frame1988341Data,
};

const frame1988431Data = {
    children: "Nov 10",
};

const frame203025Data = {
    callWithNewFar: "Call with new far…",
    x0300PmFindAn: "03:00 pm find an…",
    address: "2 more events",
    frame19884Props: frame1988431Data,
};

const frame2037210Data = {
    children: "Nov 17",
};

const frame1988528Data = {
    children: "Nov 24",
};

const frame2042220Data = {
    frame19885Props: frame1988528Data,
};

const frame205125Data = {
    children: "Dec 1",
};

const frame20245Data = {
    children: "Nov 4",
};

const frame203125Data = {
    children: "Nov 11",
};

const frame1988432Data = {
    children: "Nov 18",
};

const frame2035215Data = {
    frame19884Props: frame1988432Data,
};

const frame1988529Data = {
    children: "Nov 25",
};

const frame2042221Data = {
    frame19885Props: frame1988529Data,
};

const frame1988342Data = {
    children: "Dec 2",
};

const frame205225Data = {
    frame19883Props: frame1988342Data,
};

const frame1988343Data = {
    children: "Nov 5",
};

const frame202525Data = {
    findNewPlace: "Find new place…",
    frame19883Props: frame1988343Data,
};

const frame2037211Data = {
    children: "Nov 12",
};

const frame1988433Data = {
    children: "Nov 19",
};

const frame203929Data = {
    frame19884Props: frame1988433Data,
};

const frame1988530Data = {
    children: "Nov 26",
};

const frame20469Data = {
    frame19885Props: frame1988530Data,
};

const frame1988344Data = {
    children: "Dec 3",
};

const frame2028234Data = {
    frame19883Props: frame1988344Data,
};

const frame1988345Data = {
    children: "Nov 6",
};

const frame2028235Data = {
    frame19883Props: frame1988345Data,
};

const frame1988434Data = {
    children: "Nov 13",
};

const frame2039210Data = {
    frame19884Props: frame1988434Data,
};

const frame1988531Data = {
    children: "Nov 20",
};

const frame204610Data = {
    frame19885Props: frame1988531Data,
};

const frame20475Data = {
    children: "Nov 27",
};

const frame1988346Data = {
    children: "Dec 4",
};

const frame2028236Data = {
    frame19883Props: frame1988346Data,
};

const frame1988435Data = {
    children: "Nov 14",
};

const frame203425Data = {
    frame19884Props: frame1988435Data,
};

const frame204125Data = {
    children: "Nov 21",
};

const frame204825Data = {
    children: "Nov 28",
};

const frame20615Data = {
    children: "Engenier meeting",
};

const grid33Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289140Data = {
    gridProps: grid33Data,
};

const frame36Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-798@2x.png",
};

const frame194531Data = {
    frame2891Props: frame289140Data,
    frameProps: frame36Data,
};

const usermanagement33Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195332Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement33Data,
};

const frame19757Data = {
    children: "Members",
};

const frame197610Data = {
    children: "Enterprises",
};

const book38Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194732Data = {
    text41: "Library",
    bookProps: book38Data,
};

const frame194832Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230333Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849801Data = {
    children: "Mo",
};

const frame2849802Data = {
    children: "1",
};

const frame2849803Data = {
    children: "8",
};

const frame2849804Data = {
    children: "15",
};

const frame2849805Data = {
    children: "22",
};

const frame2849806Data = {
    children: "Tu",
};

const frame2857129Data = {
    children: "2",
};

const frame2849807Data = {
    children: "9",
};

const frame2849808Data = {
    children: "16",
};

const frame2849809Data = {
    children: "23",
};

const frame2885161Data = {
    children: "30",
};

const frame2849810Data = {
    children: "We",
};

const frame2857130Data = {
    children: "3",
};

const frame2849811Data = {
    children: "10",
};

const frame2849812Data = {
    children: "17",
};

const frame2849813Data = {
    children: "24",
};

const frame2885162Data = {
    children: "1",
};

const frame2849814Data = {
    children: "Th",
};

const frame2849815Data = {
    children: "4",
};

const frame2849816Data = {
    children: "11",
};

const frame2849817Data = {
    children: "25",
};

const frame2885163Data = {
    children: "2",
};

const frame2849818Data = {
    children: "Fr",
};

const frame2857131Data = {
    children: "5",
};

const frame2849819Data = {
    children: "12",
};

const frame2849820Data = {
    children: "19",
};

const frame2849821Data = {
    children: "26",
};

const frame2885164Data = {
    children: "3",
};

const frame2849822Data = {
    children: "Sa",
};

const frame2857132Data = {
    children: "6",
};

const frame2849823Data = {
    children: "13",
};

const frame2849824Data = {
    children: "20",
};

const frame2849825Data = {
    children: "27",
};

const frame2885165Data = {
    children: "4",
};

const frame2855129Data = {
    children: "Su",
};

const frame2855130Data = {
    children: "14",
};

const frame2855131Data = {
    children: "21",
};

const frame2855132Data = {
    children: "28",
};

const group194233Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849801Data,
    frame28492Props: frame2849802Data,
    frame28493Props: frame2849803Data,
    frame28494Props: frame2849804Data,
    frame28495Props: frame2849805Data,
    frame28496Props: frame2849806Data,
    frame2857Props: frame2857129Data,
    frame28497Props: frame2849807Data,
    frame28498Props: frame2849808Data,
    frame28499Props: frame2849809Data,
    frame2885Props: frame2885161Data,
    frame284910Props: frame2849810Data,
    frame28572Props: frame2857130Data,
    frame284911Props: frame2849811Data,
    frame284912Props: frame2849812Data,
    frame284913Props: frame2849813Data,
    frame28852Props: frame2885162Data,
    frame284914Props: frame2849814Data,
    frame284915Props: frame2849815Data,
    frame284916Props: frame2849816Data,
    frame284917Props: frame2849817Data,
    frame28853Props: frame2885163Data,
    frame284918Props: frame2849818Data,
    frame28573Props: frame2857131Data,
    frame284919Props: frame2849819Data,
    frame284920Props: frame2849820Data,
    frame284921Props: frame2849821Data,
    frame28854Props: frame2885164Data,
    frame284922Props: frame2849822Data,
    frame28574Props: frame2857132Data,
    frame284923Props: frame2849823Data,
    frame284924Props: frame2849824Data,
    frame284925Props: frame2849825Data,
    frame28855Props: frame2885165Data,
    frame2855Props: frame2855129Data,
    frame28552Props: frame2855130Data,
    frame28553Props: frame2855131Data,
    frame28554Props: frame2855132Data,
};

const chevronsLeft63Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft64Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891233Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft63Data,
    chevronsLeft2Props: chevronsLeft64Data,
};

const frame194324Data = {
    text988: "Groups",
    text1006: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194531Data,
    frame1953Props: frame195332Data,
    frame1975Props: frame19757Data,
    frame1976Props: frame197610Data,
    frame1947Props: frame194732Data,
    frame1948Props: frame194832Data,
    frame2303Props: frame230333Data,
    group1942Props: group194233Data,
    frame28912Props: frame2891233Data,
};

const chevronrightoutline213Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-432@2x.png",
};

const chevronrightoutline214Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-434@2x.png",
};

const frame202327Data = {
    chevronrightoutline2Props: chevronrightoutline213Data,
    chevronrightoutline22Props: chevronrightoutline214Data,
};

const frame543Data = {
    children: "Today",
};

const frame29024Data = {
    text1008: "November 2020",
    text1009: "Add new event",
    frame20232Props: frame202327Data,
    frame54Props: frame543Data,
};

const frame19813Data = {
    children: "My events",
};

const X43CalendarShow3MoreEvents2Data = {
    frame1987: "/img/frame-1987-1@2x.png",
    frame2049: "/img/frame-2049-1@2x.png",
    frame2027: "/img/frame-2027-1@2x.png",
    frame2055: "/img/frame-2055-1@2x.png",
    frame3475: "/img/frame-3475@1x.png",
    enterprisesEvents: "Enterprises events",
    groupsEvents: "Groups events",
    frame195420Props: frame195420Data,
    frame29002Props: frame290025Data,
    frame20282Props: frame2028230Data,
    frame20352Props: frame2035213Data,
    frame20422Props: frame2042218Data,
    frame202822Props: frame2028231Data,
    frame202823Props: frame2028232Data,
    frame203522Props: frame2035214Data,
    frame204222Props: frame2042219Data,
    frame2050Props: frame20505Data,
    frame202824Props: frame2028233Data,
    frame20302Props: frame203025Data,
    frame20372Props: frame2037210Data,
    frame204223Props: frame2042220Data,
    frame20512Props: frame205125Data,
    frame2024Props: frame20245Data,
    frame20312Props: frame203125Data,
    frame203523Props: frame2035215Data,
    frame204224Props: frame2042221Data,
    frame20522Props: frame205225Data,
    frame20252Props: frame202525Data,
    frame203722Props: frame2037211Data,
    frame20392Props: frame203929Data,
    frame2046Props: frame20469Data,
    frame202825Props: frame2028234Data,
    frame202826Props: frame2028235Data,
    frame203922Props: frame2039210Data,
    frame20462Props: frame204610Data,
    frame2047Props: frame20475Data,
    frame202827Props: frame2028236Data,
    frame20342Props: frame203425Data,
    frame20412Props: frame204125Data,
    frame20482Props: frame204825Data,
    frame2061Props: frame20615Data,
    frame194324Props: frame194324Data,
    frame29024Props: frame29024Data,
    frame1981Props: frame19813Data,
};

const email33Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2234Data = {
    emailProps: email33Data,
};

const emailoutline29Data = {
    layer22Props: layer2234Data,
};

const belloutline33Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline133Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284814Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline133Data,
};

const frame1954413Data = {
    ragrariansI520753: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline29Data,
    belloutlineProps: belloutline33Data,
    frame2848Props: frame284814Data,
};

const frame280322Data = {
    frame2801: "/img/frame-2801@2x.png",
    natureLovers: "Nature lovers",
    text1011: "November 1 at 05:45 PM",
};

const messagesquareoutline17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28045Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline17Data,
};

const eye8Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline17Data = {
    eyeProps: eye8Data,
};

const frame28055Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline17Data,
};

const frame29575Data = {
    children: "No comments yet",
};

const paperplaneoutline17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-926@2x.png",
};

const frame29615Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline17Data,
};

const morehorizontal1Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame28074Data = {
    children: "Search filters",
};

const layer2435Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline131Data = {
    layer24Props: layer2435Data,
};

const frame280822Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline131Data,
};

const layer2436Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline132Data = {
    layer24Props: layer2436Data,
};

const frame280823Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline132Data,
};

const frame28104Data = {
    children: "Search",
};

const frame2801Data = {
    frame2807Props: frame28074Data,
    frame28082Props: frame280822Data,
    frame280822Props: frame280823Data,
    frame2810Props: frame28104Data,
};

const frame280323Data = {
    frame2801: "/img/frame-2801@2x.png",
    natureLovers: "Nature lovers",
    text1011: "November 1 at 05:45 PM",
};

const messagesquareoutline18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280424Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline18Data,
};

const eye9Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline18Data = {
    eyeProps: eye9Data,
};

const frame280532Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline18Data,
};

const frame2958Data = {
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1016: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1017: "November 1 at 05:55 PM",
};

const layer2437Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline133Data = {
    layer24Props: layer2437Data,
};

const frame295724Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline133Data,
};

const frame2959Data = {
    frame2801: "/img/frame-2815@2x.png",
    name: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", ",
    spanText3: "Can you write in direct to help me please?",
    text1019: "November 1 at 06:23 PM",
};

const frame2962Data = {
    children: "Show more replies",
};

const paperplaneoutline18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-972@2x.png",
};

const frame296124Data = {
    frame2815: "/img/frame-2815@2x.png",
    text382: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline18Data,
};

const frame2971Data = {
    frame29612Props: frame296124Data,
};

const morehorizontal12Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const videooutline5Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-977@2x.png",
};

const cameraoutline5Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-979@2x.png",
    vector3: "/img/vector-181@2x.png",
};

const iconsArrowsLeft17Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29236Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft17Data,
};

const backbtn25Data = {
    frame2923Props: frame29236Data,
};

const frame279732Data = {
    natureLovers: "Nature lovers",
    text1022: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const frame412Data = {
    children: "Edit group",
};

const frame297010Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2438Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline134Data = {
    layer24Props: layer2438Data,
};

const frame32444Data = {
    enterprisePhotos: "Group photos",
    chevronrightoutline1Props: chevronrightoutline134Data,
};

const frame29565Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame297010Data,
    frame3244Props: frame32444Data,
};

const grid34Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289141Data = {
    gridProps: grid34Data,
};

const frame37Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194532Data = {
    frame2891Props: frame289141Data,
    frameProps: frame37Data,
};

const usermanagement34Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195333Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement34Data,
};

const frame197611Data = {
    children: "Groups",
};

const frame19758Data = {
    children: "Members",
};

const frame197612Data = {
    children: "Enterprises",
};

const book39Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194733Data = {
    text41: "Library",
    bookProps: book39Data,
};

const frame194833Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230334Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849826Data = {
    children: "Mo",
};

const frame2849827Data = {
    children: "1",
};

const frame2849828Data = {
    children: "8",
};

const frame2849829Data = {
    children: "15",
};

const frame2849830Data = {
    children: "22",
};

const frame2849831Data = {
    children: "Tu",
};

const frame2857133Data = {
    children: "2",
};

const frame2849832Data = {
    children: "9",
};

const frame2849833Data = {
    children: "16",
};

const frame2849834Data = {
    children: "23",
};

const frame2885166Data = {
    children: "30",
};

const frame2849835Data = {
    children: "We",
};

const frame2857134Data = {
    children: "3",
};

const frame2849836Data = {
    children: "10",
};

const frame2849837Data = {
    children: "17",
};

const frame2849838Data = {
    children: "24",
};

const frame2885167Data = {
    children: "1",
};

const frame2849839Data = {
    children: "Th",
};

const frame2849840Data = {
    children: "4",
};

const frame2849841Data = {
    children: "11",
};

const frame2849842Data = {
    children: "25",
};

const frame2885168Data = {
    children: "2",
};

const frame2849843Data = {
    children: "Fr",
};

const frame2857135Data = {
    children: "5",
};

const frame2849844Data = {
    children: "12",
};

const frame2849845Data = {
    children: "19",
};

const frame2849846Data = {
    children: "26",
};

const frame2885169Data = {
    children: "3",
};

const frame2849847Data = {
    children: "Sa",
};

const frame2857136Data = {
    children: "6",
};

const frame2849848Data = {
    children: "13",
};

const frame2849849Data = {
    children: "20",
};

const frame2849850Data = {
    children: "27",
};

const frame2885170Data = {
    children: "4",
};

const frame2855133Data = {
    children: "Su",
};

const frame2855134Data = {
    children: "14",
};

const frame2855135Data = {
    children: "21",
};

const frame2855136Data = {
    children: "28",
};

const group194234Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849826Data,
    frame28492Props: frame2849827Data,
    frame28493Props: frame2849828Data,
    frame28494Props: frame2849829Data,
    frame28495Props: frame2849830Data,
    frame28496Props: frame2849831Data,
    frame2857Props: frame2857133Data,
    frame28497Props: frame2849832Data,
    frame28498Props: frame2849833Data,
    frame28499Props: frame2849834Data,
    frame2885Props: frame2885166Data,
    frame284910Props: frame2849835Data,
    frame28572Props: frame2857134Data,
    frame284911Props: frame2849836Data,
    frame284912Props: frame2849837Data,
    frame284913Props: frame2849838Data,
    frame28852Props: frame2885167Data,
    frame284914Props: frame2849839Data,
    frame284915Props: frame2849840Data,
    frame284916Props: frame2849841Data,
    frame284917Props: frame2849842Data,
    frame28853Props: frame2885168Data,
    frame284918Props: frame2849843Data,
    frame28573Props: frame2857135Data,
    frame284919Props: frame2849844Data,
    frame284920Props: frame2849845Data,
    frame284921Props: frame2849846Data,
    frame28854Props: frame2885169Data,
    frame284922Props: frame2849847Data,
    frame28574Props: frame2857136Data,
    frame284923Props: frame2849848Data,
    frame284924Props: frame2849849Data,
    frame284925Props: frame2849850Data,
    frame28855Props: frame2885170Data,
    frame2855Props: frame2855133Data,
    frame28552Props: frame2855134Data,
    frame28553Props: frame2855135Data,
    frame28554Props: frame2855136Data,
};

const frame279120Data = {
    text108: "View calendar",
    group1942Props: group194234Data,
};

const chevronsLeft65Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft66Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891234Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft65Data,
    chevronsLeft2Props: chevronsLeft66Data,
};

const group194319Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279120Data,
    frame28912Props: frame2891234Data,
};

const frame194325Data = {
    frame1945Props: frame194532Data,
    frame1953Props: frame195333Data,
    frame1976Props: frame197611Data,
    frame1975Props: frame19758Data,
    frame19762Props: frame197612Data,
    frame1947Props: frame194733Data,
    frame1948Props: frame194833Data,
    frame2303Props: frame230334Data,
    group1943Props: group194319Data,
};

const X541MyGroupownerViewData = {
    text1012: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    text1015: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame2815: "/img/frame-2815@2x.png",
    text1021: "Write a new post for your followers",
    frame1969: "/img/frame-1969-16@1x.png",
    frame19544Props: frame1954413Data,
    frame28032Props: frame280322Data,
    frame2804Props: frame28045Data,
    frame2805Props: frame28055Data,
    frame2957Props: frame29575Data,
    frame2961Props: frame29615Data,
    morehorizontal1Props: morehorizontal1Data,
    frame2801Props: frame2801Data,
    frame280322Props: frame280323Data,
    frame28042Props: frame280424Data,
    frame28053Props: frame280532Data,
    frame2958Props: frame2958Data,
    frame29572Props: frame295724Data,
    frame2959Props: frame2959Data,
    frame2962Props: frame2962Data,
    frame2971Props: frame2971Data,
    morehorizontal12Props: morehorizontal12Data,
    videooutlineProps: videooutline5Data,
    cameraoutlineProps: cameraoutline5Data,
    backbtn2Props: backbtn25Data,
    frame27973Props: frame279732Data,
    frame412Props: frame412Data,
    frame2956Props: frame29565Data,
    frame194325Props: frame194325Data,
};

const email34Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2235Data = {
    emailProps: email34Data,
};

const emailoutline30Data = {
    layer22Props: layer2235Data,
};

const belloutline34Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline134Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284815Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline134Data,
};

const frame1954414Data = {
    ragrariansI520753: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline30Data,
    belloutlineProps: belloutline34Data,
    frame2848Props: frame284815Data,
};

const iconsArrowsLeft18Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29237Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft18Data,
};

const backbtn26Data = {
    frame2923Props: frame29237Data,
};

const grid35Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289142Data = {
    gridProps: grid35Data,
};

const frame38Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194533Data = {
    frame2891Props: frame289142Data,
    frameProps: frame38Data,
};

const usermanagement35Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195334Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement35Data,
};

const frame197613Data = {
    children: "Groups",
};

const frame19759Data = {
    children: "Members",
};

const frame197614Data = {
    children: "Enterprises",
};

const book40Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194734Data = {
    text41: "Library",
    bookProps: book40Data,
};

const frame194834Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230335Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849851Data = {
    children: "Mo",
};

const frame2849852Data = {
    children: "1",
};

const frame2849853Data = {
    children: "8",
};

const frame2849854Data = {
    children: "15",
};

const frame2849855Data = {
    children: "22",
};

const frame2849856Data = {
    children: "Tu",
};

const frame2857137Data = {
    children: "2",
};

const frame2849857Data = {
    children: "9",
};

const frame2849858Data = {
    children: "16",
};

const frame2849859Data = {
    children: "23",
};

const frame2885171Data = {
    children: "30",
};

const frame2849860Data = {
    children: "We",
};

const frame2857138Data = {
    children: "3",
};

const frame2849861Data = {
    children: "10",
};

const frame2849862Data = {
    children: "17",
};

const frame2849863Data = {
    children: "24",
};

const frame2885172Data = {
    children: "1",
};

const frame2849864Data = {
    children: "Th",
};

const frame2849865Data = {
    children: "4",
};

const frame2849866Data = {
    children: "11",
};

const frame2849867Data = {
    children: "25",
};

const frame2885173Data = {
    children: "2",
};

const frame2849868Data = {
    children: "Fr",
};

const frame2857139Data = {
    children: "5",
};

const frame2849869Data = {
    children: "12",
};

const frame2849870Data = {
    children: "19",
};

const frame2849871Data = {
    children: "26",
};

const frame2885174Data = {
    children: "3",
};

const frame2849872Data = {
    children: "Sa",
};

const frame2857140Data = {
    children: "6",
};

const frame2849873Data = {
    children: "13",
};

const frame2849874Data = {
    children: "20",
};

const frame2849875Data = {
    children: "27",
};

const frame2885175Data = {
    children: "4",
};

const frame2855137Data = {
    children: "Su",
};

const frame2855138Data = {
    children: "14",
};

const frame2855139Data = {
    children: "21",
};

const frame2855140Data = {
    children: "28",
};

const group194235Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849851Data,
    frame28492Props: frame2849852Data,
    frame28493Props: frame2849853Data,
    frame28494Props: frame2849854Data,
    frame28495Props: frame2849855Data,
    frame28496Props: frame2849856Data,
    frame2857Props: frame2857137Data,
    frame28497Props: frame2849857Data,
    frame28498Props: frame2849858Data,
    frame28499Props: frame2849859Data,
    frame2885Props: frame2885171Data,
    frame284910Props: frame2849860Data,
    frame28572Props: frame2857138Data,
    frame284911Props: frame2849861Data,
    frame284912Props: frame2849862Data,
    frame284913Props: frame2849863Data,
    frame28852Props: frame2885172Data,
    frame284914Props: frame2849864Data,
    frame284915Props: frame2849865Data,
    frame284916Props: frame2849866Data,
    frame284917Props: frame2849867Data,
    frame28853Props: frame2885173Data,
    frame284918Props: frame2849868Data,
    frame28573Props: frame2857139Data,
    frame284919Props: frame2849869Data,
    frame284920Props: frame2849870Data,
    frame284921Props: frame2849871Data,
    frame28854Props: frame2885174Data,
    frame284922Props: frame2849872Data,
    frame28574Props: frame2857140Data,
    frame284923Props: frame2849873Data,
    frame284924Props: frame2849874Data,
    frame284925Props: frame2849875Data,
    frame28855Props: frame2885175Data,
    frame2855Props: frame2855137Data,
    frame28552Props: frame2855138Data,
    frame28553Props: frame2855139Data,
    frame28554Props: frame2855140Data,
};

const frame279121Data = {
    text108: "View calendar",
    group1942Props: group194235Data,
};

const chevronsLeft67Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft68Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891235Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft67Data,
    chevronsLeft2Props: chevronsLeft68Data,
};

const group194320Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279121Data,
    frame28912Props: frame2891235Data,
};

const frame194326Data = {
    frame1945Props: frame194533Data,
    frame1953Props: frame195334Data,
    frame1976Props: frame197613Data,
    frame1975Props: frame19759Data,
    frame19762Props: frame197614Data,
    frame1947Props: frame194734Data,
    frame1948Props: frame194834Data,
    frame2303Props: frame230335Data,
    group1943Props: group194320Data,
};

const frame28037Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28046Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline19Data,
};

const eye10Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline19Data = {
    eyeProps: eye10Data,
};

const frame28056Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline19Data,
};

const frame295624Data = {
    text374: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame2803Props: frame28037Data,
    frame2804Props: frame28046Data,
    frame2805Props: frame28056Data,
};

const frame29576Data = {
    children: "No comments yet",
};

const paperplaneoutline19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-926@2x.png",
};

const frame29616Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline19Data,
};

const morehorizontal13Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame28075Data = {
    children: "Search filters",
};

const layer2439Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline135Data = {
    layer24Props: layer2439Data,
};

const frame280824Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline135Data,
};

const layer2440Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline136Data = {
    layer24Props: layer2440Data,
};

const frame280825Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline136Data,
};

const frame281022Data = {
    children: "Search",
};

const frame28038Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline110Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280425Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline110Data,
};

const eye11Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline110Data = {
    eyeProps: eye11Data,
};

const frame280533Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline110Data,
};

const frame20793Data = {
    editPost: "Edit post",
    deletePost: "Delete post",
};

const frame29582Data = {
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1016: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1017: "November 1 at 05:55 PM",
};

const layer2441Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline137Data = {
    layer24Props: layer2441Data,
};

const frame295725Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline137Data,
};

const frame29592Data = {
    frame2801: "/img/frame-2815@2x.png",
    name: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", ",
    spanText3: "Can you write in direct to help me please?",
    text1019: "November 1 at 06:23 PM",
};

const frame29622Data = {
    children: "Show more replies",
};

const paperplaneoutline110Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-972@2x.png",
};

const frame296125Data = {
    frame2815: "/img/frame-2815@2x.png",
    text382: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline110Data,
};

const frame29712Data = {
    frame29612Props: frame296125Data,
};

const morehorizontal14Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame279733Data = {
    natureLovers: "Nature lovers",
    text1022: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const frame413Data = {
    children: "Edit group",
};

const frame297011Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2442Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline138Data = {
    layer24Props: layer2442Data,
};

const frame32445Data = {
    enterprisePhotos: "Group photos",
    chevronrightoutline1Props: chevronrightoutline138Data,
};

const frame29566Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame297011Data,
    frame3244Props: frame32445Data,
};

const videooutline6Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-977@2x.png",
};

const cameraoutline6Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-979@2x.png",
    vector3: "/img/vector-181@2x.png",
};

const X541MyGroupownerView2Data = {
    text1070: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame1969: "/img/frame-1969-16@1x.png",
    frame2815: "/img/frame-2815@2x.png",
    text1077: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    vector: "/img/vector-1195@2x.png",
    vector2: "/img/vector-1196@2x.png",
    vector3: "/img/vector-1197@2x.png",
    vector4: "/img/vector-1197@2x.png",
    vector5: "/img/vector-1199@2x.png",
    addPost: "Add Post",
    frame19544Props: frame1954414Data,
    backbtn2Props: backbtn26Data,
    frame194326Props: frame194326Data,
    frame29562Props: frame295624Data,
    frame2957Props: frame29576Data,
    frame2961Props: frame29616Data,
    morehorizontal1Props: morehorizontal13Data,
    frame2807Props: frame28075Data,
    frame28082Props: frame280824Data,
    frame280822Props: frame280825Data,
    frame28102Props: frame281022Data,
    frame2803Props: frame28038Data,
    frame28042Props: frame280425Data,
    frame28053Props: frame280533Data,
    frame20793Props: frame20793Data,
    frame2958Props: frame29582Data,
    frame29572Props: frame295725Data,
    frame2959Props: frame29592Data,
    frame2962Props: frame29622Data,
    frame2971Props: frame29712Data,
    morehorizontal12Props: morehorizontal14Data,
    frame27973Props: frame279733Data,
    frame413Props: frame413Data,
    frame2956Props: frame29566Data,
    videooutlineProps: videooutline6Data,
    cameraoutlineProps: cameraoutline6Data,
};

const email35Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2236Data = {
    emailProps: email35Data,
};

const emailoutline31Data = {
    layer22Props: layer2236Data,
};

const belloutline35Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-506@2x.png",
};

const personoutline135Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284816Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline135Data,
};

const frame1954415Data = {
    ragrariansI520753: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline31Data,
    belloutlineProps: belloutline35Data,
    frame2848Props: frame284816Data,
};

const frame280332Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text1079: "November 1 at 05:45 PM",
};

const messagesquareoutline111Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28047Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline111Data,
};

const eye12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline111Data = {
    eyeProps: eye12Data,
};

const frame28057Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline111Data,
};

const frame29577Data = {
    children: "No comments yet",
};

const paperplaneoutline111Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1107@2x.png",
};

const frame29617Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline111Data,
};

const morehorizontal15Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame295522Data = {
    text1080: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame28033Props: frame280332Data,
    frame2804Props: frame28047Data,
    frame2805Props: frame28057Data,
    frame2957Props: frame29577Data,
    frame2961Props: frame29617Data,
    morehorizontal1Props: morehorizontal15Data,
};

const layer2443Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline139Data = {
    layer24Props: layer2443Data,
};

const frame280832Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline139Data,
};

const layer2444Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline140Data = {
    layer24Props: layer2444Data,
};

const frame280833Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline140Data,
};

const frame281023Data = {
    children: "Search",
};

const frame28012Data = {
    searchFilters: "Search filters",
    frame28083Props: frame280832Data,
    frame280832Props: frame280833Data,
    frame28102Props: frame281023Data,
};

const frame3004Data = {
    frame1980: "/img/frame-1980@1x.png",
    frame2956: "/img/frame-2956@1x.png",
};

const frame280333Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text1079: "November 1 at 05:45 PM",
};

const messagesquareoutline112Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const eye13Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline112Data = {
    eyeProps: eye13Data,
};

const frame280524Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline112Data,
};

const morehorizontal16Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame207932Data = {
    editPost: "Edit post",
    deletePost: "Delete post",
};

const layer2445Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline141Data = {
    layer24Props: layer2445Data,
};

const paperplaneoutline112Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1172@2x.png",
};

const frame29618Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline112Data,
};

const frame2954Data = {
    text1083: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    address: "17 replies",
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1084: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1085: "November 1 at 05:55 PM",
    mostNewest: "Most newest",
    frame28012: "/img/frame-2815@2x.png",
    name2: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", Can you write in direct to help me please?",
    text1087: "November 1 at 06:23 PM",
    showMoreReplies: "Show more replies",
    frame28033Props: frame280333Data,
    messagesquareoutline1Props: messagesquareoutline112Data,
    frame28052Props: frame280524Data,
    morehorizontal1Props: morehorizontal16Data,
    frame20793Props: frame207932Data,
    chevronrightoutline1Props: chevronrightoutline141Data,
    frame2961Props: frame29618Data,
};

const iconsArrowsLeft19Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29238Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft19Data,
};

const backbtn27Data = {
    frame2923Props: frame29238Data,
};

const grid36Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289143Data = {
    gridProps: grid36Data,
};

const frame39Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194534Data = {
    frame2891Props: frame289143Data,
    frameProps: frame39Data,
};

const usermanagement36Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195335Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement36Data,
};

const frame284716Data = {
    frame1953Props: frame195335Data,
};

const frame197425Data = {
    children: "Groups",
};

const frame1975214Data = {
    children: "Members",
};

const frame197426Data = {
    children: "Enterprises",
};

const frame1944212Data = {
    frame2847Props: frame284716Data,
    frame1974Props: frame197425Data,
    frame19752Props: frame1975214Data,
    frame19742Props: frame197426Data,
};

const book41Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194735Data = {
    text41: "Library",
    bookProps: book41Data,
};

const frame194835Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230336Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849876Data = {
    children: "Mo",
};

const frame2849877Data = {
    children: "1",
};

const frame2849878Data = {
    children: "8",
};

const frame2849879Data = {
    children: "15",
};

const frame2849880Data = {
    children: "22",
};

const frame2849881Data = {
    children: "Tu",
};

const frame2857141Data = {
    children: "2",
};

const frame2849882Data = {
    children: "9",
};

const frame2849883Data = {
    children: "16",
};

const frame2849884Data = {
    children: "23",
};

const frame2885176Data = {
    children: "30",
};

const frame2849885Data = {
    children: "We",
};

const frame2857142Data = {
    children: "3",
};

const frame2849886Data = {
    children: "10",
};

const frame2849887Data = {
    children: "17",
};

const frame2849888Data = {
    children: "24",
};

const frame2885177Data = {
    children: "1",
};

const frame2849889Data = {
    children: "Th",
};

const frame2849890Data = {
    children: "4",
};

const frame2849891Data = {
    children: "11",
};

const frame2849892Data = {
    children: "25",
};

const frame2885178Data = {
    children: "2",
};

const frame2849893Data = {
    children: "Fr",
};

const frame2857143Data = {
    children: "5",
};

const frame2849894Data = {
    children: "12",
};

const frame2849895Data = {
    children: "19",
};

const frame2849896Data = {
    children: "26",
};

const frame2885179Data = {
    children: "3",
};

const frame2849897Data = {
    children: "Sa",
};

const frame2857144Data = {
    children: "6",
};

const frame2849898Data = {
    children: "13",
};

const frame2849899Data = {
    children: "20",
};

const frame2849900Data = {
    children: "27",
};

const frame2885180Data = {
    children: "4",
};

const frame2855141Data = {
    children: "Su",
};

const frame2855142Data = {
    children: "14",
};

const frame2855143Data = {
    children: "21",
};

const frame2855144Data = {
    children: "28",
};

const group194236Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849876Data,
    frame28492Props: frame2849877Data,
    frame28493Props: frame2849878Data,
    frame28494Props: frame2849879Data,
    frame28495Props: frame2849880Data,
    frame28496Props: frame2849881Data,
    frame2857Props: frame2857141Data,
    frame28497Props: frame2849882Data,
    frame28498Props: frame2849883Data,
    frame28499Props: frame2849884Data,
    frame2885Props: frame2885176Data,
    frame284910Props: frame2849885Data,
    frame28572Props: frame2857142Data,
    frame284911Props: frame2849886Data,
    frame284912Props: frame2849887Data,
    frame284913Props: frame2849888Data,
    frame28852Props: frame2885177Data,
    frame284914Props: frame2849889Data,
    frame284915Props: frame2849890Data,
    frame284916Props: frame2849891Data,
    frame284917Props: frame2849892Data,
    frame28853Props: frame2885178Data,
    frame284918Props: frame2849893Data,
    frame28573Props: frame2857143Data,
    frame284919Props: frame2849894Data,
    frame284920Props: frame2849895Data,
    frame284921Props: frame2849896Data,
    frame28854Props: frame2885179Data,
    frame284922Props: frame2849897Data,
    frame28574Props: frame2857144Data,
    frame284923Props: frame2849898Data,
    frame284924Props: frame2849899Data,
    frame284925Props: frame2849900Data,
    frame28855Props: frame2885180Data,
    frame2855Props: frame2855141Data,
    frame28552Props: frame2855142Data,
    frame28553Props: frame2855143Data,
    frame28554Props: frame2855144Data,
};

const frame279122Data = {
    text108: "View calendar",
    group1942Props: group194236Data,
};

const chevronsLeft69Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft70Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891236Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft69Data,
    chevronsLeft2Props: chevronsLeft70Data,
};

const group194321Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279122Data,
    frame28912Props: frame2891236Data,
};

const frame194327Data = {
    frame1945Props: frame194534Data,
    frame19442Props: frame1944212Data,
    frame1947Props: frame194735Data,
    frame1948Props: frame194835Data,
    frame2303Props: frame230336Data,
    group1943Props: group194321Data,
};

const frame297012Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-348@2x.png",
};

const frame2798Data = {
    natureLovers: "Nature lovers",
    text1110: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
    frame1969: "/img/frame-1969-16@1x.png",
    editGroup: "Edit group",
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876-4@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    groupPhotos: "Group photos",
    frame2970Props: frame297012Data,
};

const close21Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2319Data = {
    closeProps: close21Data,
};

const frame414Data = {
    children: "Cancel",
};

const X541MyGroupownerView3Data = {
    deleteGroup: "Delete group",
    deleteGroup2: "Delete group",
    text1111: <>Do you really want to delete your group? <br />You’ll lost all of your information and users after delete.</>,
    frame19544Props: frame1954415Data,
    frame29552Props: frame295522Data,
    frame28012Props: frame28012Data,
    frame3004Props: frame3004Data,
    frame2954Props: frame2954Data,
    backbtn2Props: backbtn27Data,
    frame194327Props: frame194327Data,
    frame2798Props: frame2798Data,
    layer23Props: layer2319Data,
    frame414Props: frame414Data,
};

const email36Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2237Data = {
    emailProps: email36Data,
};

const emailoutline32Data = {
    layer22Props: layer2237Data,
};

const belloutline36Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-604@2x.png",
};

const personoutline136Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284817Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline136Data,
};

const frame1954416Data = {
    ragrariansI520753: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline32Data,
    belloutlineProps: belloutline36Data,
    frame2848Props: frame284817Data,
};

const frame280334Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text1079: "November 1 at 05:45 PM",
};

const messagesquareoutline113Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28048Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline113Data,
};

const eye14Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline113Data = {
    eyeProps: eye14Data,
};

const frame28058Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline113Data,
};

const frame29578Data = {
    children: "No comments yet",
};

const paperplaneoutline113Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-926@2x.png",
};

const frame29619Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline113Data,
};

const morehorizontal17Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame295523Data = {
    text1080: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame28033Props: frame280334Data,
    frame2804Props: frame28048Data,
    frame2805Props: frame28058Data,
    frame2957Props: frame29578Data,
    frame2961Props: frame29619Data,
    morehorizontal1Props: morehorizontal17Data,
};

const layer2446Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline142Data = {
    layer24Props: layer2446Data,
};

const frame280834Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline142Data,
};

const layer2447Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline143Data = {
    layer24Props: layer2447Data,
};

const frame280835Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline143Data,
};

const frame281024Data = {
    children: "Search",
};

const frame280122Data = {
    searchFilters: "Search filters",
    frame28083Props: frame280834Data,
    frame280832Props: frame280835Data,
    frame28102Props: frame281024Data,
};

const frame30042Data = {
    frame1980: "/img/frame-1980@1x.png",
    frame2956: "/img/frame-2956@1x.png",
};

const frame280335Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text1079: "November 1 at 05:45 PM",
};

const messagesquareoutline114Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const eye15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline114Data = {
    eyeProps: eye15Data,
};

const frame280525Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline114Data,
};

const morehorizontal18Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame207933Data = {
    editPost: "Edit post",
    deletePost: "Delete post",
};

const layer2448Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline144Data = {
    layer24Props: layer2448Data,
};

const paperplaneoutline114Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-972@2x.png",
};

const frame296110Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline114Data,
};

const frame29542Data = {
    text1083: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    address: "17 replies",
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1084: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1085: "November 1 at 05:55 PM",
    mostNewest: "Most newest",
    frame28012: "/img/frame-2815@2x.png",
    name2: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", Can you write in direct to help me please?",
    text1087: "November 1 at 06:23 PM",
    showMoreReplies: "Show more replies",
    frame28033Props: frame280335Data,
    messagesquareoutline1Props: messagesquareoutline114Data,
    frame28052Props: frame280525Data,
    morehorizontal1Props: morehorizontal18Data,
    frame20793Props: frame207933Data,
    chevronrightoutline1Props: chevronrightoutline144Data,
    frame2961Props: frame296110Data,
};

const iconsArrowsLeft20Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame29239Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft20Data,
};

const backbtn28Data = {
    frame2923Props: frame29239Data,
};

const grid37Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289144Data = {
    gridProps: grid37Data,
};

const frame40Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194535Data = {
    frame2891Props: frame289144Data,
    frameProps: frame40Data,
};

const usermanagement37Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195336Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement37Data,
};

const frame284717Data = {
    frame1953Props: frame195336Data,
};

const frame197427Data = {
    children: "Groups",
};

const frame1975215Data = {
    children: "Members",
};

const frame197428Data = {
    children: "Enterprises",
};

const frame1944213Data = {
    frame2847Props: frame284717Data,
    frame1974Props: frame197427Data,
    frame19752Props: frame1975215Data,
    frame19742Props: frame197428Data,
};

const book42Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194736Data = {
    text41: "Library",
    bookProps: book42Data,
};

const frame194836Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230337Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849901Data = {
    children: "Mo",
};

const frame2849902Data = {
    children: "1",
};

const frame2849903Data = {
    children: "8",
};

const frame2849904Data = {
    children: "15",
};

const frame2849905Data = {
    children: "22",
};

const frame2849906Data = {
    children: "Tu",
};

const frame2857145Data = {
    children: "2",
};

const frame2849907Data = {
    children: "9",
};

const frame2849908Data = {
    children: "16",
};

const frame2849909Data = {
    children: "23",
};

const frame2885181Data = {
    children: "30",
};

const frame2849910Data = {
    children: "We",
};

const frame2857146Data = {
    children: "3",
};

const frame2849911Data = {
    children: "10",
};

const frame2849912Data = {
    children: "17",
};

const frame2849913Data = {
    children: "24",
};

const frame2885182Data = {
    children: "1",
};

const frame2849914Data = {
    children: "Th",
};

const frame2849915Data = {
    children: "4",
};

const frame2849916Data = {
    children: "11",
};

const frame2849917Data = {
    children: "25",
};

const frame2885183Data = {
    children: "2",
};

const frame2849918Data = {
    children: "Fr",
};

const frame2857147Data = {
    children: "5",
};

const frame2849919Data = {
    children: "12",
};

const frame2849920Data = {
    children: "19",
};

const frame2849921Data = {
    children: "26",
};

const frame2885184Data = {
    children: "3",
};

const frame2849922Data = {
    children: "Sa",
};

const frame2857148Data = {
    children: "6",
};

const frame2849923Data = {
    children: "13",
};

const frame2849924Data = {
    children: "20",
};

const frame2849925Data = {
    children: "27",
};

const frame2885185Data = {
    children: "4",
};

const frame2855145Data = {
    children: "Su",
};

const frame2855146Data = {
    children: "14",
};

const frame2855147Data = {
    children: "21",
};

const frame2855148Data = {
    children: "28",
};

const group194237Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849901Data,
    frame28492Props: frame2849902Data,
    frame28493Props: frame2849903Data,
    frame28494Props: frame2849904Data,
    frame28495Props: frame2849905Data,
    frame28496Props: frame2849906Data,
    frame2857Props: frame2857145Data,
    frame28497Props: frame2849907Data,
    frame28498Props: frame2849908Data,
    frame28499Props: frame2849909Data,
    frame2885Props: frame2885181Data,
    frame284910Props: frame2849910Data,
    frame28572Props: frame2857146Data,
    frame284911Props: frame2849911Data,
    frame284912Props: frame2849912Data,
    frame284913Props: frame2849913Data,
    frame28852Props: frame2885182Data,
    frame284914Props: frame2849914Data,
    frame284915Props: frame2849915Data,
    frame284916Props: frame2849916Data,
    frame284917Props: frame2849917Data,
    frame28853Props: frame2885183Data,
    frame284918Props: frame2849918Data,
    frame28573Props: frame2857147Data,
    frame284919Props: frame2849919Data,
    frame284920Props: frame2849920Data,
    frame284921Props: frame2849921Data,
    frame28854Props: frame2885184Data,
    frame284922Props: frame2849922Data,
    frame28574Props: frame2857148Data,
    frame284923Props: frame2849923Data,
    frame284924Props: frame2849924Data,
    frame284925Props: frame2849925Data,
    frame28855Props: frame2885185Data,
    frame2855Props: frame2855145Data,
    frame28552Props: frame2855146Data,
    frame28553Props: frame2855147Data,
    frame28554Props: frame2855148Data,
};

const frame279123Data = {
    text108: "View calendar",
    group1942Props: group194237Data,
};

const chevronsLeft71Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft72Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891237Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft71Data,
    chevronsLeft2Props: chevronsLeft72Data,
};

const group194322Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279123Data,
    frame28912Props: frame2891237Data,
};

const frame1943272Data = {
    frame1945Props: frame194535Data,
    frame19442Props: frame1944213Data,
    frame1947Props: frame194736Data,
    frame1948Props: frame194836Data,
    frame2303Props: frame230337Data,
    group1943Props: group194322Data,
};

const frame297013Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-348@2x.png",
};

const frame27982Data = {
    natureLovers: "Nature lovers",
    text1110: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
    frame1969: "/img/frame-1969-16@1x.png",
    editGroup: "Edit group",
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876-4@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    groupPhotos: "Group photos",
    frame2970Props: frame297013Data,
};

const close22Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2320Data = {
    closeProps: close22Data,
};

const layer2449Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline145Data = {
    layer24Props: layer2449Data,
};

const iconsCamera3Data = {
    src: "/img/union-7@2x.png",
};

const close23Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2321Data = {
    closeProps: close23Data,
};

const closeoutline17Data = {
    layer23Props: layer2321Data,
};

const frame415Data = {
    children: "Cancel",
};

const trashoutline15Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1340@2x.png",
};

const X541MyGroupownerView4Data = {
    editGroup: "Edit group",
    groupTitle: "Group title",
    natureLovers: "Nature lovers",
    category: "Category",
    ecology: "Ecology",
    text1145: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    frame317: "/img/frame-317-3@1x.png",
    updateInformation: "Update information",
    deleteGroup: "Delete group",
    frame19544Props: frame1954416Data,
    frame29552Props: frame295523Data,
    frame28012Props: frame280122Data,
    frame3004Props: frame30042Data,
    frame2954Props: frame29542Data,
    backbtn2Props: backbtn28Data,
    frame194327Props: frame1943272Data,
    frame2798Props: frame27982Data,
    layer23Props: layer2320Data,
    chevronrightoutline1Props: chevronrightoutline145Data,
    iconsCameraProps: iconsCamera3Data,
    closeoutline1Props: closeoutline17Data,
    frame415Props: frame415Data,
    trashoutline1Props: trashoutline15Data,
};

const email37Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2238Data = {
    emailProps: email37Data,
};

const emailoutline33Data = {
    layer22Props: layer2238Data,
};

const belloutline37Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-506@2x.png",
};

const personoutline137Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284818Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline137Data,
};

const frame1954417Data = {
    ragrariansI520753: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline33Data,
    belloutlineProps: belloutline37Data,
    frame2848Props: frame284818Data,
};

const frame280336Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text1079: "November 1 at 05:45 PM",
};

const messagesquareoutline115Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame28049Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline115Data,
};

const eye16Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline115Data = {
    eyeProps: eye16Data,
};

const frame28059Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline115Data,
};

const frame29579Data = {
    children: "No comments yet",
};

const paperplaneoutline115Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1107@2x.png",
};

const frame296111Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline115Data,
};

const morehorizontal19Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame295524Data = {
    text1080: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame28033Props: frame280336Data,
    frame2804Props: frame28049Data,
    frame2805Props: frame28059Data,
    frame2957Props: frame29579Data,
    frame2961Props: frame296111Data,
    morehorizontal1Props: morehorizontal19Data,
};

const layer2450Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline146Data = {
    layer24Props: layer2450Data,
};

const frame280836Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline146Data,
};

const layer2451Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline147Data = {
    layer24Props: layer2451Data,
};

const frame280837Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline147Data,
};

const frame281025Data = {
    children: "Search",
};

const frame280123Data = {
    searchFilters: "Search filters",
    frame28083Props: frame280836Data,
    frame280832Props: frame280837Data,
    frame28102Props: frame281025Data,
};

const frame30043Data = {
    frame1980: "/img/frame-1980@1x.png",
    frame2956: "/img/frame-2956@1x.png",
};

const frame280337Data = {
    frame2801: "/img/frame-2801@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text1079: "November 1 at 05:45 PM",
};

const messagesquareoutline116Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const eye17Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline116Data = {
    eyeProps: eye17Data,
};

const frame280526Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline116Data,
};

const morehorizontal110Data = {
    vector: "/img/vector-927@2x.png",
    vector2: "/img/vector-927@2x.png",
    vector3: "/img/vector-927@2x.png",
};

const frame207934Data = {
    editPost: "Edit post",
    deletePost: "Delete post",
};

const layer2452Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline148Data = {
    layer24Props: layer2452Data,
};

const paperplaneoutline116Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1172@2x.png",
};

const frame296112Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline116Data,
};

const frame29543Data = {
    text1083: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    address: "17 replies",
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1084: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1085: "November 1 at 05:55 PM",
    mostNewest: "Most newest",
    frame28012: "/img/frame-2815@2x.png",
    name2: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", Can you write in direct to help me please?",
    text1087: "November 1 at 06:23 PM",
    showMoreReplies: "Show more replies",
    frame28033Props: frame280337Data,
    messagesquareoutline1Props: messagesquareoutline116Data,
    frame28052Props: frame280526Data,
    morehorizontal1Props: morehorizontal110Data,
    frame20793Props: frame207934Data,
    chevronrightoutline1Props: chevronrightoutline148Data,
    frame2961Props: frame296112Data,
};

const iconsArrowsLeft21Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame292310Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft21Data,
};

const backbtn29Data = {
    frame2923Props: frame292310Data,
};

const grid38Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289145Data = {
    gridProps: grid38Data,
};

const frame41Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-641@2x.png",
    vector4: "/img/vector-598@2x.png",
    vector5: "/img/vector-1246@2x.png",
};

const frame194536Data = {
    frame2891Props: frame289145Data,
    frameProps: frame41Data,
};

const usermanagement38Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195337Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement38Data,
};

const frame284718Data = {
    frame1953Props: frame195337Data,
};

const frame197429Data = {
    children: "Groups",
};

const frame1975216Data = {
    children: "Members",
};

const frame197430Data = {
    children: "Enterprises",
};

const frame1944214Data = {
    frame2847Props: frame284718Data,
    frame1974Props: frame197429Data,
    frame19752Props: frame1975216Data,
    frame19742Props: frame197430Data,
};

const book43Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194737Data = {
    text41: "Library",
    bookProps: book43Data,
};

const frame194837Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230338Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame2849926Data = {
    children: "Mo",
};

const frame2849927Data = {
    children: "1",
};

const frame2849928Data = {
    children: "8",
};

const frame2849929Data = {
    children: "15",
};

const frame2849930Data = {
    children: "22",
};

const frame2849931Data = {
    children: "Tu",
};

const frame2857149Data = {
    children: "2",
};

const frame2849932Data = {
    children: "9",
};

const frame2849933Data = {
    children: "16",
};

const frame2849934Data = {
    children: "23",
};

const frame2885186Data = {
    children: "30",
};

const frame2849935Data = {
    children: "We",
};

const frame2857150Data = {
    children: "3",
};

const frame2849936Data = {
    children: "10",
};

const frame2849937Data = {
    children: "17",
};

const frame2849938Data = {
    children: "24",
};

const frame2885187Data = {
    children: "1",
};

const frame2849939Data = {
    children: "Th",
};

const frame2849940Data = {
    children: "4",
};

const frame2849941Data = {
    children: "11",
};

const frame2849942Data = {
    children: "25",
};

const frame2885188Data = {
    children: "2",
};

const frame2849943Data = {
    children: "Fr",
};

const frame2857151Data = {
    children: "5",
};

const frame2849944Data = {
    children: "12",
};

const frame2849945Data = {
    children: "19",
};

const frame2849946Data = {
    children: "26",
};

const frame2885189Data = {
    children: "3",
};

const frame2849947Data = {
    children: "Sa",
};

const frame2857152Data = {
    children: "6",
};

const frame2849948Data = {
    children: "13",
};

const frame2849949Data = {
    children: "20",
};

const frame2849950Data = {
    children: "27",
};

const frame2885190Data = {
    children: "4",
};

const frame2855149Data = {
    children: "Su",
};

const frame2855150Data = {
    children: "14",
};

const frame2855151Data = {
    children: "21",
};

const frame2855152Data = {
    children: "28",
};

const group194238Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849926Data,
    frame28492Props: frame2849927Data,
    frame28493Props: frame2849928Data,
    frame28494Props: frame2849929Data,
    frame28495Props: frame2849930Data,
    frame28496Props: frame2849931Data,
    frame2857Props: frame2857149Data,
    frame28497Props: frame2849932Data,
    frame28498Props: frame2849933Data,
    frame28499Props: frame2849934Data,
    frame2885Props: frame2885186Data,
    frame284910Props: frame2849935Data,
    frame28572Props: frame2857150Data,
    frame284911Props: frame2849936Data,
    frame284912Props: frame2849937Data,
    frame284913Props: frame2849938Data,
    frame28852Props: frame2885187Data,
    frame284914Props: frame2849939Data,
    frame284915Props: frame2849940Data,
    frame284916Props: frame2849941Data,
    frame284917Props: frame2849942Data,
    frame28853Props: frame2885188Data,
    frame284918Props: frame2849943Data,
    frame28573Props: frame2857151Data,
    frame284919Props: frame2849944Data,
    frame284920Props: frame2849945Data,
    frame284921Props: frame2849946Data,
    frame28854Props: frame2885189Data,
    frame284922Props: frame2849947Data,
    frame28574Props: frame2857152Data,
    frame284923Props: frame2849948Data,
    frame284924Props: frame2849949Data,
    frame284925Props: frame2849950Data,
    frame28855Props: frame2885190Data,
    frame2855Props: frame2855149Data,
    frame28552Props: frame2855150Data,
    frame28553Props: frame2855151Data,
    frame28554Props: frame2855152Data,
};

const frame279124Data = {
    text108: "View calendar",
    group1942Props: group194238Data,
};

const chevronsLeft73Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft74Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891238Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft73Data,
    chevronsLeft2Props: chevronsLeft74Data,
};

const group194323Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279124Data,
    frame28912Props: frame2891238Data,
};

const frame1943273Data = {
    frame1945Props: frame194536Data,
    frame19442Props: frame1944214Data,
    frame1947Props: frame194737Data,
    frame1948Props: frame194837Data,
    frame2303Props: frame230338Data,
    group1943Props: group194323Data,
};

const frame297014Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-348@2x.png",
};

const frame27983Data = {
    natureLovers: "Nature lovers",
    text1110: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
    frame1969: "/img/frame-1969-16@1x.png",
    editGroup: "Edit group",
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876-4@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    groupPhotos: "Group photos",
    frame2970Props: frame297014Data,
};

const close24Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2322Data = {
    closeProps: close24Data,
};

const frame416Data = {
    children: "Back to all groups",
};

const X541MyGroupownerView5Data = {
    deleteGroup: "Delete group",
    text1179: "Your group has been deleted.",
    frame19544Props: frame1954417Data,
    frame29552Props: frame295524Data,
    frame28012Props: frame280123Data,
    frame3004Props: frame30043Data,
    frame2954Props: frame29543Data,
    backbtn2Props: backbtn29Data,
    frame194327Props: frame1943273Data,
    frame2798Props: frame27983Data,
    layer23Props: layer2322Data,
    frame416Props: frame416Data,
};

const frame279742Data = {
    thinkLikeAFarmer: "Think like a farmer",
    text1180: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const layer2453Data = {
    vector: "/img/vector-622@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline149Data = {
    layer24Props: layer2453Data,
};

const frame29634Data = {
    youreFollower: "You’re follower",
    chevronrightoutline1Props: chevronrightoutline149Data,
};

const frame297015Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2454Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline150Data = {
    layer24Props: layer2454Data,
};

const frame32446Data = {
    enterprisePhotos: "Group photos",
    chevronrightoutline1Props: chevronrightoutline150Data,
};

const frame29567Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame297015Data,
    frame3244Props: frame32446Data,
};

const frame28039Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline117Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280410Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline117Data,
};

const eye18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline117Data = {
    eyeProps: eye18Data,
};

const frame280510Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline117Data,
};

const frame295625Data = {
    text374: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame2803Props: frame28039Data,
    frame2804Props: frame280410Data,
    frame2805Props: frame280510Data,
};

const frame295710Data = {
    children: "No comments yet",
};

const paperplaneoutline117Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1249@2x.png",
};

const frame296113Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline117Data,
};

const frame29554Data = {
    frame29562Props: frame295625Data,
    frame2957Props: frame295710Data,
    frame2961Props: frame296113Data,
};

const frame28076Data = {
    children: "Search filters",
};

const layer2455Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline151Data = {
    layer24Props: layer2455Data,
};

const frame280826Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline151Data,
};

const layer2456Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline152Data = {
    layer24Props: layer2456Data,
};

const frame280827Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline152Data,
};

const frame28105Data = {
    children: "Search",
};

const frame28013Data = {
    frame2807Props: frame28076Data,
    frame28082Props: frame280826Data,
    frame280822Props: frame280827Data,
    frame2810Props: frame28105Data,
};

const messagesquareoutline118Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280426Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline118Data,
};

const eye19Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline118Data = {
    eyeProps: eye19Data,
};

const frame280534Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline118Data,
};

const frame295642Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    text1184: "Think like a farmer (owner)",
    text1185: "November 1 at 05:45 PM",
    text1186: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame28042Props: frame280426Data,
    frame28053Props: frame280534Data,
};

const frame295822Data = {
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1187: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1188: "November 1 at 05:55 PM",
};

const layer2457Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline153Data = {
    layer24Props: layer2457Data,
};

const frame295726Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline153Data,
};

const frame295922Data = {
    frame2801: "/img/frame-2815@2x.png",
    name: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", ",
    spanText3: "can you write in direct to help me please?",
    text1190: "November 1 at 06:23 PM",
};

const email38Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2239Data = {
    emailProps: email38Data,
};

const emailoutline34Data = {
    layer22Props: layer2239Data,
};

const belloutline38Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline138Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195421Data = {
    ragrariansI123225: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    text1192: "My dashboard",
    emailoutlineProps: emailoutline34Data,
    belloutlineProps: belloutline38Data,
    personoutline1Props: personoutline138Data,
};

const iconsArrowsLeft22Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn14Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft22Data,
};

const grid39Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289146Data = {
    gridProps: grid39Data,
};

const frame50Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194537Data = {
    frame2891Props: frame289146Data,
    frameProps: frame50Data,
};

const usermanagement39Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195338Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement39Data,
};

const frame197510Data = {
    children: "Members",
};

const frame197615Data = {
    children: "Enterprises",
};

const book44Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194738Data = {
    text41: "Library",
    bookProps: book44Data,
};

const frame194838Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230339Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849951Data = {
    children: "Mo",
};

const frame2849952Data = {
    children: "1",
};

const frame2849953Data = {
    children: "8",
};

const frame2849954Data = {
    children: "15",
};

const frame2849955Data = {
    children: "22",
};

const frame2849956Data = {
    children: "Tu",
};

const frame2857153Data = {
    children: "2",
};

const frame2849957Data = {
    children: "9",
};

const frame2849958Data = {
    children: "16",
};

const frame2849959Data = {
    children: "23",
};

const frame2885191Data = {
    children: "30",
};

const frame2849960Data = {
    children: "We",
};

const frame2857154Data = {
    children: "3",
};

const frame2849961Data = {
    children: "10",
};

const frame2849962Data = {
    children: "17",
};

const frame2849963Data = {
    children: "24",
};

const frame2885192Data = {
    children: "1",
};

const frame2849964Data = {
    children: "Th",
};

const frame2849965Data = {
    children: "4",
};

const frame2849966Data = {
    children: "11",
};

const frame2849967Data = {
    children: "25",
};

const frame2885193Data = {
    children: "2",
};

const frame2849968Data = {
    children: "Fr",
};

const frame2857155Data = {
    children: "5",
};

const frame2849969Data = {
    children: "12",
};

const frame2849970Data = {
    children: "19",
};

const frame2849971Data = {
    children: "26",
};

const frame2885194Data = {
    children: "3",
};

const frame2849972Data = {
    children: "Sa",
};

const frame2857156Data = {
    children: "6",
};

const frame2849973Data = {
    children: "13",
};

const frame2849974Data = {
    children: "20",
};

const frame2849975Data = {
    children: "27",
};

const frame2885195Data = {
    children: "4",
};

const frame2855153Data = {
    children: "Su",
};

const frame2855154Data = {
    children: "14",
};

const frame2855155Data = {
    children: "21",
};

const frame2855156Data = {
    children: "28",
};

const group194239Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849951Data,
    frame28492Props: frame2849952Data,
    frame28493Props: frame2849953Data,
    frame28494Props: frame2849954Data,
    frame28495Props: frame2849955Data,
    frame28496Props: frame2849956Data,
    frame2857Props: frame2857153Data,
    frame28497Props: frame2849957Data,
    frame28498Props: frame2849958Data,
    frame28499Props: frame2849959Data,
    frame2885Props: frame2885191Data,
    frame284910Props: frame2849960Data,
    frame28572Props: frame2857154Data,
    frame284911Props: frame2849961Data,
    frame284912Props: frame2849962Data,
    frame284913Props: frame2849963Data,
    frame28852Props: frame2885192Data,
    frame284914Props: frame2849964Data,
    frame284915Props: frame2849965Data,
    frame284916Props: frame2849966Data,
    frame284917Props: frame2849967Data,
    frame28853Props: frame2885193Data,
    frame284918Props: frame2849968Data,
    frame28573Props: frame2857155Data,
    frame284919Props: frame2849969Data,
    frame284920Props: frame2849970Data,
    frame284921Props: frame2849971Data,
    frame28854Props: frame2885194Data,
    frame284922Props: frame2849972Data,
    frame28574Props: frame2857156Data,
    frame284923Props: frame2849973Data,
    frame284924Props: frame2849974Data,
    frame284925Props: frame2849975Data,
    frame28855Props: frame2885195Data,
    frame2855Props: frame2855153Data,
    frame28552Props: frame2855154Data,
    frame28553Props: frame2855155Data,
    frame28554Props: frame2855156Data,
};

const chevronsLeft75Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft76Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891239Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft75Data,
    chevronsLeft2Props: chevronsLeft76Data,
};

const frame194328Data = {
    text1194: "Groups",
    text1212: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194537Data,
    frame1953Props: frame195338Data,
    frame1975Props: frame197510Data,
    frame1976Props: frame197615Data,
    frame1947Props: frame194738Data,
    frame1948Props: frame194838Data,
    frame2303Props: frame230339Data,
    group1942Props: group194239Data,
    frame28912Props: frame2891239Data,
};

const X521GroupPageInsideuserViewData = {
    frame1969: "/img/frame-1969-18@1x.png",
    frame2815: "/img/frame-2815@2x.png",
    text1191: "Leave your comment here…",
    vector: "/img/vector-1294@2x.png",
    frame27974Props: frame279742Data,
    frame2963Props: frame29634Data,
    frame2956Props: frame29567Data,
    frame2955Props: frame29554Data,
    frame2801Props: frame28013Data,
    frame29564Props: frame295642Data,
    frame29582Props: frame295822Data,
    frame29572Props: frame295726Data,
    frame29592Props: frame295922Data,
    frame195421Props: frame195421Data,
    backbtn14Props: backbtn14Data,
    frame194328Props: frame194328Data,
};

const email39Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const belloutline39Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-506@2x.png",
};

const personoutline139Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195422Data = {
    ragrariansI2892821: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    text1214: "My dashboard",
    emailProps: email39Data,
    belloutlineProps: belloutline39Data,
    personoutline1Props: personoutline139Data,
};

const iconsArrowsLeft23Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn15Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft23Data,
};

const frame30674Data = {
    children: "02. How to be rich in 2020 and make business",
};

const videooutline7Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame33186Data = {
    text116: "Add video",
    videooutlineProps: videooutline7Data,
};

const cameraoutline7Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame331833Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutline7Data,
};

const filetextoutline8Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame331843Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutline8Data,
};

const frame193942Data = {
    frame3318Props: frame33186Data,
    frame33183Props: frame331833Data,
    frame33184Props: frame331843Data,
};

const grid40Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289147Data = {
    gridProps: grid40Data,
};

const frame51Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-598@2x.png",
    vector5: "/img/vector-599@2x.png",
};

const frame194538Data = {
    frame2891Props: frame289147Data,
    frameProps: frame51Data,
};

const usermanagement40Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195339Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement40Data,
};

const frame197511Data = {
    children: "Members",
};

const frame197616Data = {
    children: "Enterprises",
};

const book45Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194739Data = {
    text41: "Library",
    bookProps: book45Data,
};

const frame194839Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230340Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame2849976Data = {
    children: "Mo",
};

const frame2849977Data = {
    children: "1",
};

const frame2849978Data = {
    children: "8",
};

const frame2849979Data = {
    children: "15",
};

const frame2849980Data = {
    children: "22",
};

const frame2849981Data = {
    children: "Tu",
};

const frame2857157Data = {
    children: "2",
};

const frame2849982Data = {
    children: "9",
};

const frame2849983Data = {
    children: "16",
};

const frame2849984Data = {
    children: "23",
};

const frame2885196Data = {
    children: "30",
};

const frame2849985Data = {
    children: "We",
};

const frame2857158Data = {
    children: "3",
};

const frame2849986Data = {
    children: "10",
};

const frame2849987Data = {
    children: "17",
};

const frame2849988Data = {
    children: "24",
};

const frame2885197Data = {
    children: "1",
};

const frame2849989Data = {
    children: "Th",
};

const frame2849990Data = {
    children: "4",
};

const frame2849991Data = {
    children: "11",
};

const frame2849992Data = {
    children: "25",
};

const frame2885198Data = {
    children: "2",
};

const frame2849993Data = {
    children: "Fr",
};

const frame2857159Data = {
    children: "5",
};

const frame2849994Data = {
    children: "12",
};

const frame2849995Data = {
    children: "19",
};

const frame2849996Data = {
    children: "26",
};

const frame2885199Data = {
    children: "3",
};

const frame2849997Data = {
    children: "Sa",
};

const frame2857160Data = {
    children: "6",
};

const frame2849998Data = {
    children: "13",
};

const frame2849999Data = {
    children: "20",
};

const frame28491000Data = {
    children: "27",
};

const frame2885200Data = {
    children: "4",
};

const frame2855157Data = {
    children: "Su",
};

const frame2855158Data = {
    children: "14",
};

const frame2855159Data = {
    children: "21",
};

const frame2855160Data = {
    children: "28",
};

const group194240Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame2849976Data,
    frame28492Props: frame2849977Data,
    frame28493Props: frame2849978Data,
    frame28494Props: frame2849979Data,
    frame28495Props: frame2849980Data,
    frame28496Props: frame2849981Data,
    frame2857Props: frame2857157Data,
    frame28497Props: frame2849982Data,
    frame28498Props: frame2849983Data,
    frame28499Props: frame2849984Data,
    frame2885Props: frame2885196Data,
    frame284910Props: frame2849985Data,
    frame28572Props: frame2857158Data,
    frame284911Props: frame2849986Data,
    frame284912Props: frame2849987Data,
    frame284913Props: frame2849988Data,
    frame28852Props: frame2885197Data,
    frame284914Props: frame2849989Data,
    frame284915Props: frame2849990Data,
    frame284916Props: frame2849991Data,
    frame284917Props: frame2849992Data,
    frame28853Props: frame2885198Data,
    frame284918Props: frame2849993Data,
    frame28573Props: frame2857159Data,
    frame284919Props: frame2849994Data,
    frame284920Props: frame2849995Data,
    frame284921Props: frame2849996Data,
    frame28854Props: frame2885199Data,
    frame284922Props: frame2849997Data,
    frame28574Props: frame2857160Data,
    frame284923Props: frame2849998Data,
    frame284924Props: frame2849999Data,
    frame284925Props: frame28491000Data,
    frame28855Props: frame2885200Data,
    frame2855Props: frame2855157Data,
    frame28552Props: frame2855158Data,
    frame28553Props: frame2855159Data,
    frame28554Props: frame2855160Data,
};

const chevronsLeft77Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft78Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891240Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft77Data,
    chevronsLeft2Props: chevronsLeft78Data,
};

const frame194329Data = {
    text1227: "Groups",
    text1245: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194538Data,
    frame1953Props: frame195339Data,
    frame1975Props: frame197511Data,
    frame1976Props: frame197616Data,
    frame1947Props: frame194739Data,
    frame1948Props: frame194839Data,
    frame2303Props: frame230340Data,
    group1942Props: group194240Data,
    frame28912Props: frame2891240Data,
};

const X33AddNewBlockData = {
    text: "",
    frame1969: "/img/frame-1969@1x.png",
    name: "Jordan Ross Belfort speech 2020",
    text1215: "How to be rich in 2020 and make business",
    text1216: "Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. It is due to such a situation that the use of Ethanol fuel has increased in many countries. However, those wanting to switch to a different type of fuel have many questions about Ethanol. Many of these are concerned with what this fuel really is and how big a dent it makes in our lives and pockets.",
    frame2333: "/img/frame-2333@1x.png",
    frame195422Props: frame195422Data,
    backbtn15Props: backbtn15Data,
    frame3067Props: frame30674Data,
    frame19394Props: frame193942Data,
    frame194329Props: frame194329Data,
};

const frame279743Data = {
    thinkLikeAFarmer: "Think like a farmer",
    text1180: "Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!",
    dueToTheAdvantage: "2,564 followers",
};

const frame20804Data = {
    children: "Write a message",
};

const frame208023Data = {
    children: "Unfollow",
};

const frame297016Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-373@2x.png",
};

const layer2458Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline154Data = {
    layer24Props: layer2458Data,
};

const frame32447Data = {
    enterprisePhotos: "Group photos",
    chevronrightoutline1Props: chevronrightoutline154Data,
};

const frame29568Data = {
    frame2966: "/img/frame-2966@2x.png",
    frame2967: "/img/frame-2967@2x.png",
    frame2968: "/img/frame-2968@2x.png",
    frame2969: "/img/frame-2969@2x.png",
    rectangle876: "/img/rectangle-876@2x.png",
    frame2965: "/img/frame-2965@2x.png",
    frame2970Props: frame297016Data,
    frame3244Props: frame32447Data,
};

const layer2459Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline155Data = {
    layer24Props: layer2459Data,
};

const frame29635Data = {
    youreFollower: "You’re follower",
    chevronrightoutline1Props: chevronrightoutline155Data,
};

const frame280310Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    thinkLikeAFarmer: "Think like a farmer",
    text373: "November 1 at 05:45 PM",
};

const messagesquareoutline119Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280411Data = {
    address: "0 replies",
    messagesquareoutline1Props: messagesquareoutline119Data,
};

const eye20Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline119Data = {
    eyeProps: eye20Data,
};

const frame280511Data = {
    address: "87 views",
    eyeoutline1Props: eyeoutline119Data,
};

const frame295626Data = {
    text374: "Welcome guys! Now you’re a part of most greatest group in our community! 😎",
    frame2962: "/img/frame-2962@1x.png",
    frame2803Props: frame280310Data,
    frame2804Props: frame280411Data,
    frame2805Props: frame280511Data,
};

const frame295711Data = {
    children: "No comments yet",
};

const paperplaneoutline118Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1249@2x.png",
};

const frame296114Data = {
    frame2815: "/img/frame-2815@2x.png",
    text375: "Hi there! Nice to meet you & be a part of this!",
    paperplaneoutline1Props: paperplaneoutline118Data,
};

const frame29555Data = {
    frame29562Props: frame295626Data,
    frame2957Props: frame295711Data,
    frame2961Props: frame296114Data,
};

const frame28077Data = {
    children: "Search filters",
};

const layer2460Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline156Data = {
    layer24Props: layer2460Data,
};

const frame280828Data = {
    byDate: "By date",
    chevronrightoutline1Props: chevronrightoutline156Data,
};

const layer2461Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline157Data = {
    layer24Props: layer2461Data,
};

const frame280829Data = {
    byDate: "By popular",
    chevronrightoutline1Props: chevronrightoutline157Data,
};

const frame28106Data = {
    children: "Search",
};

const frame28014Data = {
    frame2807Props: frame28077Data,
    frame28082Props: frame280828Data,
    frame280822Props: frame280829Data,
    frame2810Props: frame28106Data,
};

const messagesquareoutline120Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-2@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-2@2x.png",
    vector5: "/img/vector-901@2x.png",
};

const frame280427Data = {
    address: "17 replies",
    messagesquareoutline1Props: messagesquareoutline120Data,
};

const eye21Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-913@2x.png",
    vector3: "/img/vector-914@2x.png",
};

const eyeoutline120Data = {
    eyeProps: eye21Data,
};

const frame280535Data = {
    address: "387 views",
    eyeoutline1Props: eyeoutline120Data,
};

const frame295643Data = {
    frame2801: "/img/frame-2801-20@2x.png",
    text1184: "Think like a farmer (owner)",
    text1185: "November 1 at 05:45 PM",
    text1186: "Hi there! What do you think about new COVID 19? How will you protect your family and business? It’s just a real big problem right now with my business!!!",
    frame28042Props: frame280427Data,
    frame28053Props: frame280535Data,
};

const frame295823Data = {
    frame2801: "/img/frame-2801-2@2x.png",
    name: "John Billboy",
    text1187: "Yeah, man! I really got you! We live in Texas for right now and could make a call with and help maybe!",
    text1188: "November 1 at 05:55 PM",
};

const layer2462Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-970@2x.png",
};

const chevronrightoutline158Data = {
    layer24Props: layer2462Data,
};

const frame295727Data = {
    mostNewest: "Most newest",
    chevronrightoutline1Props: chevronrightoutline158Data,
};

const frame295923Data = {
    frame2801: "/img/frame-2815@2x.png",
    name: "George Faith",
    spanText: "@John Billboy",
    spanText2: ", ",
    spanText3: "can you write in direct to help me please?",
    text1190: "November 1 at 06:23 PM",
};

const paperplaneoutline119Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1294@2x.png",
};

const frame296126Data = {
    frame2815: "/img/frame-2815@2x.png",
    text382: "Leave your comment here…",
    paperplaneoutline1Props: paperplaneoutline119Data,
};

const email40Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2240Data = {
    emailProps: email40Data,
};

const emailoutline35Data = {
    layer22Props: layer2240Data,
};

const belloutline40Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline140Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195423Data = {
    ragrariansI525151: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    text1259: "My dashboard",
    emailoutlineProps: emailoutline35Data,
    belloutlineProps: belloutline40Data,
    personoutline1Props: personoutline140Data,
};

const iconsArrowsLeft24Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn16Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft24Data,
};

const grid41Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289148Data = {
    gridProps: grid41Data,
};

const frame56Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-327@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-331@2x.png",
};

const frame194539Data = {
    frame2891Props: frame289148Data,
    frameProps: frame56Data,
};

const usermanagement41Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195340Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement41Data,
};

const frame197512Data = {
    children: "Members",
};

const frame197617Data = {
    children: "Enterprises",
};

const book46Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194740Data = {
    text41: "Library",
    bookProps: book46Data,
};

const frame194840Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230341Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame28491001Data = {
    children: "Mo",
};

const frame28491002Data = {
    children: "1",
};

const frame28491003Data = {
    children: "8",
};

const frame28491004Data = {
    children: "15",
};

const frame28491005Data = {
    children: "22",
};

const frame28491006Data = {
    children: "Tu",
};

const frame2857161Data = {
    children: "2",
};

const frame28491007Data = {
    children: "9",
};

const frame28491008Data = {
    children: "16",
};

const frame28491009Data = {
    children: "23",
};

const frame2885201Data = {
    children: "30",
};

const frame28491010Data = {
    children: "We",
};

const frame2857162Data = {
    children: "3",
};

const frame28491011Data = {
    children: "10",
};

const frame28491012Data = {
    children: "17",
};

const frame28491013Data = {
    children: "24",
};

const frame2885202Data = {
    children: "1",
};

const frame28491014Data = {
    children: "Th",
};

const frame28491015Data = {
    children: "4",
};

const frame28491016Data = {
    children: "11",
};

const frame28491017Data = {
    children: "25",
};

const frame2885203Data = {
    children: "2",
};

const frame28491018Data = {
    children: "Fr",
};

const frame2857163Data = {
    children: "5",
};

const frame28491019Data = {
    children: "12",
};

const frame28491020Data = {
    children: "19",
};

const frame28491021Data = {
    children: "26",
};

const frame2885204Data = {
    children: "3",
};

const frame28491022Data = {
    children: "Sa",
};

const frame2857164Data = {
    children: "6",
};

const frame28491023Data = {
    children: "13",
};

const frame28491024Data = {
    children: "20",
};

const frame28491025Data = {
    children: "27",
};

const frame2885205Data = {
    children: "4",
};

const frame2855161Data = {
    children: "Su",
};

const frame2855162Data = {
    children: "14",
};

const frame2855163Data = {
    children: "21",
};

const frame2855164Data = {
    children: "28",
};

const group194241Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491001Data,
    frame28492Props: frame28491002Data,
    frame28493Props: frame28491003Data,
    frame28494Props: frame28491004Data,
    frame28495Props: frame28491005Data,
    frame28496Props: frame28491006Data,
    frame2857Props: frame2857161Data,
    frame28497Props: frame28491007Data,
    frame28498Props: frame28491008Data,
    frame28499Props: frame28491009Data,
    frame2885Props: frame2885201Data,
    frame284910Props: frame28491010Data,
    frame28572Props: frame2857162Data,
    frame284911Props: frame28491011Data,
    frame284912Props: frame28491012Data,
    frame284913Props: frame28491013Data,
    frame28852Props: frame2885202Data,
    frame284914Props: frame28491014Data,
    frame284915Props: frame28491015Data,
    frame284916Props: frame28491016Data,
    frame284917Props: frame28491017Data,
    frame28853Props: frame2885203Data,
    frame284918Props: frame28491018Data,
    frame28573Props: frame2857163Data,
    frame284919Props: frame28491019Data,
    frame284920Props: frame28491020Data,
    frame284921Props: frame28491021Data,
    frame28854Props: frame2885204Data,
    frame284922Props: frame28491022Data,
    frame28574Props: frame2857164Data,
    frame284923Props: frame28491023Data,
    frame284924Props: frame28491024Data,
    frame284925Props: frame28491025Data,
    frame28855Props: frame2885205Data,
    frame2855Props: frame2855161Data,
    frame28552Props: frame2855162Data,
    frame28553Props: frame2855163Data,
    frame28554Props: frame2855164Data,
};

const chevronsLeft79Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft80Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891241Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft79Data,
    chevronsLeft2Props: chevronsLeft80Data,
};

const frame194330Data = {
    text1261: "Groups",
    text1279: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194539Data,
    frame1953Props: frame195340Data,
    frame1975Props: frame197512Data,
    frame1976Props: frame197617Data,
    frame1947Props: frame194740Data,
    frame1948Props: frame194840Data,
    frame2303Props: frame230341Data,
    group1942Props: group194241Data,
    frame28912Props: frame2891241Data,
};

const X521GroupPageInsideuserView2Data = {
    frame1969: "/img/frame-1969-18@1x.png",
    reportGroup: "Report group",
    frame27974Props: frame279743Data,
    frame2080Props: frame20804Data,
    frame20802Props: frame208023Data,
    frame2956Props: frame29568Data,
    frame2963Props: frame29635Data,
    frame2955Props: frame29555Data,
    frame2801Props: frame28014Data,
    frame29564Props: frame295643Data,
    frame29582Props: frame295823Data,
    frame29572Props: frame295727Data,
    frame29592Props: frame295923Data,
    frame29612Props: frame296126Data,
    frame195423Props: frame195423Data,
    backbtn16Props: backbtn16Data,
    frame194330Props: frame194330Data,
};

const email41Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2241Data = {
    emailProps: email41Data,
};

const belloutline41Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline141Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195424Data = {
    ragrariansI2852566: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    text1281: "My dashboard",
    layer22Props: layer2241Data,
    belloutlineProps: belloutline41Data,
    personoutline1Props: personoutline141Data,
};

const iconsArrowsLeft25Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame292311Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft25Data,
};

const backbtn210Data = {
    frame2923Props: frame292311Data,
};

const grid42Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289149Data = {
    gridProps: grid42Data,
};

const frame57Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194540Data = {
    frame2891Props: frame289149Data,
    frameProps: frame57Data,
};

const usermanagement42Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195341Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement42Data,
};

const frame197513Data = {
    children: "Members",
};

const frame197618Data = {
    children: "Enterprises",
};

const book47Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194741Data = {
    text41: "Library",
    bookProps: book47Data,
};

const frame194841Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230342Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame28491026Data = {
    children: "Mo",
};

const frame28491027Data = {
    children: "1",
};

const frame28491028Data = {
    children: "8",
};

const frame28491029Data = {
    children: "15",
};

const frame28491030Data = {
    children: "22",
};

const frame28491031Data = {
    children: "Tu",
};

const frame2857165Data = {
    children: "2",
};

const frame28491032Data = {
    children: "9",
};

const frame28491033Data = {
    children: "16",
};

const frame28491034Data = {
    children: "23",
};

const frame2885206Data = {
    children: "30",
};

const frame28491035Data = {
    children: "We",
};

const frame2857166Data = {
    children: "3",
};

const frame28491036Data = {
    children: "10",
};

const frame28491037Data = {
    children: "17",
};

const frame28491038Data = {
    children: "24",
};

const frame2885207Data = {
    children: "1",
};

const frame28491039Data = {
    children: "Th",
};

const frame28491040Data = {
    children: "4",
};

const frame28491041Data = {
    children: "11",
};

const frame28491042Data = {
    children: "25",
};

const frame2885208Data = {
    children: "2",
};

const frame28491043Data = {
    children: "Fr",
};

const frame2857167Data = {
    children: "5",
};

const frame28491044Data = {
    children: "12",
};

const frame28491045Data = {
    children: "19",
};

const frame28491046Data = {
    children: "26",
};

const frame2885209Data = {
    children: "3",
};

const frame28491047Data = {
    children: "Sa",
};

const frame2857168Data = {
    children: "6",
};

const frame28491048Data = {
    children: "13",
};

const frame28491049Data = {
    children: "20",
};

const frame28491050Data = {
    children: "27",
};

const frame2885210Data = {
    children: "4",
};

const frame2855165Data = {
    children: "Su",
};

const frame2855166Data = {
    children: "14",
};

const frame2855167Data = {
    children: "21",
};

const frame2855168Data = {
    children: "28",
};

const group194242Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491026Data,
    frame28492Props: frame28491027Data,
    frame28493Props: frame28491028Data,
    frame28494Props: frame28491029Data,
    frame28495Props: frame28491030Data,
    frame28496Props: frame28491031Data,
    frame2857Props: frame2857165Data,
    frame28497Props: frame28491032Data,
    frame28498Props: frame28491033Data,
    frame28499Props: frame28491034Data,
    frame2885Props: frame2885206Data,
    frame284910Props: frame28491035Data,
    frame28572Props: frame2857166Data,
    frame284911Props: frame28491036Data,
    frame284912Props: frame28491037Data,
    frame284913Props: frame28491038Data,
    frame28852Props: frame2885207Data,
    frame284914Props: frame28491039Data,
    frame284915Props: frame28491040Data,
    frame284916Props: frame28491041Data,
    frame284917Props: frame28491042Data,
    frame28853Props: frame2885208Data,
    frame284918Props: frame28491043Data,
    frame28573Props: frame2857167Data,
    frame284919Props: frame28491044Data,
    frame284920Props: frame28491045Data,
    frame284921Props: frame28491046Data,
    frame28854Props: frame2885209Data,
    frame284922Props: frame28491047Data,
    frame28574Props: frame2857168Data,
    frame284923Props: frame28491048Data,
    frame284924Props: frame28491049Data,
    frame284925Props: frame28491050Data,
    frame28855Props: frame2885210Data,
    frame2855Props: frame2855165Data,
    frame28552Props: frame2855166Data,
    frame28553Props: frame2855167Data,
    frame28554Props: frame2855168Data,
};

const chevronsLeft81Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft82Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891242Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft81Data,
    chevronsLeft2Props: chevronsLeft82Data,
};

const frame194331Data = {
    text1283: "Groups",
    text1301: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194540Data,
    frame1953Props: frame195341Data,
    frame1975Props: frame197513Data,
    frame1976Props: frame197618Data,
    frame1947Props: frame194741Data,
    frame1948Props: frame194841Data,
    frame2303Props: frame230342Data,
    group1942Props: group194242Data,
    frame28912Props: frame2891242Data,
};

const frame30675Data = {
    children: "How to be rich in 2020 and make business?",
};

const videooutline8Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame33187Data = {
    text116: "Add video",
    videooutlineProps: videooutline8Data,
};

const cameraoutline8Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame331834Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutline8Data,
};

const filetextoutline9Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame331844Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutline9Data,
};

const frame19395Data = {
    frame3318Props: frame33187Data,
    frame33183Props: frame331834Data,
    frame33184Props: frame331844Data,
};

const X33AddNewBlock2Data = {
    text: "",
    frame2333: "/img/frame-2333@1x.png",
    frame195424Props: frame195424Data,
    backbtn2Props: backbtn210Data,
    frame194331Props: frame194331Data,
    frame3067Props: frame30675Data,
    frame19395Props: frame19395Data,
};

const searchoutline112Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-233@2x.png",
};

const frame29124Data = {
    search: "Search…",
    searchoutline1Props: searchoutline112Data,
};

const grid43Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289150Data = {
    gridProps: grid43Data,
};

const frame58Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-239@2x.png",
    vector3: "/img/vector-13@2x.png",
    vector4: "/img/vector-14@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194541Data = {
    frame2891Props: frame289150Data,
    frameProps: frame58Data,
};

const usermanagement43Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195342Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement43Data,
};

const frame284719Data = {
    frame1953Props: frame195342Data,
};

const frame197619Data = {
    children: "Groups",
};

const frame197514Data = {
    children: "Members",
};

const frame197620Data = {
    children: "Enterprises",
};

const frame19444Data = {
    frame2847Props: frame284719Data,
    frame1976Props: frame197619Data,
    frame1975Props: frame197514Data,
    frame19762Props: frame197620Data,
};

const book48Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194742Data = {
    text41: "Library",
    bookProps: book48Data,
};

const frame194842Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230343Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame28491051Data = {
    children: "Mo",
};

const frame28491052Data = {
    children: "1",
};

const frame28491053Data = {
    children: "8",
};

const frame28491054Data = {
    children: "15",
};

const frame28491055Data = {
    children: "22",
};

const frame28491056Data = {
    children: "Tu",
};

const frame2857169Data = {
    children: "2",
};

const frame28491057Data = {
    children: "9",
};

const frame28491058Data = {
    children: "16",
};

const frame28491059Data = {
    children: "23",
};

const frame2885211Data = {
    children: "30",
};

const frame28491060Data = {
    children: "We",
};

const frame2857170Data = {
    children: "3",
};

const frame28491061Data = {
    children: "10",
};

const frame28491062Data = {
    children: "17",
};

const frame28491063Data = {
    children: "24",
};

const frame2885212Data = {
    children: "1",
};

const frame28491064Data = {
    children: "Th",
};

const frame28491065Data = {
    children: "4",
};

const frame28491066Data = {
    children: "11",
};

const frame28491067Data = {
    children: "25",
};

const frame2885213Data = {
    children: "2",
};

const frame28491068Data = {
    children: "Fr",
};

const frame2857171Data = {
    children: "5",
};

const frame28491069Data = {
    children: "12",
};

const frame28491070Data = {
    children: "19",
};

const frame28491071Data = {
    children: "26",
};

const frame2885214Data = {
    children: "3",
};

const frame28491072Data = {
    children: "Sa",
};

const frame2857172Data = {
    children: "6",
};

const frame28491073Data = {
    children: "13",
};

const frame28491074Data = {
    children: "20",
};

const frame28491075Data = {
    children: "27",
};

const frame2885215Data = {
    children: "4",
};

const frame2855169Data = {
    children: "Su",
};

const frame2855170Data = {
    children: "14",
};

const frame2855171Data = {
    children: "21",
};

const frame2855172Data = {
    children: "28",
};

const group194243Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491051Data,
    frame28492Props: frame28491052Data,
    frame28493Props: frame28491053Data,
    frame28494Props: frame28491054Data,
    frame28495Props: frame28491055Data,
    frame28496Props: frame28491056Data,
    frame2857Props: frame2857169Data,
    frame28497Props: frame28491057Data,
    frame28498Props: frame28491058Data,
    frame28499Props: frame28491059Data,
    frame2885Props: frame2885211Data,
    frame284910Props: frame28491060Data,
    frame28572Props: frame2857170Data,
    frame284911Props: frame28491061Data,
    frame284912Props: frame28491062Data,
    frame284913Props: frame28491063Data,
    frame28852Props: frame2885212Data,
    frame284914Props: frame28491064Data,
    frame284915Props: frame28491065Data,
    frame284916Props: frame28491066Data,
    frame284917Props: frame28491067Data,
    frame28853Props: frame2885213Data,
    frame284918Props: frame28491068Data,
    frame28573Props: frame2857171Data,
    frame284919Props: frame28491069Data,
    frame284920Props: frame28491070Data,
    frame284921Props: frame28491071Data,
    frame28854Props: frame2885214Data,
    frame284922Props: frame28491072Data,
    frame28574Props: frame2857172Data,
    frame284923Props: frame28491073Data,
    frame284924Props: frame28491074Data,
    frame284925Props: frame28491075Data,
    frame28855Props: frame2885215Data,
    frame2855Props: frame2855169Data,
    frame28552Props: frame2855170Data,
    frame28553Props: frame2855171Data,
    frame28554Props: frame2855172Data,
};

const frame279125Data = {
    text108: "View calendar",
    group1942Props: group194243Data,
};

const chevronsLeft83Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft84Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891243Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft83Data,
    chevronsLeft2Props: chevronsLeft84Data,
};

const group194324Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279125Data,
    frame28912Props: frame2891243Data,
};

const frame1943322Data = {
    frame1945Props: frame194541Data,
    frame1944Props: frame19444Data,
    frame1947Props: frame194742Data,
    frame1948Props: frame194842Data,
    frame2303Props: frame230343Data,
    group1943Props: group194324Data,
};

const email42Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2242Data = {
    emailProps: email42Data,
};

const emailoutline36Data = {
    layer22Props: layer2242Data,
};

const belloutline42Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline142Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284819Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline142Data,
};

const frame1954418Data = {
    ragrariansI520753: "Ragrarians News",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline36Data,
    belloutlineProps: belloutline42Data,
    frame2848Props: frame284819Data,
};

const frame196923Data = {
    frame1969: "/img/frame-1969-2@1x.png",
    address: "6 min read",
};

const frame35014Data = {
    farming: "FARMING",
    text81: "Fueling the ethanol industry",
};

const frame27893Data = {
    children: "November 01, 2020",
};

const frame197923Data = {
    text82: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
    frame3501Props: frame35014Data,
    frame2789Props: frame27893Data,
};

const frame34706Data = {
    children: "12 min read",
};

const frame196933Data = {
    frame1969: "/img/frame-1969-3@1x.png",
    frame3470Props: frame34706Data,
};

const frame35015Data = {
    farming: "PEOPLE",
    text81: "Fueling the ethanol industry",
};

const frame27894Data = {
    children: "November 01, 2020",
};

const frame34692Data = {
    text84: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste.",
    frame3501Props: frame35015Data,
    frame2789Props: frame27894Data,
};

const frame34707Data = {
    children: "12 min read",
};

const frame35016Data = {
    farming: "NATURE",
    text81: "Fueling the ethanol industry",
};

const frame18893Data = {
    src: "/img/ellipse-15-1@2x.png",
};

const frame197933Data = {
    text86: "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the main type of alcohol in most alcoholic also the main type of alcohol in most alcoholic…",
    date: "November 01, 2020",
    address: "6 min read",
    frame3501Props: frame35016Data,
    frame1889Props: frame18893Data,
};

const frame29152Data = {
    text87: "Discover more of what matters to you",
    farming: "Farming",
    carsIndustry: "Cars industry",
    mediaNews: "Media news",
    people: "People",
    nature: "Nature",
    seeAllTopics: "See all topics",
};

const close25Data = {
    vector: "/img/vector-281@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2323Data = {
    closeProps: close25Data,
};

const X3AddNewsData = {
    addNews: "Add news",
    frame1969: "/img/frame-1969-4@1x.png",
    addNews2: "Add news",
    spanText: "News title",
    spanText2: "*",
    spanText3: "News category",
    spanText4: "*",
    xcontinue: "Continue",
    frame2912Props: frame29124Data,
    frame194332Props: frame1943322Data,
    frame19544Props: frame1954418Data,
    frame19692Props: frame196923Data,
    frame19792Props: frame197923Data,
    frame19693Props: frame196933Data,
    frame3469Props: frame34692Data,
    frame3470Props: frame34707Data,
    frame19793Props: frame197933Data,
    frame2915Props: frame29152Data,
    layer23Props: layer2323Data,
};

const email43Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2243Data = {
    emailProps: email43Data,
};

const emailoutline37Data = {
    layer22Props: layer2243Data,
};

const belloutline43Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline143Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284820Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline143Data,
};

const frame1954419Data = {
    ragrariansI520753: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline37Data,
    belloutlineProps: belloutline43Data,
    frame2848Props: frame284820Data,
};

const grid44Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289151Data = {
    gridProps: grid44Data,
};

const frame59Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194542Data = {
    frame2891Props: frame289151Data,
    frameProps: frame59Data,
};

const usermanagement44Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195343Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement44Data,
};

const frame284720Data = {
    frame1953Props: frame195343Data,
};

const frame197431Data = {
    children: "Groups",
};

const frame1975217Data = {
    children: "Members",
};

const frame197432Data = {
    children: "Enterprises",
};

const frame1944215Data = {
    frame2847Props: frame284720Data,
    frame1974Props: frame197431Data,
    frame19752Props: frame1975217Data,
    frame19742Props: frame197432Data,
};

const book49Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194743Data = {
    text41: "Library",
    bookProps: book49Data,
};

const frame194843Data = {
    graduationCap: "/img/graduation-cap-4@2x.png",
    text42: "Courses",
};

const frame230344Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame28491076Data = {
    children: "Mo",
};

const frame28491077Data = {
    children: "1",
};

const frame28491078Data = {
    children: "8",
};

const frame28491079Data = {
    children: "15",
};

const frame28491080Data = {
    children: "22",
};

const frame28491081Data = {
    children: "Tu",
};

const frame2857173Data = {
    children: "2",
};

const frame28491082Data = {
    children: "9",
};

const frame28491083Data = {
    children: "16",
};

const frame28491084Data = {
    children: "23",
};

const frame2885216Data = {
    children: "30",
};

const frame28491085Data = {
    children: "We",
};

const frame2857174Data = {
    children: "3",
};

const frame28491086Data = {
    children: "10",
};

const frame28491087Data = {
    children: "17",
};

const frame28491088Data = {
    children: "24",
};

const frame2885217Data = {
    children: "1",
};

const frame28491089Data = {
    children: "Th",
};

const frame28491090Data = {
    children: "4",
};

const frame28491091Data = {
    children: "11",
};

const frame28491092Data = {
    children: "25",
};

const frame2885218Data = {
    children: "2",
};

const frame28491093Data = {
    children: "Fr",
};

const frame2857175Data = {
    children: "5",
};

const frame28491094Data = {
    children: "12",
};

const frame28491095Data = {
    children: "19",
};

const frame28491096Data = {
    children: "26",
};

const frame2885219Data = {
    children: "3",
};

const frame28491097Data = {
    children: "Sa",
};

const frame2857176Data = {
    children: "6",
};

const frame28491098Data = {
    children: "13",
};

const frame28491099Data = {
    children: "20",
};

const frame28491100Data = {
    children: "27",
};

const frame2885220Data = {
    children: "4",
};

const frame2855173Data = {
    children: "Su",
};

const frame2855174Data = {
    children: "14",
};

const frame2855175Data = {
    children: "21",
};

const frame2855176Data = {
    children: "28",
};

const group194244Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491076Data,
    frame28492Props: frame28491077Data,
    frame28493Props: frame28491078Data,
    frame28494Props: frame28491079Data,
    frame28495Props: frame28491080Data,
    frame28496Props: frame28491081Data,
    frame2857Props: frame2857173Data,
    frame28497Props: frame28491082Data,
    frame28498Props: frame28491083Data,
    frame28499Props: frame28491084Data,
    frame2885Props: frame2885216Data,
    frame284910Props: frame28491085Data,
    frame28572Props: frame2857174Data,
    frame284911Props: frame28491086Data,
    frame284912Props: frame28491087Data,
    frame284913Props: frame28491088Data,
    frame28852Props: frame2885217Data,
    frame284914Props: frame28491089Data,
    frame284915Props: frame28491090Data,
    frame284916Props: frame28491091Data,
    frame284917Props: frame28491092Data,
    frame28853Props: frame2885218Data,
    frame284918Props: frame28491093Data,
    frame28573Props: frame2857175Data,
    frame284919Props: frame28491094Data,
    frame284920Props: frame28491095Data,
    frame284921Props: frame28491096Data,
    frame28854Props: frame2885219Data,
    frame284922Props: frame28491097Data,
    frame28574Props: frame2857176Data,
    frame284923Props: frame28491098Data,
    frame284924Props: frame28491099Data,
    frame284925Props: frame28491100Data,
    frame28855Props: frame2885220Data,
    frame2855Props: frame2855173Data,
    frame28552Props: frame2855174Data,
    frame28553Props: frame2855175Data,
    frame28554Props: frame2855176Data,
};

const frame279126Data = {
    text108: "View calendar",
    group1942Props: group194244Data,
};

const chevronsLeft85Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft86Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891244Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft85Data,
    chevronsLeft2Props: chevronsLeft86Data,
};

const group194325Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279126Data,
    frame28912Props: frame2891244Data,
};

const frame1943103Data = {
    frame1945Props: frame194542Data,
    frame19442Props: frame1944215Data,
    frame1947Props: frame194743Data,
    frame1948Props: frame194843Data,
    frame2303Props: frame230344Data,
    group1943Props: group194325Data,
};

const iconsArrowsLeft26Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame292312Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft26Data,
};

const backbtn211Data = {
    frame2923Props: frame292312Data,
};

const frame30676Data = {
    children: "02. How to be rich in 2020 and make business",
};

const videooutline9Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame33188Data = {
    text116: "Add video",
    videooutlineProps: videooutline9Data,
};

const frame33173Data = {
    frame3318Props: frame33188Data,
};

const cameraoutline9Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame331835Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutline9Data,
};

const frame331823Data = {
    frame33183Props: frame331835Data,
};

const filetextoutline10Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame331845Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutline10Data,
};

const frame33193Data = {
    frame33184Props: frame331845Data,
};

const frame2829Data = {
    text: "",
    frame1969: "/img/frame-1969@1x.png",
    name: "Jordan Ross Belfort speech 2020",
    frame3067Props: frame30676Data,
    frame3317Props: frame33173Data,
    frame33182Props: frame331823Data,
    frame3319Props: frame33193Data,
};

const close26Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2324Data = {
    closeProps: close26Data,
};

const X33AddNewBlocktextData = {
    addText: "Add text",
    addBlock: "Add block",
    textTitle: "Text title",
    typeTextHere: "Type text here",
    frame19544Props: frame1954419Data,
    frame194310Props: frame1943103Data,
    backbtn2Props: backbtn211Data,
    frame2829Props: frame2829Data,
    layer23Props: layer2324Data,
};

const searchoutline113Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1354@2x.png",
};

const funneloutline18Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-283@2x.png",
};

const layer2463Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-287@2x.png",
};

const chevronrightoutline159Data = {
    layer24Props: layer2463Data,
};

const frame279422Data = {
    farmers: "FARMERS",
    thinkLikeAFarmer: "Think like a farmer",
};

const frame2790Data = {
    children: "Last publication: 2 days ago",
};

const frame279632Data = {
    dontRecommend: "Don’t recommend",
    follow: "Follow",
};

const frame195922Data = {
    frame1969: "/img/frame-1969-21@2x.png",
    x2564Followers: "2,564 followers",
    frame27942Props: frame279422Data,
    frame2790Props: frame2790Data,
    frame27963Props: frame279632Data,
};

const frame279423Data = {
    farmers: "BLOG",
    thinkLikeAFarmer: "My blog about travel around the world and write about it",
};

const frame279642Data = {
    children: "Unfollow",
};

const frame279424Data = {
    farmers: "MEDIA",
    thinkLikeAFarmer: "News about farm, farmers and life from Ireland",
};

const frame27902Data = {
    children: "Last publication: 2 days ago",
};

const frame279633Data = {
    dontRecommend: "Don’t recommend",
    follow: "Follow",
};

const frame195923Data = {
    frame1969: "/img/frame-1969-23@2x.png",
    x2564Followers: "9,464 followers",
    frame27942Props: frame279424Data,
    frame2790Props: frame27902Data,
    frame27963Props: frame279633Data,
};

const frame279425Data = {
    farmers: "ECOLOGY",
    thinkLikeAFarmer: "Let’s save our nature together! Community for nature lovers!",
};

const frame278922Data = {
    children: "22,564 followers",
};

const frame27903Data = {
    children: "Last publication: 5 days ago",
};

const frame279643Data = {
    children: "Unfollow",
};

const frame279426Data = {
    farmers: "CARS",
    thinkLikeAFarmer: "Community about cars",
};

const frame27904Data = {
    children: "Last publication: 2 days ago",
};

const frame279634Data = {
    dontRecommend: "Don’t recommend",
    follow: "Follow",
};

const frame195924Data = {
    frame1969: "/img/frame-1969-25@2x.png",
    x2564Followers: "1,221 followers",
    frame27942Props: frame279426Data,
    frame2790Props: frame27904Data,
    frame27963Props: frame279634Data,
};

const frame279427Data = {
    farmers: "FARM INDUSTRY",
    thinkLikeAFarmer: "Farming, farming,farming!!!",
};

const frame278923Data = {
    children: "12,564 followers",
};

const frame279635Data = {
    dontRecommend: "Don’t recommend",
    follow: "Follow",
};

const email44Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2244Data = {
    emailProps: email44Data,
};

const emailoutline38Data = {
    layer22Props: layer2244Data,
};

const belloutline44Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-284@2x.png",
};

const personoutline144Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284821Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline144Data,
};

const frame1954420Data = {
    ragrariansI520753: "Ragrarians groups",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline38Data,
    belloutlineProps: belloutline44Data,
    frame2848Props: frame284821Data,
};

const grid45Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289152Data = {
    gridProps: grid45Data,
};

const frame60Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-352@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-329@2x.png",
    vector4: "/img/vector-355@2x.png",
    vector5: "/img/vector-798@2x.png",
};

const frame194543Data = {
    frame2891Props: frame289152Data,
    frameProps: frame60Data,
};

const usermanagement45Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195344Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement45Data,
};

const frame284721Data = {
    frame1953Props: frame195344Data,
};

const frame197433Data = {
    children: "Groups",
};

const frame1975218Data = {
    children: "Members",
};

const frame197434Data = {
    children: "Enterprises",
};

const frame1944216Data = {
    frame2847Props: frame284721Data,
    frame1974Props: frame197433Data,
    frame19752Props: frame1975218Data,
    frame19742Props: frame197434Data,
};

const book50Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194744Data = {
    text41: "Library",
    bookProps: book50Data,
};

const frame194844Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230345Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame28491101Data = {
    children: "Mo",
};

const frame28491102Data = {
    children: "1",
};

const frame28491103Data = {
    children: "8",
};

const frame28491104Data = {
    children: "15",
};

const frame28491105Data = {
    children: "22",
};

const frame28491106Data = {
    children: "Tu",
};

const frame2857177Data = {
    children: "2",
};

const frame28491107Data = {
    children: "9",
};

const frame28491108Data = {
    children: "16",
};

const frame28491109Data = {
    children: "23",
};

const frame2885221Data = {
    children: "30",
};

const frame28491110Data = {
    children: "We",
};

const frame2857178Data = {
    children: "3",
};

const frame28491111Data = {
    children: "10",
};

const frame28491112Data = {
    children: "17",
};

const frame28491113Data = {
    children: "24",
};

const frame2885222Data = {
    children: "1",
};

const frame28491114Data = {
    children: "Th",
};

const frame28491115Data = {
    children: "4",
};

const frame28491116Data = {
    children: "11",
};

const frame28491117Data = {
    children: "25",
};

const frame2885223Data = {
    children: "2",
};

const frame28491118Data = {
    children: "Fr",
};

const frame2857179Data = {
    children: "5",
};

const frame28491119Data = {
    children: "12",
};

const frame28491120Data = {
    children: "19",
};

const frame28491121Data = {
    children: "26",
};

const frame2885224Data = {
    children: "3",
};

const frame28491122Data = {
    children: "Sa",
};

const frame2857180Data = {
    children: "6",
};

const frame28491123Data = {
    children: "13",
};

const frame28491124Data = {
    children: "20",
};

const frame28491125Data = {
    children: "27",
};

const frame2885225Data = {
    children: "4",
};

const frame2855177Data = {
    children: "Su",
};

const frame2855178Data = {
    children: "14",
};

const frame2855179Data = {
    children: "21",
};

const frame2855180Data = {
    children: "28",
};

const group194245Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491101Data,
    frame28492Props: frame28491102Data,
    frame28493Props: frame28491103Data,
    frame28494Props: frame28491104Data,
    frame28495Props: frame28491105Data,
    frame28496Props: frame28491106Data,
    frame2857Props: frame2857177Data,
    frame28497Props: frame28491107Data,
    frame28498Props: frame28491108Data,
    frame28499Props: frame28491109Data,
    frame2885Props: frame2885221Data,
    frame284910Props: frame28491110Data,
    frame28572Props: frame2857178Data,
    frame284911Props: frame28491111Data,
    frame284912Props: frame28491112Data,
    frame284913Props: frame28491113Data,
    frame28852Props: frame2885222Data,
    frame284914Props: frame28491114Data,
    frame284915Props: frame28491115Data,
    frame284916Props: frame28491116Data,
    frame284917Props: frame28491117Data,
    frame28853Props: frame2885223Data,
    frame284918Props: frame28491118Data,
    frame28573Props: frame2857179Data,
    frame284919Props: frame28491119Data,
    frame284920Props: frame28491120Data,
    frame284921Props: frame28491121Data,
    frame28854Props: frame2885224Data,
    frame284922Props: frame28491122Data,
    frame28574Props: frame2857180Data,
    frame284923Props: frame28491123Data,
    frame284924Props: frame28491124Data,
    frame284925Props: frame28491125Data,
    frame28855Props: frame2885225Data,
    frame2855Props: frame2855177Data,
    frame28552Props: frame2855178Data,
    frame28553Props: frame2855179Data,
    frame28554Props: frame2855180Data,
};

const frame279127Data = {
    text108: "View calendar",
    group1942Props: group194245Data,
};

const chevronsLeft87Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft88Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891245Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft87Data,
    chevronsLeft2Props: chevronsLeft88Data,
};

const group194326Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279127Data,
    frame28912Props: frame2891245Data,
};

const frame194333Data = {
    frame1945Props: frame194543Data,
    frame19442Props: frame1944216Data,
    frame1947Props: frame194744Data,
    frame1948Props: frame194844Data,
    frame2303Props: frame230345Data,
    group1943Props: group194326Data,
};

const close27Data = {
    vector: "/img/ellipse-703@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2325Data = {
    closeProps: close27Data,
};

const frame482Data = {
    spanText: "Group title",
    spanText2: "*",
};

const layer2464Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-552@2x.png",
};

const chevronrightoutline160Data = {
    layer24Props: layer2464Data,
};

const frame19642Data = {
    spanText: "Select category",
    spanText2: "*",
    chevronrightoutline1Props: chevronrightoutline160Data,
};

const frame19653Data = {
    children: "Group description",
};

const frame3172Data = {
    children: "Drag & Drop files in this area or Click Here to attach",
};

const X51AllGroupsCreateGroupData = {
    searchGroups: "Search groups",
    filterByCategory: "Filter by category",
    allGroups: "All Groups",
    yourGroups: "Your Groups",
    createGroup: "Create group",
    frame1969: "/img/frame-1969-22@2x.png",
    address: "564 followers",
    date: "Last publication: today",
    frame19692: "/img/frame-1969-24@2x.png",
    frame19693: "/img/frame-1969-26@2x.png",
    text1369: "Last publication: < hour ago",
    createGroup2: "Create group",
    createGroup3: "Create group",
    searchoutline1Props: searchoutline113Data,
    funneloutline1Props: funneloutline18Data,
    chevronrightoutline1Props: chevronrightoutline159Data,
    frame19592Props: frame195922Data,
    frame27942Props: frame279423Data,
    frame27964Props: frame279642Data,
    frame195922Props: frame195923Data,
    frame279422Props: frame279425Data,
    frame27892Props: frame278922Data,
    frame2790Props: frame27903Data,
    frame279642Props: frame279643Data,
    frame195923Props: frame195924Data,
    frame279423Props: frame279427Data,
    frame278922Props: frame278923Data,
    frame27963Props: frame279635Data,
    frame19544Props: frame1954420Data,
    frame194333Props: frame194333Data,
    layer23Props: layer2325Data,
    frame48Props: frame482Data,
    frame1964Props: frame19642Data,
    frame1965Props: frame19653Data,
    frame317Props: frame3172Data,
};

const email45Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2245Data = {
    emailProps: email45Data,
};

const belloutline45Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-3@2x.png",
};

const personoutline145Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame195425Data = {
    ragrariansI2854952: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    text1393: "My dashboard",
    layer22Props: layer2245Data,
    belloutlineProps: belloutline45Data,
    personoutline1Props: personoutline145Data,
};

const iconsArrowsLeft27Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const backbtn17Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft27Data,
};

const frame30677Data = {
    children: "02. How to be rich in 2020 and make business",
};

const videooutline10Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame33189Data = {
    text116: "Add video",
    videooutlineProps: videooutline10Data,
};

const cameraoutline10Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame331836Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutline10Data,
};

const filetextoutline11Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame331846Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutline11Data,
};

const frame19396Data = {
    frame3318Props: frame33189Data,
    frame33183Props: frame331836Data,
    frame33184Props: frame331846Data,
};

const grid46Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289153Data = {
    gridProps: grid46Data,
};

const frame61Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194544Data = {
    frame2891Props: frame289153Data,
    frameProps: frame61Data,
};

const usermanagement46Data = {
    vector: "/img/vector-17@2x.png",
    vector2: "/img/vector-18@2x.png",
    vector3: "/img/vector-19@2x.png",
    vector4: "/img/vector-20@2x.png",
    vector5: "/img/vector-21@2x.png",
    vector6: "/img/vector-22@2x.png",
};

const frame195345Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement46Data,
};

const frame284722Data = {
    frame1953Props: frame195345Data,
};

const frame197621Data = {
    children: "Groups",
};

const frame197515Data = {
    children: "Members",
};

const frame197622Data = {
    children: "Enterprises",
};

const frame19445Data = {
    frame2847Props: frame284722Data,
    frame1976Props: frame197621Data,
    frame1975Props: frame197515Data,
    frame19762Props: frame197622Data,
};

const book51Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194745Data = {
    text41: "Library",
    bookProps: book51Data,
};

const frame194845Data = {
    graduationCap: "/img/graduation-cap@2x.png",
    text42: "Courses",
};

const frame230346Data = {
    vector: "/img/vector-25@2x.png",
    vector2: "/img/vector-25@2x.png",
};

const frame28491126Data = {
    children: "Mo",
};

const frame28491127Data = {
    children: "1",
};

const frame28491128Data = {
    children: "8",
};

const frame28491129Data = {
    children: "15",
};

const frame28491130Data = {
    children: "22",
};

const frame28491131Data = {
    children: "Tu",
};

const frame2857181Data = {
    children: "2",
};

const frame28491132Data = {
    children: "9",
};

const frame28491133Data = {
    children: "16",
};

const frame28491134Data = {
    children: "23",
};

const frame2885226Data = {
    children: "30",
};

const frame28491135Data = {
    children: "We",
};

const frame2857182Data = {
    children: "3",
};

const frame28491136Data = {
    children: "10",
};

const frame28491137Data = {
    children: "17",
};

const frame28491138Data = {
    children: "24",
};

const frame2885227Data = {
    children: "1",
};

const frame28491139Data = {
    children: "Th",
};

const frame28491140Data = {
    children: "4",
};

const frame28491141Data = {
    children: "11",
};

const frame28491142Data = {
    children: "25",
};

const frame2885228Data = {
    children: "2",
};

const frame28491143Data = {
    children: "Fr",
};

const frame2857183Data = {
    children: "5",
};

const frame28491144Data = {
    children: "12",
};

const frame28491145Data = {
    children: "19",
};

const frame28491146Data = {
    children: "26",
};

const frame2885229Data = {
    children: "3",
};

const frame28491147Data = {
    children: "Sa",
};

const frame2857184Data = {
    children: "6",
};

const frame28491148Data = {
    children: "13",
};

const frame28491149Data = {
    children: "20",
};

const frame28491150Data = {
    children: "27",
};

const frame2885230Data = {
    children: "4",
};

const frame2855181Data = {
    children: "Su",
};

const frame2855182Data = {
    children: "14",
};

const frame2855183Data = {
    children: "21",
};

const frame2855184Data = {
    children: "28",
};

const group194246Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491126Data,
    frame28492Props: frame28491127Data,
    frame28493Props: frame28491128Data,
    frame28494Props: frame28491129Data,
    frame28495Props: frame28491130Data,
    frame28496Props: frame28491131Data,
    frame2857Props: frame2857181Data,
    frame28497Props: frame28491132Data,
    frame28498Props: frame28491133Data,
    frame28499Props: frame28491134Data,
    frame2885Props: frame2885226Data,
    frame284910Props: frame28491135Data,
    frame28572Props: frame2857182Data,
    frame284911Props: frame28491136Data,
    frame284912Props: frame28491137Data,
    frame284913Props: frame28491138Data,
    frame28852Props: frame2885227Data,
    frame284914Props: frame28491139Data,
    frame284915Props: frame28491140Data,
    frame284916Props: frame28491141Data,
    frame284917Props: frame28491142Data,
    frame28853Props: frame2885228Data,
    frame284918Props: frame28491143Data,
    frame28573Props: frame2857183Data,
    frame284919Props: frame28491144Data,
    frame284920Props: frame28491145Data,
    frame284921Props: frame28491146Data,
    frame28854Props: frame2885229Data,
    frame284922Props: frame28491147Data,
    frame28574Props: frame2857184Data,
    frame284923Props: frame28491148Data,
    frame284924Props: frame28491149Data,
    frame284925Props: frame28491150Data,
    frame28855Props: frame2885230Data,
    frame2855Props: frame2855181Data,
    frame28552Props: frame2855182Data,
    frame28553Props: frame2855183Data,
    frame28554Props: frame2855184Data,
};

const chevronsLeft89Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft90Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891246Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft89Data,
    chevronsLeft2Props: chevronsLeft90Data,
};

const frame194334Data = {
    text1422: "View calendar",
    union: "/img/union@2x.png",
    frame1945Props: frame194544Data,
    frame1944Props: frame19445Data,
    frame1947Props: frame194745Data,
    frame1948Props: frame194845Data,
    frame2303Props: frame230346Data,
    group1942Props: group194246Data,
    frame28912Props: frame2891246Data,
};

const X33AddNewBlock3Data = {
    text: "",
    frame1969: "/img/frame-1969@1x.png",
    name: "Jordan Ross Belfort speech 2020",
    frame2333: "/img/frame-2333@1x.png",
    frame195425Props: frame195425Data,
    backbtn17Props: backbtn17Data,
    frame3067Props: frame30677Data,
    frame19396Props: frame19396Data,
    frame194334Props: frame194334Data,
};

const email46Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-1@2x.png",
};

const layer2246Data = {
    emailProps: email46Data,
};

const emailoutline39Data = {
    layer22Props: layer2246Data,
};

const belloutline46Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-506@2x.png",
};

const personoutline146Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
};

const frame284822Data = {
    text88: "My dashboard",
    personoutline1Props: personoutline146Data,
};

const frame1954421Data = {
    ragrariansI520753: "Add news",
    frame1951: "/img/frame-1951@2x.png",
    emailoutlineProps: emailoutline39Data,
    belloutlineProps: belloutline46Data,
    frame2848Props: frame284822Data,
};

const grid47Data = {
    vector: "/img/vector-7@2x.png",
    vector2: "/img/vector-7@2x.png",
    vector3: "/img/vector-7@2x.png",
    vector4: "/img/vector-7@2x.png",
};

const frame289154Data = {
    gridProps: grid47Data,
};

const frame62Data = {
    group: "/img/vector-16@2x.png",
    vector: "/img/vector-11@2x.png",
    vector2: "/img/vector-12@2x.png",
    vector3: "/img/vector-120@2x.png",
    vector4: "/img/vector-121@2x.png",
    vector5: "/img/vector-15@2x.png",
};

const frame194545Data = {
    frame2891Props: frame289154Data,
    frameProps: frame62Data,
};

const usermanagement47Data = {
    vector: "/img/vector-320@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-322@2x.png",
    vector4: "/img/vector-323@2x.png",
    vector5: "/img/vector-324@2x.png",
    vector6: "/img/vector-325@2x.png",
};

const frame195346Data = {
    text37: "Ragrarians",
    usermanagementProps: usermanagement47Data,
};

const frame284723Data = {
    frame1953Props: frame195346Data,
};

const frame197435Data = {
    children: "Groups",
};

const frame1975219Data = {
    children: "Members",
};

const frame197436Data = {
    children: "Enterprises",
};

const frame1944217Data = {
    frame2847Props: frame284723Data,
    frame1974Props: frame197435Data,
    frame19752Props: frame1975219Data,
    frame19742Props: frame197436Data,
};

const book52Data = {
    vector: "/img/vector-23@2x.png",
    vector2: "/img/vector-24@2x.png",
};

const frame194746Data = {
    text41: "Library",
    bookProps: book52Data,
};

const frame194846Data = {
    graduationCap: "/img/graduation-cap-4@2x.png",
    text42: "Courses",
};

const frame230347Data = {
    vector: "/img/vector-394@2x.png",
    vector2: "/img/vector-394@2x.png",
};

const frame28491151Data = {
    children: "Mo",
};

const frame28491152Data = {
    children: "1",
};

const frame28491153Data = {
    children: "8",
};

const frame28491154Data = {
    children: "15",
};

const frame28491155Data = {
    children: "22",
};

const frame28491156Data = {
    children: "Tu",
};

const frame2857185Data = {
    children: "2",
};

const frame28491157Data = {
    children: "9",
};

const frame28491158Data = {
    children: "16",
};

const frame28491159Data = {
    children: "23",
};

const frame2885231Data = {
    children: "30",
};

const frame28491160Data = {
    children: "We",
};

const frame2857186Data = {
    children: "3",
};

const frame28491161Data = {
    children: "10",
};

const frame28491162Data = {
    children: "17",
};

const frame28491163Data = {
    children: "24",
};

const frame2885232Data = {
    children: "1",
};

const frame28491164Data = {
    children: "Th",
};

const frame28491165Data = {
    children: "4",
};

const frame28491166Data = {
    children: "11",
};

const frame28491167Data = {
    children: "25",
};

const frame2885233Data = {
    children: "2",
};

const frame28491168Data = {
    children: "Fr",
};

const frame2857187Data = {
    children: "5",
};

const frame28491169Data = {
    children: "12",
};

const frame28491170Data = {
    children: "19",
};

const frame28491171Data = {
    children: "26",
};

const frame2885234Data = {
    children: "3",
};

const frame28491172Data = {
    children: "Sa",
};

const frame2857188Data = {
    children: "6",
};

const frame28491173Data = {
    children: "13",
};

const frame28491174Data = {
    children: "20",
};

const frame28491175Data = {
    children: "27",
};

const frame2885235Data = {
    children: "4",
};

const frame2855185Data = {
    children: "Su",
};

const frame2855186Data = {
    children: "14",
};

const frame2855187Data = {
    children: "21",
};

const frame2855188Data = {
    children: "28",
};

const group194247Data = {
    number: "29",
    number2: "18",
    number3: "5",
    number4: "7",
    frame2849Props: frame28491151Data,
    frame28492Props: frame28491152Data,
    frame28493Props: frame28491153Data,
    frame28494Props: frame28491154Data,
    frame28495Props: frame28491155Data,
    frame28496Props: frame28491156Data,
    frame2857Props: frame2857185Data,
    frame28497Props: frame28491157Data,
    frame28498Props: frame28491158Data,
    frame28499Props: frame28491159Data,
    frame2885Props: frame2885231Data,
    frame284910Props: frame28491160Data,
    frame28572Props: frame2857186Data,
    frame284911Props: frame28491161Data,
    frame284912Props: frame28491162Data,
    frame284913Props: frame28491163Data,
    frame28852Props: frame2885232Data,
    frame284914Props: frame28491164Data,
    frame284915Props: frame28491165Data,
    frame284916Props: frame28491166Data,
    frame284917Props: frame28491167Data,
    frame28853Props: frame2885233Data,
    frame284918Props: frame28491168Data,
    frame28573Props: frame2857187Data,
    frame284919Props: frame28491169Data,
    frame284920Props: frame28491170Data,
    frame284921Props: frame28491171Data,
    frame28854Props: frame2885234Data,
    frame284922Props: frame28491172Data,
    frame28574Props: frame2857188Data,
    frame284923Props: frame28491173Data,
    frame284924Props: frame28491174Data,
    frame284925Props: frame28491175Data,
    frame28855Props: frame2885235Data,
    frame2855Props: frame2855185Data,
    frame28552Props: frame2855186Data,
    frame28553Props: frame2855187Data,
    frame28554Props: frame2855188Data,
};

const frame279128Data = {
    text108: "View calendar",
    group1942Props: group194247Data,
};

const chevronsLeft91Data = {
    src: "/img/vector--stroke--2@2x.png",
};

const chevronsLeft92Data = {
    src: "/img/vector--stroke--3@2x.png",
};

const frame2891247Data = {
    text57: "January",
    chevronsLeftProps: chevronsLeft91Data,
    chevronsLeft2Props: chevronsLeft92Data,
};

const group194327Data = {
    union: "/img/union@2x.png",
    frame2791Props: frame279128Data,
    frame28912Props: frame2891247Data,
};

const frame1943104Data = {
    frame1945Props: frame194545Data,
    frame19442Props: frame1944217Data,
    frame1947Props: frame194746Data,
    frame1948Props: frame194846Data,
    frame2303Props: frame230347Data,
    group1943Props: group194327Data,
};

const iconsArrowsLeft28Data = {
    vectorStroke: "/img/vector--stroke-@2x.png",
    vectorStroke2: "/img/vector--stroke--1@2x.png",
};

const frame292313Data = {
    place: "Back",
    iconsArrowsLeftProps: iconsArrowsLeft28Data,
};

const backbtn212Data = {
    frame2923Props: frame292313Data,
};

const frame30678Data = {
    children: "02. How to be rich in 2020 and make business",
};

const videooutline11Data = {
    vector: "/img/vector-83@2x.png",
    vector2: "/img/vector-28@2x.png",
};

const frame331810Data = {
    text116: "Add video",
    videooutlineProps: videooutline11Data,
};

const frame33174Data = {
    frame3318Props: frame331810Data,
};

const cameraoutline11Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-30@2x.png",
    vector3: "/img/vector-31@2x.png",
};

const frame331837Data = {
    text117: "Add image",
    cameraoutlineProps: cameraoutline11Data,
};

const frame331824Data = {
    frame33183Props: frame331837Data,
};

const filetextoutline12Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-33@2x.png",
    vector3: "/img/vector-34@2x.png",
    vector4: "/img/vector-35@2x.png",
};

const frame331847Data = {
    text118: "Add text",
    filetextoutlineProps: filetextoutline12Data,
};

const frame33194Data = {
    frame33184Props: frame331847Data,
};

const frame28292Data = {
    text: "",
    frame1969: "/img/frame-1969@1x.png",
    name: "Jordan Ross Belfort speech 2020",
    frame3067Props: frame30678Data,
    frame3317Props: frame33174Data,
    frame33182Props: frame331824Data,
    frame3319Props: frame33194Data,
};

const close28Data = {
    vector: "/img/vector@2x.png",
    vector2: "/img/vector-37@2x.png",
};

const layer2326Data = {
    closeProps: close28Data,
};

const X33AddNewBlocktext2Data = {
    addText: "Add text",
    addBlock: "Add block",
    textTitle: "Text title",
    text1447: "How to be rich in 2020 and make business",
    text1448: "Over the last ten years, the emphasis on reducing fuel emissions has been an agenda for many governments. In a bid to reduce their collective carbon footprint, many people have started looking for a way to control their impact on the environment. It is due to such a situation that the use of Ethanol fuel has increased in many countries. However, those wanting to switch to a different type of fuel have many questions about Ethanol. Many of these are concerned with what this fuel really is and how big a dent it makes in our lives and pockets.",
    frame19544Props: frame1954421Data,
    frame194310Props: frame1943104Data,
    backbtn2Props: backbtn212Data,
    frame2829Props: frame28292Data,
    layer23Props: layer2326Data,
};

