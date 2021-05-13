import { useState } from 'react'
import NewsCreateModal from '../../../Components/NewsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import { useParams, useHistory } from 'react-router-dom'
import './news-add.css'
import BackButton from '../../../Components/BackButton/BackButton'
import CommunityNewsViewPage from '../../CommunityNewsView/CommunityNewsView'
import { useDispatch, useSelector } from 'react-redux'
import { createNews } from '../../../actions/newsActions'

const NewsAdd = () => {
  const [createVideoModal, setCreateVideoModal] = useState(false)
  const [createImageModal, setCreateImageModal] = useState(false)
  const [createTextModal, setCreateTextModal] = useState(false)
  const [videoActive, setVideoActive] = useState(true)
  const [imageActive, setImageActive] = useState(true)
  const [textActive, setTextActive] = useState(true)
  const news = useSelector((state) => (state.addNewNews !== {} ? state.addNewNews : ''))
  useSelector((state) =>   console.log(state))

  const { title, category } = useParams()
  return (
    <>
      {createVideoModal && <NewsCreateModal type='video' videoActive={videoActive} setVideoActive={setVideoActive} />}
      {createImageModal && <NewsCreateModal type='image' imageActive={imageActive} setImageActive={setImageActive} />}
      {createTextModal && <NewsCreateModal type='text' textActive={textActive} setTextActive={setTextActive} />}
      <DashboardLayout title='Add News'>
        <BackButton location='/community-page-news' />
        <NewsAddMainContainer
          setCreateVideoModal={setCreateVideoModal}
          setCreateImageModal={setCreateImageModal}
          news={news}
          title={title}
          category={category}
          setCreateTextModal={setCreateTextModal}
          setTextActive={setTextActive}
          setImageActive={setImageActive}
          setVideoActive={setVideoActive}
        />
      </DashboardLayout>
    </>
  )
}

function NewsAddMainContainer({
  setCreateVideoModal,
  setCreateImageModal,
  setCreateTextModal,
  setVideoActive,
  setImageActive,
  setTextActive,
  news,
  title,
  category,
}) {
  function createVideo() {
    setCreateVideoModal(true)
    setCreateImageModal(false)
    setCreateTextModal(false)
    setVideoActive(true)
  }

  function createImage() {
    setCreateVideoModal(false)
    setCreateImageModal(true)
    setCreateTextModal(false)
    setImageActive(true)
  }

  function createText() {
    setCreateVideoModal(false)
    setCreateImageModal(false)
    setCreateTextModal(true)
    setTextActive(true)
  }

  return (
    <div className='news-add-main-container'>
      <NewsAddContainer
        title={title}
        news={news}
        createVideo={createVideo}
        createImage={createImage}
        createText={createText}
      />
      <div>{Object.entries(news).length !== 0 && <PopUp news={news} title={title} category={category} />}</div>
    </div>
  )
}

function NewsAddContainer({ createVideo, createImage, createText, title, news }) {
  return (
    <div className='news-add-container'>
      <NewContent title={title} news={news} />
      <div className='news-add-inner-container'>
        <button onClick={() => createVideo()} className='add-btn'>
          <img src='/img/video-outline.svg' alt='Add video' /> <span>Add video</span>
        </button>
        <button onClick={() => createImage()} className='add-btn'>
          <img src='/img/camera-outline.svg' alt='Add new img' /> <span>Add image</span>
        </button>
        <button onClick={() => createText()} className='add-btn'>
          <img src='/img/file-text-outline.svg' alt='Add text' />
          <span>Add text</span>
        </button>
      </div>
    </div>
  )
}

function NewContent({ title, news }) {
  return (
    <>
      <div className='new-title-container'>
        <h2>{title}</h2>
        {news && <CommunityNewsViewPage newNews={news} />}
      </div>
    </>
  )
}

function PopUp({ news, title, category }) {
  const newNews = { ...news, title, category }
  const [activePopup, setActivePopup] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleOnSaveClick = (e) => {
    dispatch(createNews(newNews))
    setActivePopup(false)
    history.push('/community-page-news')
  }

  const handleOnCancelClick = (e) => {
    setActivePopup(false)
    history.push('/community-page-news')
  }
  return (
    <>
      {activePopup && (
        <div className='popup-box'>
          <h4>Do you want to save?</h4>
          <div className='popup-btn-wrapper'>
            <button onClick={handleOnCancelClick} className='secondary-btn'>
              Cancel
            </button>
            <button onClick={handleOnSaveClick} className='default-btn'>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsAdd
