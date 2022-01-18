import { useHistory } from "react-router-dom";
import { ATTACHMENT } from "../../utils/urlConstants";
import Follow from "./Follow";
import "./CardImage.scss";

const CardImage = ({ data }) => {
  const history = useHistory();
  return (
    <>
      {data.length > 0 &&
        data.map((profile) => {
          return (
            <div
              onClick={() => history.push(`/members/profile/${profile.userId}`)}
              key={profile.id}
              className="card-image-1"
            >
              <div className="profile-card-image">
                <img
                  src={
                    profile?.user?.attachments
                      ? ATTACHMENT + profile.user.attachments
                      : "/img/user.svg"
                  }
                  alt="group-profile"
                />
              </div>
              <div className="profile-card-name">
                <div className="card-name ibmplexsans-semi-bold-quarter-spanish-white-16px">
                  <h4>
                    {profile?.user.firstName
                      ? `${profile?.user.firstName} ${profile?.user.lastName}`
                      : "anonymous"}
                  </h4>
                </div>
              </div>
              <Follow />
            </div>
          );
        })}
    </>
  );
};

export default CardImage;
