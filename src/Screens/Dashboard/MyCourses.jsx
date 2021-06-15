import React from "react";
import BackButton from "../../Components/BackButton/BackButton";
import MyCoursesCard from "../../Components/myCoursesCard/MyCoursesCard";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./my-courses.css";

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
        <BackButton location={"/dashboard"} />
        <MyCoursesCard />
      </div>
    </div>
  );
}
