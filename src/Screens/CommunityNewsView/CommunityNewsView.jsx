import React, { useState, useEffect } from 'react'
import './community-news-view.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import BackButton from '../../Components/BackButton/BackButton'
import { useLocation } from 'react-router-dom'

function CommunityNewsViewPage({ newNews }) {
  const [news, setNews] = useState({})
  const val = useLocation()?.state?.news
  useEffect(() => {
    setNews(newNews || val)
  }, [newNews, val])

  return (
    <>
      {newNews ? (
        <NewsSingleView news={news} />
      ) : (
        <DashboardLayout>
          <div className='x03-1-0-news-page'>
            <div className='flex-col-2'>
              <BackButton location='/community-page-news' />
              <NewsSingleView news={news} />
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
      )}
    </>
  )
}

const NewsSingleView = ({ news }) => {
  return (
    <>
      <h1 className='news-view-title'>{news?.title}</h1>

      <div className='title-time'>
        <div className='due-to-the-advantage valign-text-middle ibmplexsans-semi-bold-monsoon-16px'>
          { news?.createdAt && new Date(news?.createdAt).toDateString()}
        </div>
        <div className='due-to-the-advantage-1 valign-text-middle ibmplexsans-semi-bold-monsoon-16px'>
          {news?.readTime}
        </div>
      </div>
      <div className='frame-1969' style={{ backgroundImage: 'url("img/newsbg-image.png")' }}>
        <img className='ellipse-15' src='/img/newsbg-image.png' alt='community-single-article' />
      </div>
      <div className='text-container'>
        <p>{news?.textDetail?.collectionTitle}</p>
        <p>{news?.textDetail?.collectionDescription}</p>
      </div>
      <div className='text-container'>
        <p>{news?.imageDetail?.imageDescription}</p>
      </div>
      <div className='text-container'>
        <p>{news?.videoDetail?.videoTitle}</p>
        <p>{news?.videoDetail?.videoDescription}</p>
      </div>
    </>
  )
}

export default CommunityNewsViewPage
