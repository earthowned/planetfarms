import { useState, useEffect } from 'react'
import LibraryHeader from '../../Components/LibraryHeader/LibraryHeader'
import './library.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import ListView from '../../Components/ListView/ListView'
import SimpleModal from '../../Components/SimpleModal/SimpleModal'
import CollectionModal from '../../Components/CollectionModal/CollectionModal'
import GroupModal from '../../Components/GroupModal/GroupModal'
import { groupCollection } from './CollectionData'
import { useSelector, useDispatch } from 'react-redux'
import { listResources } from '../../actions/resourceActions'
import Pagination from '../../Components/Paginations/Paginations'

const Library = () => {
  let resourceList = useSelector((state) => state.listResources)
  let data = useSelector((state) => state.listResources)
  let resources = resourceList.searchResources ? resourceList.searchResources : resourceList.resources
  if (data) resources = data.resources
  const [newCollection, setNewCollection] = useState(false)
  const [active, setActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  let [pageNumber, setPageNumber] = useState(0)
  const dispatch = useDispatch()

  function openAddCollection() {
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
          <LibraryHeader setActive={setActive} />
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
