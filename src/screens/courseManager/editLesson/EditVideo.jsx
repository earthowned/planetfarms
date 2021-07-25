import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { VIDEO_COVER } from '../../../utils/urlConstants'

import Button from '../../../components/button/Button'
import DragDrop from '../../../components/dragDrop/DragDrop'
import ModelHandler from './ModelHandler'
import {
  InputFields,
  ErrorText,
  TextArea
} from '../../../components/formUI/FormUI'
import '../../../components/newsCreateModal//NewsCreateModal.scss'

const EditVideo = ({
  editVideoModel,
  setEditVideoModel,
  lessonData,
  setLessonData,
  editId,
  videoData
}) => {
  const { register, errors, handleSubmit } = useForm()
  const [videoCover, setVideoCover] = useState(null)
  const [video, setVideo] = useState(null)
  const [videoLink, setVideoLink] = useState('')
  const addVideo = ({ videoTitle, videoDescription, videoLink }) => {
    const videoResource = video
    setLessonData(
      lessonData.map((data) =>
        data.itemId === editId
          ? {
              ...data,
              videoCover,
              videoTitle,
              videoDescription,
              videoLink,
              videoResource
            }
          : data
      )
    )
    setEditVideoModel(false)
  }

  const editingVideoData =
    videoData?.find((video) => video.id === editId) ||
    lessonData?.find((video) => video.itemId === editId)

  console.log(editingVideoData)
  // typeof lessonImg === 'object' ? lessonImg?.preview : LESSON_IMG + lessonImg
  useEffect(() => {
    editingVideoData?.videoCover && setVideoCover(editingVideoData?.videoCover)
    editingVideoData?.videoResource && setVideo(editingVideoData?.videoResource)
    editingVideoData?.videoLink && setVideoLink(editingVideoData?.videoLink)
  }, [editingVideoData])

  return (
    editVideoModel && (
      <div className='collection-modal-container addBlock addBlock__video'>
        <div className='block'>
          <div className='collection-modal-inner-container'>
            <ModelHandler title='Add video' clickHandler={setEditVideoModel} />
            <DragDrop
              text='Drag & Drop or Click Here to edit Video Cover'
              onChange={(img) => setVideoCover(img)}
              dataImg={
                typeof videoCover === 'object'
                  ? videoCover?.preview
                  : VIDEO_COVER + videoCover
              }
            />
            <div className='video-input-container'>
              <InputFields
                className='default-input-variation'
                placeholder='Video Title (Optional)'
                name='videoTitle'
                ref={register}
                defaultValue={editingVideoData?.videoTitle}
              />

              <TextArea
                className='default-input-variation text-area-variation textarea'
                placeholder='Video Description (Optional)'
                cols='3'
                rows='4'
                name='videoDescription'
                ref={register}
                defaultValue={editingVideoData?.videoDescription}
              />
              <div className='video-row-3'>
                {!video && (
                  <>
                    <input
                      type='url'
                      className={
                        videoLink || editingVideoData?.videoLink
                          ? 'default-input-variation last-input-variation full'
                          : `default-input-variation last-input-variation ${
                              errors.videoLink ? 'error' : ''
                            }`
                      }
                      placeholder='Video Link'
                      name='videoLink'
                      ref={register({
                        required: {
                          value: true,
                          message: 'Please enter a video Link or Video File'
                        }
                      })}
                      onChange={(e) => setVideoLink(e.target.value)}
                      defaultValue={editingVideoData?.videoLink}
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
                    onClick={() => setVideo(null)}
                    text='Add Video'
                    dropFile={video}
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
              name='Edit Video Block'
              onClick={handleSubmit(addVideo)}
            />
          </div>
        </div>
      </div>
    )
  )
}

export default EditVideo
