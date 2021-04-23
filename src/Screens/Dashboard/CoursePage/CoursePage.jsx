import React from "react";
import BackButton from "../../../Components/BackButton/BackButton";
import CourseDescription from "../../../Components/MyCoursesCard/CourseDescription/CourseDescription";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";
import "./course-page.css";

function App() {
  return (
    <DashboardLayout title="Course Page">
      <CoursePage />
    </DashboardLayout>
  );
}
export default App;

function CoursePage() {
  return (
    <div className="course-page">
      <div className="course-page-flex-col-4">
        <BackButton location={"/mycourse"} />
        <CourseDescription />
      </div>
    </div>
  );
}
