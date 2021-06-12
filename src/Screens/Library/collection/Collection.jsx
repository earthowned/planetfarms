import { useState, useEffect } from 'react'
import CollectionModal from '../../../Components/CollectionModal/CollectionModal'
import GroupModal from '../../../Components/GroupModal/GroupModal'
import LibraryCard from '../../../Components/libraryCard/LibraryCard'
import LibraryHeader from '../../../Components/libraryHeader/LibraryHeader'
import SimpleModal from '../../../Components/SimpleModal/SimpleModal'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import { groupCollection, collections, library } from '../CollectionData'
import { useSelector, useDispatch } from 'react-redux'
import { listResourceUser } from '../../../actions/resourceUserAction'
import Pagination from '../../../Components/pagination/Pagination'
import { listResources } from '../../../actions/resourceActions'

import './Collection.css'

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

          <LibraryCard data={library} />

          {/* <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} resourceList={resourceList} /> */}
        </div>
        <div className='library-collection'>
          <h4>My Collections</h4>
          <LibraryCard data={collections}/>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Collection
