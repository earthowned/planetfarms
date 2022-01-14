import React, { useState } from "react";
import { Link } from "react-router-dom";

import nav from "../courseNav";
import CardLayout from "../../../layout/cardLayout/CardLayout";
import SubHeader from "../../../components/subHeader/SubHeader";
import Background from "../../../components/background/Background";
import DashboardLayout from "../../../layout/dashboardLayout/DashboardLayout";

import "./CourseCollection.css";

const farming = Array(6).fill({
  title: "Farm 2020 courses collection",
  img: "/img/mountain.svg",
  subscribers: 65,
});

const mycollection = [
  {
    title: "Farm 2020 courses collection",
    img: "/img/farmer.svg",
    subscribers: 365,
  },
  {
    title: "Farm 2020 courses collection",
    img: "/img/farmer.svg",
    subscribers: 365,
  },
];

const CourseCollection = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(null);

  return (
    <DashboardLayout title="All courses">
      <div className="courses-main-container">
        <SubHeader
          search={search}
          setSearch={setSearch}
          nav={nav}
          setCreateActive={setActive}
          btnName="Add Courses"
        />
        <CourseUserCard
          name="My Courses"
          data={farming}
          btnName="Manage course"
          subName="subscribers"
        />
        <CourseUserCard
          name="My Collections"
          data={mycollection}
          btnName="Edit Collection"
          subName="users saved"
        />
      </div>
    </DashboardLayout>
  );
};

const CourseUserCard = ({ name, data, btnName, subName }) => {
  return (
    <>
      <h4 className="courses-users-collection-header">{name}</h4>
      <CardLayout data={data}>
        {data.map((item) => {
          return (
            <BackgroundUserCard
              item={item}
              btnName={btnName}
              subName={subName}
            />
          );
        })}
      </CardLayout>
    </>
  );
};

export const BackgroundUserCard = ({ item, btnName, subName }) => {
  return (
    <Background image={item.img}>
      <div className="course-collection-inner-card">
        <button className="subs">
          <h6>
            {item.subscribers} {subName}
          </h6>
        </button>
        <CourseUserContent item={item} btnName={btnName} />
      </div>
    </Background>
  );
};

function CourseUserContent({ item, btnName }) {
  const [savedActive, setSavedActive] = useState(false);
  return (
    <div className="courses-users-content">
      <h3>{item.title}</h3>
      {btnName === "Edit Collection" ? (
        <Link className="nav-link" to="/courses/my-courses/edit-course">
          <button
            className="trasnsparent-btn fixed-width courses-users-btn"
            onClick={() => setSavedActive(!savedActive)}
          >
            {btnName}
          </button>
        </Link>
      ) : (
        <button
          className="trasnsparent-btn fixed-width courses-users-btn"
          onClick={() => setSavedActive(!savedActive)}
        >
          {btnName}
        </button>
      )}
    </div>
  );
}

export default CourseCollection;
