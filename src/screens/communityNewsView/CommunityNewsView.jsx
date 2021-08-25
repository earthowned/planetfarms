import React, { useState, useEffect } from 'react'
import './CommunityNewsView.scss'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import BackButton from '../../components/backButton/BackButton'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getApi } from '../../utils/apiFunc'
import { useDispatch } from 'react-redux'
import Text from '../courseManager/addLesson/Text'
import Video from '../../components/videoPlayer/Video'
import { GET_VIDEO, LESSON_IMG, VIDEO_COVER } from '../../utils/urlConstants'
import Image from '../../components/lessonImage/Image'
import RichText from '../../components/richText/RichText'

function CommunityNewsViewPage () {
  const [news, setNews] = useState({})
  // const val = useLocation()?.state?.news
  
  // fetching current community
const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    getSingleNews(id);
  }, [])

  async function getSingleNews (id) {
    const { data } = await getApi(
      dispatch,
      `${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`
    )
    setNews(data)
  }

  return (
    <>
        <DashboardLayout>
          <div className='x03-1-0-news-page'>
            <div className='flex-col-2'>
              <BackButton location='/news' />
                <RichText data={news} news={true}/>
              <div className='button-row-3'>
                <div className='button-secondary-default border-0-5px-quarter-spanish-white'>
                  <img className='f1' src='/img/facebook-share-icon.svg' alt='facebook-icon' />
                  <div className='your-business-goals valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-18px'>
                    Repost
                  </div>
                </div>
                <div className='button-secondary-default border-0-5px-quarter-spanish-white'>
                  <img className='shape' src='/img/twitter-shape-icon.svg' alt='twitter-icon' />
                  <div className='your-business-goals-1 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-18px'>
                    Tweet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DashboardLayout>
    </>
  )
}

const NewsSingleView = ({ news }) => {
  return (
    <>
      <h1 className='news-view-title'>{news?.title}</h1>

      <div className='title-time'>
        <div className='due-to-the-advantage valign-text-middle ibmplexsans-semi-bold-monsoon-16px'>
          {news?.createdAt && new Date(news?.createdAt).toDateString()}
        </div>
        <div className='due-to-the-advantage-1 valign-text-middle ibmplexsans-semi-bold-monsoon-16px'>
          {news?.readTime}
        </div>
      </div>

      <Image
          src={`${process.env.REACT_APP_CDN_BASE_URL}/news/${news?._attachments}`}
        />

    {
        news?.rich_text  && news?.rich_text?.photos.map(item => {
          return <Image
          src={`${LESSON_IMG}${item?.lessonImg}`}
          desc={
            item?.isImgDesc === true && item?.photoDescription
          }
        />
        })
      }

      {
        news?.rich_text && news?.rich_text?.texts.map(item => {
          return <Text
          heading={item?.textHeading}
          desc={item?.textDescription}
        />
        })
      }

      {
        news?.rich_text && news?.rich_text?.videos.map(item => {
          return <Video
            title={item?.videoTitle}
            description={item?.videoDescription}
            url={
              item?.videoLink === 'undefined'
                ? `${GET_VIDEO}${item?.videoResource}`
                : item?.videoLink
              }
            thumbnail={`${VIDEO_COVER}${item?.videoCover}`}
          />
        })
      }
    </>
  )
}

export default CommunityNewsViewPage
