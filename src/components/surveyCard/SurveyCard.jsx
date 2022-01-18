import React from "react";
import "./SurveyCard.scss";
import CardLayout from "../../layout/cardLayout/CardLayout";

const SurveyCard = ({ data }) => {
  return (
    <CardLayout>
      {data.map((item, index) => {
        return (
          <div
            key={`${item.title}-${index.toString()}`}
            className="survey-card border-1px-onyx"
          >
            <div
              className="survey-card-image"
              style={{
                backgroundImage: `url(${item.cardImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="survey-card-subtext">
              <h1 className="survey-card--heading">{item.title}</h1>
              <div>
                <div className="subtext-item ibmplexsans-normal-monsoon-16px">
                  {item.subtitle}
                </div>
                <div className="subtext-item ibmplexsans-normal-monsoon-16px">
                  {item.subtitle2}
                </div>

                <div className="subtext-option">
                  <div className="option-btn border-0-5px-quarter-spanish-white">
                    <div className="btn-first valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                      {item.dismiss}
                    </div>
                  </div>

                  <div className="option-btn-second border-0-5px-quarter-spanish-white">
                    <div className="btn-second valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </CardLayout>
  );
};

export default SurveyCard;
