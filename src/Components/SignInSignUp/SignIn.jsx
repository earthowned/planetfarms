import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Auth, Hub } from "aws-amplify";
import { useForm } from "react-hook-form";

import { login } from "../../actions/userAction";
import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";
import { SignInSignUpData } from "./SignInSignUpData";

import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import OauthBtn from "../OauthBtn/OauthBtn";
import "./SignInSignUp.scss";

const SignIn = () => {
  const { welcomeBack, rememberMe, text1, google, facebook } = SignInSignUpData;

  const [user, setUser] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then((userData) => setUser(userData));
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
        default:
          console.log("Sign in failure");
      }
    });

    if (userInfo) {
      history.push("/community-page-news");
    }

    getUser().then((userData) => setUser(userData));
  }, [history, userInfo]);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in"));
  }

  // async function signIn(username, password) {
  //   try {
  //     const user = await Auth.signIn(username, password);
  //     if (user) {
  //       localStorage.setItem("userInfo", JSON.stringify(user));
  //       dispatch({
  //         type: USER_LOGIN_SUCCESS,
  //         payload: user,
  //       });
  //       history.push("/community-page-news");
  //     }
  //   } catch (error) {
  //     const code = error.code;
  //     switch (code) {
  //       case "NotAuthorizedException":
  //         setUserError("NotAuthorizedException");
  //         setPasswordError("NotAuthorizedException");
  //         return;
  //       default:
  //         return false;
  //     }
  //   }
  // }

  const loginWithFacebook = (e) => {
    e.preventDefault();
    Auth.federatedSignIn({ provider: "Facebook" });
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    Auth.federatedSignIn({ provider: "Google" });
  };

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = ({ username, password }) => {
    return dispatch(login(username, password));
  };

  return (
    <form className="sign" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="welcome">{welcomeBack}</h1>
      <div className="container">
        <Input
          text="username"
          placeholder="Username"
          type="text"
          image="/img/user-green-outline.svg"
          name="username"
          id="username"
          autoFocus="autoFocus"
          ref={register({
            required: {
              value: true,
              message: "You must enter username",
            },
          })}
          errors={errors}
        />

        <Input
          text="password"
          type="password"
          placeholder="Password"
          image="/img/lock-outline.svg"
          name="password"
          id="password"
          ref={register({
            required: {
              value: true,
              message: "You must enter password",
            },
          })}
          errors={errors}
        />

        <div className="remember">
          <Checkbox
            termsError={termsError}
            setTermsError={setTermsError}
            terms={terms}
            setTerms={setTerms}
          />
          <div className="me white16px">{rememberMe}</div>
        </div>

        <div className="btnWrapper">
          <Button name="Sign In" />
          <a href="google.com" target="_blank" className="fPassword  green16px">
            Forgot Password?
          </a>
        </div>

        <div className="oauth">
          <OauthBtn
            loginWithFacebook={loginWithFacebook}
            loginWithGoogle={loginWithGoogle}
            google={google}
            facebook={facebook}
            name={text1}
          />
        </div>

        <div className="option">
          <p className="transparent16px">
            <span className="span span-1">Don't have an account yet? </span>
          </p>
          <Link to="/register" className="span span-2">
            Become a member!
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
