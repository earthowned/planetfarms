import { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import DragDrop from '../../../components/dragDrop/DragDrop'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import { createLesson } from '../../../actions/lessonActions'
import useGetFetchData from '../../../utils/useGetFetchData'
import { GET_COURSE } from '../../../utils/urlConstants'
import LessonMaterial from './LessonMaterial'
import LessonSaveModal from './LessonSaveModal'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import BackButton from '../../../components/backButton/BackButton'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './AddLesson.scss'
import EditVideo from '../editLesson/EditVideo'
import EditText from '../editLesson/EditText'
import EditPhoto from '../editLesson/EditPhoto'
import ContentAdd from '../../../components/contentAdd/ContentAdd'
import { getApi } from '../../../utils/apiFunc'

const AddLessonComponent = () => {
  // const { currentCommunity } = useSelector(state => state.activeCommunity)
  // const dispatch = useDispatch()
  // const history = useHistory()

  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [testModal, setTestModal] = useState(false)

  const [lessonData, setLessonData] = useState([])
  const [lessonSingleData, setLessonSingleData] = useState([])
  const [lessonCover, setLessonCover] = useState(null)
  const [material, setMaterial] = useState([])
  const [fetchLesson, setFetchLesson] = useState([])
  const [editVideoModel, setEditVideoModel] = useState(false)
  const [editTextModel, setEditTextModel] = useState(false)
  const [editPhotoModel, setEditPhotoModel] = useState(false)
  const [editId, setEditId] = useState('')

  const [deleteVideoModal, setDeleteVideoModal] = useState(false)
  const [deleteImageModal, setDeleteImageModal] = useState(false)
  const [deleteTextModal, setDeleteTextModal] = useState(false)

  const [videoId, setVideoId] = useState(null)
  const [imageId, setImageId] = useState(null)
  const [textId, setTextId] = useState(null)

  
  const [newsCover, setNewsCover] = useState(null);
  const [imageData, setImageData] = useState(null)
  const [videoData, setVideoData] = useState(null)
  const [textData, setTextData] = useState(null)

  // const news = useSelector((state) => (state.addNewNews !== {} ? state.addNewNews : ''))
  // const { register, errors, handleSubmit } = useForm()

  // const { data } = useGetFetchData(
  //   'get_course_by_id',
  //   GET_COURSE + `/${courseId}`
  // )
  // useEffect(() => {
  //   setFetchLesson(data?.data?.lessons)
  // }, [data, courseId])

  const submitLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover
    const order = fetchLesson.length + 1
    dispatch(
      createLesson({
        title,
        courseId,
        coverImg,
        lessonDesc,
        order,
        lessonData,
        material,
        history
      })
    )
  // const { courseId, lessonId} = useParams()

  // console.log(courseId, lessonId)
  // const {pathname} = useLocation();

  // // for edit
  // // useEffect(() => {
  // //   if(pathname.split('/')[2] === 'edit') {
  // //     getSingleLesson()
  // //   }
  // // }, [
  // //   dispatch, 
  // //   // newsData, 
  // //   // updateVideoSuccess, 
  // //   // deleteVideoSuccess, 
  // //   // updateTextSuccess, 
  // //   // deleteTextSuccess,
  // //   // updatePhotoSuccess, 
  // //   // deletePhotoSuccess
  // // ])


  // // async function getSingleLesson () {
  // //   const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/lessons/${id}/community/${currentCommunity.id}`)
  // //   setLessonSingleData(data)
  // // }

  // const editLessonForm = ({title}) => {
  // }

  // async function editImageFunc (id) {
  //   // if(newsSingleData?.photos) {
  //   //   let photo = newsSingleData.photos.filter(el => el.id === id);
  //   //   setImageData(photo)
  //   // }
  // }

  // function editImageConfirm (data) {
  //   // const {id, isImgDesc, lessonImg, photoDescription} = data;
  //   // dispatch(updatePhoto(id, lessonImg, photoDescription, isImgDesc, setCreateImageModal ))
  // }

  // async function editTextFunc (id) {
  //   // if(newsSingleData?.texts) {
  //   //   let text = newsSingleData.texts.filter(el => el.id === id);
  //   //   setTextData(text)
  //   // }
  // }

  // function editTextConfirm (data) {
  //   // const {id, textHeading, textDescription} = data;
  //   // dispatch(updateText(id, textHeading, textDescription, setCreateTextModal))
  // }

  // async function editVideoFunc (id) {
  //   // if(newsSingleData?.videos) {
  //   //   let video = newsSingleData.videos.filter(el => el.id === id);
  //   //   setVideoData(video)
  //   // }
  // }

  //  function editVideoConfirm (data) {
  //   // const {id, videoCover, videoTitle, videoDescription, videoLink, videoResource} = data;
  //   // dispatch(updateVideo(id,  videoCover, videoTitle, videoDescription, videoLink, videoResource, setCreateVideoModal))
  // }

  // function deleteImageModalFunc (id) {
  //   setDeleteImageModal(true)
  //   setImageId(id)
  // }

  // async function deleteImageConfirm () {
  //   // dispatch(deletePhoto(imageId))
  //   // setDeleteImageModal(false)
  // }

  // function deleteVideoModalFunc (id) {
  //   setDeleteVideoModal(true)
  //   setVideoId(id)
  // }

  // async function deleteVideoConfirm () {
  //   // dispatch(deleteVideo(videoId))
  //   // setDeleteVideoModal(false)
  // }

  // function deleteTextModalFunc (id) {
  //   setDeleteTextModal(true)
  //   setTextId(id)
  // }

  // async function deleteTextConfirm () {
  //   // dispatch(deleteText(textId))
  //   // setDeleteTextModal(false)
  // }

  // // const submitLessonForm = ({ title, lessonDesc }) => {
  // //   const coverImg = lessonCover
  // //   const order = fetchLesson.length + 1
  // //   dispatch(
  // //     createLesson({
  // //       title,
  // //       courseId,
  // //       coverImg,
  // //       lessonDesc,
  // //       order,
  // //       lessonData,
  // //       material,
  // //       history
  // //     })
  // //   )
  // // }

  // const removeItem = (id) => {
  //   const newLessonData = lessonData.filter((item) => item.itemId !== id)
  //   setLessonData(newLessonData)
  // }
  // const modelPopUp = (poupState, id) => {
  //   setEditId(id)
  // }

  // const removeMaterial = (e) => {
  //   const name = e.currentTarget.getAttribute('name')
  //   setMaterial(material.filter((item) => item?.mData?.preview !== name))
  // }

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type='video'
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          data={lessonData}
          setData={setLessonData}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type='image'
          imageActive={imageModal}
          setImageActive={setImageModal}
          data={lessonData}
          setData={setLessonData}
        />
      )}
      {textModal && (
        <NewsCreateModal
          type='text'
          textActive={textModal}
          setTextActive={setTextModal}
          data={lessonData}
          setData={setLessonData}
        />
      )}
      <DashboardLayout title='Add new lesson'>
        <BackButton location={`/admin/course/${courseId}`} />
        <AddContent
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          register={register}
          errors={errors}
          setLessonCover={setLessonCover}
          lessonCover={lessonCover}
          lessonData={lessonData}
          setLessonData={setLessonData}
          onRemove={removeItem}
          modelPopUp={modelPopUp}
        />
        <LessonMaterial
          material={material}
          setMaterial={setMaterial}
          removeLocalMaterial={removeMaterial}
        />
        <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(submitLessonForm)}
        />
      </DashboardLayout>
    </>
  )
}

export default AddLessonComponent

const AddContent = ({
  setVideoModal,
  videoModal,
  setImageModal,
  setTextModal,
  register,
  errors,
  setLessonCover,
  lessonData,
  onRemove,
  setEditVideoModel,
  modelPopUp,
  setEditTextModel,
  setEditPhotoModel
}) => {
  return (
    <div className='admin-lesson-create-container'>
      <ErrorText
        className='errorMsg'
        message={errors.title && errors.title.message}
      />
      <input
        type='text'
        placeholder='Write Title Here'
        name='title'
        ref={register({
          required: {
            value: true,
            message: 'You must enter lesson title'
          }
        })}
      />

      <TextArea
        className='default-input-variation text-area-variation lessonDesc'
        placeholder='Lesson Description'
        cols='3'
        rows='4'
        name='lessonDesc'
        ref={register}
      />

      <DragDrop 
      onChange={(img) => setLessonCover(img)} 
      fileType='image/png,image/jpeg,image/jpg'
      />
      <ContentAdd data={lessonData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal}/>
    </div>
  )
}
