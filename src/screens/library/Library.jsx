import { useState, useEffect } from 'react'
import './Library.css'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import ListView from '../../components/listView/ListView'
import SimpleModal from '../../components/simpleModal/SimpleModal'
import CollectionModal from '../../components/collectionModal/CollectionModal'
import GroupModal from '../../components/groupModal/GroupModal'
import { groupCollection } from './CollectionData'
import { useSelector, useDispatch } from 'react-redux'
import { listResources, searchResources } from '../../actions/resourceActions'
import Pagination from '../../components/pagination/Pagination'
import SubHeader from '../../components/subHeader/SubHeader'
import { useHistory } from 'react-router-dom'
import {nav} from './CollectionData';

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
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch()

  function openAddCollection () {
    setModalActive(true)
    setActive(false)
  }

   useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (search) dispatch(searchResources(search))
    if (!search) dispatch(listResources('', pageNumber))

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

      <DashboardLayout title='library'>
        <div className='library-main-container'>
          <SubHeader search={search} setSearch={setSearch} nav={nav} setCreateActive={setActive} btnName="Add files"/>
          {['Articles', 'Videos'].map(type => (
            <div className='list-container'>
              <ListView
                title={type} data={resources}
                setNewCollection={setNewCollection}
                modalActive={modalActive}
                setModalActive={setModalActive}
              />
              <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={resourceList} />
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  )
}

export default Library
