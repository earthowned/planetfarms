import { useEffect, useState } from 'react'
import './CommunityNews.scss'
import { Link, useHistory } from 'react-router-dom'
import NewsCard from '../../components/newsCard/NewsCard'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import NewsAddModal from '../../components/newAddModal/NewsAddModal'
import Filter from '../../components/filter/Filter'
import useSizeFinder from '../../utils/sizeFinder'
import { useDispatch, useSelector } from 'react-redux'
import { searchNews, listNews } from '../../actions/newsActions'
import Pagination from '../../components/pagination/Pagination'
import axios from 'axios'

function CommunityNews () {
  const currentCommunity = localStorage.getItem('currentCommunity')
  ? JSON.parse(localStorage.getItem('currentCommunity'))
  : null

  const [addModal, setAddModal] = useState(false)
  const [editData, setEditData] = useState(null);

  const editCard = async (id) => {
     const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/community/${currentCommunity.id}`)
    setEditData(data)
    setAddModal(true);
  }
  return <DashboardLayout title='Ragrarians News'>{addModal && <NewsAddModal 
  setAddModal={setAddModal} 
  editData={editData} 
  setEditData={setEditData} 
  />}
  <CommunityPagenews {...CommunityPageNewsData} setAddModal={setAddModal} editCard={editCard} /></DashboardLayout>
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
  const {success:newsCreateSuccess} = useSelector((state) => state.addNewNews)
  const {success:newsDeleteSuccess} = useSelector((state) => state.newsDelete)
  const {success:newsUpdateSuccess} = useSelector((state) => state.newsUpdate)
  const { userInfo } = userLogin
  const history = useHistory()
  const [search, setSearch] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const dispatch = useDispatch()
  useEffect(() => {
    // if (!userInfo) {
    //   history.push('/login')
    // }
    if (search) dispatch(searchNews(search))
    if (!search) dispatch(listNews({sort: "", pageNumber}))
  }, [search, dispatch, history, userInfo, pageNumber, newsCreateSuccess, newsDeleteSuccess, newsUpdateSuccess])

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
        <div className='community-page-news-section'>
          <div className='community-news-cards'>
            <NewsCard news={news} editCard={props.editCard} />
          <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={newsList} />
          </div>
          {(windowWidth < 1200)
            ? <Filter />
            : <CommunityRight text={text22} farming={farming} people={people} nature={nature} carsIndustry={carsIndustry} mediaNews={mediaNews} seeAllTopics={seeAllTopics} />}
        </div>
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
