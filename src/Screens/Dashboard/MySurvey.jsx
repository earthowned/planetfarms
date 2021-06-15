import React from "react";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyCard from "../../Components/surveyCard/SurveyCard";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import "./my-survey.css";

const surveyData = [
    {
      _id:1,
      title: " COVID 19 problems &amp; business",
      subtitle: " From “Nature Lovers”",
      subtitle2:" 55 people already answered",
      answer:"Answer",
      dismiss:"DIsmiss",
      cardImage:"/img/card-image.svg"
    },
  
    {
        _id:2,
        title: " Do you have horses on your own farm? How do you like it?",
        subtitle: " From “Nature Lovers”",
        subtitle2:" 56 people already answered",
        answer:"Answer",
        dismiss:"DIsmiss",
        cardImage:"/img/survey-card-2.svg"
      },
      {
        _id:3,
        title: " Do you have horses on your own farm? How do you like it?",
        subtitle: " From “Nature Lovers”",
        subtitle2:" 60 people already answered",
        answer:"Answer",
        dismiss:"DIsmiss",
        cardImage:"/img/survey-card-3.svg"
      },
      {
        _id:4,
        title: " What Iphone can bring to you?",
        subtitle: " From “Nature Lovers”",
        subtitle2:" 65 people already answered",
        answer:"Answer",
        dismiss:"Dismiss",
        cardImage:"/img/survey-card-4.svg"
      },
  ];

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
          <SurveyCard data={surveyData}/>
        </div>
      </div>
    </div>
  );
}
