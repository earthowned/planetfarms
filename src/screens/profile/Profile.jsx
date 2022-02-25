import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { DashboardLayout } from "layout/dashboard";
import BackButton from "../../components/backButton/BackButton";
import PersonalInformation from "../../components/profileFormCard/PersonalInformation";
import AdditionalInformation from "../../components/profileFormCard/AdditionalInformation";
import ContactInformation from "../../components/profileFormCard/ContactInformation";
import EditInformation from "../../components/editInformation/EditInformation";
import { getUserDetails, getMyDetails } from "../../actions/userAction";
import VerificationModal from "../../components/verificationModal/VerificationModal";
import "./Profile.scss";

function Profile() {
  const { id } = useParams();
  const [showEmailVerificationModal, setShowEmailVerificationModal] =
    useState(false);
  const [showPhoneVerificationModal, setShowPhoneVerificationModal] =
    useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { status } = useSelector((state) => state.userAttrConfirmCode);
  const currentUser = useSelector((state) => state.userLogin.userInfo.id);
  const currentCommunitySlug = useSelector(
    (state) => state.activeCommunity.currentCommunity.slug
  );
  const { user, loading } = userDetails;
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [backLocation, setBackLocation] = useState("");

  const emailClickHandler = (bool) => {
    setShowEmailVerificationModal(bool);
  };
  const phoneClickHandler = (bool) => {
    setShowPhoneVerificationModal(bool);
  };

  useEffect(() => {
    if (!id || currentUser === id) {
      dispatch(getMyDetails());
    } else {
      dispatch(getUserDetails(id));
    }

    if (status) {
      emailClickHandler(false);
      phoneClickHandler(false);
    }
  }, [dispatch, history, status]);

  const editUserInformation = () => {
    history.push({
      pathname: "/edit-information",
      state: { editInformations: true, user },
    });
  };

  const verification = {
    emailClickHandler: () => {
      emailClickHandler(true);
    },
    phoneClickHandler: () => {
      phoneClickHandler(true);
    },
  };
  useEffect(() => {
    setIsCurrentUser(user?.userID === currentUser);
  }, [currentUser, user]);

  useEffect(() => {
    setBackLocation(
      isCurrentUser
        ? "/dashboard"
        : `/community-members/${currentCommunitySlug}`
    );
  }, [currentCommunitySlug, isCurrentUser]);

  return loading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <>
      {showEmailVerificationModal && (
        <VerificationModal type="email" clickHandler={emailClickHandler} />
      )}
      {showPhoneVerificationModal && (
        <VerificationModal type="phone" clickHandler={phoneClickHandler} />
      )}
      <DashboardLayout title="User Profile">
        <div className="x10-4-0-my-personals">
          <div className="flex-col-2">
            <div className="frame-2923">
              <BackButton location={backLocation} />
            </div>
            <div className="profile border-1px-onyx">
              <div className="profile-info">
                {user && (
                  <>
                    <PersonalInformation
                      user={user}
                      isCurrentUser={isCurrentUser}
                    />
                    <ContactInformation
                      user={user}
                      isCurrentUser={isCurrentUser}
                      verification={verification}
                    />
                    <AdditionalInformation
                      user={user}
                      isCurrentUser={isCurrentUser}
                    />
                  </>
                )}
              </div>
              <EditInformation
                clickHandler={editUserInformation}
                image={
                  user?.attachments
                    ? `${process.env.REACT_APP_CDN_BASE_URL}/attachments/${user.attachments}`
                    : "/img/user.svg"
                }
                follow={isCurrentUser}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Profile;
