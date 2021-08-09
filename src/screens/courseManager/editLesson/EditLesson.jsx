import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { GET_COVERIMG } from '../../../utils/urlConstants'
import useGetLessonData from '../../../utils/useGetLessonData'
import { updateLesson } from '../../../actions/lessonActions'
import { useDeleteActions } from './deleteAction'
import { useFetchLessonData } from './fetchLessonData'

import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../../components/backButton/BackButton'
import { ErrorText } from '../../../components/formUI/FormUI'
import DragDrop from '../../../components/dragDrop/DragDrop'
import LessonContent from './LessonContent'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import AddContentBlock from './AddContentBlock'
import EditLessonFooter from './EditLessonFooter'
import EditVideo from './EditVideo'
import EditText from './EditText'
import EditPhoto from './EditPhoto'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import '../addLesson/AddLesson.scss'
import LessonMaterial from '../addLesson/LessonMaterial'

const EditLesson = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const { id } = useParams()
  const userId = userInfo.id

  const [path, setPath] = useState('')
  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [materialData, setMaterialData] = useState([])
  const [lessonData, setLessonData] = useState([])
  const [lessonTitle, setLessonTitle] = useState()
  const [editTextModel, setEditTextModel] = useState(false)
  const [editPhotoModel, setEditPhotoModel] = useState(false)
  const [editVideoModel, setEditVideoModel] = useState(false)
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

  const { lessonEditData, material, setMaterial } = useFetchLessonData(
    data,
    lessonData
  )
  const {
    removeTextItem,
    removePhoto,
    removeVideo,
    removeMaterial,
    removeItem,
    removeLocalMaterial
  } = useDeleteActions(
    refetch,
    lessonData,
    setLessonData,
    material,
    setMaterial
  )

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
    setLessonData([textData, videoData, photoData])
  }, [data])

  let newData
  if (lessonData) {
    newData = lessonData.flat()
  }

  const lessonId = data?.data?.id
  const updateLessonForm = ({ title }) => {
    const coverImg = lessonCover
    dispatch(
      updateLesson(title, coverImg, lessonId, history, lessonData, material)
    )
  }

  const modelPopUp = (poupState, dataId) => {
    setEditId(dataId)
  }
  console.log(material)
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
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
          {textModal && (
            <NewsCreateModal
              type='text'
              textActive={textModal}
              setTextActive={setTextModal}
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
          {testModal && <AddTestModal setTestModal={setTestModal} />}
          {editTextModel && (
            <EditText
              editTextModel={editTextModel}
              setEditTextModel={setEditTextModel}
              editId={editId}
              textData={lessonEditData}
              editFetchedData
              refetch={refetch}
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
          {editPhotoModel && (
            <EditPhoto
              editPhotoModel={editPhotoModel}
              setEditPhotoModel={setEditPhotoModel}
              editId={editId}
              photoData={lessonEditData}
              editFetchedData
              refetch={refetch}
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
          {editVideoModel && (
            <EditVideo
              editVideoModel={editVideoModel}
              setEditVideoModel={setEditVideoModel}
              videoData={lessonEditData}
              editId={editId}
              editFetchedData
              refetch={refetch}
              lessonData={lessonData}
              setLessonData={setLessonData}
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
                lessonData={lessonEditData}
                newLessonData={lessonData}
                modelPopUp={modelPopUp}
                setEditTextModel={setEditTextModel}
                setEditPhotoModel={setEditPhotoModel}
                setEditVideoModel={setEditVideoModel}
                removeTextItem={removeTextItem}
                removePhoto={removePhoto}
                removeVideo={removeVideo}
                removeLocalData={removeItem}
              />
              <AddContentBlock
                setTestModal={setTestModal}
                setVideoModal={setVideoModal}
                setImageModal={setImageModal}
                setTextModal={setTextModal}
              />
              <LessonMaterial
                material={material}
                setMaterial={setMaterial}
                removeMaterial={removeMaterial}
                removeLocalMaterial={removeLocalMaterial}
              />
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
