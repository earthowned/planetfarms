import { useState, useEffect } from 'react'
import './user-collection.css'

import LibraryHeader from '../../../Components/LibraryHeader/LibraryHeader'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import CollectionModal from '../../../Components/CollectionModal/CollectionModal'
import SimpleModal from '../../../Components/SimpleModal/SimpleModal'
import { farming, groupCollection } from '../CollectionData'
import GroupModal from '../../../Components/GroupModal/GroupModal'
import { useSelector, useDispatch } from 'react-redux'
import { listCollections, updateCollection } from '../../../actions/collectionActions'
import { createCollectionUser } from '../../../actions/collectionUserActions'

const UserCollection = () => {
  const [active, setActive] = useState(true)
  const [modalActive, setModalActive] = useState(false)

  const [groupModal, setGroupModal] = useState(false)
  const [newCollection, setNewCollection] = useState(false)

  const data = useSelector(
    (state) => state.listCollection.collections.collection
  )
  const userInfo = useSelector((state) => state.userLogin.userInfo.id)

  console.log('collection', data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listCollections())
  }, [dispatch])

  function openAddCollection () {
    setGroupModal(true)
    setModalActive(false)
  }

  function handleClick (id) {
    dispatch(
      createCollectionUser({ userId: userInfo, collectionId: id })
    )
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
                        {active ? 'Save Collection' : <><img src='/img/check-circle.svg' alt='circle-icon' /> <span>Saved</span></>}
                      </button>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </DashboardLayout>
    </>
  )
}

export default UserCollection
