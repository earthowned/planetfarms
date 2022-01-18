import ProfileInfo from "./ProfileInfo";
import CheckCircle from "../../assets/images/check-circle.svg";
import MinusCircle from "../../assets/images/minus-circle-outline.svg";
import "./ProfileFormCard.scss";

const ProfileFormCard = ({
  data: {
    title,
    firstTitle,
    firstValue,
    firstVerify,
    secondTitle,
    secondValue,
    secondVerify,
    thirdTitle,
    thirdValue,
    thirdVerify,
  },
  isCurrentUser,
}) => {
  return (
    <div className="myProfile-container">
      <h2 className="myProfile-container-row-title">{title}</h2>
      <div className="myProfile-container-row">
        <ProfileInfo
          title={firstTitle}
          value={firstValue}
          verify={firstVerify}
          MinusCircle={MinusCircle}
          CheckCircle={CheckCircle}
          isCurrentUser={isCurrentUser}
        />
        {secondValue ? (
          <ProfileInfo
            title={secondTitle}
            value={secondValue}
            verify={secondVerify}
            MinusCircle={MinusCircle}
            CheckCircle={CheckCircle}
            isCurrentUser={isCurrentUser}
          />
        ) : (
          ""
        )}
        {thirdValue
          ? thirdTitle && (
              <ProfileInfo
                title={thirdTitle}
                value={thirdValue}
                verify={thirdVerify}
                MinusCircle={MinusCircle}
                CheckCircle={CheckCircle}
                isCurrentUser={isCurrentUser}
              />
            )
          : ""}
      </div>
    </div>
  );
};

export default ProfileFormCard;
