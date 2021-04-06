import React from 'react'
import "./collection-modal.css"

const CollectionModal = ({setActive}) => {
    return (
        <>
            <div className="collection-modal-container">
                <div className="collection-modal-inner-container">
                <div className="collection-modal-header">

                <h4>Create Collection</h4>
                <img src="/img/close-outline.png" onClick={() => setActive(false)} alt="close-icon"/>
                </div>
                <div className="drag-drop">
                    <h6>
                        Drag and Drop files in this area or Click Here to attach
                    </h6>
                </div>

                <div>
                    <input className="default-input-variation" placeholder="Collection title">
                        
                    </input><br />
                    <select className="default-input-variation"  placeholder="Collection title">
                        <option>Select category</option>
                    </select>
                </div>
                <div>Add files</div>
                <button className="default-btn">Create collection</button>
                </div>
            </div>
        </>
    )
}

export default CollectionModal
