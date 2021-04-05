import {useState} from 'react'
import GroupUsers from '../GroupUsers/GroupUsers'
import SearchComponent from '../SearchComponent/SearchComponent'
import "./group-modal.css"

const GroupModal = ({clickHandler, data, btnName}) => {
    const [newCollection, setNewCollection] = useState(false);

    function collectionAdded () {
            setNewCollection(true)
            
    }

    return (
        <>
        {newCollection && (<div className="added-modal">
        <h4>Add to Collection</h4>
        <p>Files has been added to selected collections.</p>
        <button className="secondary-btn">Back to files</button>
        </div>)}
        <div className="group-container">
            <div className="group-modal">

            <div className="group-modal-header">
                <h4>{btnName}</h4>
                <button onClick={() => clickHandler(false)} ><img src="./img/close-outline.png" /></button>
            </div>

            <div className="search-bar">
            <SearchComponent />
            </div>
                
            <div className="modal-users">
                 <GroupUsers data={data}/>
            </div>

            <div className="modal-btn">
            {btnName == "add to collections" && <div className="add-collection"><img src="./img/plus.svg" /> <button 
            onClick={() => collectionAdded()}>Create new collection</button></div>}
            <button className="default-btn">
               {btnName}
            </button>
            </div>
            </div>     
        </div>
        </>
    )
}

export default GroupModal
