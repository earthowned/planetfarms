import moment from 'moment'
import { Link } from 'react-router-dom'
import Background from '../background/Background'
import { useState } from 'react'
import useHideOnClick from '../../utils/useHideOnClick'
import { useSelector } from 'react-redux'
import Dropdown from './Dropdown'
const NewsSingleCard = ({ news, editCard, deleteNewsCard, creator }) => {
  const [dropDown, setDropDown] = useState(false)
  const domNode = useHideOnClick(() => {
    setDropDown(false)
  })

  const loggedUser = useSelector((state) => state?.userLogin)
  const { userInfo } = loggedUser
  return (
    <Background tag='/news/' image={news._attachments}>
      <div className='news-card'>
        <div className='news-card-header'>
          <div className='news-show-date'>
            {moment(news.createdAt).fromNow()}
          </div>
          <div className='card-edit' ref={domNode}>
            <div>
              {userInfo?.id !== null && userInfo?.id === creator ? (
                <div
                  onClick={() => setDropDown(!dropDown)}
                  className='card-edit-button'
                >
                  <img src='/img/more-horizontal.svg' alt='burger icon' />
                </div>
              ) : (
                ''
              )}
              {dropDown && (
                <Dropdown
                  news={news}
                  editCard={editCard}
                  deleteNewsCard={deleteNewsCard}
                  setDropDown={setDropDown}
                />
              )}
            </div>
          </div>
        </div>
        <Link to={{ pathname: `/news/${news.id}`, state: { news } }}>
          <div key={news.id}>
            <div className='newsCard-group'>
              <div className='frame-text'>
                <div className='frame-3501'>
                  <div className='farming ibmplexsans-semi-bold-caribbean-green-14px'>
                    {news.category}
                  </div>
                  <h1 className='subtitle ibmplexsans-semi-bold-quarter-spanish-white-24px'>
                    {news.title}
                  </h1>
                </div>
                <div className='overflow module'>
                  <p className='news-text ibmplexsans-normal-quarter-spanish-white-16px'>
                    {news?.textDetail?.collectionDescription ||
                      news?.imageDetail?.imageDescription ||
                      news?.videoDetail?.videoDescription}
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
export default NewsSingleCard
