import { useState } from "react";

import { DashboardLayout } from "layout/dashboard";

import CollectionModal from "../../../components/collectionModal/CollectionModal";
import GroupModal from "../../../components/groupModal/GroupModal";
import LibraryCard from "../../../components/libraryCard/LibraryCard";
import "./SavedCollection.css";
import { groupCollection, library, nav } from "../CollectionData";
import SimpleModal from "../../../components/simpleModal/SimpleModal";
import SubHeader from "../../../components/subHeader/SubHeader";

const SavedCollection = () => {
  const [newCollection, setNewCollection] = useState(false);
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  function openAddCollection() {
    setModalActive(true);
    setActive(false);
  }

  return (
    <>
      {modalActive && (
        <GroupModal
          clickHandler={setModalActive}
          data={groupCollection}
          btnName="add to collections"
          // eslint-disable-next-line react/jsx-no-bind
          openAddCollection={openAddCollection}
          setNewCollection={setNewCollection}
        />
      )}
      {newCollection && <SimpleModal setNewCollection={setNewCollection} />}
      {active && (
        <CollectionModal
          setActive={setActive}
          // eslint-disable-next-line react/jsx-no-bind
          openAddCollection={openAddCollection}
        />
      )}
      <DashboardLayout title="library">
        <SubHeader nav={nav} btnName="Add files" setCreateActive={setActive} />
        {["Farming", "Branding"].map((category, index) => (
          <div key={index.toString()} className="library-collection">
            <h4>{category} Collections</h4>
            <LibraryCard data={library} />
          </div>
        ))}
      </DashboardLayout>
    </>
  );
};

export default SavedCollection;
