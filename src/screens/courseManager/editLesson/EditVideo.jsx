import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { updateVideo } from '../../../actions/videoActions'
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
  videoData,
  refetch
}) => {
  const dispatch = useDispatch()
  const { register, errors, handleSubmit } = useForm()
  const [videoCover, setVideoCover] = useState(null)
  const [video, setVideo] = useState(null)
  const [videoTitle, setVideoTitle] = useState('')
  const [videoErr, setVideoErr] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const addVideo = ({ videoTitle, videoDescription, videoLink }) => {
    const videoResource = video
    if (!videoLink && !videoResource) {
      return setVideoErr('Enter Video Link or upload video')
    }
    const editLocalVideoData = () => {
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

    !lessonData
      ? dispatch(
          updateVideo(
            editId,
            videoCover,
            videoTitle,
            videoDescription,
            videoLink,
            videoResource,
            setEditVideoModel,
            refetch
          )
        )
      : editLocalVideoData()
  }

  const editingVideoData =
    videoData?.find((video) => video.id === editId) ||
    lessonData?.find((video) => video.itemId === editId)

  useEffect(() => {
    editingVideoData?.videoCover && setVideoCover(editingVideoData?.videoCover)
    editingVideoData?.videoResource &&
    typeof editingVideoData?.videoResource === 'object'
      ? setVideo(editingVideoData?.videoResource)
      : setVideoTitle(editingVideoData?.videoResource)
    editingVideoData?.videoLink && setVideoLink(editingVideoData?.videoLink)
  }, [editingVideoData])

  const videoClickHandler = () => {
    setVideo(null)
    setVideoTitle('')
  }
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
                  ref={register}
                  onChange={(e) => setVideoLink(e.target.value)}
                  defaultValue={editingVideoData?.videoLink}
                />

                <span>OR</span>

                <DragDrop
                  type='video'
                  className={
                    video || videoTitle !== null
                      ? 'videoUploadBtn videoUploadBtn-full'
                      : 'videoUploadBtn videoEditBtn'
                  }
                  onChange={(vid) => setVideo(vid)}
                  setVideo={setVideo}
                  text={videoTitle || 'Add Video'}
                  dropFile={video}
                  videoTitle={videoTitle}
                  setVideoTitle={setVideoTitle}
                  onClick={videoClickHandler}
                />
              </div>
              <ErrorText className='errorMsg' message={videoErr} />
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
