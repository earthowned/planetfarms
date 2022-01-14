import React, { useState } from "react";
import nav from "./courseNav";
import useGetFetchData from "../../utils/useGetFetchData";
import { CATEGORY } from "../../utils/urlConstants";

import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";
import CoursesCard from "../../components/coursesCard/CoursesCard";
import PopUpModal from "./PopUpModal";
import SubHeader from "../../components/subHeader/SubHeader";
import "./Courses.css";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [modalactive, setModalActive] = useState(false);
  const [createCourse, setCreateCourse] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState(false);

  const { data, isLoading } = useGetFetchData("courseCategory", CATEGORY);
  if (isLoading) {
    return <span>Loading...</span>;
  }

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
