import React from 'react'
import Button from '../button/Button'
import Secondarybtn from '../secondaryBtn/Secondarybtn'
import './EditInformation.scss'

function EditInformation ({ image, follow }) {
  return (
    <div className='edit-information-container'>
      <img src={image} alt='profile-pic' />
      <div>
        <Secondarybtn name='Edit Information' />
      </div>
      {follow && <Button name='Follow' />}
    </div>
  )
}

export default EditInformation
