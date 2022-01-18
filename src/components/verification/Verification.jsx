import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input/Input";
import Button from "../button/Button";
import {
  verifyCurrentUserAttribute,
  verifyCurrentUserAttributeSubmit,
} from "../../actions/userAction";
import { ReactComponent as Lock } from "../../assets/images/lock-outline.svg";

const Verification = ({ attr, title, clickHandler }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { register: regi, errors, handleSubmit } = useForm();

  const history = useHistory();

  const userAttrConfirmCode = useSelector((state) => state.userAttrConfirmCode);
  const userAttrResendCode = useSelector((state) => state.userAttrResendCode);
  const { error: confirmErr, status: confirmStatus } = userAttrConfirmCode;
  const { error: resendErr, status: resendStatus } = userAttrResendCode;

  const resendCode = (e) => {
    e.preventDefault();
    dispatch(verifyCurrentUserAttribute(attr));
  };

  const verifyAccount = ({ code }) => {
    dispatch(verifyCurrentUserAttributeSubmit(attr, code));
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const closeHandler = (bool) => {
    clickHandler(bool);
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo]);

  useEffect(() => {
    if (confirmStatus) {
      setMessage("");
    } else if (resendStatus) {
      setMessage(
        `Code has been sent to your ${attr.split("_").join(" ")} successfully.`
      );
    }
  }, [confirmStatus, resendStatus]);

  return (
    <form className="sign">
      <div className="title">
        <h1 className="welcome">{title}</h1>
        <button
          type="button"
          onClick={() => {
            closeHandler(false);
          }}
          className="close-btn"
        >
          <img src="/img/close-outline.svg" alt="close-outline" />
        </button>
      </div>
      {confirmErr && <div className="error">{confirmErr}</div>}
      {resendErr && <div className="error">{resendErr}</div>}
      {message && <div className="message">{message}</div>}

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
        })}
        errors={errors}
      >
        <Lock className="error-icon" />
      </Input>
      <div className="btnWrapper">
        <Button name="Resend Code" onClick={resendCode} />
        <Button name="Verify" onClick={handleSubmit(verifyAccount)} />
      </div>
    </form>
  );
};

export default Verification;
