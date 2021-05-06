import { useEffect, useState } from 'react'
import NewsCreateModal from '../../../Components/NewsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import { useParams } from 'react-router-dom'
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
  const news = useSelector((state) => state.addNewNews !== {} ? state.addNewNews : '')

  const [content, setContent] = useState({
    title: ''
  })
  const { title, category } = useParams()

  useEffect(() => {
    setContent({
      title,
      category,
      image: '',
      videoTitle: '',
      videoDesc: '',
      textTitle: '',
      textDesc: ''
    })
  }, [news, title, category])
  return (
    <>
      {createVideoModal && <NewsCreateModal setContent={setContent} content={content} type='video' videoActive={videoActive} setVideoActive={setVideoActive} />}
      {createImageModal && <NewsCreateModal setContent={setContent} type='image' imageActive={imageActive} setImageActive={setImageActive} />}
      {createTextModal && <NewsCreateModal setContent={setContent} type='text' textActive={textActive} setTextActive={setTextActive} />}
      <DashboardLayout title='Add News'>
        <BackButton location='/community-page-news' />
        {news && <CommunityNewsViewPage newNews={news} />}
        <NewsAddMainContainer
          setCreateVideoModal={setCreateVideoModal} setCreateImageModal={setCreateImageModal} news={news} title={title} category={category}
          setCreateTextModal={setCreateTextModal} setTextActive={setTextActive} setImageActive={setImageActive} setVideoActive={setVideoActive}
          content={content}
        />
      </DashboardLayout>
    </>
  )
}

function NewsAddMainContainer ({ setCreateVideoModal, setCreateImageModal, setCreateTextModal, setVideoActive, setImageActive, setTextActive, news, title, category, content }) {
  function createVideo () {
    setCreateVideoModal(true)
    setCreateImageModal(false)
    setCreateTextModal(false)
    setVideoActive(true)
  }

  function createImage () {
    setCreateVideoModal(false)
    setCreateImageModal(true)
    setCreateTextModal(false)
    setImageActive(true)
  }

  function createText () {
    setCreateVideoModal(false)
    setCreateImageModal(false)
    setCreateTextModal(true)
    setTextActive(true)
  }

  return (
    <div className='news-add-main-container'>
      <NewsAddContainer content={content} createVideo={createVideo} createImage={createImage} createText={createText} />
      {news && <PopUp news={news} title={title} category={category} />}
    </div>
  )
}

function NewsAddContainer ({ createVideo, createImage, createText, content }) {
  return (
    <div className='news-add-container'>
      <NewContent content={content} />
      <div className='news-add-inner-container'>
        <button onClick={() => createVideo()} className='add-btn'><img src='/img/video-outline.svg' alt='Add video' /> <span>Add video</span></button>
        <button onClick={() => createImage()} className='add-btn'><img src='/img/camera-outline.svg' alt='Add new img' /> <span>Add image</span></button>
        <button onClick={() => createText()} className='add-btn'><img src='/img/file-text-outline.svg' alt='Add text' /><span>Add text</span></button>
      </div>
    </div>
  )
}

function NewContent ({ content }) {
  return (
    <>
      <div className='new-content-container'>
        <h2>{content.title}</h2>
        {content.image && <img src={content.image} alt='new-img' />}
        {content.videoTitle && <h6>{content.videoTitle}</h6>}
        {content.textTitle && <h4>{content.textTitle}</h4>}
        {content.textDesc && <p>{content.textDesc}</p>}
      </div>
    </>
  )
}

function PopUp ({ news, title, category }) {
  const newNews = { ...news, title, category }
  const [activePopup, setActivePopup] = useState(true)
  const dispatch = useDispatch()
  const handleOnClick = (e) => {
    dispatch(createNews(newNews))
    setActivePopup(false)
  }
  return (
    <>
      {activePopup && (<div className='popup-box'>
        <h4>Do you want to save?</h4>
        <div className='popup-btn-wrapper'>
          <button onClick={() => setActivePopup(false)} className='secondary-btn'>Cancel</button>
          <button onClick={handleOnClick} className='default-btn'>Save</button>
        </div>
                       </div>)}
    </>
  )
}

export default NewsAdd
