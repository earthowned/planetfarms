import { useLayoutEffect, useState } from 'react'
import NewsCreateModal from '../../../components/newsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { useParams, useHistory } from 'react-router-dom'
import './NewsAdd.scss'
import BackButton from '../../../components/backButton/BackButton'
import CommunityNewsViewPage from '../../communityNewsView/CommunityNewsView'
import { useDispatch, useSelector } from 'react-redux'
import { createNews } from '../../../actions/newsActions'
import AddContent from '../../courseManager/addLesson/AddContent'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { ErrorText, TextArea } from '../../../components/formUI/FormUI'
import ContentAdd from '../../../components/contentAdd/ContentAdd'

const NewsAdd = () => {
  const { currentCommunity } = useSelector(state => state.activeCommunity)
  const [createVideoModal, setCreateVideoModal] = useState(false)
  const [createImageModal, setCreateImageModal] = useState(false)
  const [createTextModal, setCreateTextModal] = useState(false)
  const [videoActive, setVideoActive] = useState(true)
  const [imageActive, setImageActive] = useState(true)
  const [textActive, setTextActive] = useState(true)
  const [newsData, setNewsData] = useState([])

  const news = useSelector((state) => (state.addNewNews !== {} ? state.addNewNews : ''))
  const { register, errors, handleSubmit } = useForm()

  const { title} = useParams()

  const dispatch = useDispatch();

  // fetching category from route
  const {state} = useLocation();
  const {category} = state;

  useEffect(() => {
    setNewsData([{title, category}])
  }, [])

  const submitNewsForm = ({ title }) => {
    const newData = convertArrToObject(newsData)
    newData.title = title
    newData.category = category;
    dispatch(createNews(newData));
  }

  // converting the arrray into object for submission

  function convertArrToObject (arr) {
    let newData = {};
    arr.map(item => {
      let prop = Object.getOwnPropertyNames(item);
      prop.forEach(el => newData[el] = item[el])
    })

    return newData;
  }

  return (
    <>
      {createVideoModal && <NewsCreateModal type='video' videoActive={videoActive} setVideoActive={setVideoActive} lessonData={newsData} setLessonData={setNewsData} />}
      {createImageModal && <NewsCreateModal type='image' imageActive={imageActive} setImageActive={setImageActive} lessonData={newsData} setLessonData={setNewsData} />}
      {createTextModal && <NewsCreateModal type='text' textActive={textActive} setTextActive={setTextActive} lessonData={newsData} setLessonData={setNewsData} />}
      <DashboardLayout title='Add News'>
        <BackButton location={`/community-page-news/${currentCommunity.slug}`} />
        <AddNewsContent
          setVideoModal = {setCreateVideoModal}
          setImageModal = {setCreateImageModal}
          setTextModal = {setCreateTextModal}
          register={register}
          errors={errors}
          setNewsData = {setNewsData}
          newsData = {newsData}
        />

        <NewsSaveModal
          onClick={handleSubmit(submitNewsForm)}
        />

      </DashboardLayout>
    </>
  )
}

const AddNewsContent = ({
  errors,
  newsData,
  setVideoModal,
  setImageModal,
  setTextModal,
  register
}) => {

  const [title, setTitle] = useState('');
  
  useEffect(() => {
    if(newsData.length) {
      setTitle(newsData[0].title)
    }
  }, [newsData])

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

      <ContentAdd data={newsData}  setVideoModal={setVideoModal} setImageModal={setImageModal} setTextModal={setTextModal}/>
    </div>
}

const NewsSaveModal = ({ pathId, onClick }) => {
  const history = useHistory()
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to save News?</h4>
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
          Save News
        </button>
      </div>
    </div>
  )
}

// function NewsAddMainContainer ({
//   setCreateVideoModal,
//   setCreateImageModal,
//   setCreateTextModal,
//   setVideoActive,
//   setImageActive,
//   setTextActive,
//   news,
//   title,
//   category

// }) {
//   function createVideo () {
//     setCreateVideoModal(true)
//     setCreateImageModal(false)
//     setCreateTextModal(false)
//     setVideoActive(true)
//   }

//   function createImage () {
//     setCreateVideoModal(false)
//     setCreateImageModal(true)
//     setCreateTextModal(false)
//     setImageActive(true)
//   }

//   function createText () {
//     setCreateVideoModal(false)
//     setCreateImageModal(false)
//     setCreateTextModal(true)
//     setTextActive(true)
//   }

//   return (
//     <div className='news-add-main-container'>
//       <NewsAddContainer
//         title={title}
//         news={news}
//         createVideo={createVideo}
//         createImage={createImage}
//         createText={createText}
//       />
//       <div>{Object.entries(news).length !== 0 && <PopUp news={news} title={title} category={category} />}</div>
//     </div>
//   )
// }

// function NewsAddContainer ({ createVideo, createImage, createText, title, news }) {
//   return (
//     <div className='news-add-container'>
//       <NewContent title={title} news={news} />
//       <div className='news-add-inner-container'>
//         <button onClick={() => createVideo()} className='add-btn'>
//           <img src='/img/video-outline.svg' alt='Add video' /> <span>Add video</span>
//         </button>
//         <button onClick={() => createImage()} className='add-btn'>
//           <img src='/img/camera-outline.svg' alt='Add new img' /> <span>Add image</span>
//         </button>
//         <button onClick={() => createText()} className='add-btn'>
//           <img src='/img/file-text-outline.svg' alt='Add text' />
//           <span>Add text</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// function NewContent ({ title, news }) {
//   return (
//     <>
//       <div className='new-title-container'>
//         <h2>{title}</h2>
//         {news && <CommunityNewsViewPage newNews={news} />}
//       </div>
//     </>
//   )
// }

// function PopUp ({ news, title, category }) {
//   const { file } = news.imageDetail ? news.imageDetail.file && news.imageDetail : {}
//   const newNews = { ...news, title, category, file }
//   const [activePopup, setActivePopup] = useState(true)
//   const { currentCommunity } = useSelector(state => state.activeCommunity)
//   const dispatch = useDispatch()
//   const history = useHistory()
//   const handleOnSaveClick = (e) => {
//     if (file) {
//       dispatch(createNews(newNews))
//       setActivePopup(false)
//       history.push(`/community-page-news/${currentCommunity.slug}`)
//     } else {
//       dispatch(createNews(newNews))
//       setActivePopup(false)
//       history.push(`/community-page-news/${currentCommunity.slug}`)
//     }
//   }

//   const handleOnCancelClick = (e) => {
//     setActivePopup(false)
//     history.push(`/community-page-news/${currentCommunity.slug}`)
//   }
//   return (
//     <>
//       {activePopup && (
//         <div className='popup-box'>
//           <h4>Do you want to save?</h4>
//           <div className='popup-btn-wrapper'>
//             <button onClick={handleOnCancelClick} className='secondary-btn popup-btn'>
//               Cancel
//             </button>
//             <button onClick={handleOnSaveClick} className='default-btn popup-btn'>
//               Save
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

export default NewsAdd
