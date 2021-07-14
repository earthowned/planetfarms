import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'
import './NewsCreateModal.scss'

const CreateVideo = ({
  getRootProps,
  getInputProps,
  files,
  videoActive,
  setVideoActive,
  lessonData,
  setLessonData
}) => {
  const { register, errors, handleSubmit } = useForm()
  const [videoCover, setVideoCover] = useState(null)
  const [video, setVideo] = useState()
  const [videoLink, setVideoLink] = useState('')

  const addVideo = ({ videoTitle, videoDescription, videoLink }) => {
    const videoResource = video
    const vData = [
      ...lessonData,
      {
        videoCover,
        videoTitle,
        videoDescription,
        videoLink,
        videoResource
      }
    ]
    setLessonData(vData)
    setVideoActive(false)
  }
  return (
    <>
      {videoActive && (
        <div className='collection-modal-container addBlock addBlock__video'>
          <div className='block'>
            <div className='collection-modal-inner-container'>
              <CollectionModalHeader
                title='Add video'
                clickHandler={setVideoActive}
              />
              <DragDrop
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                files={files}
                onChange={(img) => setVideoCover(img)}
              />
              <div className='video-input-container'>
                <InputFields
                  className='default-input-variation'
                  placeholder='Video title'
                  name='videoTitle'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter video title'
                    }
                  })}
                />
                <ErrorText
                  className='errorMsg'
                  message={errors.videoTitle && errors.videoTitle.message}
                />

                <TextArea
                  className='default-input-variation text-area-variation textarea'
                  placeholder='Video description'
                  cols='3'
                  rows='4'
                  name='videoDescription'
                  ref={register}
                />
                <div className='video-row-3'>
                  {!video && (
                    <>
                      <input
                        type='url'
                        className={
                          videoLink
                            ? 'default-input-variation last-input-variation full'
                            : 'default-input-variation last-input-variation'
                        }
                        placeholder='Video link'
                        name='videoLink'
                        ref={register({
                          required: {
                            value: true,
                            message: 'Please enter a video Link'
                          }
                        })}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                    </>
                  )}
                  {!video && !videoLink ? <span>OR</span> : ''}

                  {!videoLink && (
                    <DragDrop
                      type='video'
                      className={
                        video
                          ? 'videoUploadBtn videoUploadBtn-full'
                          : 'videoUploadBtn'
                      }
                      onChange={(vid) => setVideo(vid)}
                      setVideo={setVideo}
                      text='Add Video'
                    />
                  )}
                </div>
                <ErrorText
                  className='errorMsg'
                  message={errors.videoLink && errors.videoLink.message}
                />
              </div>
              <Button
                className='add'
                name='Add Video block'
                onClick={handleSubmit(addVideo)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateVideo
