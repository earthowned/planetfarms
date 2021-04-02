import React from 'react'
import GroupUsers from '../GroupUsers/GroupUsers'
import SearchComponent from '../SearchComponent/SearchComponent'
import "./style.css"

const GroupModal = ({clickHandler}) => {
    return (
        <div className="group-container">
            <div className="group-modal">

            <div className="group-modal-header">
                <h4>Add members</h4>
                <button onClick={() => clickHandler(false)} ><img src="./img/close-outline.png" /></button>
            </div>

            <div className="search-bar">
            <SearchComponent />
            </div>
                
            <div className="modal-users">
                 <GroupUsers />
            </div>

            <div className="modal-btn">
            <button className="default-btn">
               Add members
            </button>
            </div>
            </div>
            
                
        </div>
    )
}

export default GroupModal
