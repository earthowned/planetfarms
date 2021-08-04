import { useState, useEffect } from 'react'
import './Library.css'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import ListView from '../../components/listView/ListView'
import SimpleModal from '../../components/simpleModal/SimpleModal'
import CollectionModal from '../../components/collectionModal/CollectionModal'
import GroupModal from '../../components/groupModal/GroupModal'
import { groupCollection, nav } from './CollectionData'
import { useSelector, useDispatch } from 'react-redux'
import { listResources, searchResources } from '../../actions/resourceActions'
import Pagination from '../../components/pagination/Pagination'
import SubHeader from '../../components/subHeader/SubHeader'
import { useHistory } from 'react-router-dom'
import useGetFetchData from '../../utils/useGetFetchData'
import { GET_LIBRARY } from '../../utils/urlConstants'

const Library = () => {
  const resourceList = useSelector((state) => state.listResources)
  const data = useSelector((state) => state.listResources)
  let resources = resourceList.searchResources ? resourceList.searchResources : resourceList.resources
  if (data) resources = data.resources
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const history = useHistory()

  const [newCollection, setNewCollection] = useState(false)
  const [active, setActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState(null)
  const dispatch = useDispatch()

  function openAddCollection () {
    setModalActive(true)
    setActive(false)
  }

  useEffect(() => {
    if (!userInfo) history.push('/login')
    if (search) dispatch(searchResources(search))
    if (!search) dispatch(listResources({ sort: '', pageNumber }))
  }, [search, dispatch, history, userInfo, pageNumber])

  return (
    <>
      {modalActive && <GroupModal
        clickHandler={setModalActive}
        data={groupCollection} btnName='add to collections'
        setNewCollection={setNewCollection}
                      />}
      {newCollection && <SimpleModal setNewCollection={setNewCollection} />}
      {active && <CollectionModal setActive={setActive} openAddCollection={openAddCollection} />}

      <DashboardLayout title='Library'>
        <div className='library-main-container'>
          <SubHeader search={search} setSearch={setSearch} nav={nav} setCreateActive={setActive} btnName='Add files' />
          {['Articles', 'Videos'].map(type => (
            <div className='list-container' key={type}>
              <LibraryCategory
                title={type} data={resources}
                setNewCollection={setNewCollection}
                modalActive={modalActive}
                setModalActive={setModalActive}
              />
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  )
}

const LibraryCategory = ({ title, data, setNewCollection, modalActive, setModalActive }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const { data: libraryData, isLoading } = useGetFetchData(
    'LIBRARY_CATEGORY_DATA',
    GET_LIBRARY + '?pageNumber=' + pageNumber + '&category=' + title.toLowerCase(),
    { title, pageNumber }
  )
  if (isLoading) {
    return (<div>Loading...</div>)
  }
  return (
    <>
      <ListView
        title={title} data={libraryData?.resources}
        setNewCollection={setNewCollection}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={libraryData} />
    </>
  )
}

export default Library
