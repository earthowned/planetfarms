import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// Login
import X0100LoginEmpty from "./components/X0100LoginEmpty";
import X0111Loginfiled from "./components/X0111Loginfiled";
import X0112Errorfiled from "./components/X0112Errorfiled";
// Signup
import X0200SignUpempty from "./components/X0200SignUpempty";
import X0211SignUpfilled from "./components/X0211SignUpfilled";
import X0212SignUperror from "./components/X0212SignUperror";
import X0220SignUpfiled from "./components/X0220SignUpfiled";
// Community


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|01-0-0-login-empty)">
          <X0100LoginEmpty {...X0100LoginEmptyData} />
        </Route>
        <Route path="/01-1-1-login-filed">
          <X0111Loginfiled {...X0111LoginfiledData} />
        </Route>
        <Route path="/01-1-2-error-filed">
          <X0112Errorfiled {...X0112ErrorfiledData} />
        </Route>
        <Route path="/02-0-0-sign-up-empty">
          <X0200SignUpempty {...X0200SignUpemptyData} />
        </Route>
        <Route path="/02-1-1-sign-up-filled">
          <X0211SignUpfilled {...X0211SignUpfilledData} />
        </Route>
        <Route path="/02-1-2-sign-up-error">
          <X0212SignUperror {...X0212SignUperrorData} />
        </Route>
        <Route path="/02-2-0-sign-up-filed">
          <X0220SignUpfiled {...X0220SignUpfiledData} />
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
    vector: "",
    vector2: "/img/vector@2x.svg",
    vector3: "/img/vector-994@2x.png",
    vector4: "",
    vector5: "",
    vector6: "/img/vector-1246@2x.png",
    welcomeBack: "Sign In",
    vector7: "",
    vector8: "",
    vector9: "",
    username: "Username",
    password: "Password",
    vector10: "",
    subtract: "",
    rememberMe: "Remember Me",
    signIn: "Sign in",
    forgotPassword: "Forgot Password?",
    text1: "Sign In with services",
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
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
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
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
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
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
};

const X0200SignUpemptyData = {
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
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
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
    lockoutlineProps: lockoutlineData,
    eyeoffoutline2Props: eyeoffoutline2Data,
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
    lockoutlineProps: lockoutlineData,
};

const frame4Data = {
    children: "Skip for now",
};

const X0220SignUpfiledData = {
    vector: "",
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    welcomeBack: "Congratulations!",
    welcomeBack2: "Please fill these fields to communicate with other people easier:",
    firstName: "First Name",
    mikhail: "Mikhail",
    email: "Email",
    text1: "misha_ugryumov123@gmail.com",
    birthday: "Birthday",
    phone: "08/23/1995",
    xcontinue: "Continue",
    lastName: "Last Name",
    ugrymov: "Ugrymov",
    text2: "Phone Number (optional)",
    text3: "+1 (987) 123-55-12",
    text4: "Drag & Drop files in this area or Click Here to attach",
    frame4Props: frame4Data,
};