import React from 'react'
import './profile-form-card.css'



const ProfileFormCard = ({data:{ title,first_inputTitle,first_inputValue,second_inputTitle,second_inputValue,third_inputTitle,third_inputValue}}) => {
    return (
        <div className="x-information">
        <div className="x-information-flex-row">
          <div className="x-information-flex-col">
           <div className="contact-information ibmplexsans-semi-bold-quarter-spanish-white-16px">{title} </div>
           <div className="email-container">
              <div className="email-text ibmplexsans-regular-normal-monsoon-14px"> {first_inputTitle}</div>
              <input type="text" className="email-address ibmplexsans-semi-bold-quarter-spanish-white-16px" value={first_inputValue} />
            </div>
        </div>
          <div className="phone-container">
            <div className="phone-text ibmplexsans-regular-normal-monsoon-14px">{second_inputTitle}</div>
            <input type="text" className="phone-number ibmplexsans-semi-bold-quarter-spanish-white-16px" value={second_inputValue} />
          </div> 
           <div className="dob">
          <div className="date-of-birhday-text ibmplexsans-regular-normal-monsoon-14px">{third_inputTitle} </div>
          <input type="text" className="date-text ibmplexsans-semi-bold-quarter-spanish-white-16px" value={third_inputValue}  />
        </div>
        </div>
        <div className="border-line"></div>
      </div>
    )
}


export const PersonalInformation=()=>{
    const PersonalInformationdata = {
      title: "Personal infromation",
      first_inputTitle:"First name",
      first_inputValue:"Mikhail" ,
      second_inputTitle:"Last Name" ,
      second_inputValue:"Ugryum",
      third_inputTitle:"Date of birhday",
      third_inputValue:"08/05/2021"
    }
    return(
    
    <>
    <ProfileFormCard data={PersonalInformationdata} />
    </>
    )
  }

  export const ContactInformation=()=>{
    const ContactInformationdatadata = {
      title: "Contact information",
      first_inputTitle:"Email",
      first_inputValue:"johndoe@gmail.com" ,
      second_inputTitle:"Phone" ,
      second_inputValue:"+1 61 2575684",
    }
    return(
    <ProfileFormCard data={ContactInformationdatadata}  />
    )
  }

 export const AdditionalInformation=()=>{
    const AdditionalInformationdata = {
      title: "Additional information",
      first_inputTitle:"Last login",
      first_inputValue:"09/22/2020" ,
      second_inputTitle:"Numbers of visits" ,
      second_inputValue:"153",
    }
    return(
    <ProfileFormCard data={AdditionalInformationdata}    />
  
    )
  }