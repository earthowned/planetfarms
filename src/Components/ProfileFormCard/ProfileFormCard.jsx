import React from 'react'
import './profile-form-card.css'



const ProfileFormCard = ({data:{ title,first_inputTitle,first_inputValue,second_inputTitle,second_inputValue,third_inputTitle,third_inputValue}}) => {
    return (
      <div className="myProfile-container">
            <h2 className="myProfile-container-row-title">{title}</h2>
            <div className="myProfile-container-row">
              <div className="form-group">
                <label>{first_inputTitle}</label>
                <input value={first_inputValue} />
              </div>
              <div className="form-group">
                <label>{second_inputTitle}</label>
                <input value={second_inputValue} />
              </div>
              {third_inputTitle && <div className="form-group">
                <label>{third_inputTitle}</label>
                <input value={third_inputValue} />
              </div>}
            </div>
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
    <ProfileFormCard data={AdditionalInformationdata} />
    )
  }