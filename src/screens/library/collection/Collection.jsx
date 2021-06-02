import { useState } from 'react'
import CollectionModal from '../../../components/collectionModal/CollectionModal'
import GroupModal from '../../../components/groupModal/GroupModal'
import LibraryCard from '../../../components/libraryCard/LibraryCard'
import LibraryHeader from '../../../components/libraryHeader/LibraryHeader'
import SimpleModal from '../../../components/simpleModal/SimpleModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { groupCollection, collections } from '../CollectionData'
import { useSelector, useDispatch } from 'react-redux'

import './collection.css'

const library = [
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  },
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  },
  {
    category: 'farming',
    title: "How to farm in 2020 and don't lose you business",
    img: '/img/man-cap.svg'
  }
]

const Collection = () => {
  const [newCollection, setNewCollection] = useState(false)
  const [active, setActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  const data = useSelector(
    (state) => state.listCollection.collections.collection
  )
  const userInfo = useSelector((state) => state.userLogin)
  console.log('userinfo', userInfo)

  console.log('another', data)

  function openAddCollection () {
    setModalActive(true)
    setActive(false)
  }
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
          <LibraryHeader setActive={setActive} btnName='Create Collection' />
        </div>
        <div className='library-collection'>
          <h4>My library (files)</h4>
          <LibraryCard data={library} />
        </div>
        <div className='library-collection'>
          <h4>My Collections</h4>
          <LibraryCard data={data} />
        </div>
      </DashboardLayout>
    </>
  )
}

export default Collection
