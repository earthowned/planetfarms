import React, { useState } from 'react'
import { useHistory } from 'react-router'
import DragDrop from '../../dragDrop/DragDrop'
import ToggleSwitch from '../../toggleSwitch/ToggleSwitch'
import './NewCourseCreateModal.scss'

const NewCourseCreateModal = ({ collectionAdded, clickHandler }) => {
  const history = useHistory()

  const createFunc = () => {
    history.push('/admin/coursepage')
    clickHandler(false)
  }

  return (
    <div className='new-course-modal-container'>
      <div className='new-course-modal-inner-container'>
        <div className='new-course-modal-header'>
          <h4>Usual course</h4>
          <img src='/img/close-outline.svg' onClick={() => clickHandler(false)} alt='close-icon' />
        </div>
        <DragDrop />
        <div className='new-course-input-container'>
          <input className='default-input-variation' placeholder='Collection title' /> <br />
          <select className='default-input-variation' placeholder='Collection title'>
            <option>Select category</option>
            <option>Travelling</option>
          </select>
          <textarea placeholder='Course description' />
          <div className='new-course-toggle'>
            <h4>Free course</h4>
            <ToggleSwitch />
          </div>
          <input className='default-input-variation' placeholder='Course price' />
        </div>
        <button className='default-btn btn-size' onClick={() => createFunc()}>Create course</button>
      </div>
    </div>
  )
}

export default NewCourseCreateModal
