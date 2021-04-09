
import GroupUsers from '../GroupUsers/GroupUsers'
import SearchComponent from '../SearchComponent/SearchComponent'
import "./group-modal.css"

const GroupModal = ({clickHandler, setNewCollection, data, btnName}) => {
    function collectionAdded () {
            setNewCollection(true)
            clickHandler(false)
    }
    
    return (
        <>
        <div className="group-container">
            <div className="group-modal">

            <div className="group-modal-header">
                <h4>Add members</h4>
                <button onClick={() => clickHandler(false)} ><img src="/img/close-outline.svg" alt="close-outline" /></button>
            </div>

            <div className="search-bar">
            <SearchComponent />
            </div>
                
            <div className="modal-users">
                 <GroupUsers data={data}/>
            </div>

            <div className="modal-btn">
            {btnName == "add to collections" && <div className="add-collection"><img src="/img/plus.svg" /> <button 
            >Create new collection</button></div>}
            <button className="default-btn" onClick={() => collectionAdded()}>
               {btnName}
            </button>
            </div>
            </div>     
        </div>
        </>
    )
}

export default GroupModal
