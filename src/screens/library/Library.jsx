import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { DashboardLayout } from "layout/dashboard";
import SimpleModal from "../../components/simpleModal/SimpleModal";
import CollectionModal from "../../components/collectionModal/CollectionModal";
import GroupModal from "../../components/groupModal/GroupModal";
import { groupCollection, nav } from "./CollectionData";
import SubHeader from "../../components/subHeader/SubHeader";
import LibraryCategory from "./LibraryCategory";
import "./Library.scss";

const Library = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const [newCollection, setNewCollection] = useState(false);
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [search, setSearch] = useState();

  function openAddCollection() {
    setModalActive(true);
    setActive(false);
  }

  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [search, history, userInfo]);

  return (
    <>
      {modalActive && (
        <GroupModal
          clickHandler={setModalActive}
          data={groupCollection}
          btnName="add to collections"
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

      <DashboardLayout title="Library">
        <div className="library-main-container">
          <SubHeader
            search={search}
            setSearch={setSearch}
            nav={nav}
            setCreateActive={setActive}
            btnName="Add files"
          />
          {["Articles", "Videos"].map((type) => (
            <div className="list-container" key={type}>
              <LibraryCategory
                search={search}
                title={type}
                setNewCollection={setNewCollection}
                modalActive={modalActive}
                setModalActive={setModalActive}
              />
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Library;
