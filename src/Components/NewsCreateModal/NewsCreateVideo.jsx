import { useState } from 'react'
import './news-create-modal.css'
import Button from '../Button/Button'
import { savevideoDetail } from '../../actions/newsActions'
import { useDispatch } from 'react-redux'
import DragDrop from './DragDrop'
import CollectionModalHeader from './CollectionModalHeader'

const CreateVideo = ({ getRootProps, getInputProps, files, videoActive, setVideoActive }) => {
  const [videoTitle, setVideoTitle] = useState()
  const [videoDescription, setVideoDescription] = useState()

  const [videoTitleError, setVideoTitleError] = useState()
  const [videoDescriptionError, setVideoDescriptionError] = useState()

  const videoTitleChange = (e) => {
    setVideoTitle(e.target.value)
    setVideoTitleError(false)
  }
  const videoDescriptionChange = (e) => {
    setVideoDescription(e.target.value)
    setVideoDescriptionError(false)
  }

  const dispatch = useDispatch()
  const addVideo = () => {
    if (!videoTitle) setVideoTitleError(true)
    if (!videoDescription) setVideoDescriptionError(true)
    if (videoTitle && videoDescription) {
      dispatch(savevideoDetail({ videoTitle, videoDescription }))
      setVideoActive(false)
    }
  }
  return (
    <>
      {videoActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Add video' setVideoActive={setVideoActive} />
            <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} />
            <div className='video-input-container'>
              <input
                className='default-input-variation'
                placeholder='Video title'
                value={videoTitle}
                onChange={(e) => videoTitleChange(e)}
              />
              <p className='error-message'>{videoTitleError ? 'Please enter Video Title' : ' '} </p>
              <br />
              <textarea
                className='default-input-variation text-area-variation'
                placeholder='Video description'
                cols='3'
                rows='3'
                value={videoDescription}
                onChange={(e) => videoDescriptionChange(e)}
              />
              <p className='error-message'>{videoDescriptionError ? 'Please enter Video Description' : ' '} </p>

              <div className='video-row-3'>
                <input className='default-input-variation last-input-variation' placeholder='Video link' />{' '}
                <span>OR</span> <button className='secondary-btn'>Choose video</button>
              </div>
            </div>
            <Button name='Add Video block' clickHandler={addVideo} />
          </div>
        </div>
      )}
    </>
  )
}

export default CreateVideo
