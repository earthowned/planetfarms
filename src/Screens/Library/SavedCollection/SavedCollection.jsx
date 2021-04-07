import {useState} from 'react'
import CollectionModal from '../../../Components/CollectionModal/CollectionModal';
import GroupModal from '../../../Components/GroupModal/GroupModal';
import LibraryCard from '../../../Components/LibraryCard/LibraryCard';
import LibraryHeader from '../../../Components/LibraryHeader/LibraryHeader'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import './saved-collection.css'
import {groupCollection, collections, library} from '../CollectionData'
import SimpleModal from '../../../Components/SimpleModal/SimpleModal';

const SavedCollection = () => {
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
        openAddCollection={openAddCollection}
        setNewCollection={setNewCollection}/>}
    {newCollection && <SimpleModal setNewCollection={setNewCollection}/>}
    
        {active && <CollectionModal setActive={setActive} openAddCollection={openAddCollection}/>}
             <DashboardLayout title="library">
                  <div className="library-main-container">
                    <LibraryHeader setActive={setActive}/>
                  </div>  
                  <div className="library-collection">
                      <h4>Farming Collections</h4>
                      <LibraryCard data={library}/>
                  </div>
                   <div className="library-collection">
                       <h4>Branding Collections</h4>
                      <LibraryCard data={collections}/>
                  </div>
            </DashboardLayout>
        </>
    )
}

export default SavedCollection
