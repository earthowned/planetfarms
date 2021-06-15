import { useState } from 'react'
import './UserCollection.css'

import LibraryHeader from '../../../components/libraryHeader/LibraryHeader'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import CollectionModal from '../../../components/collectionModal/CollectionModal'
import SimpleModal from '../../../components/simpleModal/SimpleModal'
import Background from '../../../Components/background/Background'
import { farming, groupCollection } from '../CollectionData'
import GroupModal from '../../../components/groupModal/GroupModal'
import CardLayout from '../../../layout/cardLayout/CardLayout'

const UserCollection = () => {
  const [modalActive, setModalActive] = useState(false)

  const [groupModal, setGroupModal] = useState(false)
  const [newCollection, setNewCollection] = useState(false)

  function openAddCollection () {
    setGroupModal(true)
    setModalActive(false)
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

        <CardLayout data={farming}>
          {
                farming.map(item => {
                  return (
                    <UserCollectionCard item={item} />
                  )
                })
            }
        </CardLayout>
      </DashboardLayout>
    </>
  )
}

function UserCollectionCard ({ item }) {
  const [active, setActive] = useState(false)
  return (
    <Background image={item.img}>
      <div
        className='farming-inner-container'
      >
        <button className='trasnsparent-btn btn-positioning'>
          <b>{item.users}</b>  <span>users saved</span>
        </button>

        <div className='libraryCard-content'>
          <h6>{item.category}</h6>
          <h4>{item.title}</h4>
          <button className='trasnsparent-btn fixed-width' onClick={() => setActive(!active)}>
            {active ? <><img src='/img/check-circle.svg' alt='circle-icon' /> <span>Saved</span></> : 'Save Collection'}
          </button>
        </div>
      </div>
    </Background>
  )
}

export default UserCollection
