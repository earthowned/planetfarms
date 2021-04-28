import { useEffect, useState } from 'react'
import LibraryHeader from '../../Components/LibraryHeader/LibraryHeader'
import './library.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import ListView from '../../Components/ListView/ListView'
import SimpleModal from '../../Components/SimpleModal/SimpleModal'
import CollectionModal from '../../Components/CollectionModal/CollectionModal'
import GroupModal from '../../Components/GroupModal/GroupModal'
import { groupCollection, videos } from './CollectionData'
import { useDispatch, useSelector } from 'react-redux'
import { listResources } from '../../actions/resourceActions'

const Library = () => {
    let resourceList = useSelector((state) => state.listResources)
    let data = useSelector((state) => state.listResources)
    let resources = resourceList.resources
    if (data) resources = data.resources
    const [newCollection, setNewCollection] = useState(false)
    const [active, setActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    function openAddCollection () {
        setModalActive(true)
        setActive(false)
    }

    
    return (
        <>
        {modalActive && <GroupModal clickHandler={setModalActive} 
        data={groupCollection} btnName="add to collections" 
        setNewCollection={setNewCollection}/>}

        {newCollection && <SimpleModal setNewCollection={setNewCollection}/>}
        
        {active && <CollectionModal setActive={setActive} openAddCollection={openAddCollection}/>}

        <DashboardLayout title="library">
           <div className="library-main-container">
               
           <LibraryHeader setActive={setActive}/>

           <div className="list-container">
           <ListView title="Articles" data={resources} 
           setNewCollection={setNewCollection}
           modalActive={modalActive}
           setModalActive={setModalActive}
           />
           </div>

           <div className="list-container">
           <ListView title="Videos" data={resources} 
           setNewCollection={setNewCollection}
           modalActive={modalActive}
           setModalActive={setModalActive}
           />
            </div>
            </div>
         </DashboardLayout>
         </>
    )
}

export default Library
