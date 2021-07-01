import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { createLesson } from '../../../actions/lessonActions'
import { createVideo } from '../../../actions/videoActions'
import { createLessonImg } from '../../../actions/lessonPhotoActions'

import AddTestModal from '../../../components/addTestModal/AddTestModal'
import BackButton from '../../../components/backButton/BackButton'
import DragDrop from '../../../components/dragDrop/DragDrop'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { ErrorText } from '../../../components/formUI/FormUI'
import Video from '../../../components/videoPlayer/Video'
import Image from '../../../components/lessonImage/Image'
import './AddLesson.scss'

const AddLesson = () => {
  const dispatch = useDispatch()
  const { courseId } = useParams()
  const postLessonData = useSelector((state) => state.addLesson)

  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [testModal, setTestModal] = useState(false)
  const [lessonData, setLessonData] = useState([])
  const [lessonCover, setLessonCover] = useState(null)
  const [videoDataToPost, setVideoDataToPost] = useState(null)
  const [lessonImgDataToPost, setLessonImgDataToPost] = useState(null)
  const [lessonText, setLessonText] = useState(null)

  console.log(lessonData)
  const { register, errors, handleSubmit } = useForm()

  const submitLessonForm = ({ title }) => {
    const coverImg = lessonCover
    dispatch(
      createLesson({
        title,
        courseId,
        coverImg
      })
    )
  }
  useEffect(() => {
    if (
      Object.keys(postLessonData).length !== 0 &&
      postLessonData.loading === false
    ) {
      const id = postLessonData.course.data.id
      const lessonId = id
      if (id) {
        if (videoDataToPost !== null) {
          dispatch(createVideo(videoDataToPost, lessonId))
        }
        if (lessonImgDataToPost !== null) {
          dispatch(createLessonImg(lessonImgDataToPost, lessonId))
        }
      }
    }
  }, [postLessonData])

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type='video'
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
          setVideoDataToPost={setVideoDataToPost}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type='image'
          imageActive={imageModal}
          setImageActive={setImageModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
          setLessonImgDataToPost={setLessonImgDataToPost}
        />
      )}
      {testModal && <AddTestModal setTestModal={setTestModal} />}
      {textModal && (
        <NewsCreateModal
          type='text'
          textActive={textModal}
          setTextActive={setTextModal}
          placeholder='Text Heading'
          lessonData={lessonData}
          setLessonData={setLessonData}
          setLessonText={setLessonText}
        />
      )}
      <DashboardLayout title='Add new lesson'>
        <BackButton location={`/admin/course/${courseId}`} />
        <AddContent
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          setTestModal={setTestModal}
          register={register}
          errors={errors}
          setLessonCover={setLessonCover}
          lessonCover={lessonCover}
          lessonData={lessonData}
        />
        <LessonMaterial />
        <LessonSaveModal onClick={handleSubmit(submitLessonForm)} />
      </DashboardLayout>
    </>
  )
}

const AddContent = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  setTestModal,
  register,
  errors,
  setLessonCover,
  lessonData
}) => {
  return (
    <div className='admin-lesson-create-container'>
      <input
        type='text'
        placeholder='Write title here'
        name='title'
        ref={register({
          required: {
            value: true,
            message: 'You must enter lesson title'
          }
        })}
      />
      <ErrorText
        className='errorMsg'
        message={errors.title && errors.title.message}
      />
      <DragDrop onChange={(img) => setLessonCover(img)} />
      {lessonData
        ? lessonData.map((vid, index) => (
          <>
            {console.log(vid)}
            {(vid.videoCover === vid.videoCover && (
              <Video
                key={index}
                title={vid.videoTitle}
                description={vid.videoDescription}
                url={vid.videoLink || vid.videoResource?.preview}
                thumbnail={vid.videoCover?.preview}
              />
            )) ||
                (vid.lessonImg === vid.lessonImg && (
                  <Image
                    src={vid.lessonImg?.preview}
                    desc={vid.photoDescription}
                  />
                ))}
          </>
          ))
        : ''}

      <div className='admin-lesson-create-btn-wrapper'>
        <button className='secondary-btn' onClick={() => setVideoModal(true)}>
          <img src='/img/video-outline.svg' alt='video icon' />{' '}
          <span>Add video</span>
        </button>
        <button className='secondary-btn' onClick={() => setImageModal(true)}>
          <img src='/img/image-outline.svg' alt='image_icon' />
          <span>Add image</span>
        </button>
        <button className='secondary-btn' onClick={() => setTextModal(true)}>
          <img src='/img/text-outline.svg' alt='text icon' />{' '}
          <span>Add text</span>
        </button>
        <button className='secondary-btn' onClick={() => setTestModal(true)}>
          <img src='/img/test-outline.svg' alt='test icon' />{' '}
          <span>Add test</span>
        </button>
      </div>
    </div>
  )
}

const LessonMaterial = () => {
  return (
    <div className='admin-lesson-materials-container'>
      <h1>Materials</h1>
      <p>You dont have any materials in lesson Add it for your users.</p>
      <button className='secondary-btn'>Add materials</button>
    </div>
  )
}

const LessonSaveModal = ({ onClick }) => {
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to save lesson?</h4>
      <div>
        <button className='secondary-btn' id='lesson-cancel-btn'>
          Cancel
        </button>
        <button
          className='primary-btn secondary-btn'
          id='lesson-save-btn'
          onClick={onClick}
        >
          Save lesson
        </button>
      </div>
    </div>
  )
}

export default AddLesson
