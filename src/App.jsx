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
import CommunityGroupViewPage from './Screens/CommunityGroup/GroupViewPage/GroupViewPage';
import MyGroupViewPage from './Screens/CommunityGroup/MyGroupPage/MyGroup';
import MobileMessage from "./Components/MobileMessage/MobileMessage";

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
    
};

const X0111LoginfiledData = {
    vector: "",
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    welcomeBack: "Sign In",
    vector7: "",
    vector8: "",
    vector9: "",
    username: "Username",
    mikhail: "Mikhail",
    password: "Password",
    text1: "• • • • • • • • • •",
    vector10: "",
    subtract: "",
    rememberMe: "Remember Me",
    signIn: "Sign in",
    forgotPassword: "Forgot Password?",
    text2: "Sign In with services",
    vector11: "",
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
    
};

const X0112ErrorfiledData = {
    vector: "",
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    welcomeBack: "Sign In",
    vector7: "",
    vector8: "",
    vector9: "",
    username: "Username",
    mikhail: "Mikhail",
    usernameError: "Username error",
    password: "Password",
    text1: "• • • • • • • • • •",
    vector10: "",
    subtract: "",
    rememberMe: "Remember Me",
    signIn: "Sign in",
    forgotPassword: "Forgot Password?",
    text2: "Sign In with services",
    
    google: "Google",
    subtract2: "",
    facebook: "Facebook",
    spanText: "Don't have an account yet?",
    spanText2: "  ",
    spanText3: "Become a member!",
    
    
};

const X0200SignUpemptyData = {
    
    welcomeBack: "Become a member",
    username: "Username",
    password: "Password",
    vector10: "",
    vector11: "",
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    signUp: "Sign up",
    text2: "Sign In with services",
    vector12: "",
    vector13: "",
    vector14: "",
    vector15: "",
    google: "Google",
    subtract: "",
    facebook: "Facebook",
    spanText4: "Already have an account?",
    spanText5: " ",
    spanText6: "Sign in!",
    vector16: "",
    vector17: "",
    vector18: "",
    vector19: "",
};

const X0211SignUpfilledData = {
    vector: "",
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    welcomeBack: "Become a member",
    vector7: "",
    vector8: "",
    vector9: "",
    username: "Username",
    mikhail: "Mikhail",
    password: "Password",
    text1: "• • • • • • • • • •",
    vector10: "",
    vector11: "",
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    signUp: "Sign up",
    text3: "Sign In with services",
    vector12: "",
    vector13: "",
    vector14: "",
    vector15: "",
    google: "Google",
    subtract: "",
    facebook: "Facebook",
    spanText4: "Already have an account?",
    spanText5: " ",
    spanText6: "Sign in!",
    vector16: "",
    vector17: "",
    vector18: "",
    vector19: "",
    
};

const X0212SignUperrorData = {
    vector: "",
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    welcomeBack: "Become a member",
    vector7: "",
    vector8: "",
    vector9: "",
    username: "Username",
    mikhail: "Mikhail",
    password: "Password",
    badpassword111: "Badpassword111",
    vector10: "",
    vector11: "",
    vector12: "",
    passwordError: "Password error",
    vector13: "",
    vector14: "",
    spanText: "I agree with",
    spanText2: " ",
    spanText3: "Terms of Service ",
    signUp: "Sign up",
    text2: "Sign In with services",
    vector15: "",
    vector16: "",
    vector17: "",
    vector18: "",
    google: "Google",
    subtract: "",
    facebook: "Facebook",
    spanText4: "Already have an account?",
    spanText5: " ",
    spanText6: "Sign in!",
    vector19: "",
    vector20: "",
    vector21: "",
    vector22: "",
    
};
