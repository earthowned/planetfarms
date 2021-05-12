import { useState } from 'react'
import './news-create-modal.css'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import CreateVideo from './NewsCreateVideo'
import CreateImage from './NewsCreateImage'
import CreateText from './NewsTextModel'
import CollectionModalHeader from './CollectionModalHeader'
import DragDrop from './DragDrop'

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
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  return (
    <>
      {type === 'video' && (
        <CreateVideo
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          videoActive={videoActive}
          setVideoActive={setVideoActive}
        />
      )}

      {type === 'group' && (
        <CreateGroup
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          groupActive={groupActive}
          setGroupActive={setGroupActive}
        />
      )}
      {type === 'edit-group' && (
        <EditGroup
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          groupEditActive={groupEditActive}
          setGroupEditActive={setGroupEditActive}
        />
      )}
      {type === 'image' && (
        <CreateImage
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          imageActive={imageActive}
          setImageActive={setImageActive}
        />
      )}
      {type === 'text' && (
        <CreateText
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          files={files}
          textActive={textActive}
          setTextActive={setTextActive}
        />
      )}
    </>
  )
}

const CreateGroup = ({ getRootProps, getInputProps, files, groupActive, setGroupActive }) => {
  return (
    <>
      {groupActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>

            <CollectionModalHeader title='Create Group' setGroupActive={setGroupActive} />
            <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />

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

const EditGroup = ({ getRootProps, getInputProps, files, groupEditActive, setGroupEditActive }) => {
  return (
    <>
      {groupEditActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Edit Group' setGroupEditActive={setGroupEditActive} />
            <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
            <GroupEditContainer />
            <button className='button-delete'>
              <img className='trash-icon' src='/img/trash-icon.svg' alt='delete' /> Delete Groups
            </button>
            <div>
              <Link to='/my-group-view-page'>
                <Button name='Edit Group' />
              </Link>
              <button className='button-cancel' onClick={() => setGroupEditActive(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function TextInputContainer () {
  return (
    <div className='photo-input-container'>
      <input
        className='default-input-variation'
        placeholder='Collection title'
      />
      <br />
      <textarea
        className='default-input-variation text-area-variation-2'
        placeholder='Type text here '
      />
    </div>
  )
}

const VideoInputContainer = () => {
  return (
    <div className='video-input-container'>
      <input
        className='default-input-variation'
        placeholder='Video title'
      />
      <br />
      <textarea
        className='default-input-variation text-area-variation'
        placeholder='Video description'
        cols='3'
        rows='3'
      />

      <div className='video-row-3'>
        <input
          className='default-input-variation last-input-variation'
          placeholder='Video link'
        />{' '}
        <span>OR</span> <button className='secondary-btn'>Choose video</button>
      </div>
    </div>
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
      <input className='default-input-variation' placeholder='Edit Title' required='true' value='Think like a farmer' />
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

function PhotoInput () {
  return (
    <>
      <div className='description'>
        <label>Add photo description</label> <ToggleSwitch />
      </div>
      <div className='photo-input-container'>
        <input
          className='default-input-variation'
          placeholder='Photo description'
        />
      </div>
    </>
  )
}

function ToggleSwitch () {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className='toggle-main-container'>
        <div
          onClick={() => setActive(!active)}
          className={`${active ? 'toggle-item active' : 'toggle-item'}`}
        />
        <div className='toggle-container' />
      </div>
    </>
  )
}

export default NewsCreateModal
