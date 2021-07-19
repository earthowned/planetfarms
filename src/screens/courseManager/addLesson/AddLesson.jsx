import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { createLesson } from '../../../actions/lessonActions'

import AddContent from './AddContent'
import LessonMaterial from './LessonMaterial'
import LessonSaveModal from './LessonSaveModal'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import BackButton from '../../../components/backButton/BackButton'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './AddLesson.scss'
import EditVideo from '../editLesson/EditVideo'
import EditText from '../editLesson/EditText'

const AddLesson = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { courseId } = useParams()

  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [testModal, setTestModal] = useState(false)
  const [lessonData, setLessonData] = useState([])
  const [lessonCover, setLessonCover] = useState(null)
  const [material, setMaterial] = useState([])
  const [editVideoModel, setEditVideoModel] = useState(false)
  const [editTextModel, setEditTextModel] = useState(false)
  const [editId, setEditId] = useState('')

  const { register, errors, handleSubmit } = useForm()
  const submitLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover
    dispatch(
      createLesson({
        title,
        courseId,
        coverImg,
        lessonDesc,
        lessonData,
        material,
        history
      })
    )
  }

  const removeItem = (id) => {
    const newLessonData = lessonData.filter((item) => item.itemId !== id)
    setLessonData(newLessonData)
  }
  const modelPopUp = (poupState, id) => {
    setEditId(id)
    console.log(id)
  }

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
      {editVideoModel && (
        <EditVideo
          editVideoModel={editVideoModel}
          setEditVideoModel={setEditVideoModel}
          lessonData={lessonData}
          setLessonData={setLessonData}
          editId={editId}
        />
      )}
      {editTextModel && (
        <EditText
          editTextModel={editTextModel}
          setEditTextModel={setEditTextModel}
          lessonData={lessonData}
          setLessonData={setLessonData}
          editId={editId}
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
          setLessonData={setLessonData}
          onRemove={removeItem}
          setEditVideoModel={setEditVideoModel}
          setEditTextModel={setEditTextModel}
          modelPopUp={modelPopUp}
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
