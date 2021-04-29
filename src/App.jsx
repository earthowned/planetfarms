import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// Screens
import LoginScreen from "./Screens/Login/LoginScreen";
import SignupScreen from './Screens/SignUp/SignupScreen';
import CongratulationScreen from './Screens/Congratulation/CongratulationScreen';
import Messenger from './Screens/Messenger/Messenger';
import Library from './Screens/Library/Library';
import './App.css';
import DashboardComponent from "./Screens/Dashboard/MainDashboard";
import Achievements from "./Screens/Dashboard/Achievements";
import MyLibrary from "./Screens/Dashboard/MyLibrary";
import MyProfile from "./Screens/Dashboard/MyProfile";
import MySurvey from "./Screens/Dashboard/MySurvey";
import MyCourse from "./Screens/Dashboard/MyCourses";
import MyCoursePage from "./Screens/Dashboard/CoursePage/CoursePage";
import Collection from "./Screens/Library/Collection/Collection";
import UserCollection from "./Screens/Library/UserCollection/UserCollection";
import SavedCollection from "./Screens/Library/SavedCollection/SavedCollection";
import AllCommunitiesCard from "./Screens/CommunitySwitching/CommunitySwitching";
import CommunityPagenews from "./Screens/CommunityNews/CommunityNews";
import X0300CommunityPageViewsnews from './Screens/CommunityNewsView/CommunityNewsView'
import NewsAdd from "./Screens/CommunityNews/NewsAdd/NewsAdd";
import CommunityMembers from "./Screens/CommunityMembers/CommunityMembers";
import CommunityMembersProfile from "./Screens/CommunityMemberProfile/CommunityMemberProfile";
import UserInfo from "./Screens/CabinetUserInfo/CabinetUserInfo";
import CommunityGroup from './Screens/CommunityGroup/CommunityGroup';
import Enterprises from './Screens/Enterprises/Enterprises';
import EnterprisesViewPage from './Screens/Enterprises/EnterprisesViewPage/EnterprisesViewPage';
import CommunityGroupViewPage from './Screens/CommunityGroup/GroupViewPage/GroupViewPage';
import MyGroupViewPage from './Screens/CommunityGroup/MyGroupPage/MyGroup';
import MobileMessage from "./Components/MobileMessage/MobileMessage";

import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

        // REQUIRED - Amazon Cognito Region
        region: process.env.REACT_APP_COGNITO_REGION,

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        //identityPoolRegion: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: process.env.REACT_APP_COGNITO_POOL_ID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        /*cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            sameSite: "strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: true
        },*/

        // OPTIONAL - customized storage object
        //storage: MyStorage,

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        //clientMetadata: { myCustomKey: 'myCustomValue' },

         // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: process.env.REACT_APP_COGNITO_DOMAIN_NAME, // domain_name
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

// You can get the current config object
const currentConfig = Auth.configure();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <SignupScreen />
        </Route>
        <Route path="/register-complete">
          <CongratulationScreen />
        </Route>
        <Route path="/:path(|login)" exact>
          <LoginScreen {...X0100LoginEmptyData} />
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
        <Route exact path="/community-page-news">
         <CommunityPagenews />
        </Route>
        <Route path="/community-page-news/:id">
         <NewsAdd />
        </Route>
        <Route path="/community-page-news-view">
         <X0300CommunityPageViewsnews />
         </Route>
         <Route path="/community-switching">
          <AllCommunitiesCard />
        </Route>
        <Route path="/community-members">
          <CommunityMembers />
        </Route>
        <Route path="/community-members-profile/:id">
          <CommunityMembersProfile />
        </Route>
        <Route path="/community-group" >
          <CommunityGroup />
        </Route>
        <Route path="/community-group-view-page" >
          <CommunityGroupViewPage />
        </Route>
        <Route path="/enterprises" >
          <Enterprises />
        </Route>
        <Route path="/enterprises-view" >
          <EnterprisesViewPage />
        </Route>
        <Route path="/my-group-view-page" >
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
        <Route path="/mycoursePage">
          <MyCoursePage />
        </Route>
        <Route path="/myProfile">
          <MyProfile />
        </Route>
        <Route path="/userInfo">
          <UserInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const X0100LoginEmptyData = {
    vector: "/img/vector.svg",
    vector2: "/img/vector@2x.svg",
    vector3: "/img/vector-994@2x.png",
    vector4: "img/vector-4.svg",
    vector5: "img/vector-5.svg",
    vector6: "/img/vector-1246@2x.png",
    welcomeBack: "Sign In",
    vector7: "img/vector-7.png",
    vector8: "img/vector-8.png",
    vector9: "img/vector-9.png",
    username: "Username",
    password: "Password",
    vector10: "",
    subtract: "",
    rememberMe: "Remember Me",
    signIn: "Sign in",
    forgotPassword: "Forgot Password?",
    text1: "Sign In with services",
    vector11: "/img/vector.svg",
    vector12: "",
    vector13: "",
    vector14: "",
    google: "Google",
    subtract2: "",
    facebook: "Facebook",
    spanText: "Don't have an account yet?",
    spanText2: "  ",
    spanText3: "Become a member!",
    vector15: "",
    vector16: "",
    vector17: "",
    vector18: "",
    
}
