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
import RichTextEditor from '../../../components/richTextEditor/RichTextEditor'
import DeleteContent from '../../../components/deleteContent/DeleteContent'

const AddLesson = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { lessonId } = useParams()
  const { state } = useLocation()

  const { success: updateVideoSuccess } = useSelector(state => state.updateVideo)
  const { success: deleteVideoSuccess } = useSelector(state => state.deleteVideo)

  const { success: updateTextSuccess } = useSelector(state => state.updateText)
  const { success: deleteTextSuccess } = useSelector(state => state.deleteText)

  const { success: updatePhotoSuccess } = useSelector(state => state.updatePhoto)
  const { success: deletePhotoSuccess } = useSelector(state => state.deletePhoto)

  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  const [testModal, setTestModal] = useState(false)

  const [lessonData, setLessonData] = useState([])
  const [lessonSingleData, setLessonSingleData] = useState([])
  const [lessonCover, setLessonCover] = useState(null)
  const [material, setMaterial] = useState([])
  const [fetchLesson, setFetchLesson] = useState([])

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

  const { pathname } = useLocation()

  // for edit
  useEffect(() => {
    if (pathname.split('/')[3] === 'edit') {
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
    if (lessonSingleData?.rich_text?.photos) {
      const photo = lessonSingleData.rich_text.photos.filter(el => el.id === id)
      setImageData(photo)
    }
  }

  function editImageConfirm (data) {
    const { id, isImgDesc, lessonImg, photoDescription } = data
    dispatch(updatePhoto(id, lessonImg, photoDescription, isImgDesc, setImageModal))
  }

  async function editTextFunc (id) {
    if (lessonSingleData?.rich_text?.texts) {
      const text = lessonSingleData.rich_text.texts.filter(el => el.id === id)
      setTextData(text)
    }
  }

  function editTextConfirm (data) {
    const { id, textHeading, textDescription } = data
    dispatch(updateText(id, textHeading, textDescription, setTextModal))
  }

  async function editVideoFunc (id) {
    if (lessonSingleData?.rich_text?.videos) {
      const video = lessonSingleData.rich_text.videos.filter(el => el.id === id)
      setVideoData(video)
    }
  }

  function editVideoConfirm (data) {
    const { id, videoCover, videoTitle, videoDescription, videoLink, videoResource } = data
    dispatch(updateVideo(id, videoCover, videoTitle, videoDescription, videoLink, videoResource, setVideoModal))
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
  const editLessonForm = ({ title, lessonDesc }) => {
    const coverImg = lessonCover
    dispatch(
      updateLesson(
        title,
        coverImg,
        lessonId,
        lessonDesc,
        history,
        lessonData,
        material,
        lessonSingleData.rich_text.id
      )
    )
  }

  const removeItem = (id) => {
    const newLessonData = lessonData.filter((item) => item.itemId !== id)
    setLessonData(newLessonData)
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
      <DashboardLayout title={pathname.split('/')[3] === 'edit' ? 'Edit Lesson' : 'Add New Lesson'}>
        <BackButton location={`/admin/course/${courseId}`} />
        <RichTextEditor
          setVideoModal={setVideoModal}
          setImageModal={setImageModal}
          setTextModal={setTextModal}
          setCoverImage={setLessonCover}
          coverImage={lessonCover}
          formData={lessonData}
          setFormData={setLessonData}
          editData={lessonSingleData}
          setEditData={setLessonSingleData}
          removeItem={removeItem}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          deleteVideoModalFunc={deleteVideoModalFunc}
          deleteImageModalFunc={deleteImageModalFunc}
          deleteTextModalFunc={deleteTextModalFunc}
          editForm={editLessonForm}
          submitForm={submitLessonForm}
          material={material}
          setMaterial={setMaterial}
          removeMaterial={removeMaterial}
          showMaterial
          edit={pathname.split('/')[3] === 'edit'}
          saveBtnName='save lesson'
          editBtnName='edit lesson'
          cancel={() => history.push(`/admin/course/${courseId}`)}
        />
      </DashboardLayout>
    </>
  )
}

export default AddLesson
