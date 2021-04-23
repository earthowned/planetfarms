import React from "react";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyCard from "../../Components/SurveyCard/SurveyCard";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./my-survey.css";

function App() {
  return (
    <DashboardLayout title="My Survey">
      <MySurvey />
    </DashboardLayout>
  );
}
export default App;

function MySurvey() {
  return (
    <div className="my-surveys">
      <div className="survey-container">
        <BackButton location={"/dashboard"} />
        <div className="survey-card-container">
          <SurveyCard />
        </div>
      </div>
    </div>
  );
}
