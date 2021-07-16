import { useState } from 'react'
import './NewsCreateModal.scss'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import CreateVideo from './NewsCreateVideo'
import CreateImage from './NewsCreateImage'
import CreateText from './NewsTextModel'
import CollectionModalHeader from './CollectionModalHeader'
import DragDrop from '../dragDrop/DragDrop'

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
  addVideoData,
  lessonData,
  setLessonData
}) => {
  const [files, setFiles] = useState(null)

  switch (type) {
    case 'video':
      return (
        <CreateVideo
          files={files}
          addVideoData={addVideoData}
          setFiles={setFiles}
          videoActive={videoActive}
          setVideoActive={setVideoActive}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )

    case 'group':
      return (
        <CreateGroup
          files={files}
          setFiles={setFiles}
          groupActive={groupActive}
          setGroupActive={setGroupActive}
        />
      )

    case 'edit-group':
      return (
        <EditGroup
          files={files}
          groupEditActive={groupEditActive}
          setGroupEditActive={setGroupEditActive}
        />
      )

    case 'image':
      return (
        <CreateImage
          files={files}
          setFiles={setFiles}
          imageActive={imageActive}
          setImageActive={setImageActive}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )

    case 'text':
      return (
        <CreateText
          files={files}
          textActive={textActive}
          setTextActive={setTextActive}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )

    default:
      return null
  }
}

const CreateGroup = ({ files, groupActive, setGroupActive }) => {
  return (
    <>
      {groupActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader
              title='Create Group'
              setGroupActive={setGroupActive}
            />
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
            <CollectionModalHeader
              title='Edit Group'
              setGroupEditActive={setGroupEditActive}
            />
            <DragDrop files={files} />
            <GroupEditContainer />
            <button className='button-delete'>
              <img
                className='trash-icon'
                src='/img/trash-icon.svg'
                alt='delete'
              />
              Delete Groups
            </button>
            <div>
              <Link to='/my-group-view-page'>
                <Button name='Edit Group' />
              </Link>
              <button
                className='button-cancel'
                onClick={() => setGroupEditActive(false)}
              >
                {' '}
                Cancel{' '}
              </button>
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
