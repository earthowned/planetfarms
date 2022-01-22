import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ActionButton } from "common/action-button";

import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import { register } from "../../actions/userAction";
import { SignInSignUpData } from "./SignInSignUpData";

import { ReactComponent as UserAvatar } from "../../assets/images/user-green-outline.svg";
import { ReactComponent as Lock } from "../../assets/images/lock-outline.svg";

import "./SignInSignUp.scss";

const SignIn = () => {
  const { welcomeBack, spanText, signIn } = SignInSignUpData;

  const history = useHistory();
  const { register: regi, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const onSubmit = ({ username, password }) => {
    return dispatch(register(username, password));
  };

  return (
    <form className="sign" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="welcome">{welcomeBack}</h1>
      <div className="container">
        {error && <div className="error">{error}</div>}
        <Input
          placeholder="Username"
          type="text"
          name="username"
          id="username"
          autoFocus="autoFocus"
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
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          errors={errors}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
        >
          <Lock className="error-icon" />
        </Input>

        {/* <div className="signup-btn-wrapper"> */}
        <div className="btnWrapper">
          <Checkbox
            label={spanText}
            name="terms"
            ref={regi({
              required: {
                value: true,
                message: "Please read the terms of service",
              },
            })}
            errors={errors}
          />

          <ActionButton
            title="Sign Up"
            variant="primary"
            onClick={handleSubmit}
          />
        </div>

        <div className="socials">
          <h5>Sign In with services</h5>

          <div className="btns-container">
            <ActionButton
              type="button"
              icon="google"
              title="Google"
              variant="secondary"
            />

            <ActionButton
              type="button"
              icon="facebook"
              title="Facebook"
              variant="secondary"
            />
          </div>
        </div>

        <div className="option">
          <p className="span span-1">Already have an Account?</p>
          <Link className="span span-2" to="/">
            {signIn}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
