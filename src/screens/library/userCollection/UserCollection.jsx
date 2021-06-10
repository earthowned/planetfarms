import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './UserCollection.css'

import LibraryHeader from '../../../components/libraryHeader/LibraryHeader'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import CollectionModal from '../../../components/collectionModal/CollectionModal'
import SimpleModal from '../../../components/simpleModal/SimpleModal'
import { farming, groupCollection } from '../CollectionData'
import GroupModal from '../../../components/groupModal/GroupModal'
import CardLayout from '../../../layout/cardLayout/CardLayout'
import { listCollections, updateCollection } from '../../../actions/collectionActions'
import { createCollectionUser } from '../../../actions/collectionUserActions'
import Pagination from '../../../Components/Paginations/Paginations'

const UserCollection = () => {
  const [active, setActive] = useState(true)
  const [modalActive, setModalActive] = useState(false)
  const [isAdded, setIsAdded] = useState()
  const [pageNumber, setPageNumber] = useState(1)

  const [groupModal, setGroupModal] = useState(false)
  const [newCollection, setNewCollection] = useState(false)

  const data = useSelector(
    (state) => state.listCollection.collections.collection
  )

  const dataCollection = useSelector(
    (state) => state.listCollection
  )
  const userInfo = useSelector((state) => state.userLogin.userInfo.id)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCollections({ pageNumber }))
  }, [pageNumber, dispatch])

  function openAddCollection () {
    setGroupModal(true)
    setModalActive(false)
  }

  function handleClick (id) {
    dispatch(
      createCollectionUser({ userId: userInfo, collectionId: id })
    )
    setIsAdded(id)
  }

  return (
    <>
      {groupModal && <GroupModal
        clickHandler={setGroupModal}
        data={groupCollection} btnName='add to collections'
        setNewCollection={setNewCollection}
                     />}

      {modalActive && <CollectionModal setActive={setModalActive} openAddCollection={openAddCollection} />}

      {newCollection && <SimpleModal setNewCollection={setNewCollection} />}

      <DashboardLayout title='library'>
        <div className='library-main-container'>
          <LibraryHeader setActive={setModalActive} />
        </div>

        <h4 className='farming-collection-header'>Farming Collections</h4>
        <div className='farming-main-container'>

          {
              data && data.map(item => {
                return (
                  <div key={item.id} className='farming-inner-container' style={{ backgroundImage: 'url(/img/farming.svg)' }}>
                    <button className='trasnsparent-btn btn-positioning'>
                      <b>{item.users}</b>  <span>users saved</span>
                    </button>

                    <div className='libraryCard-content'>
                      <h6>{item.category}</h6>
                      <h4>{item.name}</h4>

                      <button className='trasnsparent-btn fixed-width' value={active} onClick={(id) => handleClick(item.id)}>
                        {isAdded === item.id ? <><img src='/img/check-circle.svg' alt='circle-icon' /> <span>Saved</span></> : 'Save Collection'}
                      </button>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={dataCollection} />

      </DashboardLayout>
    </>
  )
}

export default UserCollection
