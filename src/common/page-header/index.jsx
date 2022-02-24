import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { IconButton } from "common/buttons/icon-button";
import { ModalButton } from "common/buttons/modal-button";
import { DestructiveModalContainer } from "common/modal-containers";

import { logout } from "actions/auth";
import useSizeFinder from "utils/sizeFinder";
import { getErrorMessage } from "utils/error";
import { TABLET_SCREEN_WIDTH } from "constants/sizeConstants";

import { MobileMenu } from "./mobile-menu";
import { TitleContainer } from "./title-container";
import { renderContent, renderComponent } from "./renders";
import { ChangePasswordModalContainer } from "./change-password-modal";

import "./styles.scss";

export const PageHeader = ({ title = "PlanetFarms" }) => {
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const screenWidth = useSizeFinder();

  const isTablet = screenWidth <= TABLET_SCREEN_WIDTH;

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  const handleLogoutClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    setLogoutVisible(true);
  };

  const handleChangePasswordClick = (setMobileModalVisible) => {
    setMobileModalVisible(false);
    setChangePasswordVisible(true);
  };

  const onLogout = async () => {
    try {
      await logout()(dispatch);
    } catch (error) {
      alert.error(getErrorMessage(error));
    }
  };

  return (
    <div className="main-page-header">
      <TitleContainer
        title={title}
        isTablet={isTablet}
        withBackButton={false}
        onHomeClick={() => {
          history.push("/news");
          setIsMenuVisible(false);
        }}
      />

      <div className="right-nav-container">
        <IconButton icon="search" variant="white" />
        <IconButton variant="white" icon="bell" />

        {isTablet && (
          <IconButton
            variant="white"
            icon={isMenuVisible ? "cross" : "gamburger"}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
        )}

        {!isTablet && (
          <div className="modal-btns-container">
            <ModalButton
              width="400px"
              modalTitle="Your settings"
              position={{ top: "65px", right: "-12px" }}
              renderContent={({ setVisible }) =>
                renderContent({
                  onLogout: () => handleLogoutClick(setVisible),
                  onChangePassword: () => handleChangePasswordClick(setVisible),
                })
              }
              component={({ visible, setVisible }) =>
                renderComponent({
                  onClick: () => setVisible(!visible),
                })
              }
            />
          </div>
        )}
      </div>

      {isTablet && (
        <MobileMenu
          visible={isMenuVisible}
          onLogout={() => {
            setIsMenuVisible(false);
            setLogoutVisible(true);
          }}
        />
      )}

      <DestructiveModalContainer
        title="Logout"
        visible={logoutVisible}
        onActionClick={onLogout}
        actionButtonTitle="Logout"
        onClose={() => setLogoutVisible(false)}
        message="Are you sure you want to logout?"
      />

      <ChangePasswordModalContainer
        visible={changePasswordVisible}
        onClose={() => setChangePasswordVisible(false)}
        onChangePassword={() => {}}
      />
    </div>
  );
};
