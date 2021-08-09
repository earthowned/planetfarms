import { useState } from 'react'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { useParams, useHistory } from 'react-router-dom'
import './NewsAdd.scss'
import BackButton from '../../../components/backButton/BackButton'
import CommunityNewsViewPage from '../../communityNewsView/CommunityNewsView'
import { useDispatch, useSelector } from 'react-redux'
import { createNews, newsUpdate } from '../../../actions/newsActions'
import AddContent from '../../courseManager/addLesson/AddContent'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import ContentAdd from '../../../components/contentAdd/ContentAdd'
import { configFunc, getApi } from '../../../utils/apiFunc'
import DragDrop from '../../../components/dragDrop/DragDrop'
import Image from '../../../components/lessonImage/Image'
import Text from '../../courseManager/addLesson/Text'
import Video from '../../../components/videoPlayer/Video'
import { GET_VIDEO, LESSON_IMG, VIDEO_COVER } from '../../../utils/urlConstants'
import EditContent from '../../../components/editContent/EditContent'
import axios from 'axios'
import { deleteText, updateText } from '../../../actions/textActions'
import { deletePhoto, updatePhoto } from '../../../actions/photoActions'
import { deleteVideo, updateVideo } from '../../../actions/videoActions'

const NewsAdd = () => {
  const { currentCommunity } = useSelector(state => state.activeCommunity)
  const {success:updateVideoSuccess} = useSelector(state => state.updateVideo)
  const {success:deleteVideoSuccess} = useSelector(state => state.deleteVideo)

  const {success:updateTextSuccess} = useSelector(state => state.updateText)
  const {success:deleteTextSuccess} = useSelector(state => state.deleteText)

  const {success:updatePhotoSuccess} = useSelector(state => state.updatePhoto)
  const {success:deletePhotoSuccess} = useSelector(state => state.deletePhoto)
  // fetching category from route
  const {state} = useLocation();

  const [createVideoModal, setCreateVideoModal] = useState(false)
  const [createImageModal, setCreateImageModal] = useState(false)
  const [createTextModal, setCreateTextModal] = useState(false)
  const [deleteVideoModal, setDeleteVideoModal] = useState(false)
  const [deleteImageModal, setDeleteImageModal] = useState(false)
  const [deleteTextModal, setDeleteTextModal] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const [imageId, setImageId] = useState(null)
  const [textId, setTextId] = useState(null)
  // const [videoActive, setVideoActive] = useState(true)
  // const [imageActive, setImageActive] = useState(true)
  // const [textActive, setTextActive] = useState(true)
  const [newsData, setNewsData] = useState([])
  const [newsSingleData, setNewsSingleData] = useState([])
  const [category, setCategory] = useState(state?.category || null)
  const [newsCover, setNewsCover] = useState(null);
  const [imageData, setImageData] = useState(null)
  const [videoData, setVideoData] = useState(null)
  const [textData, setTextData] = useState(null)

  const news = useSelector((state) => (state.addNewNews !== {} ? state.addNewNews : ''))
  const { register, errors, handleSubmit } = useForm()

  const { title, id} = useParams()

  const {pathname} = useLocation();

  const dispatch = useDispatch();

  // for edit
  useEffect(() => {
    if(pathname.split('/')[2] === 'edit') {
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
    if(pathname.split('/')[2] !== 'edit') {
      setNewsData([{title, category}])
    }
  }, [])


  async function getSingleNews () {
    const { data } = await getApi(dispatch, `${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`)
    setNewsSingleData(data)
  }

  const submitNewsForm = ({ title }) => {
    newsData[0].title = title
    newsData[0].category = category;
    dispatch(createNews(newsData, newsCover));
  }

  const editNewsForm = ({title}) => {
    dispatch(newsUpdate({id: newsSingleData.id, title, category: newsSingleData.category, newsCover}, newsData))
  }

  async function editImageFunc (id) {
    if(newsSingleData?.photos) {
      let photo = newsSingleData.photos.filter(el => el.id === id);
      setImageData(photo)
    }
  }

  function editImageConfirm (data) {
    const {id, isImgDesc, lessonImg, photoDescription} = data;
    dispatch(updatePhoto(id, lessonImg, photoDescription, isImgDesc, setCreateImageModal ))
  }

  async function editTextFunc (id) {
    if(newsSingleData?.texts) {
      let text = newsSingleData.texts.filter(el => el.id === id);
      setTextData(text)
    }
  }

  function editTextConfirm (data) {
    const {id, textHeading, textDescription} = data;
    dispatch(updateText(id, textHeading, textDescription, setCreateTextModal))
  }

  async function editVideoFunc (id) {
    if(newsSingleData?.videos) {
      let video = newsSingleData.videos.filter(el => el.id === id);
      setVideoData(video)
    }
  }

   function editVideoConfirm (data) {
    const {id, videoCover, videoTitle, videoDescription, videoLink, videoResource} = data;
    dispatch(updateVideo(id,  videoCover, videoTitle, videoDescription, videoLink, videoResource, setCreateVideoModal))
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
      {
        createVideoModal && <NewsCreateModal 
          type='video' 
          videoActive={createVideoModal} 
          setVideoActive={setCreateVideoModal} 
          lessonData={newsData} 
          setLessonData={setNewsData} 
          videoData={videoData}
          editVideoConfirm={editVideoConfirm}
          />
      }
      {
        createImageModal && <NewsCreateModal 
          type='image' 
          imageActive={createImageModal} 
          setImageActive={setCreateImageModal} 
          lessonData={newsData} 
          setLessonData={setNewsData} 
          imageData={imageData}
          editImageConfirm={editImageConfirm}
          />
      }
      {
        createTextModal && <NewsCreateModal 
          type='text' 
          textActive={createTextModal} 
          setTextActive={setCreateTextModal} 
          lessonData={newsData} 
          setLessonData={setNewsData} 
          textData={textData}
          editTextConfirm={editTextConfirm}
      />
      }
      {deleteVideoModal && <DeleteContent setDeleteModal={setDeleteVideoModal} confirmDelete={deleteVideoConfirm} />}
      {deleteImageModal && <DeleteContent setDeleteModal={setDeleteImageModal} confirmDelete={deleteImageConfirm} />}
      {deleteTextModal && <DeleteContent setDeleteModal={setDeleteTextModal} confirmDelete={deleteTextConfirm} />}
      <DashboardLayout title={pathname.split('/')[2] === 'edit' ? 'Edit News' : 'Add News'}>
        <BackButton location={`/community-page-news/${currentCommunity.slug}`} />
        <AddNewsContent
          setVideoModal = {setCreateVideoModal}
          setImageModal = {setCreateImageModal}
          setTextModal = {setCreateTextModal}
          register={register}
          errors={errors}
          setNewsData = {setNewsData}
          newsData = {newsData}
          newsSingleData = {newsSingleData}
          setNewsCover={setNewsCover}
          editVideoFunc={editVideoFunc}
          editImageFunc={editImageFunc}
          editTextFunc={editTextFunc}
          setDeleteVideoModal={deleteVideoModalFunc}
          setDeleteImageModal={deleteImageModalFunc}
          setDeleteTextModal={deleteTextModalFunc}
        />

        {
          pathname.split('/')[2] === 'edit'
          ? <NewsSaveModal onClick={handleSubmit(editNewsForm)}  name="Edit" />
          : <NewsSaveModal onClick={handleSubmit(submitNewsForm)} name="Save" />
        }

      </DashboardLayout>
    </>
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

const AddNewsContent = ({
  errors,
  newsData,
  setVideoModal,
  setImageModal,
  setTextModal,
  register,
  newsSingleData,
  setNewsCover,
  editImageFunc,
  editVideoFunc,
  editTextFunc,
  setDeleteVideoModal,
  setDeleteImageModal,
  setDeleteTextModal
}) => {

  const [title, setTitle] = useState('');
  
  // for creation
  useEffect(() => {
    if(newsData.length > 0) {
      setTitle(newsData[0].title)
    }
  }, [newsData])

  // for Edit
  useEffect(() => {
    if(newsSingleData) {
      setTitle(newsSingleData.title)
    }
  }, [newsSingleData])
  

  return  <div className='admin-lesson-create-container'>
      <ErrorText
        className='errorMsg'
        message={errors.title && errors.title.message}
      />
      <input
        type='text'
        placeholder='Write Title Here'
        name='title'
        defaultValue={title}
        ref={register({
          required: {
            value: true,
            message: 'You must enter news title'
          }
        })}
      />

      <DragDrop
        onChange={(img) => setNewsCover(img)}
        text='Drag & Drop photo in this area or Click Here to attach'
        dataImg={newsSingleData?._attachments ? `${process.env.REACT_APP_CDN_BASE_URL}/news/${newsSingleData?._attachments}` : ''}
        onClick={() => setNewsCover(null)}
      />

      {
        newsSingleData && <EditContent 
        data={newsSingleData}
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

      <ContentAdd data={newsData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal} />
    </div>
}

const NewsSaveModal = ({ pathId, onClick, name}) => {
  const history = useHistory()
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to {name} News?</h4>
      <div>
        <button
          className='secondary-btn'
          id='lesson-cancel-btn'
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
        <button
          className='primary-btn secondary-btn'
          id='lesson-save-btn'
          onClick={onClick}
        >
          {name} News
        </button>
      </div>
    </div>
  )
}

export default NewsAdd
