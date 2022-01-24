/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ActionButton } from "common/action-button";

import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import { login } from "../../actions/userAction";
import { SignInSignUpData } from "./SignInSignUpData";

import { visitCommunity } from "../../actions/communityActions";
import { ReactComponent as Lock } from "../../assets/images/lock-outline.svg";
import { ReactComponent as UserAvatar } from "../../assets/images/user-green-outline.svg";

import "./SignInSignUp.scss";

const SignIn = () => {
  const { rememberMe } = SignInSignUpData;

  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { currentCommunity } = useSelector((state) => state.activeCommunity);

  const { error, userInfo } = userLogin;
  const { register: regi, errors, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    /* Hub.listen("auth", ({ payload: { event, data } }) => {
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
    }); */

    if (userInfo) {
      if (currentCommunity) {
        return dispatch(visitCommunity(currentCommunity.id));
      }
    }

    // getUser().then((userData) => setUser(userData));
  }, [history, userInfo, dispatch]);

  // function getUser() {
  /* return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in")); */
  // }

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
    // Auth.federatedSignIn({ provider: "Facebook" });
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    // Auth.federatedSignIn({ provider: "Google" });
  };

  const onSubmit = ({ username, password }) => {
    dispatch(login(username, password));
  };

  return (
    <form className="sign" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign In</h1>
      <div className="container">
        {error && <div className="error">{error}</div>}

        <Input
          placeholder="Username"
          type="text"
          name="username"
          id="username"
          ref={regi({
            required: {
              value: true,
              message: "You must enter username",
            },
          })}
          errors={errors}
        >
          <UserAvatar />
        </Input>

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          id="password"
          ref={regi({
            required: {
              value: true,
              message: "You must enter password",
            },
          })}
          errors={errors}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
        >
          <Lock className="error-icon" />
        </Input>

        <div className="remember">
          <Checkbox label={rememberMe} />
        </div>

        <div className="btnWrapper">
          <ActionButton
            title="Sign In"
            variant="primary"
            onClick={handleSubmit}
          />

          <Link to="/forgot-password" className="fPassword green16px">
            Forgot Password?
          </Link>
        </div>

        <div className="socials">
          <h5>Sign In with services</h5>

          <div className="btns-container">
            <ActionButton
              type="button"
              icon="google"
              title="Google"
              variant="secondary"
              onClick={loginWithGoogle}
            />

            <ActionButton
              type="button"
              icon="facebook"
              title="Facebook"
              variant="secondary"
              onClick={loginWithFacebook}
            />
          </div>
        </div>

        <div className="option">
          <p className="transparent16px">
            <span className="span span-1">
              Don&apos;t have an account yet?{" "}
            </span>
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
