/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ActionButton } from "common/action-button";

import Input from "../../components/input/Input";
import SignLayout from "../../layout/signLayout/SignLayout";
import { resendCodeAction, confirmPin } from "../../actions/userAction";

import { ReactComponent as UserAvatar } from "../../assets/images/user-green-outline.svg";
import { ReactComponent as Lock } from "../../assets/images/lock-outline.svg";

const UserVerification = () => {
  const [message, setMessage] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [isVerifiedUser, setIsVerifiedUser] = useState(false);
  const dispatch = useDispatch();
  const { register: regi, errors, handleSubmit } = useForm();

  const history = useHistory();

  const userConfirmCode = useSelector((state) => state.userConfirmCode);
  const userResendCode = useSelector((state) => state.userResendCode);
  const { error: confirmErr, status: confirmStatus } = userConfirmCode;

  const { error: resendErr, status: resendStatus } = userResendCode;

  const resendCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username);
    dispatch(resendCodeAction(usernameValue));
    if (isVerifiedUser) console.log("code sent");
  };
  const alreadyHaveCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username);
    if (isVerifiedUser) console.log("type code");
  };
  const sendCode = ({ username }) => {
    if (!usernameValue) setUsernameValue(username);
    dispatch(resendCodeAction(username));
    if (isVerifiedUser) console.log("code sent");
  };
  const verifyAccount = ({ code }) => {
    console.log(usernameValue, code);
    dispatch(confirmPin(usernameValue, code));
    console.log("User Account Verified Successfully");
  };

  useEffect(() => {
    if (usernameValue) setIsVerifiedUser(true);
    if (confirmStatus) {
      history.push("/myProfile");
    } else if (resendStatus) {
      setMessage("Code has been sent successfully.");
    }
  }, [confirmStatus, resendStatus, usernameValue]);

  return (
    <SignLayout>
      <form className="sign">
        <h1 className="welcome">Confirm Verification</h1>
        <div className="container">
          {confirmErr && <div className="error">{confirmErr}</div>}
          {resendErr && <div className="error">{resendErr}</div>}
          {message && <div className="message">{message}</div>}

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
            disabled={isVerifiedUser}
            errors={errors}
          >
            <UserAvatar />
          </Input>

          <>
            {isVerifiedUser && (
              <Input
                placeholder="Code"
                type="number"
                name="code"
                id="code"
                ref={regi({
                  required: {
                    value: true,
                    message: "You must enter code",
                  },
                  // validate: v => v === code || 'You must enter correct code'
                })}
                errors={errors}
              >
                <Lock className="error-icon" />
              </Input>
            )}

            <div className="btnWrapper">
              <ActionButton
                variant="primary"
                title={isVerifiedUser ? "Verify" : "I already have code"}
                onClick={
                  isVerifiedUser
                    ? handleSubmit(verifyAccount)
                    : handleSubmit(alreadyHaveCode)
                }
              />
              <ActionButton
                variant="primary"
                title={isVerifiedUser ? "Resend Code" : "Send Code"}
                onClick={
                  isVerifiedUser
                    ? handleSubmit(resendCode)
                    : handleSubmit(sendCode)
                }
              />
            </div>
          </>

          <div className="option">
            <p className="transparent16px">
              <span className="span span-1">Go back to </span>
            </p>
            <Link to="/login" className="span span-2">
              Login
            </Link>
          </div>
        </div>
      </form>
    </SignLayout>
  );
};

export default UserVerification;
