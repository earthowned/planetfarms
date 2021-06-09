import { useState, useEffect } from 'react'
import CollectionModal from '../../../components/collectionModal/CollectionModal'
import GroupModal from '../../../components/groupModal/GroupModal'
import LibraryCard from '../../../components/libraryCard/LibraryCard'
import LibraryHeader from '../../../components/libraryHeader/LibraryHeader'
import SimpleModal from '../../../components/simpleModal/SimpleModal'
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout'
import { groupCollection, collections } from '../CollectionData'
import { useSelector, useDispatch } from 'react-redux'
import { listResourceUser } from '../../../actions/resourceUserAction'
import Pagination from '../../../Components/Paginations/Paginations'
import { listResources } from '../../../actions/resourceActions'

import './collection.css'

const Collection = () => {
  const [newCollection, setNewCollection] = useState(false)
  const [active, setActive] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  // const [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch()
  // const collectiondata = useSelector(
  //   (state) => state.listCollection.collections.collection
  // )
  // const resourceList = useSelector((state) => state.listResources)
  // const data = useSelector((state) => state.listResources)
  // let resources = resourceList.searchResources ? resourceList.searchResources : resourceList.resources
  // if (data) resources = data.resources

  // const userInfo = useSelector((state) => state.userLogin)

  // const resourceUser = useSelector((state)=>state)
  // console.log("uuuu",resourceUser)
  //  useEffect(() =>{
  //    dispatch(listResourceUser())
  //  },[dispatch])

  // useEffect(() => {
  //   dispatch(listResources({ pageNumber }))
  // }, [pageNumber, dispatch])

  // console.log('userinfo', userInfo)

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

          <LibraryCard />

          {/* <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={resourceList} /> */}
        </div>
        <div className='library-collection'>
          <h4>My Collections</h4>
          <LibraryCard />
        </div>
      </DashboardLayout>
    </>
  )
}

export default Collection
