import { useEffect, useState } from 'react'
import './community-news.css'
import { Link, useHistory } from 'react-router-dom'
import NewsCard from '../../Components/NewsCard/NewsCard'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import NewsAddModal from '../../Components/NewAddModal/NewsAddModal'
import Filter from '../../Components/Filter/Filter'
import useSizeFinder from '../../utils/SizeFinder'
import { useDispatch, useSelector } from 'react-redux'
import { searchNews, listNews } from '../../actions/newsActions'

function CommunityNews () {
  const [addModal, setAddModal] = useState(false)
  return <DashboardLayout title='Ragrarians News'>{addModal && <NewsAddModal setAddModal={setAddModal} />}<CommunityPagenews {...CommunityPageNewsData} setAddModal={setAddModal} /></DashboardLayout>
}

export default CommunityNews

const CommunityRight = ({ text, farming, people, nature, carsIndustry, mediaNews, seeAllTopics }) => {
  return (
    <>
      <div className='community-news-right-bar'>
        <div className='community-news-right-bar-inner-container'>
          <h4>{text}</h4>
          <div className='community-news-filter-container'>
            <h6>{farming}</h6>
            <h6>{people}</h6>
            <h6>{nature}</h6>
            <h6>{carsIndustry}</h6>
            <h6>{mediaNews}</h6>
          </div>
          <Link to='/community-switching' className='nav-link'>{seeAllTopics}</Link>
        </div>
      </div>
    </>
  )
}

function CommunityPagenews (props) {
  const {
    addNews,
    text22,
    farming,
    people,
    nature,
    carsIndustry,
    mediaNews,
    seeAllTopics,
    setAddModal
  } = props

  const windowWidth = useSizeFinder()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useHistory()
  const [search, setSearch] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (search) dispatch(searchNews(search))
    if (!search) dispatch(listNews())
  }, [search, dispatch, history, userInfo])

  const newsList = useSelector((state) => state.listNews)
  const news = newsList.searchNews ? newsList.searchNews : newsList.news
  return (
    <>
      <div className='community-page-news'>
        <div className='community-news-second-header'>
          <div className='search-container-news'>
            <SearchComponent search={search} setSearch={setSearch} className='search-btn margin-0' />
          </div>
          <button className='default-btn default-btn-variation' onClick={() => setAddModal(true)}>{addNews}</button>
        </div>
        <div className='community-news-cards'>
          <NewsCard news={news} />
        </div>
        {(windowWidth < 1200) ? <Filter /> : <CommunityRight text={text22} farming={farming} people={people} nature={nature} carsIndustry={carsIndustry} mediaNews={mediaNews} seeAllTopics={seeAllTopics} />}
      </div>
    </>
  )
}

const CommunityPageNewsData = {
  search: 'Search…',
  addNews: 'Add news',
  text22: 'Discover more of what matters to you',
  farming: 'Farming',
  people: 'People',
  nature: 'Nature',
  carsIndustry: 'Cars industry',
  mediaNews: 'Media news',
  seeAllTopics: 'See all topics'
}
