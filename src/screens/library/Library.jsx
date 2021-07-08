import { useState, useEffect } from 'react'
import LibraryHeader from '../../components/libraryHeader/LibraryHeader'
import './Library.css'
import DashboardLayout from '../../layout/dashboardLayout/DashboardLayout'
import ListView from '../../components/listView/ListView'
import SimpleModal from '../../components/simpleModal/SimpleModal'
import CollectionModal from '../../components/collectionModal/CollectionModal'
import GroupModal from '../../components/groupModal/GroupModal'
import { groupCollection } from './CollectionData'
import { useSelector, useDispatch } from 'react-redux'
import { listResources } from '../../actions/resourceActions'
import Pagination from '../../components/pagination/Pagination'

const nav = [{
  label: 'All files',
  link: '/library'
}, {
  label: 'My library & collections',
  link: '/library/collection'
}, {
  label: 'Users collection',
  link: '/library/collection/users'
}, {
  label: 'Saved collection',
  link: '/library/collection/saved'
}]
const Library = () => {
  const resourceList = useSelector((state) => state.listResources)
  const data = useSelector((state) => state.listResources)
  let resources = resourceList.searchResources ? resourceList.searchResources : resourceList.resources
  if (data) resources = data.resources
  const [newCollection, setNewCollection] = useState(false)
  const [active, setActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch()

  function openAddCollection () {
    setModalActive(true)
    setActive(false)
  }

  useEffect(() => {
    dispatch(listResources({ pageNumber }))
  }, [pageNumber, dispatch])

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
          <LibraryHeader setActive={setActive} data={nav} />
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
