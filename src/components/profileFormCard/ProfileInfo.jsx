/* eslint-disable jsx-a11y/label-has-associated-control */
import Secondarybtn from "../secondaryBtn/Secondarybtn";

const ProfileInfo = ({
  title,
  value,
  verify,
  MinusCircle,
  CheckCircle,
  isCurrentUser,
}) => {
  return (
    <div className="form-group">
      <label>{title}</label>
      <p>{value || "N/A"}</p>
      {isCurrentUser &&
        (!verify?.isVerified ? (
          <p className="verified-txt">
            <img className="verified-img" src={MinusCircle} alt="logo" />
            Not verified{" "}
            <Secondarybtn name="Verify" clickHandler={verify?.clickHandler} />
          </p>
        ) : (
          <p className="verified-txt">
            <img className="verified-img" src={CheckCircle} alt="logo" />
            Verified
          </p>
        ))}
    </div>
  );
};

export default ProfileInfo;
