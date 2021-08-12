import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { GET_COVERIMG } from '../../../utils/urlConstants'
import useGetLessonData from '../../../utils/useGetLessonData'
import { updateLesson } from '../../../actions/lessonActions'
import { deleteText } from '../../../actions/textActions'

import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../../components/backButton/BackButton'
import { ErrorText } from '../../../components/formUI/FormUI'
import DragDrop from '../../../components/dragDrop/DragDrop'
import LessonContent from './LessonContent'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import AddContentBlock from './AddContentBlock'
import EditLessonFooter from './EditLessonFooter'
import '../addLesson/AddLesson.scss'
import EditVideo from './EditVideo'
import EditText from './EditText'
import EditPhoto from './EditPhoto'

const EditLesson = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { id } = useParams()
  const userId = userInfo.id

  const [path, setPath] = useState('')
  const [materialData, setMaterialData] = useState([])
  const [lessonData, setLessonData] = useState([])
  const [lessonTitle, setLessonTitle] = useState()
  const [editTextModel, setEditTextModel] = useState(false)
  const [editPhotoModel, setEditPhotoModel] = useState(false)
  const [testModal, setTestModal] = useState(false)
  const [editId, setEditId] = useState('')

  const { register, errors, handleSubmit } = useForm()

  const { isLoading, data, refetch } = useGetLessonData(
    id,
    setMaterialData,
    userId,
    setPath
  )

  const fetchImg = data?.data?.coverImg
  const [lessonCover, setLessonCover] = useState(`${fetchImg}`)
  const title = data?.data?.title

  //   const [testModal, setTestModal] = useState(false)
  // const [lessonData, setLessonData] = useState([])
  const textData = data?.data?.texts.map((text) => {
    return text
  })
  const videoData = data?.data?.videos.map((video) => {
    return video
  })
  const photoData = data?.data?.photos.map((photo) => {
    return photo
  })

  useEffect(() => {
    setLessonData([textData, videoData, photoData].flat())
  }, [data])

  const lessonId = data?.data?.id
  const updateLessonForm = ({ title }) => {
    const coverImg = lessonCover
    dispatch(updateLesson(title, coverImg, lessonId))
  }

  const modelPopUp = (poupState, dataId) => {
    setEditId(dataId)
  }

  const removeTextItem = (id) => {
    dispatch(deleteText(id, refetch))
  }
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {testModal && <AddTestModal setTestModal={setTestModal} />}
          {editTextModel && (
            <EditText
              editTextModel={editTextModel}
              setEditTextModel={setEditTextModel}
              editId={editId}
              textData={lessonData}
              editFetchedData
              refetch={refetch}
            />
          )}
          {editPhotoModel && (
            <EditPhoto
              editPhotoModel={editPhotoModel}
              setEditPhotoModel={setEditPhotoModel}
              editId={editId}
              photoData={lessonData}
              editFetchedData
              refetch={refetch}
            />
          )}
          <DashboardLayout title='Edit lesson'>
            <BackButton location={path} />
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
                defaultValue={title}
                onChange={(e) => setLessonTitle(e.target.value)}
              />
              <ErrorText
                className='errorMsg'
                message={errors.title && errors.title.message}
              />
              <DragDrop
                editImg
                onChange={(img) => setLessonCover(img)}
                dataImg={GET_COVERIMG + data?.data?.coverImg}
                fileType='image/png,image/jpeg,image/jpg'
                text='Drag & Drop image in this area or Click Here to edit image'
              />

              <LessonContent
                lessonData={lessonData}
                modelPopUp={modelPopUp}
                setEditTextModel={setEditTextModel}
                setEditPhotoModel={setEditPhotoModel}
                onRemove={removeTextItem}
              />
              <AddContentBlock setTestModal={setTestModal} />
              <EditLessonFooter
                onClick={handleSubmit(updateLessonForm)}
                id={id}
              />
            </div>
          </DashboardLayout>
        </>
      )}
    </>
  )
}

export default React.memo(EditLesson)
