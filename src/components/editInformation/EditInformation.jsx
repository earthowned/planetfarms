import React from 'react'
import Button from '../button/Button'
import Secondarybtn from '../secondaryBtn/Secondarybtn'
import './EditInformation.scss'

function EditInformation ({ image, follow, clickHandler }) {
  return (
    <div className='edit-information-container'>
      {
      !image
        ? (
          <div className='no-picture'>
            <h3 className='no-picture-text'>No Profile Picture</h3>
          </div>
          )
        : (
          <img src={image} alt='profile-pic' />
          )
      }
      {follow
        ? (
          <Button name='Follow' />
          )
        : (
          <div>
            <Secondarybtn name='Edit Information' clickHandler={clickHandler} />
          </div>
          )}
    </div>
  )
}

export default EditInformation
