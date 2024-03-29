import React, { useState } from "react";

import { DashboardLayout } from "layout/dashboard";

import nav from "./courseNav";
import useGetFetchData from "../../utils/useGetFetchData";
import { CATEGORY } from "../../utils/urlConstants";
import CoursesCard from "../../components/coursesCard/CoursesCard";
import PopUpModal from "./PopUpModal";
import SubHeader from "../../components/subHeader/SubHeader";

import "./Courses.css";

const Courses = () => {
  const [modalactive, setModalActive] = useState(false);
  const [createCourse, setCreateCourse] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState(false);
  // const [purchaseSuccessModal, setPurchaseSuccessModal] = useState(false);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetFetchData("courseCategory", CATEGORY);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  // function createNewCourseFunc() {
  //   // setCreateNewCourse(true)
  //   setCreateCourse(false);
  // }

  return (
    <>
      <PopUpModal
        modalactive={modalactive}
        setModalActive={setModalActive}
        createCourse={createCourse}
        setCreateCourse={setCreateCourse}
        purchaseModal={purchaseModal}
        setPurchaseModal={setPurchaseModal}
      />
      <DashboardLayout title="All courses">
        <div className="courses-main-container">
          <SubHeader
            search={search}
            setSearch={setSearch}
            nav={nav}
            setCreateActive={setCreateCourse}
            btnName="Add Courses"
          />
        </div>
        {data?.results?.map((category) => {
          return (
            <CoursesCard
              search={search}
              category={category}
              setModalActive={setModalActive}
              key={category.id}
              setPurchaseModal={setPurchaseModal}
            />
          );
        })}
      </DashboardLayout>
    </>
  );
};

export default Courses;
