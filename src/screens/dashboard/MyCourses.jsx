import React from "react";

import { DashboardLayout } from "layout/dashboard";

import BackButton from "../../components/backButton/BackButton";
import MyCoursesCard from "../../components/myCoursesCard/MyCoursesCard";

import "./MyCourses.scss";

function App() {
  return (
    <DashboardLayout title="My Courses">
      <MyCourses />
    </DashboardLayout>
  );
}
export default App;

function MyCourses() {
  return (
    <div className="my-courses-dashboard">
      <div className="my-courses-container">
        <BackButton location="/dashboard" />
        <MyCoursesCard />
      </div>
    </div>
  );
}
