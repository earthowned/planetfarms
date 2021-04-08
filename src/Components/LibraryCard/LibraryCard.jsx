import React from 'react'
import './library-card.css';

const LibraryCard = ({data}) => {
    return (
        <>
        <div className="libraryCard-main-container">
         {
             data.map(item => {

                return (
                <div key={item.title} className="libraryCard-inner-container" style={{backgroundImage: `url(${item.img})`, 
                backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

                    <button className="trasnsparent-btn positioning"><img src="/img/trash-outline.svg" alt="trash-icon"></img> <span>Remove from library</span></button>
                    <div className="libraryCard-content">
                        <h6>{item.category}</h6>
                        <h4>{item.title}</h4>
                    </div>
                 </div>)
             })
         }   
         </div>
        </>
    )
}

export default LibraryCard
