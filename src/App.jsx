import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// Screens
import LoginScreen from "./Screens/Login/LoginScreen";
import SignupScreen from './Screens/SignUp/SignupScreen';
import CongratulationScreen from './Screens/Congratulation/CongratulationScreen';
import Messenger from './Screens/Messenger/Messenger';
import Library from './Screens/Library/Library';
import './App.css';
// Community
import  X0300CommunityPagenews from './Screens/CommunityNews/CommunityNews'
import X0300CommunityPageViewsnews from './Screens/CommunityNewsView/CommunityNewsView'
import DashboardComponent from "./Screens/Dashboard/MainDashboard";
import Achievements from "./Screens/Dashboard/Achievements";
import Collection from "./Screens/Library/Collection/Collection";
import UserCollection from "./Screens/Library/UserCollection/UserCollection";
import SavedCollection from "./Screens/Library/SavedCollection/SavedCollection";
import AllCommunitiesCard from "./Screens/CommunitySwitching/CommunitySwitching";
import CommunityMembers from "./Screens/CommunityMembers/CommunityMembers";
import CommunityMembersProfile from "./Screens/CommunityMemberProfile/CommunityMemberProfile";

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
        <Route path="/messenger">
           <Messenger />
         </Route>
        <Route path="/community-page-news">
         <X0300CommunityPagenews />
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
        <Route path="/dashboard">
          <DashboardComponent />
        </Route>
        <Route path="/achievements">
          <Achievements />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


const lockoutlineData = {
    vector: "",
    vector2: "",
    vector3: "",
};

const eyeoffoutline2Data = {
    vector: "",
    vector2: "",
    vector3: "",
    vector4: "",
};

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
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
};

