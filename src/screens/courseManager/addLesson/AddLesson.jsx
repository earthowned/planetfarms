import { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import DragDrop from '../../../components/dragDrop/DragDrop'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import { createLesson, updateLesson } from '../../../actions/lessonActions'
import useGetFetchData from '../../../utils/useGetFetchData'
import { GET_COURSE, GET_COVERIMG } from '../../../utils/urlConstants'
import LessonMaterial from './LessonMaterial'
import LessonSaveModal from './LessonSaveModal'
import AddTestModal from '../../../components/addTestModal/AddTestModal'
import BackButton from '../../../components/backButton/BackButton'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './AddLesson.scss'
import ContentAdd from '../../../components/contentAdd/ContentAdd'
import { getApi } from '../../../utils/apiFunc'
import EditContent from '../../../components/editContent/EditContent'
import { deletePhoto, updatePhoto } from '../../../actions/photoActions'
import { deleteText, updateText } from '../../../actions/textActions'
import { deleteVideo, updateVideo } from '../../../actions/videoActions'

const AddLesson = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {lessonId} = useParams()
  const {state} = useLocation();

  const {success:updateVideoSuccess} = useSelector(state => state.updateVideo)
  const {success:deleteVideoSuccess} = useSelector(state => state.deleteVideo)

  const {success:updateTextSuccess} = useSelector(state => state.updateText)
  const {success:deleteTextSuccess} = useSelector(state => state.deleteText)

  const {success:updatePhotoSuccess} = useSelector(state => state.updatePhoto)
  const {success:deletePhotoSuccess} = useSelector(state => state.deletePhoto)

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

  const [imageData, setImageData] = useState(null)
  const [videoData, setVideoData] = useState(null)
  const [textData, setTextData] = useState(null)
  const [courseId, setCourseId] = useState(state?.courseId)

  const { register, errors, handleSubmit } = useForm()

  // const { data } = useGetFetchData(
  //   'get_course_by_id',
  //   GET_COURSE + `/${courseId}`
  // )

  // useEffect(() => {
  //   setFetchLesson(data?.data?.lessons)
  // }, [data, courseId])

  const {pathname} = useLocation();

  // for edit
  useEffect(() => {
    if(pathname.split('/')[2] === 'edit') {
      getSingleLesson()
    }
  }, [
    dispatch, 
    lessonData, 
    updateVideoSuccess, 
    deleteVideoSuccess, 
    updateTextSuccess, 
    deleteTextSuccess,
    updatePhotoSuccess, 
    deletePhotoSuccess
  ])


  async function getSingleLesson () {
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/lessons/${lessonId}`)
    setLessonSingleData(data?.data)
  }

  async function editImageFunc (id) {
    if(lessonSingleData?.photos) {
      let photo = lessonSingleData.photos.filter(el => el.id === id);
      setImageData(photo)
    }
  }

  function editImageConfirm (data) {
    const {id, isImgDesc, lessonImg, photoDescription} = data;
    dispatch(updatePhoto(id, lessonImg, photoDescription, isImgDesc, setImageModal ))
  }

  async function editTextFunc (id) {
    if(lessonSingleData?.texts) {
      let text = lessonSingleData.texts.filter(el => el.id === id);
      setTextData(text)
    }
  }

  function editTextConfirm (data) {
    const {id, textHeading, textDescription} = data;
    dispatch(updateText(id, textHeading, textDescription, setTextModal))
  }

  async function editVideoFunc (id) {
    if(lessonSingleData?.videos) {
      let video = lessonSingleData.videos.filter(el => el.id === id);
      setVideoData(video)
    }
  }

   function editVideoConfirm (data) {
    const {id, videoCover, videoTitle, videoDescription, videoLink, videoResource} = data;
    dispatch(updateVideo(id,  videoCover, videoTitle, videoDescription, videoLink, videoResource, setVideoModal))
  }

  function deleteImageModalFunc (id) {
    setDeleteImageModal(true)
    setImageId(id)
  }

  async function deleteImageConfirm () {
    dispatch(deletePhoto(imageId))
    setDeleteImageModal(false)
  }

  function deleteVideoModalFunc (id) {
    setDeleteVideoModal(true)
    setVideoId(id)
  }

  async function deleteVideoConfirm () {
    dispatch(deleteVideo(videoId))
    setDeleteVideoModal(false)
  }

  function deleteTextModalFunc (id) {
    setDeleteTextModal(true)
    setTextId(id)
  }

  async function deleteTextConfirm () {
    dispatch(deleteText(textId))
    setDeleteTextModal(false)
  }

  // create lesson
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
  }

  // edit lesson
  const editLessonForm = ({title, lessonDesc}) => {
    const coverImg = lessonCover
    dispatch(
      updateLesson(
        title,
        coverImg,
        lessonId,
        lessonDesc,
        history,
        lessonData,
        material
      )
    )
  }

  const removeItem = (id) => {
    const newLessonData = lessonData.filter((item) => item.itemId !== id)
    setLessonData(newLessonData)
  }


  async function deleteTextConfirm () {
    dispatch(deleteText(textId))
    setDeleteTextModal(false)
  }


  const modelPopUp = (poupState, id) => {
    setEditId(id)
  }

  const removeMaterial = (e) => {
    const name = e.currentTarget.getAttribute('name')
    setMaterial(material.filter((item) => item?.mData?.preview !== name))
  }

  return (
    <>
      {videoModal && (
        <NewsCreateModal
          type='video'
          videoActive={videoModal}
          setVideoActive={setVideoModal}
          data={lessonData}
          setData={setLessonData}
          videoData={videoData}
          setVideoData={setVideoData}
          editVideoConfirm={editVideoConfirm}
        />
      )}
      {imageModal && (
        <NewsCreateModal
          type='image'
          imageActive={imageModal}
          setImageActive={setImageModal}
          data={lessonData}
          setData={setLessonData}
          imageData={imageData}
          setImageData={setImageData}
          editImageConfirm={editImageConfirm}
        />
      )}
      {textModal && (
        <NewsCreateModal
          type='text'
          textActive={textModal}
          setTextActive={setTextModal}
          data={lessonData}
          setData={setLessonData}
          textData={textData}
          setTextData={setTextData}
          editTextConfirm={editTextConfirm}
        />
      )}
      {deleteVideoModal && <DeleteContent setDeleteModal={setDeleteVideoModal} confirmDelete={deleteVideoConfirm} />}
      {deleteImageModal && <DeleteContent setDeleteModal={setDeleteImageModal} confirmDelete={deleteImageConfirm} />}
      {deleteTextModal && <DeleteContent setDeleteModal={setDeleteTextModal} confirmDelete={deleteTextConfirm} />}
      <DashboardLayout title={pathname.split('/')[4] === 'edit-lesson' ? 'Edit Lesson' : 'Add New Lesson'}>
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
          lessonSingleData={lessonSingleData}
          setLessonSingleData={setLessonSingleData}
          onRemove={removeItem}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          setDeleteVideoModal={deleteVideoModalFunc}
          setDeleteImageModal={deleteImageModalFunc}
          setDeleteTextModal={deleteTextModalFunc}
        />
        <LessonMaterial
          material={material}
          setMaterial={setMaterial}
          removeLocalMaterial={removeMaterial}
        />

          {
          pathname.split('/')[4] === 'edit-lesson'
          ? <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(editLessonForm)}
          name="Edit"
        />
          : <LessonSaveModal
          pathId={courseId}
          onClick={handleSubmit(submitLessonForm)}
          name="Save"
        />
        }
      </DashboardLayout>
    </>
  )
}

const AddContent = ({
  setVideoModal,
  videoModal,
  setImageModal,
  setTextModal,
  register,
  errors,
  setLessonCover,
  lessonData,
  lessonSingleData,
  setLessonSingleData,
  editVideoFunc,
  editTextFunc,
  editImageFunc,
  setDeleteTextModal,
  setDeleteImageModal,
  setDeleteVideoModal
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
        defaultValue={lessonSingleData?.title || ''}
      />

      <TextArea
        className='default-input-variation text-area-variation lessonDesc'
        placeholder='Lesson Description'
        cols='3'
        rows='4'
        name='lessonDesc'
        ref={register}
        defaultValue={lessonSingleData?.lessonDesc || ''}
      />

      <DragDrop
      text='Drag & Drop photo in this area or Click Here to attach'
      onChange={(img) => setLessonCover(img)} 
      dataImg={lessonSingleData?.coverImg ? `${GET_COVERIMG}${lessonSingleData.coverImg}` : ''}
      onClick={() => setLessonCover(null)}
      />
      {
        lessonSingleData && <EditContent 
        data={lessonSingleData}
        setEditPhotoModel={setImageModal}
        setEditTextModel={setTextModal}
        setEditVideoModel={setVideoModal}
        editVideoFunc={editVideoFunc}
        editImageFunc={editImageFunc}
        editTextFunc={editTextFunc}
        removeTextItem={setDeleteTextModal}
        removePhoto={setDeleteImageModal}
        removeVideo={setDeleteVideoModal}
        />
      }
      <ContentAdd data={lessonData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal}/>
    </div>
  )
}

const DeleteContent = ({confirmDelete, setDeleteModal}) => {
  return <div className='simple-modal-container'>
        <div className='simple-modal-inner-container'>
          <div>
            <h4>Are you sure you want to delete?</h4>
            {/* <button onClick={() => confirmDelete}><img src='/img/close-outline.svg' alt='close-outline' /></button> */}
          </div>
          <div>
            <button className='secondary-btn' onClick={confirmDelete}>Confirm</button>
            <button className='secondary-btn' onClick={() => setDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
}

export default AddLesson