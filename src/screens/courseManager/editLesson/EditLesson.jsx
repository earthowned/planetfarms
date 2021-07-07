import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { GET_LESSONS, GET_COVERIMG } from '../../../utils/urlConstants'
import useGetFetchData from '../../../utils/useGetFetchData'
import { updateLesson } from '../../../actions/lessonActions'

import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../../components/backButton/BackButton'
import { ErrorText } from '../../../components/formUI/FormUI'
import DragDrop from '../../../components/dragDrop/DragDrop'
import '../addLesson/AddLesson.scss'

const EditLesson = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { register, errors, handleSubmit } = useForm()
  const { data, isLoading } = useGetFetchData(
    'editLessonData',
    GET_LESSONS + `/${id}`
  )
  const img = data?.data?.coverImg
  const [lessonTitle, setLessonTitle] = useState()
  const [lessonCover, setLessonCover] = useState(img)
  //   const [videoModal, setVideoModal] = useState(false)
  //   const [imageModal, setImageModal] = useState(false)
  //   const [textModal, setTextModal] = useState(false)
  //   const [testModal, setTestModal] = useState(false)

  if (isLoading) {
    return <span>Loading</span>
  }
  const lessonId = data?.data?.id
  //   console.log(lessonId)
  const updateLessonForm = ({ title }) => {
    const coverImg = lessonCover
    dispatch(updateLesson(title, coverImg, lessonId))
  }
  //   console.log(data.data)
  return (
    <DashboardLayout title='Edit lesson'>
      <BackButton location='' />
      <div className='admin-lesson-create-container'>
        <input
          type='text'
          placeholder='Write title here'
          value={lessonTitle}
          name='title'
          ref={register({
            required: {
              value: true,
              message: 'You must enter lesson title'
            }
          })}
          defaultValue={data?.data?.title}
          onChange={(e) => setLessonTitle(e.target.value)}
        />
        <ErrorText
          className='errorMsg'
          message={errors.title && errors.title.message}
        />
        <DragDrop
          onChange={(img) => setLessonCover(img)}
          img={GET_COVERIMG + data?.data?.coverImg}
          editText='Drag & Drop image in this area or Click Here to edit image'
        />
        <div className='save-lesson-modal'>
          <h4>Do you want to edit lesson?</h4>
          <div>
            <button className='secondary-btn' id='lesson-cancel-btn'>
              Cancel
            </button>
            <button
              className='primary-btn secondary-btn'
              id='lesson-save-btn'
              onClick={handleSubmit(updateLessonForm)}
            >
              Edit Lesson
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default EditLesson
