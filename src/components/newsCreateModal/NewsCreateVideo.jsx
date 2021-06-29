import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
import './NewsCreateModal.scss'
import Button from '../button/Button'
// import { savevideoDetail } from '../../actions/newsActions'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'

const CreateVideo = ({
  getRootProps,
  getInputProps,
  files,
  // setFiles,
  videoActive,
  setVideoActive,
  setVideoData,
  videoData,
}) => {
  const { register, errors, handleSubmit } = useForm()
  const [videoCover, setVideoCover] = useState(null)
  const [video, setVideo] = useState(null)
  console.log(video)
  const addVideo = ({
    videoTitle,
    videoDescription,
    videoLink,
    videoResource,
  }) => {
    const vData = [
      ...videoData,
      {
        videoCover,
        videoTitle,
        videoDescription,
        videoLink,
        videoResource,
      },
    ]
    setVideoData(vData)
    // setVideoActive(false)
  }
  return (
    <>
      {videoActive && (
        <div className="collection-modal-container">
          <div>
            <div className="collection-modal-inner-container">
              <CollectionModalHeader
                title="Add video"
                clickHandler={setVideoActive}
              />
              <DragDrop
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                files={files}
                onChange={(img) => setVideoCover(img)}
              />
              <div className="video-input-container">
                <InputFields
                  className="default-input-variation"
                  placeholder="Video title"
                  name="videoTitle"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter video title',
                    },
                  })}
                />
                <ErrorText
                  className="errorMsg"
                  message={errors.videoTitle && errors.videoTitle.message}
                />

                <TextArea
                  className="default-input-variation text-area-variation"
                  placeholder="Video description"
                  cols="3"
                  rows="7"
                  name="videoDescription"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter a video description',
                    },
                  })}
                />
                <ErrorText
                  className="errorMsg"
                  message={
                    errors.videoDescription && errors.videoDescription.message
                  }
                />
                <div className="video-row-3">
                  <input
                    type="url"
                    className="default-input-variation last-input-variation"
                    placeholder="Video link"
                    name="videoLink"
                    ref={register}
                  />
                  <span>OR</span>
                  <DragDrop
                    type="video"
                    className="videoUploadBtn"
                    onChange={(vid) => setVideo(vid)}
                  />
                </div>
              </div>
              <Button name="Add Video block" onClick={handleSubmit(addVideo)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateVideo
