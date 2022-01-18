import React, { useState } from "react";
import MessageSlot from "../messageSlot/MessageSlot";
import GroupModal from "../groupModal/GroupModal";
import CallModal from "../callModal/CallModal";
import { groupUsersData } from "../../constants/sampleData";
import "./MessageRightComponent.scss";

const MessageRightComponent = () => {
  const [addGroup, setAddGroup] = useState(false);
  const [call, setCall] = useState(false);

  function makeCall() {
    setAddGroup(true);
  }

  return (
    <>
      {addGroup && (
        <GroupModal
          clickHandler={setAddGroup}
          data={groupUsersData}
          btnName="add members"
        />
      )}
      {call && <CallModal clickHandler={setCall} />}

      <div className="message-header">
        <div className="message-account">
          <div className="account-section">
            <div className="img-wrapper">
              <img src="/img/avatar-img.svg" alt="" />
            </div>
            <div className="account-user">
              <h4 className="heading-4">Besie Cooper</h4>
              <div className="date">
                <span>Last seen 2 hours ago</span>
              </div>
            </div>
          </div>
          <ul className="messenger-list-container">
            <li className="messenger-list-item" onClick={() => makeCall()}>
              <img src="/img/person-add-outline.svg" alt="" />
            </li>
            <li className="messenger-list-item" onClick={() => setCall(true)}>
              <img src="/img/phone-call-outline.svg" alt="" />
            </li>
            <li className="messenger-list-item">
              <img src="/img/video-outline.svg" alt="" />
            </li>
            <li className="messenger-list-item">
              <img src="/img/more-horizontal-outline-1.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <MessageSlot />
    </>
  );
};

export default MessageRightComponent;
