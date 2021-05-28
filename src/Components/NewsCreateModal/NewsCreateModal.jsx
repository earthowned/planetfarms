import { useState } from 'react'
import './news-create-modal.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import CreateVideo from './NewsCreateVideo'
import CreateImage from './NewsCreateImage'
import CreateText from './NewsTextModel'
import CollectionModalHeader from './CollectionModalHeader'
import DragDrop from '../DragDrop/DragDrop'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

const NewsCreateModal = ({
  type,
  videoActive,
  setVideoActive,
  imageActive,
  setImageActive,
  textActive,
  setTextActive,
  groupActive,
  setGroupActive,
  groupEditActive,
  setGroupEditActive,
  enterpriseActive,
  setEnterpriseActive
}) => {
  const [files, setFiles] = useState()

  switch (type) {
    case 'video':
      return (
        <CreateVideo files={files} setFiles={setFiles} videoActive={videoActive} setVideoActive={setVideoActive} />
      )
      break
    case 'group':
      return (
        <CreateGroup files={files} setFiles={setFiles} groupActive={groupActive} setGroupActive={setGroupActive} />
      )
      break
    case 'edit-group':
      return (
        <EditGroup files={files} groupEditActive={groupEditActive} setGroupEditActive={setGroupEditActive} />
      )
      break
    case 'image':
      return (
        <CreateImage files={files} setFiles={setFiles} imageActive={imageActive} setImageActive={setImageActive} />
      )
      break
    case 'text':
      return (
        <CreateText files={files} textActive={textActive} setTextActive={setTextActive} />
      )
      break
    default:
      return null
      break
  }
}

const CreateGroup = ({ files, groupActive, setGroupActive }) => {
  return ( 
    <>
      {groupActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Create Group' setGroupActive={setGroupActive} />
            <DragDrop files={files} />
            <GroupInputContainer />
            <Link to='/my-group-view-page'>
              <Button name='Create Group' />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

const EditGroup = ({ files, groupEditActive, setGroupEditActive }) => {
  return (
    <>
      {groupEditActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Edit Group' setGroupEditActive={setGroupEditActive} />
            <DragDrop files={files} />
            <GroupEditContainer />
            <button className='button-delete'>
              <img className='trash-icon' src='/img/trash-icon.svg' alt='delete' />
              Delete Groups
            </button>
            <div>
              <Link to='/my-group-view-page'>
                <Button name='Edit Group' />
              </Link>
              <button className='button-cancel' onClick={() => setGroupEditActive(false)}> Cancel </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const GroupInputContainer = () => {
  return (
    <div className='video-input-container'>
      <input
        className='default-input-variation'
        placeholder='Group title'
        required='true'
      />
      <br />
      <textarea
        className='default-input-variation text-area-variation'
        placeholder='Group description'
        required='true'
        cols='3'
        rows='3'
      />
    </div>
  )
}

const GroupEditContainer = () => {
  return (
    <div className='video-input-container'>
      <input
        className='default-input-variation'
        placeholder='Edit Title'
        required='true'
        value='Think like a farmer'
      />
      <br />
      <textarea
        className='default-input-variation text-area-variation'
        placeholder='Edit description'
        required='true'
        cols='3'
        rows='3'
        value='Hi there! We’re a most kind and friendly society for everyone! We post here some news about farming, nature and etc… We hope you gonna like it! Be a part of our still small, but amazing community!'
      />
    </div>
  )
}

export default NewsCreateModal
