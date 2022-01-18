/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { changePassword, logout } from "../../actions/userAction";
import { USER_PASSWORD_CHANGE_RESET } from "../../constants/userConstants";
import Button from "../button/Button";
import Input from "../input/Input";
import { ReactComponent as Lock } from "../../assets/images/lock-outline.svg";
import "./SettingsActionModal.scss";

const SettingsActionModal = ({ setModalActive, settingAction }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState("");
  const { register, errors, handleSubmit, watch } = useForm();

  function handleChangePassword({ oldPassword, newPassword }) {
    dispatch(changePassword(oldPassword, newPassword));
  }

  return (
    <div className="settings-modal-container">
      <form className="settings-modal-inner-container">
        <div className="settings-modal-title">
          <h2>{settingAction.name}</h2>
          <button
            type="button"
            onClick={() => setModalActive(false)}
            className="close-btn"
          >
            <img src="/img/close-outline.svg" alt="close-outline" />
          </button>
        </div>
        <SettingInput
          settingAction={settingAction}
          setModalActive={setModalActive}
          setInput={setInput}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          watch={watch}
        />
        <p className="settings-modal-message">{settingAction.message}</p>
        <div className="popup-btn-wrapper">
          <Button
            name="Cancel"
            onClick={() => setModalActive(false)}
            className="secondary-btn"
          />
          <Button
            name="Yes"
            onClick={
              settingAction.id === "logout"
                ? logout()
                : handleSubmit(handleChangePassword)
            }
          />
        </div>
      </form>
    </div>
  );
};

const SettingInput = ({
  settingAction,
  setModalActive,
  setInput,
  register,
  errors,
  watch,
}) => {
  const [inputErr, setInputErr] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { error, status } = useSelector((state) => state.changePassword);
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");
  const dispatch = useDispatch();
  const toggleOldPasswordVisibility = (e) => {
    setShowOldPassword(!showOldPassword);
  };
  const toggleNewPasswordVisibility = (e) => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPasswordVisibility = (e) => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const changeInput = (e) => {
    setInput(e.target.value);
    setInputErr(false);
  };

  useEffect(() => {
    if (status) {
      setModalActive(false);
      dispatch({ type: USER_PASSWORD_CHANGE_RESET });
    }
  }, [status]);

  return (
    <>
      {
        {
          logout: <></>,
          changePassword: (
            <div className="input-container">
              {error && <div className="error">{error}</div>}

              <Input
                type={showOldPassword ? "text" : "password"}
                placeholder="Old Password"
                name="oldPassword"
                ref={register({
                  required: {
                    value: true,
                    message: "You must enter old password",
                  },
                })}
                errors={errors}
                showPassword={showOldPassword}
                togglePasswordVisibility={toggleOldPasswordVisibility}
              >
                <Lock className="error-icon" />
              </Input>
              <Input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                ref={register({
                  required: {
                    value: true,
                    message: "You must enter new password",
                  },
                })}
                errors={errors}
                showPassword={showNewPassword}
                togglePasswordVisibility={toggleNewPasswordVisibility}
              >
                <Lock className="error-icon" />
              </Input>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                ref={register({
                  validate: (v) =>
                    v === newPassword.current ||
                    "You must retype your new password",
                })}
                errors={errors}
                showPassword={showConfirmPassword}
                togglePasswordVisibility={toggleConfirmPasswordVisibility}
              >
                <Lock className="error-icon" />
              </Input>
            </div>
          ),
          default: (
            <div className="input-container">
              <div
                className={`default-input ${
                  inputErr ? "user-error" : "border-1px-onyx"
                }`}
              >
                <div className="input-content">
                  <input
                    placeholder={settingAction.inputText}
                    className="username ibmplexsans-regular-normal-monsoon-16px"
                    onChange={(e) => changeInput(e)}
                    name="Code"
                    autoFocus="autoFocus"
                  />
                </div>
              </div>
            </div>
          ),
        }[settingAction.id]
      }
    </>
  );
};

export default SettingsActionModal;
