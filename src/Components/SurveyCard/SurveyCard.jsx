import React from 'react'
import './survey-card.css'


const SurveyCard = ({data}) => {
    return (
        <>
        {data.map((data)=>{
            return(
                <>
                <div className="survey-card border-1px-onyx">
                  <div
                    className="survey-card-image"
                    style={{
                      backgroundImage:`url(${data.cardImage})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div className="survey-card-subtext">
                      <h1 className="survey-card--heading">
                      {data.title}
                      </h1>
                      <div>
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
                 </div>
                </>
            )
        })}
        </>
    )
}

export default SurveyCard




