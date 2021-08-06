import './NewsCard.scss'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteNews } from '../../actions/newsActions'
import Background from '../background/Background'
import { useState } from 'react'

function NewsCard ({ news, editCard, deleteNewsCard }) {
  return (
    <>
      {news && news.map((news) => {
        return (
          <NewsSingleCard news={news} editCard={editCard} deleteNewsCard={deleteNewsCard} />
        )
      })}
    </>
  )
}

const NewsSingleCard = ({ news, editCard, deleteNewsCard }) => {
  const [dropDown, setDropDown] = useState(false)
  
  const editNewsCard = (id) => {
    editCard(id)
    setDropDown(false)
  }
  return (
    <Background tag='/news/' image={news._attachments}>
      <div className='news-card'>
        <div className='news-card-header'>
          <div className='news-show-date'>{moment(news.createdAt).fromNow()}</div>
          <div className='card-edit'>
            <div>
              <div onClick={() => setDropDown(!dropDown)} className='card-edit-button'>
                <img src='/img/more-horizontal.svg' alt='burger icon' />
              </div>
              {dropDown && <div className='dropdown-card-items'>
                <ul>
                  <li onClick={() => editNewsCard(news.id)}>
                    <img src='/img/edit-icon.svg' alt='burger icon' /> <span>Edit</span>
                  </li>
                  <li onClick={() => deleteNewsCard(news.id)}>
                    <img src='/img/trash-icon.svg' alt='burger icon' /> <span>Delete</span>
                  </li>
                </ul>
                           </div>}
            </div>
          </div>
        </div>
        <Link to={{ pathname: `/community-news-view-page/${news.id}`, state: { news } }}>
          <div key={news.id}>
            <div className='newsCard-group'>
              <div className='frame-text'>
                <div className='frame-3501'>
                  <div className='farming ibmplexsans-semi-bold-caribbean-green-14px'>{news.category}</div>
                  <h1 className='subtitle ibmplexsans-semi-bold-quarter-spanish-white-24px'>{news.title}</h1>
                </div>
                <div className='overflow module'>
                  <p className='news-text ibmplexsans-normal-quarter-spanish-white-16px'>
                    {news?.textDetail?.collectionDescription || news?.imageDetail?.imageDescription || news?.videoDetail?.videoDescription}
                  </p>
                </div>
                <div className='date ibmplexsans-normal-quarter-spanish-white-14px'>
                  {new Date(news.createdAt).toDateString()}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Background>
  )
}
export default NewsCard
