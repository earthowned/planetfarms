import { useState, useEffect } from 'react'
import CollectionModal from '../../../components/collectionModal/CollectionModal'
import GroupModal from '../../../components/groupModal/GroupModal'
import LibraryCard from '../../../components/libraryCard/LibraryCard'
import LibraryHeader from '../../../components/libraryHeader/LibraryHeader'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import './SavedCollection.css'
import { groupCollection, collections, library } from '../CollectionData'
import SimpleModal from '../../../components/simpleModal/SimpleModal'
import { useSelector, useDispatch } from 'react-redux'
import { listCollections } from '../../../actions/collectionActions'

const SavedCollection = () => {
  const [newCollection, setNewCollection] = useState(false)
  const [active, setActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  function openAddCollection () {
    setModalActive(true)
    setActive(false)
  }

  // const data = useSelector(
  //   (state) => state.listCollection.collections.collection
  // )

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(listCollections())
  // }, [dispatch])

  return (
    <>
      {modalActive && <GroupModal
        clickHandler={setModalActive}
        data={groupCollection} btnName='add to collections'
        openAddCollection={openAddCollection}
        setNewCollection={setNewCollection}
                      />}
      {newCollection && <SimpleModal setNewCollection={setNewCollection} />}

      {active && <CollectionModal setActive={setActive} openAddCollection={openAddCollection} />}
      <DashboardLayout title='library'>
        <div className='library-main-container'>
          <LibraryHeader setActive={setActive} />
        </div>
        <div className='library-collection'>
          <h4>Farming Collections</h4>
          <LibraryCard data={library} />
        </div>
        <div className='library-collection'>
          <h4>Branding Collections</h4>
          <LibraryCard data={collections} />
        </div>
      </DashboardLayout>
    </>
  )
}

export default SavedCollection
