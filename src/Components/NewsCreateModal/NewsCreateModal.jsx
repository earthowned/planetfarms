import React from 'react'
import "./news-create-modal.css";

const NewsCreateModal = ({type}) => {
    return (
        <>
           {
               type === "video" && <div>this is video modal</div>
           }
           {
               type === "image" && <div>this is image modal</div>
           }
           {
               type === "text" && <div>this is text modal</div>
           }
        </>
    )
}

export default NewsCreateModal
