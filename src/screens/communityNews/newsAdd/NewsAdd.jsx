import { useState, useEffect } from 'react'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import BackButton from '../../../components/backButton/BackButton'
import { createNews, newsUpdate } from '../../../actions/newsActions'
import { getApi } from '../../../utils/apiFunc'
import { deleteText, updateText } from '../../../actions/textActions'
import { deletePhoto, updatePhoto } from '../../../actions/photoActions'
import { deleteVideo, updateVideo } from '../../../actions/videoActions'
import RichTextEditor from '../../../components/richTextEditor/RichTextEditor'
import DeleteContent from '../../../components/deleteContent/DeleteContent'
import './NewsAdd.scss'

const NewsAdd = () => {
  const { currentCommunity } = useSelector((state) => state.activeCommunity)

  const { success: updateVideoSuccess } = useSelector(
    (state) => state.updateVideo
  )
  const { success: deleteVideoSuccess } = useSelector(
    (state) => state.deleteVideo
  )

  const { success: updateTextSuccess } = useSelector(
    (state) => state.updateText
  )
  const { success: deleteTextSuccess } = useSelector(
    (state) => state.deleteText
  )

  const { success: updatePhotoSuccess } = useSelector(
    (state) => state.updatePhoto
  )
  const { success: deletePhotoSuccess } = useSelector(
    (state) => state.deletePhoto
  )
  const loggedUser = useSelector((state) => state?.userLogin)
  const { userInfo } = loggedUser
  // fetching category from route
  const { state } = useLocation()

  const [createVideoModal, setCreateVideoModal] = useState(false)
  const [createImageModal, setCreateImageModal] = useState(false)
  const [createTextModal, setCreateTextModal] = useState(false)
  const [deleteVideoModal, setDeleteVideoModal] = useState(false)
  const [deleteImageModal, setDeleteImageModal] = useState(false)
  const [deleteTextModal, setDeleteTextModal] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const [imageId, setImageId] = useState(null)
  const [textId, setTextId] = useState(null)

  const [newsData, setNewsData] = useState([])
  const [newsSingleData, setNewsSingleData] = useState([])
  const [category, setCategory] = useState(state?.category || null)
  const [title, setTitle] = useState(state?.title || null)
  const [newsCover, setNewsCover] = useState(null)
  const [imageData, setImageData] = useState(null)
  const [videoData, setVideoData] = useState(null)
  const [textData, setTextData] = useState(null)
  const [oldData, setOldData] = useState(null)

  const { id } = useParams()

  const { pathname } = useLocation()

  const dispatch = useDispatch()
  const history = useHistory()

  // for edit
  useEffect(() => {
    if (pathname.split('/')[2] === 'edit') {
      getSingleNews()
    }
  }, [
    dispatch,
    newsData,
    updateVideoSuccess,
    deleteVideoSuccess,
    updateTextSuccess,
    deleteTextSuccess,
    updatePhotoSuccess,
    deletePhotoSuccess
  ])

  // for creating
  useEffect(() => {
    if (pathname.split('/')[2] !== 'edit') {
      setNewsData([{ title, category }])
    }
  }, [])

  async function getSingleNews () {
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`
    )
    setNewsSingleData(data)
  }

  const submitNewsForm = ({ title }) => {
    const creator = userInfo.id
    dispatch(
      createNews({
        newsDetail: { title, category, news: newsCover, creator },
        newNews: newsData.splice(1)
      })
    )
  }

  const editNewsForm = ({ title }) => {
    dispatch(
      newsUpdate({
        newsDetail: {
          title,
          category: newsSingleData.category,
          news: newsCover
        },
        newNews: [oldData, newsData].flat(),
        id: newsSingleData.id,
        richtextId: newsSingleData.rich_text.id
      })
    )
  }

  async function editImageFunc (id) {
    if (newsSingleData?.rich_text?.photos) {
      const photo = newsSingleData.rich_text.photos.filter((el) => el.id === id)
      setImageData(photo)
    }
  }

  function editImageConfirm (data) {
    const { id, isImgDesc, lessonImg, photoDescription } = data
    dispatch(
      updatePhoto({
        iData: { img: lessonImg, photoDescription, isImgDesc },
        id,
        setEditPhotoModel: setCreateImageModal
      })
    )
  }

  async function editTextFunc (id) {
    if (newsSingleData?.rich_text?.texts) {
      const text = newsSingleData.rich_text.texts.filter((el) => el.id === id)
      setTextData(text)
    }
  }

  function editTextConfirm (data) {
    const { id, textHeading, textDescription } = data
    dispatch(
      updateText({
        textId: id,
        textHeading,
        textDescription,
        setEditTextModel: setCreateTextModal
      })
    )
  }

  async function editVideoFunc (id) {
    if (newsSingleData?.rich_text?.videos) {
      const video = newsSingleData.rich_text.videos.filter((el) => el.id === id)
      setVideoData(video)
    }
  }

  function editVideoConfirm (data) {
    const {
      id,
      videoCover,
      videoTitle,
      videoDescription,
      videoLink,
      videoResource
    } = data
    dispatch(
      updateVideo({
        id,
        vData: {
          videoCover,
          videoTitle,
          videoDescription,
          videoLink,
          videoResource
        },
        setEditVideoModel: setCreateVideoModal
      })
    )
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

  return (
    <>
      {createVideoModal && (
        <NewsCreateModal
          type='video'
          videoActive={createVideoModal}
          setVideoActive={setCreateVideoModal}
          data={newsData}
          setData={setNewsData}
          videoData={videoData}
          setVideoData={setVideoData}
          editVideoConfirm={editVideoConfirm}
        />
      )}
      {createImageModal && (
        <NewsCreateModal
          type='image'
          imageActive={createImageModal}
          setImageActive={setCreateImageModal}
          data={newsData}
          setData={setNewsData}
          imageData={imageData}
          setImageData={setImageData}
          editImageConfirm={editImageConfirm}
        />
      )}
      {createTextModal && (
        <NewsCreateModal
          type='text'
          textActive={createTextModal}
          setTextActive={setCreateTextModal}
          data={newsData}
          setData={setNewsData}
          textData={textData}
          setTextData={setTextData}
          editTextConfirm={editTextConfirm}
        />
      )}
      {deleteVideoModal && (
        <DeleteContent
          heading='Delete'
          message='Do you want to delete the video?'
          setDeleteModal={setDeleteVideoModal}
          confirmDelete={deleteVideoConfirm}
        />
      )}
      {deleteImageModal && (
        <DeleteContent
          heading='Delete'
          message='Do you want to delete the image?'
          setDeleteModal={setDeleteImageModal}
          confirmDelete={deleteImageConfirm}
        />
      )}
      {deleteTextModal && (
        <DeleteContent
          heading='Delete'
          message='Do you want to delete the text?'
          setDeleteModal={setDeleteTextModal}
          confirmDelete={deleteTextConfirm}
        />
      )}
      <DashboardLayout
        title={pathname.split('/')[2] === 'edit' ? 'Edit News' : 'Add News'}
      >
        <BackButton location='/news' />
        <RichTextEditor
          setVideoModal={setCreateVideoModal}
          setImageModal={setCreateImageModal}
          setTextModal={setCreateTextModal}
          setCoverImage={setNewsCover}
          coverImage={newsCover}
          formData={newsData}
          setFormData={setNewsData}
          editData={newsSingleData}
          setEditData={setNewsSingleData}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          deleteVideoModalFunc={deleteVideoModalFunc}
          deleteImageModalFunc={deleteImageModalFunc}
          deleteTextModalFunc={deleteTextModalFunc}
          editForm={editNewsForm}
          submitForm={submitNewsForm}
          showMaterial={false}
          edit={pathname.split('/')[2] === 'edit'}
          saveBtnName='save news'
          editBtnName='edit news'
          title={title}
          cancel={() => history.push('/news')}
          setOldData={setOldData}
        />
      </DashboardLayout>
    </>
  )
}

export default NewsAdd
