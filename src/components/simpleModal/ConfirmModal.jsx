import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputComponent from "../input/InputComponent";
import "./ConfirmModal.scss";

const ConfirmModal = () => {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const history = useHistory();

  const changeBirthday = (e) => {
    setCode(e.target.value);
    setCodeError(false);
  };

  async function confirmSignUp() {
    history.push("/community-page-news");
  }
  return (
    <>
      <div className="confirm-modal-container">
        <div className="confirm-modal-inner-container">
          <h4>Please Enter your Confirmation code</h4>
          <InputComponent
            text={code}
            error={codeError}
            image="/img/user-green-outline.svg"
            changeHandler={changeBirthday}
            name="Code"
            autoFocus="autoFocus"
          />
          <button
            type="button"
            className="secondary-btn"
            onClick={() => confirmSignUp()}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
