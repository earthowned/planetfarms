import React from 'react'
import './survey-card.css'

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

const SurveyCard = () => {
    return (
        <>
        {surveyData.map((data)=>{
            return(
                <>
                <div className="survey-card border-1px-onyx">
        <div
          className="survey-card-image"
          style={{backgroundImage:`url(${data.cardImage})`}}
        ></div>
        <h1 className="survey-card-text ibmplexsans-semi-bold-quarter-spanish-white-24px">
         {data.title}
        </h1>
        <div className="survey-card-subtext">
          
            <div className="subtext-item ibmplexsans-normal-monsoon-16px">
              {data.subtitle}
            </div>
            <div className="subtext-item ibmplexsans-normal-monsoon-16px">
              {data.subtitle2}
            </div>
          
          <div className="subtext-option">
            <div className="option-btn border-0-5px-quarter-spanish-white">
              <div className="btn-first valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
               {data.dismiss}
              </div>
            </div>
        
            <div className="option-btn-second border-0-5px-quarter-spanish-white">
              <div className="btn-second valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
               {data.answer}
              </div>
            </div>
          </div>
        </div>
        </div>
                </>
            )
        })}
        </>
    )
}

export default SurveyCard




