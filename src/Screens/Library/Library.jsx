import {useState} from 'react'
import LibraryHeader from '../../Components/LibraryHeader/LibraryHeader'
import './library.css'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import ListView from '../../Components/ListView/ListView';
import SimpleModal from '../../Components/SimpleModal/SimpleModal';
import CollectionModal from '../../Components/CollectionModal/CollectionModal';
import GroupModal from '../../Components/GroupModal/GroupModal';
import {groupCollection, articles, videos} from './CollectionData'

const Library = () => {
    const [newCollection, setNewCollection] = useState(false);
    const [active, setActive] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    function openAddCollection () {
        setModalActive(true);
        setActive(false);
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
           <ListView title="Articles" data={articles} 
           setNewCollection={setNewCollection}
           modalActive={modalActive}
           setModalActive={setModalActive}
           />
           </div>

           <div className="list-container">
           <ListView title="Videos" data={videos} 
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