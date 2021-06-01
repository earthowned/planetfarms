import { useState } from 'react'
import './news-create-modal.css'
import Button from '../Button/Button'
import { savevideoDetail } from '../../actions/newsActions'
import { useDispatch } from 'react-redux'
import DragDrop from '../DragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../FormUI/FormUI'

const CreateVideo = ({ getRootProps, getInputProps, files, setFiles, videoActive, setVideoActive }) => {
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
          <div>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader title='Add video' clickHandler={setVideoActive} />
              <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} setFiles={setFiles} />
              <div className='video-input-container'>
                <InputFields
                  className='default-input-variation'
                  placeholder='Video title'
                  value={videoTitle}
                  onChange={(e) => videoTitleChange(e)}
                />
                <ErrorText className='error-message' error={videoTitleError} message='Please enter Video Title' />
                <br />
                <TextArea
                  className='default-input-variation text-area-variation'
                  placeholder='Video description'
                  cols='3'
                  rows='3'
                  value={videoDescription}
                  onChange={(e) => videoDescriptionChange(e)}
                />
                <ErrorText className='error-message' error={videoDescriptionError} message='Please enter Video Description' />
                <div className='video-row-3'>
                  <input className='default-input-variation last-input-variation' placeholder='Video link' />{' '}
                  <span>OR</span> <button className='secondary-btn'>Choose video</button>
                </div>
              </div>
              <Button name='Add Video block' clickHandler={addVideo} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateVideo
