import React from 'react'
import Button from '../Button/Button'
import Secondarybtn from '../SecondaryBtn/Secondarybtn'
import './edit-information.css'

function EditInformation ({ image, follow, clickHandler }) {
  return (
    <div className='edit-information-container'>
      <img src={image} alt='profile-pic' />
      <div>
        <Secondarybtn name='Edit Information' clickHandler={clickHandler} />
      </div>
      {follow && <Button name='Follow' />}
    </div>
  )
}

export default EditInformation
