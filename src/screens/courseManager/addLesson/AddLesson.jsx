import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { createLesson } from '../../../actions/lessonActions'
import { addVideo } from './addVideo'
import { addText } from './addText'
import { addImage } from './addImage'
import { addMaterial } from './addMaterial'

import AddContent from './AddContent'
import LessonMaterial from './LessonMaterial'
import LessonSaveModal from './LessonSaveModal'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import BackButton from '../../../components/backButton/BackButton'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './AddLesson.scss'

const AddLesson = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { courseId } = useParams()
  const postLessonData = useSelector((state) => state.addLesson)

  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [testModal, setTestModal] = useState(false)
  const [lessonData, setLessonData] = useState([])
  const [lessonCover, setLessonCover] = useState(null)
  const [material, setMaterial] = useState([])

  const { register, errors, handleSubmit } = useForm()

  console.log(lessonData)

  const submitLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover
    dispatch(
      createLesson({
        title,
        courseId,
        coverImg,
        lessonDesc
      })
    )
  }
  console.log(material)
  useEffect(async () => {
    if (
      Object.keys(postLessonData).length !== 0 &&
      postLessonData.loading === false
    ) {
      const id = postLessonData?.course?.data?.id
      const lessonId = id
      if (id) {
        for (let i = 0; i < lessonData.length; i++) {
          if (lessonData[i]?.videoLink || lessonData[i]?.videoResource) {
            await addVideo({ lessonData: lessonData[i], lessonId, dispatch })
          }
          if (lessonData[i]?.lessonImg) {
            await addImage({ lessonData: lessonData[i], lessonId, dispatch })
          }
          if (lessonData[i]?.textHeading || lessonData[i]?.textDescription) {
            await addText({ lessonData: lessonData[i], lessonId, dispatch })
          }
        }
        for (let i = 0; i < material.length; i++) {
          if (material[i].mData) {
            await addMaterial({ material: material[i], lessonId, dispatch })
          }
        }
      }
      history.push(`/lesson/${id}`)
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
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type='image'
          imageActive={imageModal}
          setImageActive={setImageModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
        />
      )}
      {testModal && <AddTestModal setTestModal={setTestModal} />}
      {textModal && (
        <NewsCreateModal
          type='text'
          textActive={textModal}
          setTextActive={setTextModal}
          lessonData={lessonData}
          setLessonData={setLessonData}
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
        <LessonMaterial material={material} setMaterial={setMaterial} />
        <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(submitLessonForm)}
        />
      </DashboardLayout>
    </>
  )
}

export default AddLesson
