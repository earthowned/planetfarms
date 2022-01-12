import { useState } from "react";
import "./UserCollection.css";
import DashboardLayout from "../../../layout/dashboardLayout/DashboardLayout";
import CollectionModal from "../../../components/collectionModal/CollectionModal";
import SimpleModal from "../../../components/simpleModal/SimpleModal";
import Background from "../../../components/background/Background";
import { farming, groupCollection, nav } from "../CollectionData";
import GroupModal from "../../../components/groupModal/GroupModal";
import CardLayout from "../../../layout/cardLayout/CardLayout";
import SubHeader from "../../../components/subHeader/SubHeader";

import { InfoTag } from "../../../common/info-tag";
import { ActionButton } from "../../../common/action-button";

const UserCollection = () => {
  const [modalActive, setModalActive] = useState(false);

  const [groupModal, setGroupModal] = useState(false);
  const [newCollection, setNewCollection] = useState(false);

  function openAddCollection() {
    setGroupModal(true);
    setModalActive(false);
  }

  return (
    <>
      {groupModal && (
        <GroupModal
          clickHandler={setGroupModal}
          data={groupCollection}
          btnName="add to collections"
          setNewCollection={setNewCollection}
        />
      )}

      {modalActive && (
        <CollectionModal
          setActive={setModalActive}
          openAddCollection={openAddCollection}
        />
      )}

      {newCollection && <SimpleModal setNewCollection={setNewCollection} />}

      <DashboardLayout title="library">
        <SubHeader
          nav={nav}
          btnName="Add files"
          setCreateActive={setModalActive}
        />
        <h4 className="farming-collection-header">Farming Collections</h4>

        <CardLayout data={farming}>
          {farming.map((item) => {
            return <UserCollectionCard item={item} />;
          })}
        </CardLayout>
      </DashboardLayout>
    </>
  );
};

function UserCollectionCard({ item }) {
  const [active, setActive] = useState(false);
  return (
    <Background image={item.img}>
      <div className="farming-inner-container">
        <div className="info-container">
          <InfoTag title={`${item.users} users saved`} />
        </div>

        <div className="libraryCard-content">
          <h6>{item.category}</h6>
          <h4>{item.title}</h4>

          <ActionButton
            variant="secondary"
            icon={active && "check-circle"}
            onClick={() => setActive(!active)}
            title={active ? "Saved" : "Save Collection"}
            className={active ? "action-btn-saved" : "action-btn"}
          />
        </div>
      </div>
    </Background>
  );
}

export default UserCollection;
