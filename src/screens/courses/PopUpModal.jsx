import { useState } from "react";

import GroupModal from "../../components/groupModal/GroupModal";
import SimpleModal from "../../components/simpleModal/SimpleModal";
import CourseCreateModal from "../../components/courseCreateModal/CourseCreateModal";
import LiveCourseModal from "../../components/courseCreateModal/liveCourse/LiveCourseModal";
import NewCourseCreateModal from "../../components/courseCreateModal/newCourseCreateModal/NewCourseCreateModal";
import { PurchaseModal } from "../../components/purchaseModal/PurchaseModal";

const PopUpModal = ({
  modalactive,
  setModalActive,
  createCourse,
  setCreateCourse,
  purchaseModal,
  setPurchaseModal,
}) => {
  const [newCollectionactive, setNewCollectionActive] = useState(false);
  const [createLiveCourse, setCreateLiveCourse] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [purchaseSuccessModal, setPurchaseSuccessModal] = useState(false);
  const [createNewCourse, setCreateNewCourse] = useState(false);

  function createNewCourseFunc() {
    setCreateNewCourse(true);
    setCreateCourse(false);
  }
  return (
    <>
      {purchaseModal && (
        <PurchaseModal
          clickHandler={setPurchaseModal}
          setPurchaseSuccessModal={setPurchaseSuccessModal}
        />
      )}
      {modalactive && (
        <GroupModal
          clickHandler={setModalActive}
          setNewCollection={setNewCollectionActive}
          name="Add to collection"
          btnName="Add to collection"
        />
      )}
      {newCollectionactive && (
        <SimpleModal setNewCollection={setNewCollectionActive} name="Courses" />
      )}
      {createCourse && (
        <CourseCreateModal
          setNewCollection={setNewCollectionActive}
          openModal={createCourse}
          closeModal={setCreateCourse}
          collectionAdded={createNewCourseFunc}
          setCreateLiveCourse={setCreateLiveCourse}
        />
      )}
      {createNewCourse && (
        <NewCourseCreateModal clickHandler={setCreateNewCourse} />
      )}
      {createLiveCourse && (
        <LiveCourseModal
          openModal={createLiveCourse}
          closeModal={setCreateLiveCourse}
        />
      )}
    </>
  );
};

export default PopUpModal;
