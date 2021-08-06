import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../button/Button'
import DragDrop from '../dragDrop/DragDrop'
import CollectionModalHeader from './CollectionModalHeader'
import { InputFields, ErrorText, TextArea } from '../formUI/FormUI'
import './NewsCreateModal.scss'
import { LESSON_IMG, VIDEO_COVER } from '../../utils/urlConstants'

const CreateVideo = ({
  getRootProps,
  getInputProps,
  files,
  videoActive,
  setVideoActive,
  lessonData,
  setLessonData,
  data = []
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
                text='Drag & Drop photo in this area or Click Here to attach Video Cover'
                dataImg={data.length > 0 ? `${VIDEO_COVER}${data[0]?.videoCover}` : ''}
                onChange={(img) => setVideoCover(img)}
                fileType='image/png,image/jpeg,image/jpg'
              />
              <div className='video-input-container'>
                <InputFields
                  className='default-input-variation'
                  placeholder='Video Title (Optional)'
                  name='videoTitle'
                  ref={register}
                  defaultValue={data.length > 0 && data[0].videoTitle}
                />

                <TextArea
                  className='default-input-variation text-area-variation textarea'
                  placeholder='Video Description (Optional)'
                  cols='3'
                  rows='4'
                  name='videoDescription'
                  ref={register}
                  defaultValue={data.length > 0 && data[0].videoDescription}
                />
                <div className='video-row-3'>
                  {!video && (
                    <>
                      <input
                        type='url'
                        className={
                          videoLink
                            ? 'default-input-variation last-input-variation full'
                            : `default-input-variation last-input-variation ${
                                errors.videoLink ? 'error' : ''
                              }`
                        }
                        placeholder='Video Link'
                        name='videoLink'
                        defaultValue={data.length > 0 && data[0].videoLink}
                        ref={register({
                          required: {
                            value: true,
                            message: 'Please enter a video Link or Video File'
                          }
                        })}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                    </>
                  )}
                  {!video && !videoLink ? <span>OR</span> : ''}

                  {!videoLink && (
                    <DragDrop
                      fileType='video/mp4,video/quicktime'
                      className={
                        video
                          ? 'videoUploadBtn videoUploadBtn-full'
                          : 'videoUploadBtn'
                      }
                      onChange={(vid) => setVideo(vid)}
                      setVideo={setVideo}
                      onClick={() => setVideo(null)}
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
                name='Add Video Block'
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
